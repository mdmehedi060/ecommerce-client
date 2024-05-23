import Logo from "./Logo";
import { GrSearch } from "react-icons/gr";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="h-16 shadow-md bg-white">
      <div className="h-full container mx-auto flex items-center px-4 justify-between">
        <div className="">
          <Link to="/">
            <Logo w={90} h={50}></Logo>
          </Link>
        </div>
        <div className="hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow-md pl-2">
          <input
            type="text"
            placeholder="Search Product here..."
            className="w-full outline-none"
          />
          <div className="text-lg min-w-[50px] h-8 flex justify-center items-center bg-red-600 rounded-r-full text-white ">
            <GrSearch />
          </div>
        </div>
        <div className="flex items-center gap-7">
          <div className="text-3xl cursor-pointer">
            <FaRegCircleUser></FaRegCircleUser>
          </div>
          <div className="text-2xl relative">
            <span>
              <FaShoppingCart />
            </span>
            <div className="bg-red-600 absolute -top-1 -right-3 text-white w-5 h-5 rounded-full flex items-center justify-center">
              <p className="text-sm">0</p>
            </div>
          </div>
          <div>
            <Link
              to="/login"
              className="px-3 text-white py-1 rounded-full bg-red-600 hover:bg-red-700"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
