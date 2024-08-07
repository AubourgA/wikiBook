import { FaTrash, FaEdit } from 'react-icons/fa';

export const columnsBooks = [
    { key: 'id', header: '#' },
    { key: 'title', header: 'Titre' },
    { key: 'ISBN', header: 'ISBN' },
    { key: 'isOnLine', header: 'Disponible', render: (isOnLine) => (
      <span className={`inline-block px-2 py-1 text-sm font-semibold rounded-full ${isOnLine ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
        {isOnLine ? 'Yes' : 'No'}
      </span>
    ) }
  ];

  export const createActionsBooks = (handleEdit, handleDelete) => [
    { icon: FaEdit , onClick: handleEdit , style: "text-yellow-500 hover:bg-yellow-100"},
    { icon: FaTrash, onClick: handleDelete, style: "text-red-500 hover:bg-red-100" },
  ];