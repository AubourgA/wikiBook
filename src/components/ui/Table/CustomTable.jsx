const CustomTable = ({ data, columns, actions }) => {
    return (
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.key} className="px-4 py-2">{column.header}</th>
            ))}
            {actions && actions.length > 0 && <th className="px-4 py-2">Actions</th>}
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} className="border-t">
              {columns.map((column) => (
                <td key={column.key} className="px-4 py-2">
                  {column.render ? column.render(item[column.key], item) : item[column.key]}
                </td>
              ))}
              {actions && actions.length > 0 && (
                <td className="px-4 py-2 flex gap-2">
                  {actions.map((action, index) => (
                    <button key={index} onClick={() => action.onClick(item)}>
                      {action.icon}
                    </button>
                  ))}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  export default CustomTable;