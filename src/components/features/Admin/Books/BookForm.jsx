
import  { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchBookById } from '../../../../api';
import Button from '../../../ui/Button';
import InputForm from '../../../ui/InputForm';
import TextareaForm from '../../../ui/TextArea';


// Composant pour ajouter ou éditer un livre
const BookForm = () => {
  const { id } = useParams();
  const [isCreateMode, setIsCreateMode] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    author: '',
   
  });

  // Effet pour pré-remplir le formulaire en cas d'édition
  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        try {
          setIsCreateMode(false);
          const book = await fetchBookById(id); //
          setFormData({
            title: book.title || '',
            author: book.author.firstname || '',
            ISBN: book.ISBN || ''
          });
        } catch (error) {
          console.error('Failed to fetch book details:', error);
        }
      }
    };
    setIsCreateMode(true)
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
              id="sysnopsys"
              name="sysnopsys"
              placeholder="Quelque mot sur le sujet de l'ouvrage"
              value={formData.synopsys}
              onChange={handleChange}
              className="text-sm p-2 rounded-xl" />
               <InputForm id="author.lastname"
                      name='author.lastname'
                      label="Auteur"
                      onChange={ handleChange}
                      type='text'
                      placeholder="Nom"
                      value={formData.author.lastname}/>
                     <InputForm id="author.firstname"
                      name='author.firstname'
                      label="Auteur"
                      onChange={ handleChange}
                      type='text'
                      placeholder="Prénom"
                      value={formData.author.firstname}/>
                       <InputForm id="yearPublished"
                      name='yearPublished'
                      label="Année de publication"
                      onChange={ handleChange}
                      type='text'
                      placeholder="Année de publication"
                      value={formData.yearPublished}/>
        
        <InputForm id="ISBN"
                      name='ISBN'
                      label="ISBN"
                      onChange={ handleChange}
                      type='text'
                      placeholder="ISBN 11 ou 13 chiffre"
                      value={formData.ISBN}/>
          
      
      
            <Button type='submit' title={isCreateMode ? "Créer" : "Mise a jour"} category="forms" onButtonClick={ ()=> {}} />
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