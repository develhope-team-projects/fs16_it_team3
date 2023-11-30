import Price from "./Price/Price";
import Colors from "./Colors/Colors";
import "../../style/Sidebar.css"
import CategoryDonna from "./Category/CategoryDonna";



const SidebarDonna = ({ handleChange }) => {
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
        </div>
        <CategoryDonna handleChange={handleChange} />
        <Price handleChange={handleChange} />
      </section>
    </>
  );
};

export default SidebarDonna;