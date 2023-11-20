import "./Category.css";
import Input from "../../Input";

function CategoryDonna({ handleChange }) {
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
          value="vestiti"
          title="Vestiti"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="t-shirt e top"
          title="T-shirt e top"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="pantaloni"
          title="Pantaloni"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="jeans"
          title="Jeans"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="giacche"
          title="Giacche"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="moda mare"
          title="Moda mare"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="gonne"
          title="Gonne"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="tute jumpsuit"
          title="Tute jumpsuit"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="intimo notte e loungewear"
          title="Intimo notte e Loungewear"
          name="test"
        />
      </div>
    </div>
  );
}

export default CategoryDonna;
