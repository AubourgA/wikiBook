import PropTypes from 'prop-types';

export default function List({datas}) {
  return (
    <ul>
        {datas.map( (item) => (
            <li key={item.id}>{item.text}</li>
        ))}
    </ul>
  )
}

List.propTypes = {
  datas: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,  // Identifiant unique de l'élément, requis
      text: PropTypes.string.isRequired, // Texte de l'élément, requis
    })
  ).isRequired,  // Tableau d'éléments, requis
};