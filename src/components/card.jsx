export const Card = ({ ip, isp, city, country, timeZone }) => {
  return (
    <>
      <div className="absolute bottom-0 z-10 -mb-48 flex w-11/12 flex-col overflow-hidden bg-transparent md:-mb-10 md:w-[95%] md:max-w-screen-lg">
        <ul className="flex flex-col gap-4 divide-darkGray rounded-xl bg-white p-5 text-center md:grid md:grid-cols-4 md:flex-row md:divide-x md:p-8 md:text-left">
          <li className="flex flex-col overflow-hidden md:items-start md:gap-1">
            <span className="text-xs font-bold uppercase tracking-widest text-darkGray">
              IP Address
            </span>
            <span
              data-testid="span"
              className="font-medium text-veryDarkGray lg:text-xl"
            >
              {ip}
            </span>
          </li>
          <li className="flex flex-col md:items-start md:gap-1 md:pl-4">
            <span className="text-xs font-bold uppercase tracking-widest text-darkGray">
              Location
            </span>
            <span
              data-testid="span"
              className="font-medium text-veryDarkGray lg:text-xl"
            >
              {city}, {country}
            </span>
          </li>
          <li className="flex flex-col overflow-hidden md:items-start md:gap-1 md:pl-4">
            <span className="text-xs font-bold uppercase tracking-widest text-darkGray">
              Timezone
            </span>
            <span
              data-testid="span"
              className="font-medium text-veryDarkGray lg:text-xl"
            >
              {timeZone}
            </span>
          </li>
          <li className="flex flex-col md:items-start md:gap-1 md:pl-4">
            <span className="text-xs font-bold uppercase tracking-widest text-darkGray">
              ISP
            </span>
            <span
              data-testid="span"
              className="font-medium text-veryDarkGray lg:text-xl"
            >
              {isp}
            </span>
          </li>
        </ul>
      </div>
    </>
  );
};
