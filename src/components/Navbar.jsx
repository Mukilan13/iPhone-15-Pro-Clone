import appleImg from "../assets/images/apple.svg";
import searchImg from "../assets/images/search.svg";
import bagImg from "../assets/images/bag.svg";
import constants from "../constants/index";

const Navbar = () => {
  return (
    <header className="w-full py-5 sm:py-10 px-5 flex justify-between items-center">
      <nav className="w-full flex screen-max-width">
        <img
          src={appleImg}
          alt="logo"
          width={15}
          height={18}
          className="cursor-pointer"
        />

        <div className="flex flex-1 justify-center items-center max-sm:hidden">
          {constants.navLinks.map((link, index) => (
            <div
              className="px-5 text-base cursor-pointer text-gray hover:text-white transition-all"
              key={index}
            >
              {link}
            </div>
          ))}
        </div>

        <div className="flex items-baseline gap-5 max-sm:justify-end max-sm:flex-1">
          <img
            className="mt-[2px] cursor-pointer"
            src={searchImg}
            alt="search"
            width={18}
            height={18}
          />
          <img
            className="cursor-pointer"
            src={bagImg}
            alt="cart"
            width={18}
            height={18}
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
