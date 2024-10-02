import Image from '../../../ui/Image';
import Title from '../../../ui/Title';
import coverSVG from '../../../../assets/images/cover.svg'
import Button from '../../../ui/Forms/Button'
import { useBookContext } from '../../../../hooks/useBookContext';
import { fetchEntityById } from '../../../../api';
import { API_ENDPOINTS } from '../../../../Constants';
import { useNavigate } from 'react-router-dom';

export default function BookCover({id, title}) {

    const {reserveBooks} = useBookContext();
    
    const navigate = useNavigate()

    const handleAddBook = async (id) => {
            try {
                const book = await fetchEntityById(id, API_ENDPOINTS.BOOKS); 
                reserveBooks(book);
                navigate('/Account/Emprunt')
            } catch (error) {
                console.error('Erreur lors de la réservation du livre :', error);
            }
    }

  return (
    <article key={id}>
              <div className="relative w-full h-64 p-2">
                <Image
                  img={coverSVG}
                  alt="cover"
                  className="w-full h-full object-cover opacity-50"
                />
                <Title
                  level={3}
                  text1={title}
                  custom1="absolute left-[20%] top-5 flex items-center text-xl text-slate-100"
                />
              <Button type='button' 
                      category="validate" 
                      title="Emprunté ?" 
                      custom='absolute bottom-[10%] left-[30%]' 
                      onButtonClick={() => handleAddBook(id)} />
              </div>
            </article>
  )
}


