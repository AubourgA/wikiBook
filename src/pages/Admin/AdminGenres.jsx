import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getData } from '../../store/genresSlice';
import { API_ENDPOINTS } from '../../Constants';

export default function AdminGenres() {


  const dispatch = useDispatch();
  const { datas } = useSelector((state) => state.genres);

  useEffect( ()=> {
    dispatch(getData({endpoint: API_ENDPOINTS.GENRES, search:"", entityType: "Genres"}))
  },[dispatch])

  console.log(datas)
  return (
    <div>
        <h1>Title</h1>
        
    </div>
  )
}
