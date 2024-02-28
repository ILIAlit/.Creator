import { yupResolver } from '@hookform/resolvers/yup'
import { Instagram, Telegram } from '@mui/icons-material'
import SaveIcon from '@mui/icons-material/Save'
import { LoadingButton } from '@mui/lab'
import { Box, Button } from '@mui/material'
import { observer } from 'mobx-react-lite'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { Context } from '../../context/index'
import ImageForm from '../UI/ImageForm'
import Input from '../UI/Input'
import InputMultiLine from '../UI/InputMultiLine'
import { validationSchema } from './validation'

const FormProfile = ({ onSave }) => {
	const { profileStore, alertStore } = useContext(Context)
	const { loading } = profileStore
	const {
		control,
		handleSubmit,
		register,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(validationSchema),
		defaultValues: {
			instagramLink: '',
			telegramLink: '',
			status: '',
			avatar: [],
		},
	})

	const onSubmit = async data => {
		try {
			const formData = new FormData()
			formData.append('instagramLink', data.instagramLink)
			formData.append('telegramLink', data.telegramLink)
			formData.append('status', data.status)
			formData.append('avatar', data.avatar[0])
			profileStore
				.updateProfile(formData)
				.then(res => {
					if (res.error) {
						alertStore.alertOpen(res.error, 'error')
					} else {
						alertStore.alertOpen('Изменения сохранены', 'success')
					}
				})
				.finally(() => onSave())
		} catch (error) {}
	}

	return (
		<Box
			fullWidth
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				maxWidth: 500,
			}}
			component='form'
			onSubmit={handleSubmit(onSubmit)}
		>
			<ImageForm
				register={register}
				name='avatar'
				variant='circle'
				width='160px'
				height='160px'
			/>
			<Box sx={{ mt: 2, width: '100%' }}>
				<Box sx={{ display: 'flex', alignItems: 'flex-end', mb: 2 }}>
					<InputMultiLine
						control={control}
						control={control}
						name='status'
						error={!!errors.status?.message}
						helperText={errors.status?.message}
						label='Статус'
						variant='outlined'
						id='status'
						type='text'
					/>
				</Box>
				<Box
					sx={{
						display: 'flex',
						flexDirection: { xs: 'column', sm: 'row' },
						gap: 2,
					}}
				>
					<Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
						<Instagram sx={{ color: 'action.active', mr: 1, my: 1.3 }} />
						<Input
							control={control}
							name='instagramLink'
							error={!!errors.instagramLink?.message}
							helperText={errors.instagramLink?.message}
							label='Инстаграм'
							variant='outlined'
							id='instagram'
							type='text'
						/>
					</Box>
					<Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
						<Telegram sx={{ color: 'action.active', mr: 1, my: 1.3 }} />
						<Input
							control={control}
							name='telegramLink'
							error={!!errors.telegramLink?.message}
							helperText={errors.telegramLink?.message}
							label='Телеграм'
							variant='outlined'
							id='telegram'
							type='text'
						/>
					</Box>
				</Box>
				<Box sx={{ display: 'flex', gap: 2 }}>
					<LoadingButton
						type='submit'
						fullWidth
						variant='contained'
						sx={{ mt: 5, mb: 3, fontSize: '16px' }}
						loadingPosition='start'
						startIcon={<SaveIcon />}
						loading={loading.isLoading}
					>
						Сохранить
					</LoadingButton>
					<Button
						onClick={() => onSave()}
						fullWidth
						sx={{ mt: 5, mb: 3, fontSize: '16px' }}
					>
						Отмена
					</Button>
				</Box>
			</Box>
		</Box>
	)
}

export default observer(FormProfile)
