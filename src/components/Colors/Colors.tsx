import { useAppSelector } from '../../hooks/redux';

function Colors() {
  // On évite absolument de retourner un objet depuis le useSelector car on s'abonne à la modification de la donnée retourné par le useSelector
  // On veut éviter les re-rendu inutile, on essaye d'être le plus précis possible lors de la récupération des données
  const firstColor = useAppSelector((state) => state.color.firstColor);
  const lastColor = useAppSelector((state) => state.color.lastColor);
  return (
    <div className="colors">
      <span style={{ color: firstColor }}>{firstColor}</span>-
      <span style={{ color: lastColor }}>{lastColor}</span>
    </div>
  );
}

export default Colors;
