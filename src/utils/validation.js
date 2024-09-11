import * as Yup from "yup";

export const signUpSchema = Yup.object({
  name: Yup.string()
    .required("Name is required")
    .matches(/^[a-zA-Z_ ]*$/, "No special characters allowed")
    .min(2, "Name must be between 2 and 16 characters")
    .max(16, "Name must be between 2 and 16 characters"),
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email adress"),
  status: Yup.string().max(64, "Status must be less than 64 characters"),
  password: Yup.string()
    .required("Password is required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
      "Password must contain atleast 6 characters, 1 uppercase, 1 lowercase, 1 number and 1 special character."
    ),
});

export const signInSchema = Yup.object({
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email adress"),
  status: Yup.string().max(64, "Status must be less than 64 characters"),
  password: Yup.string()
    .required("Password is required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
      "Password must contain atleast 6 characters, 1 uppercase, 1 lowercase, 1 number and 1 special character."
    ),
});

export const createPostSchema = Yup.object({
  title: Yup.string()
    .required("Titlul este obligatoriu")
    .matches(/^[a-zA-Z_ '-]*$/, "Fara caractere speciale")
    .min(10, "Titlul trebuie sa fie intre 10 si 64 de caractere")
    .max(64, "Titlul trebuie sa fie intre 10 si 64 de caractere"),
  content: Yup.string()
    .required("Descrierea este obligatorie")
    .min(340, "Descrierea trebuie sa fie intre 340 si 900 de caractere")
    .max(900, "Descrierea trebuie sa fie intre 340 si 900 de caractere"),
  country: Yup.string().required("Tara este obligatorie"),
  activity: Yup.string().required("Activitatea este obligatorie"),
  date: Yup.string().required("Data este obligatorie"),
  season: Yup.string().required("Anotimpul este obligatorie"),
  term: Yup.string().required("Durata este obligatorie"),
  price: Yup.string().required("Pretul este obligatorie"),
  transport: Yup.string().required("Transportul este obligatorie"),
});
export const createArticleSchema = Yup.object({
  title: Yup.string()
    .required("Titlul este obligatoriu")
    .matches(/^[a-zA-Z_ '-]*$/, "Fara caractere speciale")
    .min(10, "Titlul trebuie sa fie intre 10 si 64 de caractere")
    .max(64, "Titlul trebuie sa fie intre 10 si 64 de caractere"),
  content: Yup.string()
    .required("Descrierea este obligatorie")
    .min(340, "Descrierea trebuie sa fie intre 340 si 900 de caractere")
    .max(900, "Descrierea trebuie sa fie intre 340 si 900 de caractere"),
  country: Yup.string().required("Tara este obligatorie"),
  activity: Yup.string().required("Activitatea este obligatorie"),
  date: Yup.string().required("Data este obligatorie"),
  season: Yup.string().required("Anotimpul este obligatorie"),
});
