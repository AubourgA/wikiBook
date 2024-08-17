import PropTypes from 'prop-types';

export default function Image( {img, text, className=""}) {
  return (
    <img src={img} alt={text} className={className} />
  )
}

Image.propTypes = {
  img: PropTypes.string.isRequired, // URL de l'image, requis
  text: PropTypes.string.isRequired, // Texte alternatif pour l'image, requis
  className: PropTypes.string,       // Classes CSS supplémentaires, optionnel
}