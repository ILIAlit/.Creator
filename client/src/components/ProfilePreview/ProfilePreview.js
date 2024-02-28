import { Box, Button } from '@mui/material'
import ShowUserInfo from '../UI/ShowUserInfo'

const ProfilePreview = ({
	onClick,
	telegramLink,
	instagramLink,
	status,
	email,
	avatar,
	name,
}) => {
	return (
		<Box className='profile__preview-block'>
			<ShowUserInfo
				avatar={avatar}
				name={name}
				status={status}
				telegramLink={telegramLink}
				instagramLink={instagramLink}
				email={email}
			/>
			<Button
				onClick={() => onClick()}
				fullWidth
				variant='contained'
				sx={{ mt: 5, mb: 3, fontSize: '16px' }}
			>
				Изменить
			</Button>
		</Box>
	)
}

export default ProfilePreview
