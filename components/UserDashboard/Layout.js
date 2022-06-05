import Header from "./Header";
import Sidebar from "./Sidebar";

function Layout({ children }) {
  return (
    <div className="flex bg-blue-900 h-screen">
      <Sidebar />
      <div className="flex-grow bg-blue-800">
        <Header />
        {children}
      </div>
    </div>
  );
}

export default Layout;
