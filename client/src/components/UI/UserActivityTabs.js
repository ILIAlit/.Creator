import TabList from '@mui/lab/TabList'
import { Tab } from '@mui/material'
import React from 'react'
import '../../style/profile.css'

export default function UserActivityTabs({ onChange }) {
	return (
		<TabList onChange={onChange} aria-label='lab API tabs example'>
			<Tab
				sx={{ fontSize: '19px' }}
				label='Мои публикации'
				value={'publications'}
			/>
			<Tab sx={{ fontSize: '19px' }} label='Избранный' value={'favorites'} />
			<Tab sx={{ fontSize: '19px' }} label='Отметка нравится' value={'liked'} />
		</TabList>
	)
}
