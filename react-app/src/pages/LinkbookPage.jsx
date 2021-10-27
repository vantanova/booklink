import Header from "../partials/Links/Header";
import NewLinkbookForm from "../partials/Links/newLinkbookForm";
import Link from "../partials/Linkbook/Link";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { loadLinkbooks } from "../store/linkbooks";

function LinkbookPage() {
  const dispatch = useDispatch();
  const sessionLinkbooks = useSelector((state) => state.linkbooks.linkbooks);
  const [newLinkbook, setNewLinkbook] = useState(false);
  const [visible, setVisible] = useState(true);
  let { id } = useParams();

  function linkbookAnimation() {
    setNewLinkbook(!newLinkbook);
    setTimeout(function () {
      setVisible(false);
    }, 500);
  }

  if (!sessionLinkbooks) {
    return (
      <div className="flex items-center justify-center space-x-2 animate-pulse h-screen">
        <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
        <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
        <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
      </div>
    );
  }

  const book = sessionLinkbooks.find((x) => x.id === Number(id));

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
          {book.links.map((link) => {
            return <Link link={link} />;
          })}
        </main>
      ) : (
        <main className="w-screen mt-16 md:mt-20 min-h-screen text-center">
          {!visible && <NewLinkbookForm />}
        </main>
      )}
    </div>
  );
}

export default LinkbookPage;
