import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import { inst1, inst2, inst3, inst4, inst5, inst6 } from "../../images";

export default function Instagram() {
  return (
    <div className="instagram">
      <a href="#" className="header-instagram">
        <FaInstagram className="insta-icon" />
        <h3>Pe Drumuri Straine.</h3>
      </a>
      <div className="flex-img">
        <div className="colp">
          <a href="#">
            <img src={inst1} alt="" />
          </a>
          <a href="">
            <img src={inst2} alt="" />
          </a>
          <a href="">
            <img src={inst3} alt="" />
          </a>
        </div>
        <div className="colp">
          <a href="">
            <img src={inst4} alt="" />
          </a>
          <a href="">
            <img src={inst5} alt="" />
          </a>
          <a href="">
            <img src={inst6} alt="" />
          </a>
        </div>
      </div>
      <div className="center">
        <Link to="#" className="btn-insta">
          {" "}
          <FaInstagram />
          Urmareste pe instagram
        </Link>
      </div>
    </div>
  );
}
