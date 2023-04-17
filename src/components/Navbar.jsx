
const Navbar = () => {
  return (
    <div className="h-[50px] bg-[#003580] flex justify-center">
      <div className="w-full max-w-[1024px] text-white flex items-center justify-between">
        <span className="font-medium">Wisebooking</span>
        <div className="flex gap-2">
          <button className="px-2 bg-white text-[#003580]">
            Register
          </button>
          <button className="px-2 bg-white text-[#003580]">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
