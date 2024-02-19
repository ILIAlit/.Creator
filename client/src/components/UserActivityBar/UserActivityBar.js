import { TabPanel } from '@mui/lab'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import { Box, Tab } from '@mui/material'
import React, { useContext, useState } from 'react'
import { Context } from '../../context'
import '../../style/profile.css'

export default function UserActivityBar() {
	const [selectValue, setSelectValue] = useState('publications')
	const { profileStore, publicationStore, favoriteStore, likeStore } =
		useContext(Context)

	const handleChange = (event, newValue) => {
		setSelectValue(newValue)
		getUserData(newValue)
	}

	const getUserData = async selectValue => {
		switch (selectValue) {
			case 'publications': {
				const publications = await publicationStore.getUserPublications()
				break
			}
			case 'favorites': {
				const favorites = await favoriteStore.getUserSaved()
				break
			}
			case 'liked': {
				const likes = await likeStore.getUserLiked()
				break
			}
			default: {
				break
			}
		}
	}

	return (
		<TabContext value={selectValue}>
			<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
				<TabList onChange={handleChange} aria-label='lab API tabs example'>
					<Tab
						sx={{ fontSize: '19px' }}
						label='Мои публикации'
						value={'publications'}
					/>
					<Tab
						sx={{ fontSize: '19px' }}
						label='Избранный'
						value={'favorites'}
					/>
					<Tab
						sx={{ fontSize: '19px' }}
						label='Отметка нравится'
						value={'liked'}
					/>
				</TabList>
			</Box>
			<TabPanel value={'publications'}>Item One</TabPanel>
			<TabPanel value={'favorites'}>Item Two</TabPanel>
			<TabPanel value={'liked'}>Item Three</TabPanel>
		</TabContext>
	)
}
