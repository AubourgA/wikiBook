import { Link } from 'react-router-dom';
import Image from '../ui/Image';
import Title from '../ui/Title';
import { IoMdArrowRoundBack } from "react-icons/io";
import { formatDateISO } from '../../utils/formalizerDate';


export default function BookDetails({data, user}) {

  return (
    <article >
      
      <div className='bg-light grid  grid-cols-1 sm:grid-cols-[250px_1fr] gap-2 mt-2 p-4'>
        <div className='flex place-content-center'>
          <div className='relative'>
            <Image img="https://placehold.co/250x250"  />
            <p className='absolute top-1 left-1 bg-black/55 text-light text-sm px-2'>{data.genre.name}</p>
          </div>
        </div>
          
        <div className='p-2'>
            <div className='flex justify-between items-center'>
              <Title level={2} text1={data.title}/>
              {user && user.roles.includes('ROLE_ADMIN') && <p>Ajouté le {formatDateISO(data.createdAt)}</p> }
            </div>
            <ul >
              <li className='text-secondary font-bold text-lg mb-3'>  {data.author.name} {data.author.firstname}</li>
                 <span className={` ${data.bookCopies.length < 1 ? "bg-red-300" : "bg-green-300"} rounded p-1 text-sm`}>{data.bookCopies.length < 1 ? "Indisponible" : "Disponible"}</span>
              <li className='mt-2'><span className='font-bold'>Par</span> {data.editor.name}</li>
              <li className='py-4'>{data.synopsys}</li>
              <li><span className='font-bold'>Année de publication : </span>{data.YearPublished}</li>
              <li className='py-2'><span className='font-bold'>ISBN </span>{data.ISBN}</li>
              <li><span className='font-bold'>Pages : </span>{data.nbPage}</li>
            </ul>
        </div>

      </div>
      { !user?.roles.includes('ROLE_ADMIN') &&
          <div className='mx-auto w-max p-2 mt-2 rounded bg-primary100 text-light'>
                <Link to=".." relative="path" className='flex justify-center items-center'>
                    <IoMdArrowRoundBack /> Retour 
                </Link>
          </div>
      }
    </article>
  )
}

