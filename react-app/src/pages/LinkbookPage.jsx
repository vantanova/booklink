import Link from "../partials/Linkbook/Link";
import { useState, useEffect } from "react";

function LinkbookPage() {
  const [linkbook, setLinkbook] = useState();
  useEffect(() => {
    setLinkbook(JSON.parse(localStorage.getItem("currentLinkbook")));
  }, []);

  if (!linkbook) {
    return (
      <div className="flex items-center justify-center space-x-2 animate-pulse h-screen">
        <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
        <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
        <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
      </div>
    );
  }

  console.log(linkbook);

  return (
    <main className="mt-16 md:mt-20 w-3/5 flex flex-wrap justify-center m-auto">
      {linkbook.data.links.map((link) => {
        console.log(link);
      })}
      {console.log(linkbook.data.links)}
    </main>
  );
}

export default LinkbookPage;
