import { Input } from "./index";

export const Header = ({ input, setInput, onSubmit, onBlur, error }) => {
  return (
    <>
      <header className="flex h-[30vh] w-full flex-col items-center bg-mobile bg-cover bg-no-repeat px-4 py-6 pb-16 md:bg-desktop">
        <h1 className="font-medium text-white">IP Address Tracker</h1>
        <Input
          error={error}
          onSubmit={() => onSubmit(input)}
          onBlur={() => onBlur(input)}
          value={input}
          onChange={setInput}
        />
      </header>
    </>
  );
};
