
import  { useState, useEffect } from 'react';
import {Link, useParams, useNavigate } from 'react-router-dom';
import { fetchBookById, fetchAuthors, fetchEditors, fetchGenres, fetchLanguages, createBook, updateBook } from '../../../../api';
import Button from '../../../ui/Button';
import InputForm from '../../../ui/InputForm';
import TextareaForm from '../../../ui/TextArea';
import SelectForm from '../../../ui/SelectForm';
import { validateBookForm} from '../../../../utils/checkDataForms'
import { BOOK_INITIAL_VALUE } from '../../../../Constants';
import MessageForm from '../../../ui/MessageForm';


const BookForm = () => {
  const { id } = useParams();
  const [isCreateMode, setIsCreateMode] = useState(false)
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState( BOOK_INITIAL_VALUE);
  const [authors, setAuthors] = useState([]);
  const [genres, setGenres] = useState([]);
  const [editors, setEditors] = useState([]);
  const [languages, setLanguages] = useState([]);

 const navigate = useNavigate()
  // Effet pour pré-remplir le formulaire en cas d'édition
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (id) {
            setIsCreateMode(false);
            const book = await fetchBookById(id); //
           
            // setFormData({
            //   title: book.title || '',
            //   synopsys : book.synopsys || '',
            //   YearPublished: book.YearPublished || '',
            //   ISBN: book.ISBN || '',
            //   nbPage: book.nbPage || '',
            //   author: book.author ? `${book.author.name} ${book.author.firstname}` : '',
           
            //   genre: book.genre ? book.genre.name : '',
            //   editor : book.editor ? book.editor.name : '',
            //   language : book.language ? book.language.name : '',
            //   isOnLine : book.isOnLine ? book.isOnLine : false
            // });
            setFormData({
              title: book.title || '',
              synopsys: book.synopsys || '',
              YearPublished: book.YearPublished || '',
              ISBN: book.ISBN || '',
              nbPage: book.nbPage || '',
              author: book.author ? book.author['@id'] : '', // Utilisation de l'IRI
              genre: book.genre ? book.genre['@id'] : '', // Utilisation de l'IRI
              editor: book.editor ? book.editor['@id'] : '', // Utilisation de l'IRI
              language: book.language ? book.language['@id'] : '', // Utilisation de l'IRI
              isOnLine: book.isOnLine ? book.isOnLine : false,
          });
            
        } else {
            setIsCreateMode(true);
            }
       
            const authorsList = await fetchAuthors();
            if (Array.isArray(authorsList['hydra:member'])) {
              const authorsWithFullName = authorsList['hydra:member'].map(author => ({
                ...author,
                fullName: `${author.name} ${author.firstname}`,
              }));
              setAuthors(authorsWithFullName);
            } else {
              console.error("La réponse de l'API n'est pas un tableau:", authorsList);
            }

            const genreList = await fetchGenres();
            if (Array.isArray(genreList['hydra:member'])) {
              setGenres(genreList['hydra:member']); // Assurez-vous que genreList est bien un tableau
            } else {
              console.error("La réponse de l'API n'est pas un tableau:", genreList);
            }
            const editorsList = await fetchEditors();
            if (Array.isArray(editorsList['hydra:member'])) {
              setEditors(editorsList['hydra:member']); // Assurez-vous que genreList est bien un tableau
            } else {
              console.error("La réponse de l'API n'est pas un tableau:", editorsList);
            }
            const languagesList = await fetchLanguages();
            if (Array.isArray(languagesList['hydra:member'])) {
              setLanguages(languagesList['hydra:member']); // Assurez-vous que genreList est bien un tableau
            } else {
              console.error("La réponse de l'API n'est pas un tableau:", languagesList);
            }
      
      } catch (error) {
          console.error('Failed to fetch book details:', error);
      } 
    };


    fetchData(); // Appel de la fonction fetchData
  }, [id]);




  const handleChange = () => (e) => {
    const { name, type, value, checked } = e.target;
    let finalValue;
  
    switch (type) {
      case 'checkbox':
        finalValue = checked;
        break;
      case 'number':
        finalValue = parseInt(value, 10) || parseInt(13);
        break;
      case 'text':
      default:
        finalValue = value;
        break;
    }
  
    setFormData((prev) => ({
      ...prev,
      [name]: finalValue,
    }));

   
  };  
  // // Gestion de la soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const validationErrors = validateBookForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {

      if(isCreateMode) {
        await createBook(formData);
        //envoyer notification
        navigate('/Dashboard/Books')
      } else {
     
        await updateBook(id,formData)
        //envoyer notification
        navigate('/Dashboard/Books')
      }
    } catch (error) {
      console.error("Failted to save book", error)
    }
   
  };


  return (
     
          <form onSubmit={handleSubmit}  >
            <div className='flex flex-col pt-5 pb-2'> 
            <InputForm id="title"
                      name='title'
                      label="Titre"
                      onChange={ handleChange}
                      type='text'
                      placeholder="Titre de l'ouvrage"
                      value={formData.title}/>
            {errors.title && <MessageForm type="ERROR" message={errors.title} />}
              <TextareaForm label="Synopsys"
                            id="synopsys"
                            name="synopsys"
                            placeholder="Quelque mot sur le sujet de l'ouvrage"
                            value={formData.synopsys}
                            onChange={handleChange}
                            className="text-sm p-2 rounded-xl" />
               {errors.synopsys && <MessageForm type="ERROR" message={errors.synopsys} />}

               <SelectForm id="authors"
                          name='author'
                          label="Auteur"
                          onChange={ handleChange}
                          type='text'
                          value={formData.author}
                          options= {authors}
                          labelKey="fullName"
                          valueKey='@id'/>
                  {errors.synopsys && <MessageForm type="ERROR" message={errors.synopsys} />}
            
                <InputForm id="YearPublished"
                      name='YearPublished'
                      label="Année de publication"
                      onChange={ handleChange}
                      type='number'
                      placeholder="Année de publication"
                      value={formData.YearPublished}/>
                {errors.synopsys && <MessageForm type="ERROR" message={errors.synopsys} />}
        
                 <InputForm id="ISBN"
                      name='ISBN'
                      label="ISBN"
                      onChange={ handleChange}
                      type='text'
                      placeholder="ISBN 11 ou 13 chiffre"
                      value={formData.ISBN}/>
                  {errors.ISBN && <MessageForm type="ERROR" message={errors.ISBN} />}
                  <InputForm id="nbPage"
                      name='nbPage'
                      label="Pages"
                      onChange={ handleChange}
                      type='number'
                      placeholder="Nombre de page"
                      value={formData.nbPage}/>
                   {errors.nbPage && <MessageForm type="ERROR" message={errors.nbPage} />}
                  <SelectForm label="Genre"
                              name="genre"
                              value={formData.genre}
                              onChange={handleChange}
                              options= {genres}
                              labelKey='name'/>
                  {errors.genre && <MessageForm type="ERROR" message={errors.genre} />}
                  <SelectForm label="Editeur"
                              name="editor"
                              value={formData.editor}
                              onChange={handleChange}
                              options= {editors}
                              labelKey='name'/>
                  {errors.editor && <MessageForm type="ERROR" message={errors.editor} />}
                  <SelectForm label="Langue"
                              name="language"
                              value={formData.language}
                              onChange={handleChange}
                              options= {languages}
                              labelKey='name'/>
              {errors.language && <MessageForm type="ERROR" message={errors.language} />}
           <InputForm id="isOnLine"
                      name='isOnLine'
                      label="Disponible"
                      onChange={ handleChange}
                      type='checkbox'
                  
                      value={formData.isOnLine}/>
      
            <div className='flex items-center gap-2'>
                <Button type='submit' title={isCreateMode ? "Créer" : "Mise a jour"} category="forms"  />
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