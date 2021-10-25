import Header from "../partials/Links/Header";
import NewLinkbookForm from "../partials/Links/newLinkbookForm";
import Linkbook from "../partials/Links/Linkbook";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { loadLinkbooks } from "../store/linkbooks";

function Links() {
  const dispatch = useDispatch();
  let sessionLinkbooks = useSelector((state) => state.linkbooks.linkbooks);

  const { user } = useAuth0();

  const [visible, setVisible] = useState(true);
  ``;
  const [newLinkbook, setNewLinkbook] = useState(false);

  useEffect(() => {
    if (!user) return;
    dispatch(loadLinkbooks(user.email));
  }, [user]);

  function linkbookAnimation() {
    setNewLinkbook(!newLinkbook);
    setTimeout(function () {
      setVisible(false);
    }, 500);
  }

  if (!sessionLinkbooks) {
    sessionLinkbooks = [];
    // return (
    //   <div className="flex items-center justify-center space-x-2 animate-pulse h-screen">
    //     <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
    //     <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
    //     <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
    //   </div>
    // );
  }

  return (
    <div className="flex flex-col h-screen">
      <Header
        newLinkbook={newLinkbook}
        setNewLinkbook={setNewLinkbook}
        visible={visible}
        setVisible={setVisible}
      />
      {!newLinkbook && sessionLinkbooks.length ? (
        <main className="mt-16 md:mt-20 w-3/5 flex flex-wrap justify-center m-auto">
          {sessionLinkbooks.map((linkbook) => {
            return <Linkbook key={linkbook.id} linkbook={linkbook} />;
          })}
        </main>
      ) : (
        <main className="w-screen mt-16 md:mt-20 min-h-screen text-center">
          {visible && (
            <button
              className={`${
                newLinkbook && "transform scale-0"
              } transition duration-500 btn text-white bg-blue-600 hover:bg-blue-700 mt-60 h-16 w-auto mb-4 sm:h-16 sm:mb-0`}
              onClick={() => {
                linkbookAnimation();
              }}
            >
              Let's make our first linkbook!
            </button>
          )}
          {!visible && <NewLinkbookForm />}
        </main>
      )}
    </div>
  );
}

export default Links;
