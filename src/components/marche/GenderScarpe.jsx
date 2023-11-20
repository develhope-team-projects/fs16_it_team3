
import "./Marche.css";
import Button from '../Button'

const GenderScarpe = ({ handleClick }) => {
  return (
    <>
      <div>
        <div className="recommended-flex">
          <Button onClickHandler={handleClick} value="uomo" title="Uomo" />
          <Button onClickHandler={handleClick} value="donna" title="Donna" />
          <Button onClickHandler={handleClick} value="bambini" title="Bambini"/>
        </div>
      </div>
    </>
  );
};

export default GenderScarpe;