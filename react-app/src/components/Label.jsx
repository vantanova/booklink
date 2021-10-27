function StyledLabel({ children, htmlFor }) {
  return (
    <label
      className="block text-gray-800 text-sm font-medium mb-1"
      htmlFor={htmlFor}
    >
      {children}
    </label>
  );
}

export default StyledLabel;
