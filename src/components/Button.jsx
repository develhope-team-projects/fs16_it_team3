import "../style/Button.css";

const Button = ({ onClickHandler, value, title }) => {
  return (
    <>
      <button onClick={onClickHandler} value={value} className="Button">
        {title}
      </button>
    </>
  );
};

export default Button;
