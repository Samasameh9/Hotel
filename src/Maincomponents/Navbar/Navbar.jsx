import { Link, NavLink } from "react-router-dom";
import tree from "../../assets/tree.png";
import { useContext } from "react";
import { AuthContext } from "../Context/authcontext";

export default function Navbar() {
  let { userId, setuserId } = useContext(AuthContext);

  function LogoutFunction() {
    localStorage.removeItem("id");
    setuserId(null);
  }

  return (
    <>
      <nav className="bg-neutral-primary rounded-b-3xl fixed mx-auto container w-[85%] z-50 border-b end-0 start-0 border-default">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          
          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={tree} alt="logo" className="w-10" />
            <span className="self-center font-black font-main text-md text-heading whitespace-nowrap">
              PALM BREEZE HOTEL
            </span>
          </Link>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>

            <svg
              className="w-6 h-6"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
                d="M5 7h14M5 12h14M5 17h14"
              />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium text-xs font-sec flex flex-col gap-3 md:gap-0 p-4 md:p-0 mt-4 border border-default rounded-base bg-neutral-secondary-soft md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-2 md:border-0 md:bg-neutral-primary">

              <li>
                <NavLink to="/" className="block py-2 px-3 font-bold text-heading rounded md:p-0">
                  HOME
                </NavLink>
              </li>

              <li>
                <NavLink to="about" className="block py-2 px-3 font-bold text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-[#F3C300] md:p-0">
                  ABOUT US
                </NavLink>
              </li>

              <li>
                <NavLink to="accomodation" className="block py-2 px-3 font-bold text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-[#F3C300] md:p-0">
                  ACCOMODATION
                </NavLink>
              </li>

              <li>
                <NavLink to="gallery" className="block py-2 px-3 font-bold text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-[#F3C300] md:p-0">
                  GALLERY
                </NavLink>
              </li>

              <li>
                <NavLink to="contact" className="block py-2 px-3 font-bold text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-[#F3C300] md:p-0">
                  CONTACT
                </NavLink>
              </li>

              <li>
                <NavLink to="blog" className="block py-2 px-3 font-bold text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-[#F3C300] md:p-0">
                  BLOG
                </NavLink>
              </li>
              {userId? <li>
                <NavLink to="history" className="block py-2 px-3 font-bold text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-[#F3C300] md:p-0">
                  History
                </NavLink>
              </li>:null}
              <div className="ms-5">
                {userId ? (
                  <li className="block py-2 px-3 font-bold text-red-800 rounded md:p-0">
                    <button className="cursor-pointer" onClick={LogoutFunction}>
                      Logout
                    </button>
                  </li>
                ) : (
                  <div className="flex gap-3">
                    <li>
                      <NavLink to="login" className="block py-2 px-3 font-bold text-red-800 rounded md:p-0">
                        Login
                      </NavLink>
                    </li>

                    <li>
                      <NavLink to="register" className="block py-2 px-3 font-bold text-red-800 rounded md:p-0">
                        Register
                      </NavLink>
                    </li>
                  </div>
                )}
              </div>

            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}