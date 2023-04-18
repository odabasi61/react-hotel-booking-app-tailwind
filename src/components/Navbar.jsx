import { Navigate, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="h-[50px] px-4 lg:px-0 bg-[#003580] flex justify-center">
      <div className="w-full max-w-[1024px] text-white flex items-center justify-between">
        <span onClick={() => navigate("/")}className="font-medium cursor-pointer">Wisebooking</span>
        <div className="flex gap-2">
          <button className="px-2 bg-white text-[#003580] hover:bg-[#003580] hover:text-white duration-300 border border-white">
            Register
          </button>
          <button className="px-2 bg-white text-[#003580] hover:bg-[#003580] hover:text-white duration-300 border border-white">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
