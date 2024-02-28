import { yupResolver } from '@hookform/resolvers/yup'
import { Button, Grid } from '@mui/material'
import { observer } from 'mobx-react-lite'
import { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { Context } from '../../context/index'
import { HOME_ROUTE } from '../../utils/consts'
import BackdropLoader from '../UI/BackdropLoader'
import ImageForm from '../UI/ImageForm'
import Input from '../UI/Input'
import InputMultiLine from '../UI/InputMultiLine'
import TagSelect from '../UI/TagSelect'
import { schema } from './validation'

const CreatePublicationForm = () => {
	const navigate = useNavigate()
	const [publTag, setPublTag] = useState([])
	const { publicationStore, alertStore } = useContext(Context)
	const { loading } = publicationStore

	const {
		control,
		handleSubmit,
		register,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
		defaultValues: {
			title: '',
			description: '',
			link: '',
			publTag,
			image: '',
		},
	})

	const onSubmit = data => {
		data.tags = publTag
		const formData = new FormData()
		formData.append('title', data.title)
		formData.append('description', data.description)
		formData.append('image', data.image[0])
		formData.append('link', data.link)
		formData.append('tags', JSON.stringify(publTag))
		if (data.image[0]) {
			publicationStore.createPublication(formData).then(res => {
				if (res.error) {
					alertStore.alertOpen(res.error, 'error')
				} else {
					navigate(HOME_ROUTE)
					alertStore.alertOpen('Публикация создана', 'success')
				}
			})
		} else {
			alertStore.alertOpen('Выберите файл!', 'warning')
		}
	}

	return (
		<Grid
			onSubmit={handleSubmit(onSubmit)}
			sx={{ justifyContent: 'center' }}
			component='form'
			container
			spacing={5}
		>
			<Grid
				sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
				item
			>
				<ImageForm
					name='image'
					variant='square'
					register={register}
					width='300px'
					height='300px'
				/>
			</Grid>
			<Grid sx={{ justifyContent: 'center' }} xs={12} item sm container>
				<Grid container spacing={1}>
					<Grid item xs={12}>
						<Input
							id='title'
							type='text'
							label='Название'
							name='title'
							error={!!errors.title?.message}
							helperText={errors.title?.message}
							control={control}
						/>
					</Grid>
					<Grid item xs={12}>
						<InputMultiLine
							id='description'
							type='text'
							label='Описание'
							control={control}
							name='description'
							error={!!errors.description?.message}
							helperText={errors.description?.message}
						/>
					</Grid>
					<Grid item xs={12}>
						<InputMultiLine
							id='link'
							type='text'
							label='Ссылка'
							control={control}
							name='link'
							error={!!errors.description?.message}
							helperText={errors.description?.message}
						/>
					</Grid>
					<Grid item xs={12}>
						<TagSelect publTag={publTag} setPublTag={setPublTag} />
					</Grid>
				</Grid>
				<Button
					type='submit'
					sx={{ width: '250px', height: '50px', mt: 5 }}
					fullWidth
					variant='contained'
				>
					Сохранить
				</Button>
			</Grid>
			<BackdropLoader isOpen={loading.isLoading} />
		</Grid>
	)
}

export default observer(CreatePublicationForm)
