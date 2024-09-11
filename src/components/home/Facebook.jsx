import Photo from "../../images/fb1.png";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Facebook() {
  return (
    <div className="facebook">
      <div className="containers">
        <h2
          style={{ fontSize: "17px", marginBottom: "7px", fontWeight: "600" }}
        >
          Follow us on Facebook
        </h2>
        <div className="fb">
          <div className="top">
            <img src={Photo} alt="" />
            <div>
              <Link to="#">Pe drumuri straine</Link>
              <p>8 800 urmaritori</p>
            </div>
          </div>
          <div className="bottom">
            <Link to="#">
              <FaFacebook size={13} color={"blue"} /> Urmareste pagina
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
