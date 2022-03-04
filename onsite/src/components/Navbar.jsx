import { Link } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="navbar-return">
          <div>
            <Link className="navbar_link" to="/home">
              Back to Project
            </Link>
          </div>
        </div>
        <div className="navbar-tabs">
          <div>
            <Link className="navbar_link" to="/payment">
              Payment
            </Link>
          </div>
          <div>
            <Link className="navbar_link" to="/team">
              Team
            </Link>
          </div>
          <div>
            <Link className="navbar_link" to="/material">
              Material
            </Link>
          </div>
          <div>
            <Link className="navbar_link" to="/task">
              Task
            </Link>
          </div>
          <div>
            <Link className="navbar_link" to="/photo">
              Photos
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
