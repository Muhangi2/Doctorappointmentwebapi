import { Link } from "react-router-dom";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
const Header = () => {
  return (
    <header className="bg-blue-500 flex items-center justify-evenly fixed w-full">
      <h2>MediConnect</h2>
      <AccessAlarmIcon fontSize="large" color="secondary" />
      <nav className="py-4 ">
        <ul className="flex text-xl text-white  gap-4 px-3">
          <li>
            <Link>Home</Link>
          </li>
          <li>
            <Link>Services</Link>
          </li>
          <li>
            <Link>About</Link>
          </li>
          <li>
            <Link>doctors</Link>
          </li>
          <li>
            <Link>Testimonials</Link>
          </li>
        </ul>
      </nav>
      <div className="flex text-xl text-white gap-3 px-3 ">
        <button>Darkmode</button>
        <button className="black_btn ">Login</button>
        <button className="black_btn ">Register</button>
      </div>
    </header>
  );
};

export default Header;
