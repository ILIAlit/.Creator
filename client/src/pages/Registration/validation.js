import * as yup from "yup"

const nameRegex = /[A-Za-z0-9]/g;
const passwordRegex = /^(?=.*[^a-zA-Z0-9])(?=.*[a-z])(?=.*[A-Z]).+$/;

export const validationShema = yup.object().shape(
  {
    name: yup.string().required('Заполните поле!').matches(nameRegex, 'Имя должно содержать латинские буквы!').min(6, 'Минимальная длинна 6 символов'),
    email: yup.string().required('Заполните поле!').email('Некоректный email!'),
    password: yup.string().required('Заполните поле!').min(6, 'Минимальная длинна 6 символов').matches(passwordRegex, 'Пароль должен содержать хотя бы одну строчную и заглавную букву, а также специальный символ'),
    confirmpassword: yup.string().required('Заполните поле!').oneOf([yup.ref('password')], 'Повторите пароль'),
  }
).required(); 