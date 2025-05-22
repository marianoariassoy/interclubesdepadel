const ButtonForm = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="bg-black/20 hover:bg-black/10 transition-all h-14 w-full max-w-md rounded-lg px-4 text-sm text-white">
      {children}
    </button>
  );
};

export default ButtonForm;
