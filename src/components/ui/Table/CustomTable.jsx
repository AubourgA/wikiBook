import Button from '../Button';

const CustomTable = ({ data, columns, actions }) => {


    return (

  <div className="overflow-x-auto">
    <div className="hidden md:block">
      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.key} className="px-4 py-2 border">
                {column.header}
              </th>
            ))}
            {actions && <th className="px-4 py-2 border">Actions</th>}
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} className="border-t">
              {columns.map((column) => (
                <td key={column.key} className="text-center px-4 py-2 border">
                  {column.render ? column.render(item[column.key]) : item[column.key]}
                </td>
              ))}
              {actions && (
                <td className="px-4 py-2 border">
                  <div className="flex justify-center space-x-2">
                    {actions.map((action, index) => (
               
                        <Button key={index} 
                                onClick={ ()=> action.onClick(item)}
                                type="button" 
                                icon={action.icon} 
                                category="action"
                                custom={action.style}/>
                    ))}
                  </div>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  <div className="md:hidden">
      {data.map((item) => (
        <div key={item.id} className="bg-white shadow-md rounded-lg mb-4 p-4 border">
          {columns.map((column) => (
            <div key={column.key} className="flex justify-between py-2">
              <span className="font-semibold">{column.header}</span>
              <span>{column.render ? column.render(item[column.key]) : item[column.key]}</span>
            </div>
          ))}
          {actions && (
            <div className="flex justify-end space-x-2 pt-2">
              {actions.map((action, index) => (
                <Button key={index} 
                       onClick={ ()=> action.onClick(item)} 
                       type="button" 
                       icon={action.icon} 
                       category="action"
                       custom={action.style}/>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
</div>
);
};
  
  export default CustomTable;