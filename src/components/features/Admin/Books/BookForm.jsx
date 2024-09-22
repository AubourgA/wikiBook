import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { API_ENDPOINTS, BOOK_INITIAL_VALUE } from "../../../../Constants";
import {fetchEntity, fetchEntityById,createEntity, updateEntity, fetchAllGenericData} from "../../../../api";
import Button from "../../../ui/Forms/Button";
import InputForm from "../../../ui/Forms/InputForm";
import TextareaForm from "../../../ui/Forms/TextArea";
import SelectForm from "../../../ui/Forms/SelectForm";
import MessageForm from "../../../ui/Forms/MessageForm";
import SwitchInput from '../../../ui/Forms/InputSwitch';
import { validateBookForm } from "../../../../utils/checkDataForms";


const BookForm = () => {
  const { id } = useParams();
  const [isCreateMode, setIsCreateMode] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState(BOOK_INITIAL_VALUE);
  const [authors, setAuthors] = useState([]);
  const [genres, setGenres] = useState([]);
  const [editors, setEditors] = useState([]);


  const navigate = useNavigate();


   useEffect(() => {
    const fetchDataForForm  = async () => {
     
      await fetchAllGenericData(API_ENDPOINTS.BASE,( endpoint )=>fetchEntity(endpoint ? endpoint : API_ENDPOINTS.AUTHORS), setAuthors, "Erreur lors du chargement des auteur");
      await fetchAllGenericData(API_ENDPOINTS.BASE,( endpoint )=>fetchEntity(endpoint ? endpoint : API_ENDPOINTS.EDITORS), setEditors, "Erreur lors du chargement des auteur");
      await fetchAllGenericData(API_ENDPOINTS.BASE,( endpoint )=>fetchEntity(endpoint ? endpoint : API_ENDPOINTS.GENRES), setGenres, "Erreur lors du chargement des auteur");
   
      try {
        if (id) {
          setIsCreateMode(false);
          
          const book = await fetchEntityById(id, API_ENDPOINTS.BOOKS); //
          
          setFormData({
            title: book.title || "",
            synopsys: book.synopsys || "",
            YearPublished: book.YearPublished || "",
            ISBN: book.ISBN || "",
            nbPage: book.nbPage || "",
            author: book.author ? book.author["@id"] : "",
            genre: book.genre ? book.genre["@id"] : "",
            editor: book.editor ? book.editor["@id"] : "",
            isOnLine: book.isOnLine ? book.isOnLine : false,
          });
        
        } else {
          setIsCreateMode(true);
        }
      } catch (error) {
        console.error("Failed to fetch book details:", error);
      }
    };

    fetchDataForForm (); 
  }, [id]);
  

  const handleChange = () => (e) => {
    const { name, type, value, checked } = e.target;
    let finalValue;

    switch (type) {
      case "checkbox":
        finalValue = checked;
        break;
      case "number":
        finalValue = parseInt(value, 10) || parseInt(value,13);
        break;
      case "text":
      default:
        finalValue = value;
        break;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: finalValue,
    }));
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateBookForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      if (isCreateMode) {
        await createEntity(API_ENDPOINTS.BOOKS, formData)
        navigate("/Dashboard/Books");
      } else {
      
        await updateEntity(id, API_ENDPOINTS.BOOKS, formData);
        navigate("/Dashboard/Books");
      }
    } catch (error) {
      console.error("Failted to save book", error);
    }
  };


  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col pt-5 pb-2">
        <InputForm
          id="title"
          name="title"
          label="Titre"
          onChange={handleChange}
          type="text"
          placeholder="Titre de l'ouvrage"
          value={formData.title} />
        {errors.title && <MessageForm type="ERROR" message={errors.title} />}

        <TextareaForm
          label="Synopsys"
          id="synopsys"
          name="synopsys"
          placeholder="Quelque mot sur le sujet de l'ouvrage"
          value={formData.synopsys}
          onChange={handleChange}
          className="text-sm p-2 rounded-xl"  />
        {errors.synopsys &&  <MessageForm type="ERROR" message={errors.synopsys} />}

        <SelectForm
          id="authors"
          name="author"
          label="Nom de l'Auteur"
          onChange={handleChange}
          type="text"
          value={formData.author}
          options={authors}
          labelKey="name" />
        {errors.author && <MessageForm type="ERROR" message={errors.author} />}

        <InputForm
          id="YearPublished"
          name="YearPublished"
          label="Année de publication"
          onChange={handleChange}
          type="number"
          placeholder="Année de publication"
          value={formData.YearPublished}/>
        {errors.YearPublished && <MessageForm type="ERROR" message={errors.YearPublished} />}

        <InputForm
          id="ISBN"
          name="ISBN"
          label="ISBN"
          onChange={handleChange}
          type="text"
          placeholder="ISBN 10 ou 13 chiffre"
          value={formData.ISBN} />
        {errors.ISBN && <MessageForm type="ERROR" message={errors.ISBN} />}

        <InputForm
          id="nbPage"
          name="nbPage"
          label="Pages"
          onChange={handleChange}
          type="number"
          placeholder="Nombre de page"
          value={formData.nbPage} />
        {errors.nbPage && <MessageForm type="ERROR" message={errors.nbPage} />}

        <SelectForm
          label="Genre"
          name="genre"
          value={formData.genre}
          onChange={handleChange}
          options={genres}
          labelKey="name"  />
        {errors.genre && <MessageForm type="ERROR" message={errors.genre} />}

        <SelectForm
          label="Editeur"
          name="editor"
          value={formData.editor}
          onChange={handleChange}
          options={editors}
          labelKey="name" />
        {errors.editor && <MessageForm type="ERROR" message={errors.editor} />}

      
  
       <SwitchInput   id="isOnLine"
                      name="isOnLine"
                      label="Disponible"
                      value={formData.isOnLine}
                      onChange={handleChange}
                      customClass="my-4" />
     {errors.isOnLine && <MessageForm type="ERROR" message={errors.isOnLine} /> }

      <div className="flex items-center gap-2">
        <Button
          type="submit"
          title={isCreateMode ? "Créer" : "Mise a jour"}
          category="forms" />
        <Link to="/Dashboard/Books"
              className=" btn-pressed border-primary100 rounded-lg text-primary100 justify-center border px-4 py-2 my-4"  >
          Annuler
        </Link>
      </div>
    </div>
  </form>
  );
};

export default BookForm;
