import { required, email, choices } from "react-admin";

export const requiredValidate = [required("Campo Requerido")];

export const emailValidate = [email("Debe escribir un email valido")];

export const emailRequiredValidate = [...requiredValidate, ...emailValidate];

export const ageRequiredValidate = [
  ...requiredValidate,
  choices([...Array(40).keys()].slice(17), "Debe ser una edad valida"),
];
// here I consider a range for university from 17-39; left to consideration
