import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import {  API_ENDPOINTS, AUTHOR_INITIAL_VALUE } from "../../../../Constants";
import {   fetchEntity, fetchEntityById, createEntity, updateEntity, fetchAllGenericData } from "../../../../api";


import { validateAuthorForm } from '../../../../utils/checkDataForms';
import InputForm from '../../../ui/Forms/InputForm';
import MessageForm from '../../../ui/Forms/MessageForm';
import SelectForm from '../../../ui/Forms/SelectForm';
import Button from '../../../ui/Forms/Button';
import {formatDate} from '../../../../utils/formalizerDate';
import Error from '../../../ui/Error/Error';




export default function AuthorForm() {
    const { id } = useParams();
    const [formData, setFormData] = useState(AUTHOR_INITIAL_VALUE);
    const [nationalities, setNationalities] = useState([]);
    const [isCreateMode, setIsCreateMode] = useState(false);
    const [errors, setErrors] = useState({});
    const [updateError, setUpdateError] = useState(null)

    const navigate = useNavigate();

    useEffect( ()=> {
         const fetchDataForm = async () => {
           
            await fetchAllGenericData(API_ENDPOINTS.BASE, (endpoint)=>fetchEntity(endpoint ? endpoint : API_ENDPOINTS.NATIONALITIES), setNationalities, "Erreur lors du chargement des nationalité");
           
            
            try {
                if(id) {
                    setIsCreateMode(false)     
                    const author = await fetchEntityById(id, API_ENDPOINTS.AUTHORS)
                    setFormData( {
                        name: author.name || "",
                        firstname: author.firstname || "",
                        birthdate: author.birthdate || "",
                        nationality: author.nationality ? author.nationality["@id"] : ""
                    })
                   
                } else {
                    setIsCreateMode(true)
                   setUpdateError(null)
                }
            } catch(error) {
                console.error("FAiled to fetch author details:",error)
               
            }
        
        }
        fetchDataForm()
    },[id] )


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
   
      const validationErrors = validateAuthorForm(formData);
     
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
      }
      
  

      try {
        if (isCreateMode) {
          await createEntity(API_ENDPOINTS.AUTHORS, formData)
          //envoyer notification
          setUpdateError(null)
          navigate("/Dashboard/Authors");
        } else {
          await updateEntity(id, API_ENDPOINTS.AUTHORS, formData);
          //envoyer notification
          setUpdateError(null)
          navigate("/Dashboard/Authors");
        }
      } catch (error) {
        console.error("Failted to save author", error);
        setUpdateError("Le nom et prenom sont déja existant")

      }
    }


  return (
    <form onSubmit={handleSubmit}>
      {updateError && (<Error title="Erreur :"  message={updateError} />  )}
      <div className="flex flex-col pt-5 pb-2">
        <InputForm
          id="name"
          name="name"
          label="Nom"
          onChange={handleChange}
          type="text"
          placeholder="Nom"
          value={formData.name}
        />
        {errors.name && <MessageForm type="ERROR" message={errors.name} />}
        <InputForm
          id="firstname"
          name="firstname"
          label="Prenom"
          onChange={handleChange}
          type="text"
          placeholder="Prenom"
          value={formData.firstname}
        />
        {errors.firstname && <MessageForm type="ERROR" message={errors.firstname} />}
       
        <InputForm
          id="birthdate"
          name="birthdate"
          label="Date de Naissance"
          onChange={handleChange}
          type="date"
          value={formatDate(formData.birthdate)}
        />
        {errors.birthdate && <MessageForm type="ERROR" message={errors.birthdate} />}

        <SelectForm
          id="nationality"
          name="nationality"
          label="Nationnalité"
          onChange={handleChange}
          type="text"
          value={formData.nationality}
          options={nationalities}
          labelKey="country"/>
        {errors.nationality && <MessageForm type="ERROR" message={errors.nationality} />}


        <div className="flex items-center gap-2">
          <Button
            type="submit"
            title={isCreateMode ? "Créer" : "Mise a jour"}
            category="forms"/>
          <Link to="/Dashboard/Authors"
            className=" btn-pressed border-primary100 rounded-lg text-primary100 justify-center border px-4 py-2 my-4"
          >
            Annuler
          </Link>
        </div>
      </div>
    </form>
  )
}
