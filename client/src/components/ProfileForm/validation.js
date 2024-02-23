import * as yup from 'yup'

const instagramRegex = /https:\/\/www\.instagram\.com\/[a-zA-Z0-9_]+\/?/
const telegramRegex = /https:\/\/t\.me\/[a-zA-Z0-9_]+/

export const validationSchema = yup
	.object()
	.shape({
		instagramLink: yup
			.string()
			.matches(instagramRegex, {
				message: 'Введите корректную ссылку!',
				excludeEmptyString: true,
			})
			.nullable(),
		telegramLink: yup
			.string()
			.matches(telegramRegex, {
				message: 'Введите корректную ссылку!',
				excludeEmptyString: true,
			})
			.nullable(),
		status: yup.string().max(150, 'Максимальная длинная 150 символов!'),
	})
	.required()
