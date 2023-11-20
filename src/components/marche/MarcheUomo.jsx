
import "./MarcheUomo.css";
import Button from '../Button'

const MarcheUomo = ({ handleClick }) => {
  return (
    <>
      <div>
        <div className="recommended-flex">
          <Button onClickHandler={handleClick} value="" title="All Products" />
          <Button onClickHandler={handleClick} value="Jordan" title="Jordan" />
          <Button onClickHandler={handleClick} value="Nike" title="Nike" />
          <Button onClickHandler={handleClick} value="The North Face" title="The North Face" />
          <Button onClickHandler={handleClick} value="Calvin Klein" title="Calvin Klein" />
          <Button onClickHandler={handleClick} value="Vans" title="Vans" />
          <Button onClickHandler={handleClick} value="U.S. Polo" title="U.S. Polo" />
          <Button onClickHandler={handleClick} value="Mango" title="Mango" />
          <Button onClickHandler={handleClick} value="Levi's" title="Levi's" />
          <Button onClickHandler={handleClick} value="EA7" title="EA7" />
          <Button onClickHandler={handleClick} value="Altri marchi" title="Altri marchi" />
        </div>
      </div>
    </>
  );
};

export default MarcheUomo;
