function StyledWrapper({ children }) {
  return (
    <section className="bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">{children}</div>
      </div>
    </section>
  );
}

export default StyledWrapper;
