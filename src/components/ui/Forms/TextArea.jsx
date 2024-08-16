import { string, func } from "prop-types";

export default function TextareaForm({
  label,
  id,
  name,
  placeholder,
  value,
  onChange: handleTextareaForm
}) {
  return (
    <>
      {label && <label htmlFor={name}>{label}</label>}
      <textarea
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleTextareaForm()}
        className="text-sm p-2 rounded-xl"
      />
    </>
  );
}

TextareaForm.propTypes = {
  label: string,
  id: string.isRequired,
  name: string.isRequired,
  placeholder: string,
  value: string.isRequired,
  onChange: func.isRequired
};

