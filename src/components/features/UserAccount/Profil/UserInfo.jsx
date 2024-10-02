import { useState } from 'react';
import { formatDateISO } from '../../../../utils/formalizerDate';
import { updateEntity } from '../../../../api';
import { API_ENDPOINTS } from '../../../../Constants';
import Title from '../../../ui/Title';


export default function UserInfo( {user}) {
 
  const [isEditing, setIsEditing] = useState(false)
  const [numPhone, setnumPhone] = useState({numPortable : user.numPortable})
 const [isSaving, setIsSaving] = useState(false)

  const handlePhoneChange = (e) => setnumPhone( (prev) => ({...prev, numPortable : e.target.value}));



  const handleSavePhone = async () => {
    setIsSaving(true)
      await updateEntity(user.id, API_ENDPOINTS.USERS, numPhone)
      setIsEditing(false)
      setIsSaving(false)
    
  }


  return (
    <section className='bg-primary50/50 rounded p-6 text-dark  shadow-lg'>
      <Title level={3} text1='Mon Profil'/>
        <div className='flex items-center space-x-4'>
          <div>
            <Title level={2} text1={`${user.name} ${user.firstname}`} />
            <p className='text-sm text-dark'>Depuis le : {formatDateISO(user.subscribedAt)}</p>
          </div>
        </div>
        <div className='mt-4'>
          <h3 className='text-xl font-medium py-2 text-secondary'>Details</h3>
          <ul className='list-disc list-inside space-y-2 '>

            <li  className='flex justify-between '><strong>Email : </strong> {user.email || 'Not provided'}</li>
            <li  className='flex justify-between items-center'><strong>Téléphone : </strong>  
              {isEditing ? (
                <div>
                  <input  type='phone' 
                          value={numPhone.numPortable} 
                          onChange={handlePhoneChange} 
                          className='p-2 rounded text-black text-sm ' />
                  <button className='ml-2 bg-blue-500 text-white p-2 rounded text-sm' onClick={handleSavePhone} >
                      {isSaving ? "is saving..." : "save"}
                  </button>
                </div>) 
                  : (<span className='ml-2 cursor-pointer bg-slate-100 px-2 border-black border rounded ' onClick={() => setIsEditing(true)}  >
                       {numPhone.numPortable || 'Not provided'}
                    </span> )}
          </li>
            <li  className='flex justify-between '><strong>Ville : </strong> {user.city || 'Not provided'}</li>
          </ul>
        </div>
       
  </section>
  )
}
