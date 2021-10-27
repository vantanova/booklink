import { useState } from "react";
import categories from "./data/categories";
import { useDispatch } from "react-redux";
import { createLinkbook } from "../../store/linkbooks";

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

function NewLinkbookForm() {
  const dispatch = useDispatch();

  const [selectedCategory, setSelectedCategory] = useState();
  const [name, setName] = useState();
  const [nameReq, setNameReq] = useState(false);

  async function submit() {
    if (!name) {
      setNameReq(true);
    }
    dispatch(createLinkbook(name, selectedCategory));
    window.location.reload(false);
  }

  return (
    <div className="w-screen mt-16 md:mt-20 min-h-screen text-center">
      <div data-aos="fade-in" className="m-16">
        <h2 className="text-xl mb-2">What's a good name for the linkbook?</h2>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          name="first-name"
          id="first-name"
          autoComplete="given-name"
          placeholder={nameReq && "choose a good name!"}
          className={`${
            nameReq && "border-red-300 placeholder-red-300"
          } text-center mt-1 m-auto focus:ring-blue-500 focus:border-blue-500 block w-1/2 shadow-sm sm:text-sm border-gray-300 rounded-md`}
        />
      </div>
      <div data-aos="fade-in" data-aos-delay="100">
        <h2 className="text-xl mb-2">What category fits best?</h2>
        <div className="h-64 lg:w-1/2 m-auto">
          {categories.map((value) => {
            return CategoryButton(value, setSelectedCategory, selectedCategory);
          })}
        </div>
      </div>

      <button
        onClick={() => submit()}
        className={`${
          name && selectedCategory && "animate-bounce"
        } transition duration-500 btn text-white bg-blue-600 hover:bg-blue-700 mt-60 h-16 w-auto mb-4 sm:h-16 sm:mb-0`}
      >
        It's go time!
      </button>
    </div>
  );
}

export default NewLinkbookForm;
