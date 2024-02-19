import { Box, Paper } from '@mui/material'
import { observer } from 'mobx-react-lite'
import React, { useContext, useEffect, useState } from 'react'
import ProfileCreateForm from '../../components/ProfileForm/ProfileCreateForm'
import ProfilePreview from '../../components/ProfilePreview/ProfilePreview'
import { Context } from '../../context'
import '../../style/profile.css'
import Loader from './Loader'

export default observer(function UserProfileInfo({ name }) {
	const { profileStore, alertStore } = useContext(Context)
	const { profile, isProfile, loading } = profileStore
	const { avatar, instagramLink, telegramLink, status } = profile
	const [previewVisible, setPreviewVisible] = useState(true)

	useEffect(() => {
		profileStore.getProfile().then(res => console.log(res))
		// if (!isProfile) {
		// 	alertStore.alertOpen('Заполните профиль', 'info')
		// }
	}, [])

	const onClosePreview = () => {
		setPreviewVisible(false)
	}

	const onCloseSave = () => {
		setPreviewVisible(true)
	}

	if (loading.isLoading) {
		return <Loader />
	}

	return (
		<Box className='profile__user-info-block'>
			<Paper elevation={3} sx={{ p: 2 }}>
				{previewVisible ? (
					<ProfilePreview
						name={name}
						avatar={avatar}
						status={status}
						telegramLink={telegramLink}
						instagramLink={instagramLink}
						onClick={onClosePreview}
					/>
				) : (
					<ProfileCreateForm onSave={onCloseSave} />
				)}
			</Paper>
		</Box>
	)
})
