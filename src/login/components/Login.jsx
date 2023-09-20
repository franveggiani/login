import { useState } from "react";
import { loginFields } from "../constants/formFields";
import Input from "./Input";
import FormExtra from "./FormExtra";
import FormAction from "./FormAction";

//Seteamos valor inicial de los campos
const fields = loginFields;
let fieldsState = {}; //Objeto vacío
fields.forEach((field) => (fieldsState[field.id] = "")); //Por cada campo, seteamos "" inicialmente para cada id de cada campo

function Login() {
  const [loginState, setLoginState] = useState(fieldsState);

  const handleChange = (e) => {
    setLoginState({ ...loginState, [e.target.id]: e.target.value }); //[e.target.id] sirve para ubicar el campo modificado y se le asigna un valor con e.target.value
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //authenticateUser();
  }

  //const authenticateUser = () => {}

  return (
    <form className="mt-8 space-y-6">

      <div className="-space-y-px">
        {fields.map((field) => (
          <Input
            key={field.id}
            handleChange={handleChange}
            value={loginState[field.id]}
            labelText={field.labelText}
						id={field.id}
						name={field.name}
						type={field.type}
						isRequired={field.isRequired}
						placeholder={field.placeholder}
          />
        ))}
      </div>

      <FormExtra />
      <FormAction handleSubmit={handleSubmit} text={'Log-in'} />

    </form>
  );
}

export default Login;
