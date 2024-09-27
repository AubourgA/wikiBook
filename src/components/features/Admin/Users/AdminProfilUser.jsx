import { formatDateISO } from '../../../../utils/formalizerDate';
import { GiPositionMarker } from "react-icons/gi";

export default function AdminProfilUser( {data}) {

  
  return (
  
        <section className="h-auto bg-white shadow-lg rounded-lg overflow-hidden mt-6">
                <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800">{data.firstname} {data.name}</h2>
                
                <div className="mt-4">
                    <h3 className="text-lg font-semibold text-gray-800">Détails</h3>
                    <ul className="list-disc list-inside mt-2">
                    <li><strong>Email : </strong> {data.email}</li>
                    <li><strong>Phone : </strong> {data.numPortable || 'N/A'}</li>
                    <li><strong>Inscription le :</strong> {formatDateISO(data.subscribedAt)}</li>
                    
                    </ul>
                </div>
                </div>
                <div className="bg-gray-100 p-4">
                <h3 className="text-lg font-semibold text-gray-800">Adresse</h3>
                <p className="mt-2 flex place-items-center"><GiPositionMarker className='text-red-400'/> {data.city}</p>
                </div>
         </section>
       
    
  )
}


