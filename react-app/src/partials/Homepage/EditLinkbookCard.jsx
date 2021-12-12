import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteLinkbook, changeLinkbook } from "../../store/linkbooks";
import Modal from "../../utils/Modal";
import categories from "./data/categories";
import Card from "../../components/Card";
import Trash from "../../images/Trash";
import Unlocked from "../../images/Unlocked";
import Locked from "../../images/Locked";

function CategoryButton(category, func, selected) {
  return (
    <button
      onClick={() => func(category)}
      type="button"
      className={`border-gray-300 ${
        selected === category && "border-blue-600"
      } m-1 bg-white py-2 px-3 border  rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
    >
      {category}
    </button>
  );
}

function EditLinkbookCard({ id, privt, setEdit }) {
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState();
  const [name, setName] = useState();
  const [priv, setPriv] = useState(privt);
  const [editModalOpen, setEditModalOpen] = useState(false);

  function submitEdits() {
    dispatch(changeLinkbook(id, name, selectedCategory, priv));
    setEdit(false);
  }

  function chooseCategory(cat) {
    setSelectedCategory(cat);
    setEditModalOpen(false);
  }

  return (
    <div data-aos="fade-in">
      <Modal
        id="modal"
        ariaLabel="modal-headline"
        show={editModalOpen}
        handleClose={() => setEditModalOpen(false)}
      >
        <div className="w-2/3 h-auto m-auto text-center pt-4 relative">
          <h2 className="text-xl mb-2">Choose a good category!</h2>
          <button
            onClick={() => setEditModalOpen(false)}
            className="absolute right-0 top-0 text-xl btn-sm h-8 w-8 text-gray-200 bg-blue-600 hover:bg-blue-700"
          >
            ✖
          </button>

          {categories.map((value) => {
            return CategoryButton(value, chooseCategory, selectedCategory);
          })}
        </div>
      </Modal>
      <Card className="m-5 bg-gray-100 border border-gray-300 h-56 w-56 rounded-lg shadow-md border-b border-primary flex p-2 relative">
        <div className="absolute rounded-tr-lg rounded-bl-lg bg-gray-200 w-8 h-8 right-0 top-0 pr-1">
          <button
            className="outline-none border-none focus:outline-none"
            onClick={() => {
              dispatch(deleteLinkbook(id));
            }}
          >
            <Trash />
          </button>
        </div>

        <input
          type="text"
          data-aos="flip-down"
          className="absolute focus:ring-blue-500 focus:border-blue-500 block h-8 w-36 shadow-sm sm:text-sm border-gray-300 rounded-md"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button
          onClick={() => setPriv(!priv)}
          className="outline-none border-none focus:outline-none"
        >
          <p className="absolute text-sm text-gray-600 flex items-center h-6 top-1 right-9">
            {priv ? <Locked /> : <Unlocked />}
          </p>
        </button>

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

        {!editModalOpen && (
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setEditModalOpen(true);
            }}
            aria-controls="modal"
            className="absolute bottom-2 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 h-8 w-24 truncate text-center z-50"
          >
            {selectedCategory ? selectedCategory : "New Cat."}
          </button>
        )}
      </Card>
    </div>
  );
}

export default EditLinkbookCard;
