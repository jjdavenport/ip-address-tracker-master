import arrow from "./assets/icon-arrow.svg";

const Input = () => {
  return (
    <>
      <section className="flex w-full rounded-xl bg-gray-700">
        <input
          type="text"
          className="flex w-full cursor-pointer rounded-l-xl py-3 pl-4 placeholder:text-sm focus:outline-none"
          placeholder="Search for any IP address or domain"
        />
        <button className="rounded-r-xl bg-black px-5 transition-colors duration-300 ease-in-out hover:bg-opacity-0">
          <img src={arrow} />
        </button>
      </section>
    </>
  );
};

export default Input;
