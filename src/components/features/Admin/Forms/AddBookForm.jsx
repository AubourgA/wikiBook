
import  { useState, useEffect } from 'react';

// Composant pour ajouter ou éditer un livre
const AddBookForm = ({ onClose, book }) => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    // Ajoutez d'autres champs selon vos besoins
  });

  // Effet pour pré-remplir le formulaire en cas d'édition
  useEffect(() => {
    if (book) {
      setFormData({
        title: book.title || '',
        author: book.author || '',
        // Préremplir d'autres champs si nécessaire
      });
    } else {
      setFormData({
        title: '',
        author: '',
        // Réinitialiser d'autres champs
      });
    }
  }, [book]);

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
      onClose(); // Fermer le formulaire après soumission
    } catch (error) {
      console.error('Failed to save book:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
      </label>
      <label>
        Author:
        <input
          type="text"
          name="author"
          value={formData.author}
          onChange={handleChange}
        />
      </label>
      {/* Ajoutez d'autres champs ici */}
      <button type="submit">Submit</button>
      <button type="button" onClick={onClose}>Cancel</button>
    </form>
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

export default AddBookForm;