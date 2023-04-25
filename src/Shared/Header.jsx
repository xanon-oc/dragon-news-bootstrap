import logo from "../assets/logo.png";
import moment from "moment";
import Marquee from "react-fast-marquee";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="text-center mt-4 mb-4">
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
      <p className="mt-2 moto">
        <small>Journalism Without Fear or Favour</small>
      </p>
      <p className="time">
        <small>{moment().format("dddd, MMMM Do YYYY")}</small>
      </p>
      <div className="d-flex mb-2">
        <Button className="rounded-pill btnM" variant="danger">
          Latest
        </Button>
        <Marquee pauseOnHover speed={50} gradient>
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </Marquee>
      </div>
    </div>
  );
};

export default Header;
