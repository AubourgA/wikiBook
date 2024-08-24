import { columnsNationnalities, API_ENDPOINTS } from "../../Constants";
import { getData } from "../../store/nationnalitiesSlice";
import AdminEntity from "../../components/features/Admin/AdminEntityDisplay";

export default function AdminNationnalities() {
  return (
    <AdminEntity
    entityType="Nationnalities"
    sliceSelector={(state) => state.nationnalities}
    columns={columnsNationnalities}
    apiEndpoint={API_ENDPOINTS.NATIONALITIES}
    createPath="/Dashboard/Nationnalities/New"
    updatePath="/Dashboard/Nationnalities/Update"
    entityName="Nationnalité"
    getFetchData={getData} 
/>
  )
}
