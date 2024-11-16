const Card = () => {
  return (
    <>
      <div className="absolute z-10 -mt-14 flex w-full flex-col overflow-hidden bg-transparent ~sm/md:~px-4/0 md:w-11/12 md:max-w-screen-lg">
        <ul className="flex flex-col rounded-xl bg-white p-5 text-center ~sm/md:~gap-3/0 md:grid md:grid-cols-4 md:flex-row md:divide-x md:text-left">
          <li className="flex flex-col ~sm/md:~gap-1/2 ~sm/md:~p-0/4 md:items-start">
            <span className="text-xs font-bold uppercase tracking-widest text-darkGray">
              IP Address
            </span>
            <span className="font-medium text-veryDarkGray ~sm/md:~text-customSize/xl">
              192.168.0.1
            </span>
          </li>
          <li className="flex flex-col ~sm/md:~gap-1/2 ~sm/md:~p-0/4 md:items-start">
            <span className="text-xs font-bold uppercase tracking-widest text-darkGray">
              Location
            </span>
            <span className="font-medium text-veryDarkGray ~sm/md:~text-customSize/xl">
              Brooklyn
            </span>
          </li>
          <li className="flex flex-col ~sm/md:~gap-1/2 ~sm/md:~p-0/4 md:items-start">
            <span className="text-xs font-bold uppercase tracking-widest text-darkGray">
              Timezone
            </span>
            <span className="font-medium text-veryDarkGray ~sm/md:~text-customSize/xl">
              UTC
            </span>
          </li>
          <li className="flex flex-col ~sm/md:~gap-1/2 ~sm/md:~p-0/4 md:items-start">
            <span className="text-xs font-bold uppercase tracking-widest text-darkGray">
              ISP
            </span>
            <span className="font-medium text-veryDarkGray ~sm/md:~text-customSize/xl">
              SpaceX starlink
            </span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Card;
