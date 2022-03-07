import styled from "@emotion/styled";
import { BsSearch } from "react-icons/bs";

const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background: #fefefe;

  > a {
    float: left;
    display: block;
    text-align: center;
    padding: 14px;
    text-decoration: none;
  }
`;

const Img = styled.img`
  height: 5vh;
`;

// TODO: Make a sticky navbar full responsive.
export const Navbar = () => {
  return (
    <Nav className="grid grid-cols-4 p-4">
      <div className="logo">
        <Img
          src="https://storage.googleapis.com/opensea-static/Logomark/OpenSea-Full-Logo%20(dark).png"
          alt=""
        />
      </div>
      <input
        id="search"
        type="text"
        name="search"
        placeholder={`${(<BsSearch />)} Search Gallery`}
        className="col-span-2 border-2 rounded-lg border-solid px-2"
      />
      <div className="font-bold">
        <a href="#" className="px-6">
          Explore
        </a>
        <a href="#" className="px-6">
          Stats
        </a>
        <a href="#" className="px-6">
          Resources
        </a>
        <a href="#" className="px-6">
          Create
        </a>
        <a href="#" className="px-6">
          User
        </a>
        <a href="#" className="px-6">
          Wallet
        </a>
      </div>
    </Nav>
  );
};
