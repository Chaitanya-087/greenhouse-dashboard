import DashboardIcon from "@mui/icons-material/Dashboard";
import CalculateIcon from "@mui/icons-material/Calculate";
import { NavLink } from "react-router-dom";
// import { BarLoader } from "react-spinners";
import "./sidebar.scss";

const Sidebar = () => {

  return (
    <div className='sidebar' role='sidebar'>
      <div className='top' >
        <div className='status' ></div>
        <span className='title' >
          Dashboard
        </span>
      </div>
      <div className='wrapper'>
        <ul className='items'>
          <li>
            <NavLink
              to='/'
              end
              className={({ isActive }) =>
                isActive ? "link-active item" : "item"
              }>
              <DashboardIcon className='icon' />
              <span>analysis</span>
            </NavLink>
          </li>
          {/* <li>
            <NavLink
              to='calculator'
              className={({ isActive }) =>
                isActive ? "link-active item" : "item"
              }>
              <CalculateIcon className='icon' />
              <span>VPD calculator</span>
            </NavLink>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
