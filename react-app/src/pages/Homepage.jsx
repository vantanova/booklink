import NewLinkbookForm from "../partials/Homepage/newLinkbookForm";
import LinkbookCard from "../partials/Homepage/LinkbookCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { loadLinkbooks } from "../store/linkbooks";
import { useCreateLinkbookContext } from "../context/CreateLinkbookContext";

function Homepage() {
  const dispatch = useDispatch();
  const { showNewLinkbook, setShowNewLinkbook } = useCreateLinkbookContext();
  const sessionLinkbooks =
    useSelector((state) => state.linkbooks.linkbooks) || [];

  useEffect(() => {
    dispatch(loadLinkbooks());
  }, [dispatch]);

  return (
    <div className="flex flex-col h-auto">
      {!showNewLinkbook && sessionLinkbooks.length ? (
        <main className="mt-16 md:mt-20 w-3/5 flex flex-wrap justify-center m-auto">
          {sessionLinkbooks.map((linkbook) => {
            return <LinkbookCard key={linkbook.id} linkbook={linkbook} />;
          })}
        </main>
      ) : (
        <main className="w-screen mt-16 md:mt-20 min-h-screen text-center">
          {!showNewLinkbook && (
            <button
              className={`${
                showNewLinkbook && "transform scale-0"
              } transition duration-500 btn text-white bg-blue-600 hover:bg-blue-700 mt-60 h-16 w-auto mb-4 sm:h-16 sm:mb-0`}
              onClick={() => {
                setShowNewLinkbook(!showNewLinkbook);
              }}
            >
              Let's make our first linkbook!
            </button>
          )}
          {showNewLinkbook && <NewLinkbookForm />}
        </main>
      )}
    </div>
  );
}

export default Homepage;
