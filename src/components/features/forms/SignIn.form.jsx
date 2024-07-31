import Button from '../../ui/Button';


export default function SignIn({onSubmit : handleLogin, datas, onChange : handleCredential}) {
  
  
  
    return (

    <form className='p-2' onSubmit={handleLogin} > 
            <h1 className='font-primary text-3xl text-dark'>Déja client</h1>
            <div className='flex flex-col pt-5 pb-2'>
            <label htmlFor="id">ID</label>
            <input  type="email"
                    id="email"
                    name="email"
                    value={datas.email}
                    onChange={handleCredential}
                    className='text-sm p-2 rounded-xl' />
            {/* {errors.lastName && <p className="error">{errors.lastname}</p>} */}
            </div>
            <div className='flex flex-col py-2'>
            <label htmlFor="password">Password</label>
            <input  type="password"
                    id="password"
                    name="password"
                    value={datas.password}
                    onChange={handleCredential}
                    className='text-sm p-2 rounded-xl' />
            {/* {errors.firstName && <p className="error">{errors.firstname}</p>} */}
            </div>

            <Button title="Se Connecter"
                        type="submit"
                        className="justify-center rounded-xl p-2 bg-primary100 w-full mt-2 text-light" />
            {/* <button type="submit" className='rounded-xl p-2 bg-primary100 w-full mt-2 text-light'>Se Connecter</button> */}
           
</form>
  )
}
