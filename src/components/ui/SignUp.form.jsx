import InputForm from './InputForm';
import MessageForm from './MessageForm';
import { string, func} from "prop-types";

export default function SignUpForm( {value, onFormData : handleFormData, onSubmit: handleSubmitData, validation, error}) {

    
  return (
    <form className='p-10' onSubmit={handleSubmitData} > 
    <h1 className='font-primary text-3xl text-dark'>Créer son espace </h1>

   
    {error && (<MessageForm type="ERREUR" 
                            message="Une erreur est survenue"
                            styleMessage="error bg-red-300"/>)} 


    <div className='flex flex-col pt-5 pb-2'>
      <label htmlFor="name">Nom</label>
       <InputForm type="text"
                  id="name" 
                    name="name"
                   placeholder="Votre nom"
                   value={value.name}
                   onChange={ handleFormData} />
 
   {validation.name && (<MessageForm type="ERREUR" 
                            message="Le champs doit comporter des lettres"
                            styleType="error bg-red-300"
                            styleMessage="text-red-500"/>)}
    </div>
    <div className='flex flex-col py-2'>
      <label htmlFor="firstname">Prenom</label>
        <InputForm  type="text"
                    id="firstname" 
                    name="firstname"
                   placeholder="Votre prenom"
                   value={value.firstname}
                   onChange={ handleFormData} />
     {validation.firstname && (<MessageForm type="ERREUR" 
                            message="Le champs doit comporter des lettres"
                            styleType="error bg-red-300"
                            styleMessage="text-red-500"/>)}
    </div>

    <div className='flex flex-col py-2'>
      <label htmlFor="numPortable">Numero de téléphone</label>
        <InputForm type="tel"
                    id="numPortable" 
                    name="numPortable"
                   placeholder='0600000000'
                   pattern='[0-9]{10}'
                   value={value.numPortable}
                   onChange={ handleFormData} />
      {validation.numPortable &&(<MessageForm type="ERREUR" 
                            message="Le champs n'a pas le bon format"
                            styleType="error bg-red-300"
                            styleMessage="text-red-500"/>)}
    </div>
    <div className='flex flex-col py-2'>
      <label htmlFor="city">Ville</label>
       <InputForm type="text"
                    id="city" 
                    name="city"
                   placeholder='Votre ville'
                   value={value.city}
                   onChange={ handleFormData} /> 
    {validation.city && (<MessageForm type="ERREUR" 
                            message="Le champs doit comporter des lettres"
                            styleType="error bg-red-300"
                            styleMessage="text-red-500"/>)}
    </div>
    <div className='flex flex-col py-2'>
      <label htmlFor="email">email</label>
      <InputForm type="email"
          id="email" 
          name="email"
          placeholder='exemple@mail.com'
          value={value.email}
          onChange={ handleFormData} />
     {validation.email && (<MessageForm type="ERREUR" 
                            message="Le champs doit du type email"
                            styleType="error bg-red-300"
                            styleMessage="text-red-500"/>)}
    </div>
    <div className='flex flex-col py-2'>
      <label htmlFor="password">Password</label>
      <InputForm type="password"
          id="password" 
          name="password"
          placeholder='Choisissez votre mot de passe'
          value={value.password}
          onChange={ handleFormData} />
     {validation.email && (<MessageForm type="ERREUR" 
                            message="Le champs doit comporter 8 carac et 1 spécial"
                            styleType="error bg-red-300"
                            styleMessage="text-red-500"/>)}
    </div>


    <button type="submit" className='rounded-xl p-2 bg-primary100 w-full mt-2 text-light'>S'inscire</button>
    
</form>

  )
}

SignUpForm.proType = {
   value: string,
   onFormData: func.isRequired,
   onSubmit: func.isRequired,


}