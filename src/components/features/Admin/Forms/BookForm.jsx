
import  { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchBookById } from '../../../../api';
import Title from '../../../ui/Title';

// Composant pour ajouter ou éditer un livre
const BookForm = ({  book }) => {
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
          const book = await fetchBookById(id); // Utilisez await ici
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

  console.log(formData)
  // Gestion des changements de champs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Gestion de la soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (book) {
        // Si un livre est fourni, nous effectuons une mise à jour
        await updateBook(book.id, formData);
      } else {
        // Sinon, nous créons un nouveau livre
        await createBook(formData);
      }
     // Fermer le formulaire après soumission
    } catch (error) {
      console.error('Failed to save book:', error);
    }
  };

  console.log(isCreateMode)
  return (
    <section  className='bg-blue-100 p-4 rounded my-2'>
           <Title level={2} text1={isCreateMode ? "Ajout d'un nouvel ouvrage" : "Edition d'un ouvrage"} custom1='border-light border-b-2' />
          
          <form onSubmit={handleSubmit}>
            <label>
              Titre:
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
              />
            </label>
            <label>
              Auteur:
              <input
                type="text"
                name="isbn"
                value={formData.author}
                onChange={handleChange}
              />
            </label>
            <label>
              ISBN:
              <input
                type="text"
                name="isbn"
                value={formData.ISBN}
                onChange={handleChange}
              />
            </label>
            <button type="submit">{isCreateMode ? "Créer" : "Mise a jour"}</button>
            
          </form>
    </section>
  );
};

// Fonctions API simulées
const createBook = async (data) => {
  // Remplacez ceci par l'appel à votre API pour créer un livre
  console.log('Creating book:', data);
};

const updateBook = async (id, data) => {
  // Remplacez ceci par l'appel à votre API pour mettre à jour un livre
  console.log('Updating book with id:', id, 'Data:', data);
};

export default BookForm;