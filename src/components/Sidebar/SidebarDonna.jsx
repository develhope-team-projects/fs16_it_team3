import Price from "./Price/Price";
import Colors from "./Colors/Colors";
import "./Sidebar.css";
import CategoryDonna from "./Category/CategoryDonna";



const SidebarDonna = ({ handleChange }) => {
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <h1>🛒</h1>
        </div>
        <CategoryDonna handleChange={handleChange} />
        <Price handleChange={handleChange} />
        <Colors handleChange={handleChange} />
      </section>
    </>
  );
};

export default SidebarDonna;