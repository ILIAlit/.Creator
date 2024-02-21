import { yupResolver } from '@hookform/resolvers/yup'
import { Box, Grid } from '@mui/material'
import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { Context } from '../../context/index'
import { HOME_ROUTE, LOGIN_ROUTE } from '../../utils/consts'
import AuthPageLink from '../UI/AuthPageLink'
import Input from '../UI/Input'
import LoadButton from '../UI/LoadButton'
import { validationShema } from './validation'

export default observer(function RegistrationForm() {
	const navigate = useNavigate()
	const { userStore, alertStore } = useContext(Context)
	const { loading } = userStore

	const {
		control,
		formState: { errors },
		handleSubmit,
	} = useForm({
		resolver: yupResolver(validationShema),
	})

	const onSubmit = ({ name, email, password }) => {
		userStore.registration(name, email, password).then(res => {
			if (res.error) {
				alertStore.alertOpen(res.error, 'error')
			} else {
				navigate(HOME_ROUTE)
				alertStore.alertOpen('Успешная регистрация', 'success')
			}
		})
	}

	return (
		<Box
			component='form'
			onSubmit={handleSubmit(onSubmit)}
			sx={{ mt: 3, mb: 10 }}
		>
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<Input
						id='name'
						control={control}
						name='name'
						label='Имя'
						variant='outlined'
						type='text'
						error={!!errors.name?.message}
						helperText={errors.name?.message}
					/>
				</Grid>
				<Grid item xs={12}>
					<Input
						id='email'
						control={control}
						name='email'
						label='Почта'
						variant='outlined'
						type='text'
						error={!!errors.email?.message}
						helperText={errors.email?.message}
					/>
				</Grid>
				<Grid item xs={12}>
					<Input
						id='password'
						control={control}
						name='password'
						label='Пароль'
						variant='outlined'
						type='password'
						error={!!errors.password?.message}
						helperText={errors.password?.message}
					/>
				</Grid>
				<Grid item xs={12}>
					<Input
						id='confirmpassword'
						control={control}
						name='confirmpassword'
						label='Повторите пароль'
						variant='outlined'
						type='password'
						error={!!errors.confirmpassword?.message}
						helperText={errors.confirmpassword?.message}
					/>
				</Grid>
			</Grid>
			<LoadButton isLoad={loading.isLoading} ButtonText='Создать' />
			<AuthPageLink
				route={LOGIN_ROUTE}
				linkText='У тебя есть аккаунт? Авторизуйся!'
			/>
		</Box>
	)
})
