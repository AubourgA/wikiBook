
// import { useFormManager } from "../../../../hooks/useFormManager";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import {  API_ENDPOINTS, NATIONNALITIES_INITIAL_VALUE } from "../../../../Constants";
import {   fetchEntityById, createEntity, updateEntity } from "../../../../api";


import { validateNationnalitiesForm } from '../../../../utils/checkDataForms';
import InputForm from '../../../ui/Forms/InputForm';
import MessageForm from '../../../ui/Forms/MessageForm';

import Button from '../../../ui/Forms/Button';

import Error from '../../../ui/Error/Error';





export default function NationnalitiesForm() {
  const { id } = useParams();
    const [formData, setFormData] = useState(NATIONNALITIES_INITIAL_VALUE);

    const [isCreateMode, setIsCreateMode] = useState(false);
    const [errors, setErrors] = useState({});
    const [updateError, setUpdateError] = useState(null)

    const navigate = useNavigate();

    useEffect( ()=> {
         const fetchDataForm = async () => { 
            try {
                if(id) {
                    setIsCreateMode(false)     
                    const nationnalities = await fetchEntityById(id, API_ENDPOINTS.NATIONALITIES)
                    setFormData( {
                        country: nationnalities.country || "",
                      
                    })
                   
                } else {
                    setIsCreateMode(true)
                   setUpdateError(null)
                }
            } catch(error) {
                console.error("FAiled to fetch nationnality details:",error)
               
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
   
      const validationErrors = validateNationnalitiesForm(formData);
     
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
      }
      
  

      try {
        if (isCreateMode) {
          await createEntity(API_ENDPOINTS.NATIONALITIES, formData)
          //envoyer notification
          setUpdateError(null)
          navigate("/Dashboard/Nationnalities");
        } else {
          // await updateAuthor(id, formData);
          await updateEntity(id, API_ENDPOINTS.NATIONALITIES, formData);
          //envoyer notification
          setUpdateError(null)
          navigate("/Dashboard/Nationnalities");
        }
      } catch (error) {
        console.error("Failted to save natinnality", error);
        setUpdateError("La nationnalité est déja existante")

      }
    }



 console.log(formData)

    return (
    <form onSubmit={handleSubmit}>
      {updateError && (<Error title="Erreur :"  message={updateError} />)}
      <div className="flex flex-col pt-5 pb-2">
        <InputForm
          id="nationnality"
          name="country"
          label="Nationnalité"
          onChange={handleChange}
          type="text"
          placeholder="nationnality"
          value={formData.country}
        />
        {errors.name && <MessageForm type="ERROR" message={errors.name} />}
        
     
        <div className="flex items-center gap-2">
          <Button
            type="submit"
            title={isCreateMode ? "Créer" : "Mise à jour"}
            category="forms"
          />
          <Link
            to="/Dashboard/Nationnalities"
            className="btn-pressed border-primary100 rounded-lg text-primary100 justify-center border px-4 py-2 mt-4"
          >
            Annuler
          </Link>
        </div>
      </div>
    </form>
  );
  
}
