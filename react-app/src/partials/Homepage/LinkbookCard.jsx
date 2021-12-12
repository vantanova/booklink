import { useState } from "react";
import { Rating } from "react-simple-star-rating";
import Dropdown from "../../utils/Dropdown";
import Card from "../../components/Card";

import EditLinkbookCard from "./EditLinkbookCard";
import Unlocked from "../../images/Unlocked";
import Locked from "../../images/Locked";

function LinkbookCard({ linkbook }) {
  const [edit, setEdit] = useState();
  if (!linkbook.id) {
    return null;
  }

  let links = linkbook.data.links;

  function redirectLinkbook() {
    localStorage.setItem("currentLinkbook", JSON.stringify(linkbook));
    window.location.href = `linkbook/${linkbook.id}`;
  }

  return (
    <div data-aos="fade-in">
      {edit ? (
        <EditLinkbookCard
          id={linkbook.id}
          privt={linkbook.data.private}
          setEdit={setEdit}
        />
      ) : (
        <a
          // href={`linkbook/${linkbook.id}`}
          onClick={() => redirectLinkbook()}
          style={{ zIndex: "-1" }}
        >
          <Card>
            <div className="absolute rounded-tr-lg rounded-bl-lg bg-gray-200 w-8 h-8 right-0 top-0 pr-1 z-50">
              <Dropdown>
                <button
                  onClick={(e) => {
                    setEdit(true);
                    e.preventDefault();
                  }}
                  className="m-2"
                >
                  Edit ✏️
                </button>
              </Dropdown>
            </div>
            <p data-aos="fade-in" className="absolute text-lg top-2">
              {linkbook.data.name}
            </p>

            <p className="absolute text-sm text-gray-600 flex items-center h-6 top-1 right-9">
              {linkbook.data.private ? <Locked /> : <Unlocked />}
            </p>

            <div className="absolute top-10">
              {links.slice(0, 4).map((link) => {
                return (
                  <p className="text-gray-500 hover:text-gray-600 m-1">
                    <a target="_blank" href={link.link_url}>
                      {link.name}
                    </a>
                  </p>
                );
              })}
            </div>

            <div className="flex-shrink-0 absolute right-2 bottom-2">
              <Rating
                ratingValue={linkbook.data.rating}
                transition={false}
                size={20}
              />
            </div>

            <span className="absolute bottom-2 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 h-8 w-24 truncate text-center z-50">
              #{linkbook.data.category || "unsorted"}
            </span>
          </Card>
        </a>
      )}
    </div>
  );
}

export default LinkbookCard;
