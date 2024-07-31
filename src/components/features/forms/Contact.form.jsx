import InputForm from '../../ui/InputForm';
import MessageForm from '../../ui/MessageForm'
import TextArea from '../../ui/TextArea'
import Button from '../../ui/Button';

export default function ContactForm( {onSubmit : handleSubmitContact, 
                                     datas,
                                    onChange:handleChange,
                                    errors}) {
  return (
    <form className='p-10' onSubmit={handleSubmitContact()}> 
        <h1 className='font-primary text-3xl text-dark'>Formulaire de Contact</h1>
        <div className='flex flex-col pt-5 pb-2'>
    
        <InputForm label="Nom"
                    type="text"
                    id="lastname"
                    name="lastname"
                    placeholder="Indiquer votre nom"
                    value={datas.lastname}
                    onChange={handleChange}
                    className="text-sm p-2 rounded-xl" />
        {errors?.lastname && <MessageForm type="ERROR"
                                            message={errors.lastname}
                                            styleType="error bg-red-300"
                                            styleMessage="text-red-500 pt-2"/>}
        </div>
        <div className='flex flex-col py-2'>
            <InputForm label="Prenom"
                    type="text"
                    id="firstname"
                    name="firstname"
                    placeholder="Indiquer votre prenom"
                    value={datas.firstname}
                    onChange={handleChange}
                    className="text-sm p-2 rounded-xl" />
            {errors.firstname && <MessageForm type="ERROR"
                                            message={errors.firstname}
                                            styleType="error bg-red-300"
                                            styleMessage="text-red-500 pt-2"/>}
        </div>
        <div className='flex flex-col py-2'>
                <InputForm label="Email"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="exemple@mail.com"
                    value={datas.email}
                    onChange={handleChange}
                    className="text-sm p-2 rounded-xl" />
                {errors.email && <MessageForm type="ERROR"
                                                message={errors.email}
                                                styleType="error bg-red-300"
                                                styleMessage="text-red-500 pt-2"/>}
        </div>
        <div className='flex flex-col py-2'>
            <TextArea label="Message"
                        id="message"
                        name="message"
                        placeholder="Indiquer votre message"
                        value={datas.message}
                        onChange={handleChange}
                        className="text-sm p-2 rounded-xl" />
                {errors.message && <MessageForm type="ERROR"
                                            message={errors.message}
                                            styleType="error bg-red-300"
                                            styleMessage="text-red-500 pt-2"/>}
        </div>
        <Button title="Envoyer" type="submit" className="justify-center rounded-xl p-2 bg-primary100 w-full mt-2 text-light"/>
    
    </form>
  )
}
