import { useAppDispatch } from '../../hooks/redux';
import {
  changeAllColors,
  changeFirstColor,
  changeLastColor,
} from '../../store/reducers/color';
import { randomHexColor } from '../../utils/color';

function RandomButtons() {
  // Le hook useAppDispatch va me retourner la fonction dispatch de mon store redux
  const dispatch = useAppDispatch();

  const handleClickRandomFirst = () => {
    const newColor = randomHexColor();

    // J'utilise la fonction dispatch récupérer depuis mon hook pour émettre mon intention
    dispatch(changeFirstColor(newColor));
  };

  const handleClickRandomLast = () => {
    const newColor = randomHexColor();

    // J'utilise la fonction dispatch récupérer depuis mon hook pour émettre mon intention
    dispatch(changeLastColor(newColor));
  };

  const handleClickRandomAll = () => {
    const colors = {
      firstColor: randomHexColor(),
      lastColor: randomHexColor(),
    };

    // J'utilise la fonction dispatch récupérer depuis mon hook pour émettre mon intention
    dispatch(changeAllColors(colors));
  };

  return (
    <div className="buttons group">
      <button type="button" className="button" onClick={handleClickRandomFirst}>
        Random First
      </button>
      <button type="button" className="button" onClick={handleClickRandomAll}>
        Random All
      </button>
      <button type="button" className="button" onClick={handleClickRandomLast}>
        Random Last
      </button>
    </div>
  );
}

export default RandomButtons;
