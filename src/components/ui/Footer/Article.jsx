import { Link } from 'react-router-dom'

export default function Article({ datas, title, renderItem, className = '', classNameLi = '' }) {
  return (
    <article className="py-4 md:py-0 ">
      <h2 className='pb-4 font-bold'>{title}</h2>
      <ul className= {` ${className}`}>
        {
          datas.map((item) => (
            <li key={item.id} className={`${classNameLi} py-1`}>
              {renderItem ? renderItem(item) : <Link to={item.url}>{item.title}</Link>}
            </li>
          ))
        }
      </ul>
    </article>
  )
}
