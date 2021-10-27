function StyledButton({ children, onClick, blue, wide }) {
  return wide ? (
    <button
      onClick={onClick}
      className="btn text-white bg-blue-600 hover:bg-blue-700 w-full"
    >
      {children}
    </button>
  ) : (
    <button
      onClick={onClick}
      className={
        blue
          ? `btn-sm text-gray-200 bg-blue-600 hover:bg-blue-700 ml-3`
          : "btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 ml-3"
      }
    >
      {children}
    </button>
  );
}

export default StyledButton;
