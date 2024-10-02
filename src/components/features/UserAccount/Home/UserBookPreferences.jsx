import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { buildQueryParams } from "../../../../utils/QueryBuilder";
import { API_ENDPOINTS } from "../../../../Constants";
import useFetch from "../../../../hooks/useFetch";
import Error from "../../../ui/Error/Error";
import Loader from "../../../ui/Loader";
import Title from "../../../ui/Title";
import BookCover from "./BookCover";


export default function UserBookPreferences() {
  const [url, setURL] = useState(null);

  useEffect(() => {
    const savedFilters = Cookies.get("filters");
    if (savedFilters) {
      const parsedFilters = JSON.parse(savedFilters);
      const queryParams = buildQueryParams(parsedFilters);
      console.log(queryParams);
      setURL(`${API_ENDPOINTS.BOOKS}?${queryParams}`);
    }
  }, []);

  const { data, isLoading, error } = useFetch(url ? url : null);
  console.log(data);
  return (
    <div>
      <Title level={3} text1="Une selection selon vos préférences" />

      {isLoading && <Loader />}
      {error && !isLoading && (
        <Error title="ERROR" message="Une erreur est survenue" />
      )}

      <div className="grid grid-cols-auto-fill-175">
        {!isLoading &&
          !error &&
          data &&
          data["hydra:member"].slice(0, 5).map(({ id, title }) => (
           
            <BookCover key={id} title={title} id={id} />
          ))}

        {data && data["hydra:totalItems"] === 0 && (
          <p>Aucun élément correspond à vos préférences</p>
        )}

      </div>
    </div>
  );
}
