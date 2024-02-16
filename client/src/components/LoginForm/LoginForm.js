import { yupResolver } from '@hookform/resolvers/yup'
import { Box, Grid } from '@mui/material'
import { observer } from 'mobx-react-lite'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import Input from '../../components/UI/Input'
import { Context } from '../../context/index'
import { HOME_ROUTE, REGISTRATION_ROUTE } from '../../utils/consts'
import { validationShema } from './validation'

import React from 'react'
import AuthPageLink from '../UI/AuthPageLink'
import LoadButton from '../UI/LoadButton'

export default observer(function LoginForm() {
	const navigate = useNavigate()
	const { userStore, alertStore } = useContext(Context)
	const { loading } = userStore

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(validationShema),
	})

	const onSubmit = async ({ name, password }) => {
		userStore.login(name, password).then(res => {
			if (res.error) {
				alertStore.alertOpen(res.error, 'error')
			} else {
				navigate(HOME_ROUTE)
				alertStore.alertOpen('Успешная авторизация', 'success')
			}
		})
	}

	return (
		<Box component='form' onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3 }}>
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
			</Grid>
			<LoadButton isLoad={loading.isLoading} ButtonText='Войти' />
			<AuthPageLink
				route={REGISTRATION_ROUTE}
				linkText='У тебя нет аккаунта? Пройди регистрацию!'
			/>
		</Box>
	)
})
