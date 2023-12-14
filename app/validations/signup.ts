import * as yup from "yup"

const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
const phoneRegex = /^[0-9]{11}$/


export const signUpSchema = yup.object().shape({
  email: yup.string().matches(emailRegex, "Invalid email format").required("Email is required."),
  password: yup.string().min(8).required("Password is required."),
  confirmPassword: yup.string()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required('Please confirm your password'),
    phone: yup.string()
    .matches(/^[0-9]+$/, 'Phone number must contain only numbers')
    .min(11, 'Phone number must be at least 11 digits')
    .required('Phone number is required'),


})