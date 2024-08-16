import { object, func } from "prop-types";

import Button from '../../ui/Forms/Button';
import InputForm from '../../ui/Forms/InputForm';
import MessageForm from '../../ui/Forms/MessageForm';
import Error from '../../../components/ui/Error/Error'

export default function SignIn({onSubmit : handleLogin, datas, onChange : handleCredential, errors}) {
  
  
  
    return (

    <form className='p-2' onSubmit={handleLogin} > 
    
            {errors?.general &&  <Error title="EREUR" message={errors.general} />}
           
            <h1 className='font-primary text-3xl text-dark'>Déja client ?</h1>
            <div className='flex flex-col pt-5 pb-2'>
         
                <InputForm label="Email"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Indiquer votre email"
                    value={datas.email}
                    onChange={handleCredential}
                    className="text-sm p-2 rounded-xl" />
            {errors?.email && <MessageForm type="ERROR"
                                            message={errors.email}
                                            styleType="error bg-red-300"
                                            styleMessage="text-red-500 pt-2"/>}
            </div>
            <div className='flex flex-col py-2'>
         
                     <InputForm label="Password"
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Indiquer votre password"
                    value={datas.password}
                    onChange={handleCredential}
                    className="text-sm p-2 rounded-xl" />
           {errors?.password && <MessageForm type="ERROR"
                                            message={errors.password}
                                            styleType="error bg-red-300"
                                            styleMessage="text-red-500 pt-2"/>}
            </div>

            <Button title="Se Connecter"
                        category="forms"
                        type="submit"  />
           
           
</form>
  )
}


SignIn.propTypes = {
        onSubmit : func.isRequired,
        onChange : func.isRequired,
        error: object,
        datas : object.isRequired,
    }