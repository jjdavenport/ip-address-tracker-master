import arrow from "./assets/icon-arrow.svg";

const Input = () => {
  return (
    <>
      <section>
        <input
          type="number"
          placeholder="Search for any IP address or domain"
        />
        <button>
          <img src={arrow} />
        </button>
      </section>
    </>
  );
};

export default Input;
