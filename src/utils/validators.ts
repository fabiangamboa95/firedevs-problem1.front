import { required, email } from "react-admin";

export const requiredValidate = [required("Campo Requerido")];

export const emailValidate = [email("Debe escribir un email valido")];

export const emailRequiredValidate = [...requiredValidate, ...emailValidate];
