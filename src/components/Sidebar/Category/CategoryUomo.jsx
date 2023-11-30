import "../../../style/Category.css"
import Input from "../../Input";

function CategoryUomo({ handleChange }) {
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
          value="t-shirt e polo"
          title="T-shirt e polo"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="camicie"
          title="Camicie"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="maglie e felpe"
          title="Maglie e felpe"
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
          value="pantaloni"
          title="Pantaloni"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="bermuda"
          title="Bermuda"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="abbigliamento sportivo"
          title="Abbigliamento sportivo"
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
          value="intimo"
          title="Intimo"
          name="test"
        />
      </div>
    </div>
  );
}

export default CategoryUomo;
