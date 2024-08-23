
// import { useFormManager } from "../../../../hooks/useFormManager";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import {  API_ENDPOINTS, AUTHOR_INITIAL_VALUE } from "../../../../Constants";
import {   fetchEntityById, createEntity, updateEntity } from "../../../../api";


import { validateGenresForm } from '../../../../utils/checkDataForms';
import InputForm from '../../../ui/Forms/InputForm';
import MessageForm from '../../../ui/Forms/MessageForm';

import Button from '../../../ui/Forms/Button';

import Error from '../../../ui/Error/Error';





export default function GenresForm() {
  const { id } = useParams();
    const [formData, setFormData] = useState(AUTHOR_INITIAL_VALUE);

    const [isCreateMode, setIsCreateMode] = useState(false);
    const [errors, setErrors] = useState({});
    const [updateError, setUpdateError] = useState(null)

    const navigate = useNavigate();

    useEffect( ()=> {
         const fetchDataForm = async () => { 
            try {
                if(id) {
                    setIsCreateMode(false)     
                    const genre = await fetchEntityById(id, API_ENDPOINTS.GENRES)
                    setFormData( {
                        name: genre.name || "",
                      
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
   
      const validationErrors = validateGenresForm(formData);
     
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
      }
      
  

      try {
        if (isCreateMode) {
          await createEntity(API_ENDPOINTS.GENRES, formData)
          //envoyer notification
          setUpdateError(null)
          navigate("/Dashboard/Genres");
        } else {
          // await updateAuthor(id, formData);
          await updateEntity(id, API_ENDPOINTS.GENRES, formData);
          //envoyer notification
          setUpdateError(null)
          navigate("/Dashboard/Genres");
        }
      } catch (error) {
        console.error("Failted to save author", error);
        setUpdateError("Le nom et prenom sont déja existant")

      }
    }





    return (
    <form onSubmit={handleSubmit}>
      {updateError && (<Error title="Erreur :"  message={updateError} />)}
      <div className="flex flex-col pt-5 pb-2">
        <InputForm
          id="name"
          name="name"
          label="Désignation"
          onChange={handleChange}
          type="text"
          placeholder="Désignation"
          value={formData.name}
        />
        {errors.name && <MessageForm type="ERROR" message={errors.name} />}
        
     
        <div className="flex items-center gap-2">
          <Button
            type="submit"
            title={isCreateMode ? "Créer" : "Mise à jour"}
            category="forms"
          />
          <Link
            to="/Dashboard/Genres"
            className="btn-pressed border-primary100 rounded-lg text-primary100 justify-center border px-4 py-2 mt-4"
          >
            Annuler
          </Link>
        </div>
      </div>
    </form>
  );
  
}
