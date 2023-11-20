import Price from "./Price/Price";
import Colors from "./Colors/Colors";
import "./Sidebar.css";
import CategoryUomo from "./Category/CategoryUomo";


const SidebarUomo = ({ handleChange }) => {
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <h1>🛒</h1>
        </div>
        <CategoryUomo handleChange={handleChange} />
        <Price handleChange={handleChange} />
        <Colors handleChange={handleChange} />
      </section>
    </>
  );
};

export default SidebarUomo;