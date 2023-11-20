import "../../style/Marche.css"
import Button from '../Button'

const MarcheDonna = ({ handleClick }) => {
  return (
    <>
      <div>
        <div className="recommended-flex">
          <Button onClickHandler={handleClick} value="" title="All Products" />
          <Button onClickHandler={handleClick} value="pull&bear" title="Pull&Bear" />
          <Button onClickHandler={handleClick} value="bershka" title="Bershka" />
          <Button onClickHandler={handleClick} value="the north face" title="The North Face" />
          <Button onClickHandler={handleClick} value="calvin klein" title="Calvin Klein" />
          <Button onClickHandler={handleClick} value="levi's" title="Levi's" />
          <Button onClickHandler={handleClick} value="stradivarius" title="Stradivarius" />
          <Button onClickHandler={handleClick} value="even&odd" title="Even&Odd" />
          <Button onClickHandler={handleClick} value="altri marchi" title="Altri marchi" />
        </div>
      </div>
    </>
  );
};

export default MarcheDonna;
