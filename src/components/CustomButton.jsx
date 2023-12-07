import "../style/ComponentStyle.css"

export const CustomButton = ({ text, func }) => {
  return (
    <>
      <button className="CustomButton" onClick={func}>
        <span className="box">{text}</span>
      </button>
    </>
  );
};
