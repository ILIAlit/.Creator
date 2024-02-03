import React, { useContext, useEffect, useState } from 'react';
import { Box, Chip, Skeleton } from '@mui/material';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import { Context } from '../../context';
import Loader from '../UI/Loader';

export default function TagsBar() {
	const { tagStore } = useContext(Context);
	const { loading } = tagStore;
	const [popularTags, setPopularTags] = useState([]);

	async function getPopularTag() {
		const tags = await tagStore.getPupularTag();
		setPopularTags(tags);
	}

	useEffect(() => {
		getPopularTag();
	}, []);

	if (loading.isLoading) {
		return (
			<>
				<Skeleton animation="wave" height={80} width="80%" />
				<Skeleton animation="wave" height={80} width="70%" />
				<Skeleton animation="wave" height={80} width="40%" />
				<Skeleton animation="wave" height={80} width="70%" />
				<Skeleton animation="wave" height={80} width="50%" />
			</>
		);
	}

	return (
		<Tabs
			variant="scrollable"
			scrollButtons
			sx={{
				[`& .${tabsClasses.scrollButtons}`]: {
					'&.Mui-disabled': { opacity: 0.9 },
				},
				alignItems: 'center',
			}}
		>
			{popularTags.map((tag) => (
				<Chip label={tag.category} sx={{ m: 1, p: 3, fontSize: '16px' }} />
			))}
		</Tabs>
	);
}
