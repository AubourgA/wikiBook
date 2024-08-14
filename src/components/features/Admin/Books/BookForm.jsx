
import  { useState, useEffect } from 'react';
import {Link, useParams } from 'react-router-dom';
import { fetchBookById, fetchGenres } from '../../../../api';
import Button from '../../../ui/Button';
import InputForm from '../../../ui/InputForm';
import TextareaForm from '../../../ui/TextArea';
import SelectForm from '../../../ui/SelectForm';


const BOOK_INITIAL_VALUE = {
  title: '',
  // authorF : '',
  // authorN : '',
  synopsys : '',
  ISBN :'',
  genre :'',
  YearPublished:'',
}



const BookForm = () => {
  const { id } = useParams();
  const [isCreateMode, setIsCreateMode] = useState(false)
  const [formData, setFormData] = useState( BOOK_INITIAL_VALUE);
  const [genres, setGenres] = useState([]);

  // Effet pour pré-remplir le formulaire en cas d'édition
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (id) {
            setIsCreateMode(false);
            const book = await fetchBookById(id); //
        
            setFormData({
              title: book.title || '',
              // authorF: book.author.firstname || '',
              // authorN: book.author.name || '',
              synopsys : book.synopsys || '',
              ISBN: book.ISBN || '',
              YearPublished: book.YearPublished || '',
              genre: book.genre ? book.genre.name : '',
            });
        } else {
            setIsCreateMode(true);
            }

            const genreList = await fetchGenres();
            if (Array.isArray(genreList['hydra:member'])) {
              setGenres(genreList['hydra:member']); // Assurez-vous que genreList est bien un tableau
            } else {
              console.error("La réponse de l'API n'est pas un tableau:", genreList);
            }
      
      } catch (error) {
          console.error('Failed to fetch book details:', error);
      } 
    };

    // setIsCreateMode(true)
    fetchData(); // Appel de la fonction fetchData
  }, [id]);

 
  // Gestion des changements de champs
  const handleChange = () => (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  // // Gestion de la soumission du formulaire
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     if (book) {
  //       // Si un livre est fourni, nous effectuons une mise à jour
  //       await updateBook(book.id, formData);
  //     } else {
  //       // Sinon, nous créons un nouveau livre
  //       await createBook(formData);
  //     }
  //    // Fermer le formulaire après soumission
  //   } catch (error) {
  //     console.error('Failed to save book:', error);
  //   }
  // };
  // Gestion des changements de genre
  // const handleChange = () => (e) => {
  //   const { name, value } = e.target;
  //   const [key, nestedKey] = name.split('.'); // Gestion des champs imbriqués
  //   setFormData((prev) => ({
  //     ...prev,
  //     [key]: nestedKey ? { ...prev[key], [nestedKey]: value } : value,
  //   }));
  //   console.log(formData)
  // };

  return (
     
          <form onSubmit={()=>{}}  >
            <div className='flex flex-col pt-5 pb-2'> 
            <InputForm id="title"
                      name='title'
                      label="Titre"
                      onChange={ handleChange}
                      type='text'
                      placeholder="Titre de l'ouvrage"
                      value={formData.title}/>

              <TextareaForm label="Message"
                            id="synopsys"
                            name="synopsys"
                            placeholder="Quelque mot sur le sujet de l'ouvrage"
                            value={formData.synopsys}
                            onChange={handleChange}
                            className="text-sm p-2 rounded-xl" />

               {/* <InputForm id="authorN"
                          name='authorN'
                          label="Auteur"
                          onChange={ handleChange}
                          type='text'
                          placeholder="Nom"
                          value={formData.authorN}/>
                <InputForm id="authorF"
                      name='authorF'
                      label="Auteur"
                      onChange={ handleChange}
                      type='text'
                      placeholder="Prénom"
                      value={formData.authorF}/> */}
                <InputForm id="YearPublished"
                      name='YearPublished'
                      label="Année de publication"
                      onChange={ handleChange}
                      type='text'
                      placeholder="Année de publication"
                      value={formData.YearPublished}/>
        
                 <InputForm id="ISBN"
                      name='ISBN'
                      label="ISBN"
                      onChange={ handleChange}
                      type='text'
                      placeholder="ISBN 11 ou 13 chiffre"
                      value={formData.ISBN}/>
                  <SelectForm label="Genre"
                              name="genre"
                              value={formData.genre}
                              onChange={handleChange}
                              options= {genres}
                              labelKey='name'/>
          
      
            <div className='flex items-center gap-2'>
                <Button type='submit' title={isCreateMode ? "Créer" : "Mise a jour"} category="forms" onButtonClick={ ()=> {}} />
                <Link to="/Dashboard/Books" className=' btn-pressed border-primary100 rounded-lg text-primary100 justify-center border px-4 py-2 mt-4'>Annuler </Link>
              </div>          
            </div>
          </form>
   
  );
};

// Fonctions API simulées
// const createBook = async (data) => {
//   // Remplacez ceci par l'appel à votre API pour créer un livre
//   console.log('Creating book:', data);
// };

// const updateBook = async (id, data) => {
//   // Remplacez ceci par l'appel à votre API pour mettre à jour un livre
//   console.log('Updating book with id:', id, 'Data:', data);
// };

export default BookForm;