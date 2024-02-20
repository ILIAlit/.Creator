import { TabPanel } from '@mui/lab'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import { Box, Tab } from '@mui/material'
import React, { createRef, useContext, useEffect, useState } from 'react'
import { Context } from '../../context'
import '../../style/profile.css'
import MyPublicationsList from '../UI/MyPublicationsList'

export default function UserActivityBar() {
	const [myPublications, setMyPublications] = useState([])
	const [myFavorites, setMyFavorites] = useState([])
	const [myLikes, setMyLikes] = useState([])

	const [selectValue, setSelectValue] = useState('publications')
	const { publicationStore, favoriteStore, likeStore } =
		useContext(Context)
	const { loading: publicationLoad } = publicationStore
	const { loading: favoriteLoad } = favoriteStore
	const { loading: likeLoad } = likeStore

	const [page, setPage] = useState(1)
	const lastElement = createRef()

	const handleChange = (event, newValue) => {
		setSelectValue(newValue)
		getUserData(newValue)
	}

	useEffect(() => {
		getUserData(selectValue)
	}, [])

	const getUserData = async selectValue => {
		switch (selectValue) {
			case 'publications': {
				const publications = await publicationStore.getUserPublications()
				setMyPublications([...publications.data.rows])
				break
			}
			case 'favorites': {
				const favorites = await favoriteStore.getUserFavorites()
				setMyFavorites([...favorites.data.rows])
				break
			}
			case 'liked': {
				const likes = await likeStore.getUserLikes()
				setMyLikes([...likes.data.rows])
				break
			}
			default: {
				break
			}
		}
	}

	return (
		<TabContext value={selectValue}>
			<Box
				sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
			>
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
				<TabPanel value={'publications'}>
					<MyPublicationsList
						publications={myPublications}
						isLoading={publicationLoad.isLoading}
					/>
				</TabPanel>
				<TabPanel value={'favorites'}>
					<MyPublicationsList
						publications={myFavorites}
						isLoading={favoriteLoad.isLoading}
					/>
				</TabPanel>
				<TabPanel value={'liked'}>
					<MyPublicationsList
						publications={myLikes}
						isLoading={likeLoad.isLoading}
					/>
				</TabPanel>
			</Box>
		</TabContext>
	)
}
