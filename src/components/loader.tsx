const Loader = () => {
  return (
    <div className="w-full h-screen flex flex-col gap-2 items-center justify-center">
      <div className="w-16 h-16 rounded-full border-[6px] border-t-[#00B9B5] border-neutral-400 animate-spin" />
      <span className="animate-pulse">Carregando...</span>
    </div>
  );
};

export default Loader;
