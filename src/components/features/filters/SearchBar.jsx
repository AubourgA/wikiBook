import InputForm from "../../ui/Forms/InputForm";
import { GoSearch } from "react-icons/go";

export default function SearchBar({
  type,
  id,
  name,
  placeholder,
  value,
  pattern,
  onChange: handleInput,
}) {
  return (
    <div className="flex items-center focus-within:shadow-lg   bg-light px-2 rounded-lg ">
      <InputForm
        id={id}
        type={type}
        value={value}
        name={name}
        onChange={handleInput}
        pattern={pattern}
        placeholder={placeholder}
        customClass="bg-transparent border-none focus:border-blue-100 focus:outline-none focus:ring-0 "
      />

      <GoSearch />
    </div>
  );
}
