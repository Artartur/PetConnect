import * as yup from "yup";
import { MaxAndMinCharacters, RequiredMensages } from "./mensages";

export const registerSchema = yup.object({
  email: yup
    .string()
    .email()
    .max(100, MaxAndMinCharacters.email)
    .required(RequiredMensages.email),
  name: yup
    .string()
    .max(80, MaxAndMinCharacters.name)
    .required(RequiredMensages.name),
  password: yup
    .string()
    .max(20, MaxAndMinCharacters.password)
    .min(6, MaxAndMinCharacters.password)
    .required(RequiredMensages.password),
  phone: yup
    .string()
    .max(13, MaxAndMinCharacters.phone)
    .required(RequiredMensages.phone),
});

export const reportSchema = yup.object({
  animal: yup.string().required(RequiredMensages.animal),
  city: yup
    .string()
    .max(80, MaxAndMinCharacters.city)
    .required(RequiredMensages.city),
  description: yup.string().max(250, MaxAndMinCharacters.description),
  email: yup
    .string()
    .email()
    .max(100, MaxAndMinCharacters.email)
    .required(RequiredMensages.email),
  name: yup
    .string()
    .max(80, MaxAndMinCharacters.name)
    .required(RequiredMensages.name),
  phone: yup
    .string()
    .max(13, MaxAndMinCharacters.phone)
    .required(RequiredMensages.phone),
  picture: yup.string().required(RequiredMensages.picture),
  road: yup
    .string()
    .max(80, MaxAndMinCharacters.road)
    .required(RequiredMensages.road),
  suburb: yup
    .string()
    .max(80, MaxAndMinCharacters.suburb)
    .required(RequiredMensages.suburb),
});
