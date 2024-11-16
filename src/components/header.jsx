import { useState } from "react";
import Input from "./input";

const Header = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const fetch = async () => {
    const apiKey = process.env.REACT_APP_GEO_API_KEY;
    try {
      const response = await fetch(
        `https://geo.ipify.org/api/v2/country?apiKey=${apiKey}&ipAddress=8.8.8.8`,
      );
      const result = await response.json();
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <>
      <header className="flex h-[30vh] w-full flex-col items-center bg-mobile bg-cover bg-no-repeat px-4 py-6 pb-16 ~sm/md:~gap-4/6 md:bg-desktop">
        <h1 className="font-medium text-white ~sm/md:~text-2xl/4xl">
          IP Address Tracker
        </h1>
        <Input />
      </header>
    </>
  );
};

export default Header;
