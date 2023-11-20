import "../../../style/Category.css"
import Input from "../../Input";

function Category({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title">Categoria</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>Tutti i prodotti
        </label>
        <Input
          handleChange={handleChange}
          value="lifestyle"
          title="Lifestyle"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="running"
          title="Running"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="calcio"
          title="Calcio"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="tennis"
          title="Tennis"
          name="test"
        />
      </div>
    </div>
  );
}

export default Category;
