import { columnsUser, API_ENDPOINTS, createViewAction } from "../../Constants";
import { getData } from "../../store/usersSlice";
import AdminEntity from "../../components/features/Admin/AdminEntityDisplay";
import { useNavigate } from 'react-router-dom';

export default function AdminUsers() {

    const navigate = useNavigate();


    const handleView = (user) => navigate(`/Dashboard/Users/Details/${user.id}`)

  return (
    <AdminEntity
    
    entityType="Users" 
    sliceSelector={(state) => state.users}
    columns={columnsUser}
    apiEndpoint={API_ENDPOINTS.USERS}
    entityName="users"
    customAction={createViewAction(handleView)}
    getFetchData={getData} 
/>
  )
}

