

export default function SignUpForm( {value, onFormData : handleFormData, onSubmit: handleSubmitData, validation}) {

    
  return (
    <form className='p-10' onSubmit={handleSubmitData} > 
    <h1 className='font-primary text-3xl text-dark'>Créer son espace </h1>
    <div className='flex flex-col pt-5 pb-2'>
      <label htmlFor="name">Nom</label>
      <input  type="text"
              id="name"
              name="name"
              placeholder='Votre nom'
              value={value.name}
              onChange={ handleFormData}
              className='text-sm p-2 rounded-xl' />
   {validation.name && (<p className='error text-xs pt-1'><span className='bg-red-300 rounded-xl px-1 font-bold'>ERREUR</span> Le champs doit comporter des lettres</p>)}
    </div>
    <div className='flex flex-col py-2'>
      <label htmlFor="firstname">Prenom</label>
      <input  type="text"
              id="firstname"
              name="firstname"
              placeholder='Votre prénom'
              value={value.firstname}
              onChange={ handleFormData}
              className='text-sm p-2 rounded-xl' />
     {validation.firstname && (<p className='error text-xs pt-1'><span className='bg-red-300 rounded-xl px-1 font-bold'>ERREUR</span> Le champs doit comporter des lettres</p>)}
    </div>
    <div className='flex flex-col py-2'>
      <label htmlFor="numPortable">Numero de téléphone</label>
      <input  type="tel"
              id="numPortable"
              name="numPortable"
             pattern='[0-9]{10}'
             placeholder='0600000000'
             value={value.numPortable}
             onChange={ handleFormData}
              className='text-sm p-2 rounded-xl' />
      {validation.numPortable && (<p className='error text-xs pt-1'><span className='bg-red-300 rounded-xl px-1 font-bold'>ERREUR</span> Le champs n'a pas le bon format</p>)}
    </div>
    <div className='flex flex-col py-2'>
      <label htmlFor="city">Ville</label>
      <input  type="text"
              id="city"
              name="city"
              placeholder='Votre ville'
              value={value.city}
              onChange={ handleFormData}
              className='text-sm p-2 rounded-xl' />
    {validation.city && (<p className='error text-xs pt-1'><span className='bg-red-300 rounded-xl px-1 font-bold'>ERREUR</span> Le champs doit comporter des lettres</p>)}
    </div>
    <div className='flex flex-col py-2'>
      <label htmlFor="email">email</label>
      <input  type="email"
              id="email"
              name="email"
              placeholder='exemple@mail.com'
              value={value.email}
              onChange={ handleFormData}
              className='text-sm p-2 rounded-xl' />
     {validation.email && (<p className='error text-xs pt-1'><span className='bg-red-300 rounded-xl px-1 font-bold'>ERREUR</span> Le champs doit etre de type email</p>)}
    </div>
    <div className='flex flex-col py-2'>
      <label htmlFor="password">Password</label>
      <input  type="password"
              id="password"
              name="password"
              placeholder='Choisissez votre mot de passe'
              value={value.password}
              onChange={ handleFormData}
              className='text-sm p-2 rounded-xl' />
     {validation.email && (<p className='error text-xs pt-1'><span className='bg-red-300 rounded-xl px-1 font-bold'>ERREUR</span> Le champs doit etre de 8 carac mini et 1 special</p>)}
    </div>


    <button type="submit" className='rounded-xl p-2 bg-primary100 w-full mt-2 text-light'>S'inscire</button>
    
</form>

  )
}

