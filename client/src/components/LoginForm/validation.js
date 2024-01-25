import * as yup from "yup"

export const validationShema = yup.object().shape({
  name: yup.string().required('Заполните поле!'),
  password: yup.string().required('Заполните поле!'),
}).required();