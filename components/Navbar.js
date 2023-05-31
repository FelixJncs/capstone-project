import styled from "styled-components";
import Link from "next/link";
import { FaHome, FaPlus, FaChartBar } from "react-icons/fa";

const NavbarWrapper = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2rem;
  background-color: #d6d3ab;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  border-top: 2px solid #d6d3ab;
  border-left: 2px solid #d6d3ab; /* Brown border on top */
  border-right: 2px solid #d6d3ab;
  box-shadow: 0 2rem 2rem 2rem white;
  /* Add any additional styles you want for your navbar */
`;

const StyledNavbarLink = styled(Link)`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid #ccc;
  text-decoration: none;
  color: #333;
  font-weight: bold;
  svg {
    font-size: 30px;
    fill: #0a41f0;
  }
`;

const Navbar = () => {
  return (
    <NavbarWrapper>
      <StyledNavbarLink href="/">
        <FaHome />
      </StyledNavbarLink>
      <StyledNavbarLink href="/addhabit">
        <FaPlus />
      </StyledNavbarLink>
      <StyledNavbarLink href="/habitstats">
        <FaChartBar />
      </StyledNavbarLink>
    </NavbarWrapper>
  );
};

export default Navbar;
