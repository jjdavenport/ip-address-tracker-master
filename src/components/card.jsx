const Card = ({ ip, isp, city, country, timeZone }) => {
  return (
    <>
      <div className="~sm/md:~px-4/0 absolute z-10 -mt-14 flex w-full flex-col overflow-hidden bg-transparent md:w-11/12 md:max-w-screen-lg">
        <ul className="~sm/md:~gap-3/0 flex flex-col rounded-xl bg-white p-5 text-center md:grid md:grid-cols-4 md:flex-row md:divide-x md:text-left">
          <li className="~sm/md:~gap-1/2 ~sm/md:~p-0/4 flex flex-col md:items-start">
            <span className="text-xs font-bold uppercase tracking-widest text-darkGray">
              IP Address
            </span>
            <span className="~sm/md:~text-customSize/xl font-medium text-veryDarkGray">
              {ip}
            </span>
          </li>
          <li className="~sm/md:~gap-1/2 ~sm/md:~p-0/4 flex flex-col md:items-start">
            <span className="text-xs font-bold uppercase tracking-widest text-darkGray">
              Location
            </span>
            <span className="~sm/md:~text-customSize/xl font-medium text-veryDarkGray">
              {city}, {country}
            </span>
          </li>
          <li className="~sm/md:~gap-1/2 ~sm/md:~p-0/4 flex flex-col md:items-start">
            <span className="text-xs font-bold uppercase tracking-widest text-darkGray">
              Timezone
            </span>
            <span className="~sm/md:~text-customSize/xl font-medium text-veryDarkGray">
              {timeZone}
            </span>
          </li>
          <li className="~sm/md:~gap-1/2 ~sm/md:~p-0/4 flex flex-col md:items-start">
            <span className="text-xs font-bold uppercase tracking-widest text-darkGray">
              ISP
            </span>
            <span className="~sm/md:~text-customSize/xl font-medium text-veryDarkGray">
              {isp}
            </span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Card;
