
import { SlCalender } from "react-icons/sl";
import { useNavigate, useLocation } from "react-router-dom";


export default function Navbar() {
  ;
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  

  return (
    <header className="fixed top-2 z-50 w-full md:top-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-white/90 px-3 shadow-lg shadow-black/[0.03] backdrop-blur-sm">
          {/* Cam View Logo */}
          <div className="flex flex-1 items-center">
            <SlCalender className="text-2xl ml-5"/>
          </div>
          
          

          {/* Navbar Contents */}
          <ul className="lg:flex md:flex lg: flex-1 items-center justify-end font-normal hidden gap-12">
            <li
              onClick={() => navigate("/")}
              className={`hover:text-gray-700 transition cursor-pointer ${
                isActive("/") ? "text-gray-700 border-b-4" : ""
              }`}
            >
              Dashboard
            </li>
            <li
              onClick={() => navigate("/calender")}
              className={`hover:text-gray-700 transition cursor-pointer ${
                isActive("/service") ? "text-gray-700 border-b-4" : ""
              }`}
            >
              Calender
            </li>
            
          </ul>
        </div>
      </div>
    </header>
  );
}