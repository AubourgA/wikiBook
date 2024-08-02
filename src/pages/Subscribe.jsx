import {useState} from "react";
import SignUpForm from '../components/features/forms/SignUp.form';
import { createUser } from '../api';
import { useNavigate } from 'react-router-dom';
import { checkValidationSignUp } from '../utils/checkDataForms';
import {INITIAL_SIGN_IN_VALUE, INITIAL_VALIDATION_VALUE} from '../Constants'


export default function Subscribe() {

 const [formData, setFormData] = useState( INITIAL_SIGN_IN_VALUE )
 const [showValidation, setShowValidation] = useState({...INITIAL_VALIDATION_VALUE })
 const [error, setError] = useState(null);

 const navigate = useNavigate();

 const handleSubscribeValue = () => (e) => {
    const { name, value} = e.target
    setFormData( {...formData,
      [name] : value
    })
 }


 const handleSubmitSignUp = async (e) => {
      e.preventDefault()
   
    if (!checkValidationSignUp(formData, setShowValidation)) return;
 
    const response = await createUser(formData)
     
    response.success
      ? navigate('/Login')
      : setError(response.error ? `Erreur de connexion : ${response.error.title || response.error}` : 'Une erreur inconnue est survenue.');
 }

  return (
    <section className='flex justify-center  items-center bg-primary50/25 h-screen'>
        <div className='grid  grid-cols-1 grid-rows-1 max-w-sm md:max-w-5xl gap-2 shadow-xl bg-primary50 rounded  sm:grid-cols-2'>
         
          <SignUpForm  value={formData} 
                       onFormData={handleSubscribeValue}
                       onSubmit={(e)=>handleSubmitSignUp(e)}
                       validation={showValidation}
                       error={error} />
        </div>
      </section>
  )
}

