import { FaTimes } from "react-icons/fa";
import logo from "../assets/react.svg";
import { useContextElements } from "../context/AppContext";
import { links, social } from "../data";
const Sidebar = () => {
  const {
    elements: { isSidebar },
    openClose,
  } = useContextElements();
  return (
    <div className={isSidebar ? "sidebar show-sidebar" : "sidebar"}>
      <div className="sidebar-header">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            cursor: "pointer",
          }}
        >
          <img src={logo} className="logo" alt="" />
          <h4>React</h4>
        </div>
        <button className="close-btn" onClick={() => openClose("isSidebar")}>
          <FaTimes />
        </button>
      </div>
      {/* links  */}
      <ul className="links">
        {links?.map((link) => {
          const { id, url, text, icon } = link;
          return (
            <li key={id}>
              <a href={url}>
                {icon} {text}
              </a>
            </li>
          );
        })}
      </ul>
      {/* social links  */}
      <ul className="social-links">
        {social?.map((link) => {
          const { id, url, icon } = link;
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
