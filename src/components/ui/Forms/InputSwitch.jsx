import { string, bool, func } from "prop-types";

export default function SwitchInput({ id, name, label, value, onChange: handleSwitchInput, customClass = "" }) {
  return (
    <div className={`flex items-center ${customClass}`}>
      {label && <label htmlFor={id} className="mr-3"> {label} </label>}
      <div className="relative inline-block w-12 h-6 align-middle select-none transition duration-200 ease-in">
        <input
          type="checkbox"
          name={name}
          id={id}
          checked={value}
          onChange={handleSwitchInput()}
          className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer transition-transform duration-300 ease-in-out transform"
          style={{
            transform: value ? 'translateX(100%)' : 'translateX(0%)'
          }}
        />
        <label
          htmlFor={id}
          className={`toggle-label block overflow-hidden h-6 rounded-full cursor-pointer transition-colors duration-300 
                     ${value ? 'bg-green-500' : 'bg-red-500'}`}
        ></label>
      </div>
      <span className="text-gray-900 ml-2">{value ? 'Yes' : 'No'}</span>
    </div>
  );
}

SwitchInput.propTypes = {
  id: string.isRequired,
  name: string.isRequired,
  label: string,
  value: bool.isRequired,
  onChange: func.isRequired,
  customClass: string,
};
