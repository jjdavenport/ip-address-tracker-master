const Card = () => {
  return (
    <>
      <main className="absolute top-36 z-10 flex w-10/12 flex-col overflow-hidden rounded-xl bg-transparent">
        <ul className="flex flex-col gap-2 bg-white p-4 text-center">
          <li>
            <span className="text-darkGray text-sm font-medium uppercase">
              IP Address
            </span>
            <span></span>
          </li>
          <li>
            <span className="text-darkGray text-sm font-medium uppercase">
              Location
            </span>
            <span></span>
          </li>
          <li>
            <span className="text-darkGray text-sm font-medium uppercase">
              Timezone
            </span>
            <span></span>
          </li>
          <li>
            <span className="text-darkGray text-sm font-medium uppercase">
              ISP
            </span>
            <span></span>
          </li>
        </ul>
      </main>
    </>
  );
};

export default Card;
