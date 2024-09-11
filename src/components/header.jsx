import { useState } from "react";

const Header = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const fetch = async () => {
    try {
      const response = await fetch("https://geo.ipify.org/");
      const result = await response.json();
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <>
      <header>
        <h1>IP Address Tracker</h1>
      </header>
    </>
  );
};

export default Header;
