import Price from "./Price/Price";
import Colors from "./Colors/Colors";
import "../../style/Sidebar.css"
import CategoryUomo from "./Category/CategoryUomo";


const SidebarUomo = ({ handleChange }) => {
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
        </div>
        <CategoryUomo handleChange={handleChange} />
        <Price handleChange={handleChange} />
      </section>
    </>
  );
};

export default SidebarUomo;