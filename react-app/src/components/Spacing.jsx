function InputSpacing({ children }) {
  return (
    <div className="flex flex-wrap -mx-3 mb-4">
      <div className="w-full px-3">{children}</div>
    </div>
  );
}

function ButtonSpacing({ children }) {
  return (
    <div className="flex flex-wrap -mx-3 mt-6">
      <div className="w-full px-3">{children}</div>
    </div>
  );
}

export { InputSpacing, ButtonSpacing };
