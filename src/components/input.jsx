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
        className="flex w-full rounded-xl bg-gray-700 md:max-w-screen-sm"
        onSubmit={handleSubmit}
      >
        <input
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          type="text"
          className={`${error ? "outline outline-red-600 focus:outline" : "outline-none focus:outline-none"} w-full cursor-pointer rounded-l-2xl p-1`}
          placeholder="Search for any IP address"
        />
        <button className="rounded-r-2xl bg-black p-4 transition-colors duration-300 ease-in-out hover:bg-opacity-0">
          <img src={arrow} />
        </button>
      </form>
    </>
  );
};
