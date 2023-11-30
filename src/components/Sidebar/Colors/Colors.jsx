import "../../../style/Colors.css"
import Input from "../../Input";

const Colors = ({ handleChange }) => {
  return (
    <>
      <div>
        <h2 className="sidebar-title color-title">Colore</h2>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test1" />
          <span className="checkmark all"></span>
          Tutti
        </label>

        <Input
          handleChange={handleChange}
          value="black"
          title="Nero"
          name="test1"
          color="black"
        />

        <Input
          handleChange={handleChange}
          value="blue"
          title="Blu"
          name="test1"
          color="blue"
        />

        <Input
          handleChange={handleChange}
          value="red"
          title="Rosso"
          name="test1"
          color="red"
        />

        <Input
          handleChange={handleChange}
          value="green"
          title="Verde"
          name="test1"
          color="green"
        />

        <Input
          handleChange={handleChange}
          value="pink"
          title="Rosa"
          name="test1"
          color="pink"
        />  

        <Input
          handleChange={handleChange}
          value="violet"
          title="Viola"
          name="test1"
          color="violet"
        />  

        <Input
          handleChange={handleChange}
          value="grey"
          title="Grigio"
          name="test1"
          color="grey"
        />  

        <label className="sidebar-label-container">
          <input
            onChange={handleChange}
            type="radio"
            value="white"
            name="test1"
          />
          <span
            className="checkmark"
            style={{ background: "white", border: "2px solid black" }}
          ></span>
          Bianco
        </label>
      </div>
    </>
  );
};

export default Colors;
