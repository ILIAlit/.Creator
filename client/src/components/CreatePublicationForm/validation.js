import * as yup from 'yup'

export const schema = yup
	.object()
	.shape({
		title: yup.string().required('Заполните поле'),
		description: yup.string(),
	})
	.required()
