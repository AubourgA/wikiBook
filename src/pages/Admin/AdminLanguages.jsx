import { columnsLanguages, API_ENDPOINTS } from "../../Constants";
import { getData } from "../../store/languagesSlice";
import AdminEntity from "../../components/features/Admin/AdminEntityDisplay";

export default function AdminLanguages() {

  return (
    <AdminEntity
    entityType="Languages"
    sliceSelector={(state) => state.languages}
    columns={columnsLanguages}
    apiEndpoint={API_ENDPOINTS.LANGUAGES}
    createPath="/Dashboard/Languages/New"
    updatePath="/Dashboard/Languages/Update"
    entityName="langues"
    getFetchData={getData} 
/>
  )
}
