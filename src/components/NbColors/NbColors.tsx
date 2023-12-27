import { useAppSelector } from '../../hooks/redux';

function NbColors() {
  // useSelector va me permettre de récupérer des données depuis mon store
  // useSelector va prendre en paramètre une fonction de callback
  // Cette fonction me permet de récupérer le state de mon store redux
  // Je dois retourner depuis les données stocker dans `state` la donnée qui m'intéresse
  // le useSelector est l'équivalent d'un getState et d'un subscribe
  // Lorsque les données du store vont être modifier, la fonction passé dans le useSelector va s'exécuter
  // Si la donnée retourner par la fonction à changer, le composant va se mettre à jour
  const nbColors = useAppSelector((state) => {
    // Cette fonction sera exécuter à chaque fois que le state va changer
    // Mais le composant sera re-rendu uniquement si la donnée retourné par cette fonction change
    return state.color.nbColors;
  });

  return <div className="nbColors">{nbColors} couleur(s) générée(s)</div>;
}

export default NbColors;
