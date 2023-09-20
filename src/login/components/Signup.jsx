import { signupFields } from "../constants/formFields";
import { useState } from "react";
import Input from "./Input";
import FormAction from "./FormAction";
import FormExtra from "./FormExtra";

const fields = signupFields;
const fieldsStates = {};

fields.forEach((field) => (fieldsStates[field.id] = ""));

function Signup() {
  const [fieldsValues, setFieldsValues] = useState(signupFields);

  const handleChange = (e) => {
    setFieldsValues({ ...fieldsValues, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //API para subir datos de registro
  };

	console.log(fields);

  return (
    <form action="#">
      {fields.map((field) => (
        <Input
          key={field.id}
          handleChange={handleChange}
          value={fieldsValues[field.id]}
          labelText={field.labelText}
          labelFor={field.labelFor}
          id={field.id}
          name={field.name}
          type={field.type}
          isRequired={field.isRequired}
          placeholder={field.placeholder}
        />
      ))}

      <FormExtra />

      <FormAction handleSubmit={handleSubmit} text={"Sign up"} />

    </form>
  );
}

export default Signup;
