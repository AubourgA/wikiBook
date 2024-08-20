import createEntitySlice from '../../../store/entitySlice';
import { API_ENDPOINTS } from '../../../Constants';

const booksSlicer = createEntitySlice('books', API_ENDPOINTS.BOOKS);


export { booksSlicer  };