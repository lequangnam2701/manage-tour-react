import { Link } from "react-router-dom";
import { FaHome, FaSuitcase, FaUsers } from "react-icons/fa";

function Sidebar() {
  return (
    <div style={{width:"220px",background:"#2c3e50",color:"#fff",height:"100vh",padding:"20px"}}>

      <h3>Admin</h3>

      <ul style={{listStyle:"none",padding:0}}>

        <li>
          <Link to="/" style={{color:"#fff"}}>
            <FaHome /> Dashboard
          </Link>
        </li>

        <li>
          <Link to="/tours" style={{color:"#fff"}}>
            <FaSuitcase /> Manage Tour
          </Link>
        </li>

        <li>
          <Link to="/users" style={{color:"#fff"}}>
            <FaUsers /> Users
          </Link>
        </li>

      </ul>

    </div>
  );
}

export default Sidebar;