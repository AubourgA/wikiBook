import { FaTrash, FaEdit, FaEye  } from 'react-icons/fa';
import { formatDate, formatDateISO} from '../utils/formalizerDate'
import { filteredbookCopies } from '../utils/filteredDatas';


export const columnsBooks = [
    { key: 'id', header: '#' },
    { key: 'title', header: 'Titre' },
    { key: 'ISBN', header: 'ISBN' },
    { key: 'bookCopies', header: 'Exemplaires en Rayon', render: (bookCopy) => (
      <span>{Array.isArray(bookCopy) ? filteredbookCopies(bookCopy) : 0}</span>
    )},
     {key: 'createdAt', header: 'Rentré le', render: (value) => formatDateISO(value)},
    { key: 'isOnLine', header: 'En Rayon', render: (isOnLine) => (
      <span className={`inline-block px-2 py-1 text-sm font-semibold rounded-full ${isOnLine ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
        {isOnLine ? 'Yes' : 'No'}
      </span>
    ) }
  ];

  export const columnsShortBooks = [
    { key: 'id', header: '#' },
    { key: 'title', header: 'Titre' },
    { key: 'ISBN', header: 'ISBN' },
  ]

  export const columnsAuthors = [
    { key: 'id', header:"#"},
    { key: 'name', header:"name"},
    { key: 'firstname', header:"firstname"},
  ]

  export const columnsGenres = [
    { key: 'id', header:"#"},
    { key: 'name', header:"name"}
  ]

  export const columnsEditors = [
    { key: 'id', header:"#"},
    { key: 'name', header:"name"}
  ]

  export const columnsNationnalities = [
    { key: 'id', header:"#"},
    { key: 'country', header:"Pays"}
  ]

  export const columnsStatus = [
    { key: 'id', header:"#"},
    { key: 'type', header:"status"}
  ]

  export const columnsLanguages = [
    { key: 'id', header:"#"},
    { key: 'name', header:"name"}
  ]

  export const columnsLoans = [
    { key: 'id', header:"#"},
    { key: 'bookCopy.book.title', header:"Livre"},
    { key: 'bookCopy.id', header:"No_ID"},
    { key: 'borrowDate', header:"Date d'emprunt", render: (value) => formatDateISO(value)},
    { key: 'returnDate', header:"Date de retour", render: (value) => value ? formatDateISO(value): "en attente"},
    { key: 'user.name', header:"Utilisateur"},
  ]

  export const columnsBookCopies = [
    {key: 'id', header:'#'},
    {key: 'serviceDate', header:"Mise en service", render: (value) => formatDate(value)},
    {key: 'Language.name', header:"Langues"},
    {key: 'status.type', header:"Status"}
  ]


  export const columnsUserLoans = [
   
    {key: 'bookCopy.book.title', header:"Livre"},
    {key: 'borrowDate', header:"Date emprunt", render: (value) => formatDateISO(value)},
    {key: 'returnDate', header:"Date de retour",render: (value) => value ? formatDateISO(value): "a retourner"},
  ]

  export const columnsUser = [
    {key: 'id', header: '#' },
    {key: 'name', header: 'Nom' },
    {key: 'firstname', header:"prenom"},
    {key: 'subscribedAt', header: 'Inscription', render: (value) => formatDateISO(value) },
    {key: 'email', header: 'Email' },
  ]

  export const columnsBookUserDetail = [
    {key: 'name', header:"nom"},
    {key: 'firstname', header:"prenom"},
    {key: 'date', header:"Date emprunt", render: (value) => formatDateISO(value)},
  ]

  export const columnsLoansByUser = [
    {key: 'bookCopy.book.title', header: "Titre"},
    {key: 'borrowDate', header: "Date emprunt", render: (value)=> formatDateISO(value)},
    {key: 'returnDate', header:"Date de retour",render: (value) => value ? formatDateISO(value): "en attente"},
  ]

  export const createViewAction = (handleWatch) => [

    { icon: FaEye  , onClick: handleWatch , style: "text-blue-500 hover:bg-yellow-100"},
  ]

 export const createEditAction = (handleEdit) => [

   { icon: FaEdit , onClick: handleEdit , style: "text-yellow-500 hover:bg-yellow-100"},
 ]
 
 

  export const createActions = (handleWatch, handleEdit, handleDelete) => [
    { icon: FaEye  , onClick: handleWatch , style: "text-blue-500 hover:bg-yellow-100"},
    { icon: FaEdit , onClick: handleEdit , style: "text-yellow-500 hover:bg-yellow-100"},
    { icon: FaTrash, onClick: handleDelete, style: "text-red-500 hover:bg-red-100" },
  ];