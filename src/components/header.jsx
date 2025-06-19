import Input from "./input";

const Header = ({ input, setInput, onSubmit }) => {
  return (
    <>
      <header className="~sm/md:~gap-4/6 flex h-[30vh] w-full flex-col items-center bg-mobile bg-cover bg-no-repeat px-4 py-6 pb-16 md:bg-desktop">
        <h1 className="~sm/md:~text-2xl/4xl font-medium text-white">
          IP Address Tracker
        </h1>
        <Input
          onSubmit={() => onSubmit(input)}
          value={input}
          onChange={setInput}
        />
      </header>
    </>
  );
};

export default Header;
