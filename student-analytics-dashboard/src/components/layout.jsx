import Navbar from "./navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main style={{ padding: "20px" }}>
        {children}
      </main>
    </>
  );
};

export default Layout;
