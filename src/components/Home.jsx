import { useContextElements } from "../context/AppContext";
import { FaBars } from "react-icons/fa";

const Home = () => {
  const { openClose } = useContextElements();
  return (
    <main>
      <button
        onClick={() => openClose("isSidebar")}
        className="sidebar-toggle"
        type="button"
      >
        <FaBars />
      </button>
      <button
        className="btn"
        onClick={() => openClose("isModal")}
        type="button"
      >
        show modal
      </button>
    </main>
  );
};

export default Home;
