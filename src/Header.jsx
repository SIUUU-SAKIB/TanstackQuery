import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <nav className="bg-gray-900 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="text-xl font-bold text-yellow-400">MyLogo</div>
          
          {/* Navigation Items */}
          <ul className="flex space-x-6">
            <li>
              <NavLink to={'/'} className="hover:text-gray-400 transition font-medium">Home</NavLink>
            </li>
            <li>
              <NavLink to={'/trad'} className="hover:text-gray-400 transition font-medium">FetchOld</NavLink>
            </li>
            <li>
              <NavLink to={'/rq'} className="hover:text-gray-400 transition font-medium">FetchRq</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
};

export default Header;