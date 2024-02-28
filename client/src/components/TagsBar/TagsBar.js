import { Box, Grid, Skeleton, Tab } from '@mui/material'
import Tabs, { tabsClasses } from '@mui/material/Tabs'
import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../../context'

export default function TagsBar({ value, onChange }) {
	const { tagStore } = useContext(Context)
	const { loading } = tagStore
	const [popularTags, setPopularTags] = useState([])

	async function getPopularTag() {
		const tags = await tagStore.getPupularTag()
		setPopularTags(tags)
	}

	useEffect(() => {
		getPopularTag()
	}, [])

	if (loading.isLoading) {
		return (
			<Box sx={{ display: 'flex', gap: 1 }}>
				<Skeleton animation='wave' height={80} width='80%' />
				<Skeleton animation='wave' height={80} width='70%' />
				<Skeleton animation='wave' height={80} width='40%' />
				<Skeleton animation='wave' height={80} width='70%' />
				<Skeleton animation='wave' height={80} width='50%' />
			</Box>
		)
	}

	return (
		<Tabs
			value={value}
			onChange={onChange}
			variant='scrollable'
			scrollButtons
			sx={{
				[`& .${tabsClasses.scrollButtons}`]: {
					'&.Mui-disabled': { opacity: 0.9 },
				},
			}}
		>
			<Tab
				value=''
				label='По умолчанию'
				sx={{
					m: 0.5,
					p: 1,
					fontSize: '15px',
				}}
			/>
			{popularTags.map(tag => (
				<Tab
					key={tag.id}
					value={tag.id}
					label={tag.category}
					sx={{
						m: 0.5,
						p: 1,
						fontSize: '15px',
					}}
				/>
			))}
		</Tabs>
	)
}
