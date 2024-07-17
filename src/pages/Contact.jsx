import { useState } from "react"

// import mailPic from "../assets/images/mail.png"

// import { GiPositionMarker } from "react-icons/gi";
// import { BsTelephoneFill } from "react-icons/bs";

const INITIAL_FORM_VALUE = {
  lastName: '',
  firstName: '',
  email: '',
  message: ''
}

export default function Contact() {

  const [formData, setFormData] = useState(INITIAL_FORM_VALUE);



  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName) {
      newErrors.firstName = 'Le prénom est requis';
    } else if (!/^[a-zA-Z]+$/.test(formData.firstName)) {
      newErrors.firstName = 'Le prénom ne doit contenir que des lettres';
    }

    if (!formData.lastName) {
      newErrors.lastName = 'Le nom est requis';
    } else if (!/^[a-zA-Z]+$/.test(formData.lastName)) {
      newErrors.lastName = 'Le nom ne doit contenir que des lettres';
    }

    if (!formData.email) {
      newErrors.email = 'L\'email est requis';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'L\'email est invalide';
    }

    if (!formData.message) {
      newErrors.message = 'Le message est requis';
    }

    return newErrors;
  };

  const handleSubmitContact = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Envoi du formulaire
      console.log('Formulaire envoyé avec succès', formData);
      setFormData(INITIAL_FORM_VALUE)
      
      
    }
  };


  return (
    <section className='flex justify-center  items-center bg-primary50/25 h-screen'>
        <div className='grid  grid-cols-1 grid-rows-1 max-w-sm md:max-w-5xl gap-2 shadow-xl bg-primary50 rounded  sm:grid-cols-2'>

            <form className='p-10' onSubmit={handleSubmitContact}> 
                <h1 className='font-primary text-3xl text-dark'>Formulaire de Contact</h1>
                <div className='flex flex-col pt-5 pb-2'>
                  <label htmlFor="lastName">Nom</label>
                  <input  type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          className='text-sm p-2 rounded-xl' />
                  {errors.lastName && <p className="error">{errors.lastName}</p>}
                </div>
                <div className='flex flex-col py-2'>
                  <label htmlFor="firstname">Prenom</label>
                  <input  type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          className='text-sm p-2 rounded-xl' />
                  {errors.firstName && <p className="error">{errors.firstName}</p>}
                </div>
                <div className='flex flex-col py-2'>
                  <label htmlFor="email">Email</label>
                  <input    type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className='text-sm p-2 rounded-xl' />
                  {errors.email && <p className="error">{errors.email}</p>}
                </div>
                <div className='flex flex-col py-2'>
                  <label htmlFor="">Message</label>
                  <textarea  id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className='text-sm p-2 rounded-xl' />
                    {errors.message && <p className="error">{errors.message}</p>}
                </div>
                <button type="submit" className='rounded-xl p-2 bg-primary100 w-full mt-2 text-light'>Envoyer</button>
            </form>
           
        </div>
        
    </section>


  )
}
