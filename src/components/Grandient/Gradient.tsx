import { useAppSelector } from '../../hooks/redux';

function Gradient() {
  const firstColor = useAppSelector((state) => state.color.firstColor);
  const lastColor = useAppSelector((state) => state.color.lastColor);
  const direction = useAppSelector((state) => state.color.direction);
  return (
    <div
      className="gradient"
      style={{
        background: `linear-gradient(${direction}, ${firstColor}, ${lastColor})`,
      }}
    />
  );
}

export default Gradient;
