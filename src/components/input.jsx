import arrow from "./assets/icon-arrow.svg";

export const Input = ({ value, onChange, onSubmit, onBlur, error }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(value);
  };
  return (
    <>
      <form
        noValidate
        className={`${error ? "outline outline-red-600 focus:outline" : "outline-none focus:outline-none"} flex w-11/12 rounded-xl bg-gray-700 md:w-full md:max-w-screen-sm`}
        onSubmit={handleSubmit}
      >
        <input
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          type="text"
          className="w-full cursor-pointer rounded-l-xl p-3 outline-none"
          placeholder="Search for any IP address"
        />
        <button className="rounded-r-2xl bg-black px-5 transition-colors duration-300 ease-in-out hover:bg-opacity-0">
          <img src={arrow} />
        </button>
      </form>
    </>
  );
};
