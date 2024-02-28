import { TabPanel } from '@mui/lab'
import TabContext from '@mui/lab/TabContext'
import { Box } from '@mui/material'
import React, { createRef, useContext, useEffect, useState } from 'react'
import { Context } from '../../context'
import { useGetUserData } from '../../hooks/useGetUserData'
import { useObserver } from '../../hooks/useObserver'
import '../../style/profile.css'
import MyPublicationsList from '../UI/MyPublicationsList'
import UserActivityTabs from '../UI/UserActivityTabs'

export default function UserActivityBar() {
	const [selectValue, setSelectValue] = useState('publications')
	const { userActivityStore } = useContext(Context)
	const { loading, totalPages } = userActivityStore

	const {
		getUserData,
		resetState,
		page,
		myFavorites,
		myLikes,
		myPublications,
	} = useGetUserData(selectValue)

	const lastElement = createRef()

	useObserver(lastElement, page <= totalPages, () => {
		getUserData(selectValue, page)
	})

	const handleChange = (event, newValue) => {
		resetState()
		setSelectValue(newValue)
		getUserData(newValue, 1)
	}

	useEffect(() => {
		getUserData(selectValue, page)
	}, [])

	return (
		<TabContext value={selectValue}>
			<Box
				sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
			>
				<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
					<UserActivityTabs onChange={handleChange} />
				</Box>
				<TabPanel sx={{ p: 0 }} value={'publications'}>
					<MyPublicationsList
						publications={myPublications}
						isLoading={loading.isLoading}
						lastElement={lastElement}
					/>
				</TabPanel>
				<TabPanel sx={{ p: 0 }} value={'favorites'}>
					<MyPublicationsList
						publications={myFavorites}
						isLoading={loading.isLoading}
						lastElement={lastElement}
					/>
				</TabPanel>
				<TabPanel sx={{ p: 0 }} value={'liked'}>
					<MyPublicationsList
						publications={myLikes}
						isLoading={loading.isLoading}
						lastElement={lastElement}
					/>
				</TabPanel>
			</Box>
		</TabContext>
	)
}
