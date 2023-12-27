import { TDirection } from '../../@types';
import { useAppDispatch } from '../../hooks/redux';
import { changeDirection } from '../../store/reducers/color';

function DirectionButtons() {
  const dispatch = useAppDispatch();

  const handleClickDirection = (direction: TDirection) => {
    // monAction === { payload: direction, type: "color/changeDirection" }
    const monAction = changeDirection(direction);
    dispatch(monAction);
  };

  return (
    <div className="buttons group">
      <button
        type="button"
        className="button"
        onClick={() => handleClickDirection('45deg')}
      >
        45deg
      </button>
      <button
        type="button"
        className="button"
        onClick={() => handleClickDirection('90deg')}
      >
        90deg
      </button>
      <button
        type="button"
        className="button"
        onClick={() => handleClickDirection('135deg')}
      >
        135deg
      </button>
      <button
        type="button"
        className="button"
        onClick={() => handleClickDirection('225deg')}
      >
        225deg
      </button>
      <button
        type="button"
        className="button"
        onClick={() => handleClickDirection('270deg')}
      >
        270deg
      </button>
      <button
        type="button"
        className="button"
        onClick={() => handleClickDirection('315deg')}
      >
        315deg
      </button>
    </div>
  );
}

export default DirectionButtons;
