import { Input } from "./index";

export const Header = ({ input, setInput, onSubmit, onBlur, error }) => {
  return (
    <>
      <header className="flex h-[30vh] w-full flex-col items-center justify-center gap-4 bg-mobile bg-cover bg-no-repeat pb-16 md:bg-desktop">
        <h1 className="text-2xl font-medium text-white md:text-3xl">
          IP Address Tracker
        </h1>
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
