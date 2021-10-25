import { Rating } from "react-simple-star-rating";
import { useHistory } from "react-router";
import Dropdown from "../../utils/Dropdown";
import Modal from "../../utils/Modal";
import { useState } from "react";
import categories from "./data/categories";
import { useDispatch } from "react-redux";
import { deleteLinkbook, changeLinkbook } from "../../store/linkbooks";

function CategoryButton(category, func, selected) {
  return (
    <button
      onClick={() => func(category)}
      type="button"
      className={`border-gray-300 ${
        selected == category && "border-blue-600"
      } m-1 bg-white py-2 px-3 border  rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
    >
      {category}
    </button>
  );
}

function Linkbook({ linkbook }) {
  let links = linkbook.links;
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState();
  const [name, setName] = useState();
  const [edit, setEdit] = useState();
  const [priv, setPriv] = useState(linkbook.private);
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  const history = useHistory();

  function submit() {
    dispatch(deleteLinkbook(linkbook.id));
    window.location.reload(false);
  }

  function submitEdits() {
    dispatch(changeLinkbook(linkbook.id, name, selectedCategory, priv));
    window.location.reload(false);
  }

  function chooseCat(cat) {
    setVideoModalOpen(false);
    setSelectedCategory(cat);
  }

  history.listen((location) => {
    if (location.hash == "#" + linkbook.id) {
      setEdit(true);
    }
  });

  return (
    <div data-aos="fade-in">
      {edit ? (
        <div className="m-5  bg-gray-100 border border-gray-300 h-56 w-56 rounded-lg shadow-md border-b border-primary flex p-2 relative">
          <div className="absolute rounded-tr-lg rounded-bl-lg bg-gray-200 w-8 h-8 right-0 top-0 pr-1">
            <button
              className="outline-none border-none focus:outline-none"
              onClick={() => {
                submit();
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="fill-current text-gray-500 h-5 ml-2 mt-1 hover:text-red-500 transition duration-500 "
                viewBox="0 0 20 20"
                fill="text-gray-200"
              >
                <path
                  fillRule="evenodd"
                  d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>

          <input
            type="text"
            data-aos="flip-down"
            className="absolute focus:ring-blue-500 focus:border-blue-500 block h-8 w-36 shadow-sm sm:text-sm border-gray-300 rounded-md"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {priv ? (
            <button
              onClick={() => setPriv(!priv)}
              className="outline-none border-none focus:outline-none"
            >
              <p className="absolute text-sm text-gray-600 flex items-center h-6 top-1 right-9">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </p>
            </button>
          ) : (
            <button
              onClick={() => setPriv(!priv)}
              className="outline-none border-none focus:outline-none"
            >
              <p className="absolute text-sm text-gray-600 flex items-center h-6 top-1 right-9">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z" />
                </svg>
              </p>
            </button>
          )}

          <div className="flex-shrink-0 absolute right-2 bottom-2">
            <button
              onClick={() => setEdit(false)}
              data-aos="flip-up"
              className="btn-sm text-sm mr-1 h-8 w-16 text-gray-200 bg-red-600 hover:bg-red-700"
            >
              Cancel
            </button>
            <button
              onClick={() => submitEdits()}
              data-aos="flip-up"
              className="btn-sm h-8 w-8 text-gray-200 bg-blue-600 hover:bg-blue-700"
            >
              ✔
            </button>
          </div>

          <Modal
            id="modal"
            ariaLabel="modal-headline"
            show={videoModalOpen}
            handleClose={() => setVideoModalOpen(false)}
          >
            <div className="w-2/3 h-auto m-auto text-center pt-4 relative">
              <h2 className="text-xl mb-2">Choose a good category!</h2>
              <button
                onClick={() => setVideoModalOpen(false)}
                className="absolute right-0 top-0 text-xl btn-sm h-8 w-8 text-gray-200 bg-blue-600 hover:bg-blue-700"
              >
                ✖
              </button>

              {categories.map((value) => {
                return CategoryButton(value, chooseCat, selectedCategory);
              })}
            </div>
          </Modal>

          {!videoModalOpen && (
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setVideoModalOpen(true);
              }}
              aria-controls="modal"
              className="absolute bottom-2 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 h-8 w-24 truncate text-center z-50"
            >
              {selectedCategory ? selectedCategory : "New Cat."}
            </button>
          )}
        </div>
      ) : (
        <div className="cursor-pointer transform transition duration-500 m-5  bg-gray-100 border border-gray-300 h-56 w-56 rounded-lg shadow-md border-b border-primary flex p-2 relative">
          <a
            href={`/linkbook/${linkbook.id}`}
            style={{ zIndex: -1 }}
            className="h-full w-full outline-none"
          >
            <div className="absolute rounded-tr-lg rounded-bl-lg bg-gray-200 w-8 h-8 right-0 top-0 pr-1">
              <Dropdown>
                <a
                  href={`#${linkbook.id}`}
                  style={{ zIndex: "100" }}
                  className="m-2"
                >
                  Edit ✏️
                </a>
              </Dropdown>
            </div>

            <p data-aos="fade-in" className="absolute text-lg">
              {linkbook.name}
            </p>
            {linkbook.private ? (
              <p className="absolute text-sm text-gray-600 flex items-center h-6 top-1 right-9">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </p>
            ) : (
              <p className="absolute text-sm text-gray-600 flex items-center h-6 top-1 right-9">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z" />
                </svg>
              </p>
            )}

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
                ratingValue={linkbook.rating}
                transition={false}
                size={20}
              />
            </div>

            <span className="absolute bottom-2 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 h-8 w-24 truncate text-center z-50">
              #{linkbook.category || "unsorted"}
            </span>
          </a>
        </div>
      )}
    </div>
  );
}

export default Linkbook;
