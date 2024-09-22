import { Link, useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { createEntity, fetchAllGenericData, fetchEntity } from '../../../../api';
import { API_ENDPOINTS, BOOKCOPIES_INITIAL_VALUE } from '../../../../Constants';

import SelectForm from '../../../ui/Forms/SelectForm';
import Button from '../../../ui/Forms/Button';
import InputForm from '../../../ui/Forms/InputForm';



export default function BookCopiesForm() {

    
    const [languages, setLanguages] = useState("")
    const [status, setStatus] = useState("")
    const [formData, setFormData] = useState(BOOKCOPIES_INITIAL_VALUE);

    let {id} = useParams();
    const navigate = useNavigate();


    useEffect(() => {
      
        const fetchDataForForm  = async () => {
          await fetchAllGenericData(API_ENDPOINTS.BASE, ( endpoint)=>fetchEntity(endpoint ? endpoint : API_ENDPOINTS.LANGUAGES), setLanguages, "Erreur lors du chargement des langues");
          await fetchAllGenericData(API_ENDPOINTS.BASE, (endpoint )=>fetchEntity(endpoint ? endpoint : API_ENDPOINTS.STATUS), setStatus, "Erreur lors du chargement des status");
        };
    
        fetchDataForForm (); 
      }, []);


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
          book: `/api/books/${id}`
        }));
      };


      
    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            createEntity(API_ENDPOINTS.BOOKCOPIES, formData)
            navigate('/Dashboard/Books')
        } catch(err) {
            console.error("Failed", err)
        }
    }
  return (
   <form onSubmit={handleSubmit} >
     <div className="flex flex-col pt-5 pb-2">
    
     <SelectForm
          id="language"
          name="language"
          label="Langue"
          onChange={handleChange}
          type="text"
          value={formData.language}
          options={languages}
          labelKey="name" />

        <SelectForm
          id="status"
          name="status"
          label="Status"
          onChange={handleChange}
          type="text"
          value={formData.status}
          options={status}
          labelKey="type" />
        
        <InputForm
          id="serviceDate"
          name="serviceDate"
          label="Mise en service"
          onChange={handleChange}
          type="date"
          value={formData.serviceDate}
        />
    
    <div className="flex items-center gap-2">
        <Button
          type="submit"
          title="Créer"
          category="forms" />
        <Link to="/Dashboard/Books/"
              className=" btn-pressed border-primary100 rounded-lg text-primary100 justify-center border px-4 py-2 my-4"  >
          Annuler
        </Link>
      </div>
     </div>
    </form>
  )
}
