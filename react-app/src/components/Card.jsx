function Card({ children }) {
  return (
    <div className="cursor-pointer transform transition duration-500 m-5  bg-gray-100 border border-gray-300 h-56 w-56 rounded-lg shadow-md border-b border-primary flex p-2 relative">
      <div className="h-full w-full outline-none">{children}</div>
    </div>
  );
}

export default Card;
