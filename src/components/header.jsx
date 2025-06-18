import Input from "./input";

const Header = ({ setData }) => {
  return (
    <>
      <header className="flex h-[30vh] w-full flex-col items-center bg-mobile bg-cover bg-no-repeat px-4 py-6 pb-16 ~sm/md:~gap-4/6 md:bg-desktop">
        <h1 className="font-medium text-white ~sm/md:~text-2xl/4xl">
          IP Address Tracker
        </h1>
        <Input ip={setData} />
      </header>
    </>
  );
};

export default Header;
