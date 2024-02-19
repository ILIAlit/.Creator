import { Instagram, Telegram } from '@mui/icons-material'
import { Avatar, Box, Button, Link, Typography } from '@mui/material'

const ProfilePreview = ({
	onClick,
	telegramLink,
	instagramLink,
	status,
	avatar,
	name,
}) => {
	return (
		<Box
			sx={{
				m: 3,
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
			}}
			component='form'
		>
			<Box sx={{ display: 'flex' }}>
				<Avatar
					sx={{ width: 120, height: 120 }}
					src={avatar}
					size='large'
					variant='circle'
				>
					{name[0]}
				</Avatar>
				<Box
					justifyContent='center'
					textAlign='center'
					maxWidth='xs'
					sx={{
						ml: 4,
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'flex-start',
					}}
				>
					<Typography variant='h3' fontSize='28px' gutterBottom>
						{name}
					</Typography>
					{status && (
						<Typography fontSize='16px' gutterBottom sx={{ maxWidth: '24ch' }}>
							{status}
						</Typography>
					)}

					<Box sx={{ display: 'flex', gap: 5 }}>
						{instagramLink && (
							<Box
								sx={{
									display: 'flex',
									alignItems: 'center',
								}}
							>
								<Instagram sx={{ color: 'action.active', mr: 1, my: 1.3 }} />
								<Link href={instagramLink}>Инстаграм</Link>
							</Box>
						)}
						{telegramLink && (
							<Box
								sx={{
									display: 'flex',
									alignItems: 'center',
								}}
							>
								<Telegram sx={{ color: 'action.active', mr: 1, my: 1.3 }} />
								<Link href={telegramLink}>Телеграм</Link>
							</Box>
						)}
					</Box>
				</Box>
			</Box>
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
