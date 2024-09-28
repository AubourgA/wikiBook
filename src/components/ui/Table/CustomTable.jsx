import Button from "../Forms/Button";
import PropTypes from 'prop-types'
import {getNestedValue} from '../../../utils/deepAccessValue'

const CustomTable = ({ data, columns, actions }) => {
  
  return (
    <div className="overflow-x-auto">
      <div className="hidden md:block">
        <table className="min-w-full bg-white  text-center">
          <thead>
            <tr>
              {columns.map((column) => (
                <th key={column.key} className="px-4 py-2  border-b-2">
                  {column.header}
                </th>
              ))}
              {actions && <th className="px-4 py-2 border-b-2">Actions</th>}
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id} className="even:bg-slate-50">
                {columns.map((column) => (
                  <td key={column.key} className="text-center px-4 py-2">
                    {column.render
                      ? column.render(getNestedValue(item, column.key))
                      : getNestedValue(item, column.key)
                      }
                  </td>
                ))}
                {actions && (
                  <td>
                    <div className="flex justify-center">
                      {actions.map((action, index) => (
                        <Button  key={index}
                                onButtonClick={() => action.onClick(item)}
                                type="button"
                                icon={action.icon}
                                category="action"
                                custom={action.style}  />
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
          <div   key={item.id} className="bg-white shadow-md rounded-lg mb-4 p-4 border" >
            {columns.map((column) => (
              <div key={column.key} className="flex justify-between py-2">
                <span className="font-semibold">{column.header}</span>
                <span>
                  {column.render
                    ? column.render(getNestedValue(item, column.key))
                    : getNestedValue(item, column.key) }
                </span>
              </div>
            ))}
            {actions && (
              <div className="flex justify-end space-x-2 pt-2">
                {actions.map((action, index) => (
                  <Button  key={index}
                          onButtonClick={() => action.onClick(item)}
                          type="button"
                          icon={action.icon}
                          category="action"
                          custom={action.style} /> ))
                  }
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

CustomTable.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, 
    })
  ).isRequired, 
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,   
      header: PropTypes.string.isRequired,  
      render: PropTypes.func 
    })
  ).isRequired,  
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.elementType,   
      onClick: PropTypes.func.isRequired,  
      style: PropTypes.string  
    })
  )  
};

export default CustomTable;
