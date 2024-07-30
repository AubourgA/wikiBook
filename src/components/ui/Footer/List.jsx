

export default function List({datas}) {
  return (
    <ul>
        {datas.map( (item) => (
            <li key={item.id}>{item.text}</li>
        ))}
    </ul>
  )
}
