

export default function Image( {img, text, className=""}) {
  return (
    <img src={img} alt={text} className={className} />
  )
}
