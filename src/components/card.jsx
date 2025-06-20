export const Card = ({ ip, isp, city, country, timeZone }) => {
  return (
    <>
      <div className="absolute z-10 -mt-14 flex w-full flex-col overflow-hidden bg-transparent md:w-11/12 md:max-w-screen-lg">
        <ul className="flex flex-col rounded-xl bg-white p-5 text-center md:grid md:grid-cols-4 md:flex-row md:divide-x md:text-left">
          <li className="flex flex-col overflow-hidden md:items-start">
            <span className="text-xs font-bold uppercase tracking-widest text-darkGray">
              IP Address
            </span>
            <span className="font-medium text-veryDarkGray">{ip}</span>
          </li>
          <li className="flex flex-col md:items-start">
            <span className="text-xs font-bold uppercase tracking-widest text-darkGray">
              Location
            </span>
            <span className="font-medium text-veryDarkGray">
              {city}, {country}
            </span>
          </li>
          <li className="flex flex-col md:items-start">
            <span className="text-xs font-bold uppercase tracking-widest text-darkGray">
              Timezone
            </span>
            <span className="~sm/md:~text-customSize/xl font-medium text-veryDarkGray">
              {timeZone}
            </span>
          </li>
          <li className="flex flex-col md:items-start">
            <span className="text-xs font-bold uppercase tracking-widest text-darkGray">
              ISP
            </span>
            <span className="font-medium text-veryDarkGray">{isp}</span>
          </li>
        </ul>
      </div>
    </>
  );
};
