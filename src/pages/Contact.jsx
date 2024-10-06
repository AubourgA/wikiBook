import { useState } from "react"
import { sendEmail } from '../api';
import { INITIAL_CONTACT_VALUE } from '../Constants/initialize.state';
import { validateContactForm } from '../utils/checkDataForms';
import ContactForm from '../components/features/forms/Contact.form';
import Image from '../components/ui/Image'
import contact from '../assets/images/contact.png'

export default function Contact() {

  const [formData, setFormData] = useState(INITIAL_CONTACT_VALUE);
  const [errors, setErrors] = useState({});

  const handleChange = () => (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmitContact = () => (e) => {
    e.preventDefault();
    const validationErrors = validateContactForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      sendEmail(formData.lastname, formData.firstname, formData.email, formData.message)
      setFormData(INITIAL_CONTACT_VALUE)
    }
  };

  return (
    <section className='flex justify-center  items-center bg-primary50/25 h-screen'>
        <div className='grid  grid-cols-1 grid-rows-1 max-w-sm md:grid-cols-2 md:max-w-5xl gap-2 shadow-xl bg-primary50 rounded  '>
            <ContactForm onSubmit={handleSubmitContact}
                         datas={formData}
                         onChange={handleChange}
                         errors={errors} />
            <Image img={contact} alt="contact"/>
        </div>
    </section>


  )
}
