import "../style/ComponentStyle.css"

export const CustomButton = ({ text, color }) => {
  return (
    <>
      <button className="CustomButton">
        <span className="box">{text}</span>
      </button>
    </>
  );
};
