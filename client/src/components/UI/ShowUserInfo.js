import { Avatar, Box, Grid, Typography } from '@mui/material'
import React from 'react'
import EmailLinkIcon from '../UI/EmailLinkIcon'
import InstagramLinkIcon from '../UI/InstagramLinkIcon'
import TelegramLinkIcon from '../UI/TelegramLinkIcon'

export default function ShowUserInfo({
	avatar,
	name,
	status,
	telegramLink,
	instagramLink,
	email,
}) {
	return (
		<Box sx={{ display: 'flex' }}>
			<Avatar
				sx={{ width: 120, height: 120 }}
				src={avatar}
				size='large'
				variant='circle'
			>
				{name[0]}
			</Avatar>
			<Box className='profile__preview-content-block' maxWidth='xs'>
				<Typography variant='h3' fontSize='28px' gutterBottom>
					{name}
				</Typography>
				{status && (
					<Grid item>
						<Typography fontSize='16px' gutterBottom sx={{ maxWidth: '24ch' }}>
							{status}
						</Typography>
					</Grid>
				)}

				<Box sx={{ display: 'flex', gap: 2 }}>
					{instagramLink && <InstagramLinkIcon link={instagramLink} />}
					{telegramLink && <TelegramLinkIcon link={telegramLink} />}
					{email && <EmailLinkIcon link={email} />}
				</Box>
			</Box>
		</Box>
	)
}
