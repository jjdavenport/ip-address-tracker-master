import arrow from "./assets/icon-arrow.svg";

const Input = () => {
  return (
    <>
      <section className="flex w-full rounded-xl bg-gray-700 md:max-w-screen-sm">
        <input
          type="text"
          className="flex w-full cursor-pointer rounded-l-2xl focus:outline-none ~sm/md:~py-3/4 ~sm/md:~pl-4/6 ~sm/md:placeholder:~text-sm/customSize"
          placeholder="Search for any IP address or domain"
        />
        <button className="rounded-r-2xl bg-black transition-colors duration-300 ease-in-out hover:bg-opacity-0 ~sm/md:~px-5/6">
          <img src={arrow} />
        </button>
      </section>
    </>
  );
};

export default Input;
