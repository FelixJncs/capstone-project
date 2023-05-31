import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      {children}
      <Navbar />
    </div>
  );
};

export default Layout;
