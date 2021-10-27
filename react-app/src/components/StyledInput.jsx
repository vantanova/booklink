function StyledInput({
  id,
  type,
  placeholder,
  onChange,
  value,
  email,
  password,
}) {
  if (email) {
    return (
      <input
        id="email"
        type="email"
        className="form-input w-full text-gray-800"
        placeholder="Enter your email address"
        value={value}
        onChange={onChange}
        required
      />
    );
  }
  if (password) {
    return (
      <input
        id="password"
        type="password"
        className="form-input w-full text-gray-800"
        placeholder="Enter your password"
        value={value}
        onChange={onChange}
        required
      />
    );
  }
  return (
    <input
      id={id}
      type={type}
      className="form-input w-full text-gray-800"
      placeholder={placeholder || ""}
      value={value}
      onChange={onChange}
      required
    />
  );
}

export default StyledInput;
