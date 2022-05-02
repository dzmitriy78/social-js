import * as Yup from "yup";

export const loginFormSchema = Yup.object().shape({
    email: Yup.string()
        .email(),
    password: Yup.string()
        .min(8, "Must be longer than 8 characters")
        .required("Required")
})
export const postFormSchema = Yup.object().shape({
    text: Yup.string()
        //минимальная длина - 2 символа
        .min(2, "Must be longer than 2 characters")
        //максимальная длина - 20 символов
        .max(50, "Must be shorter than 50 characters")
        .required("Required")
})