import {
	Box,
	Container,
	CssBaseline,
	ImageList,
	Pagination,
	ThemeProvider,
	Typography,
	createTheme,
} from '@mui/material';
import { observer } from 'mobx-react-lite';

import ImageItem from '../../components/UI/ImageItem';
import { createRef, useContext, useEffect, useRef, useState } from 'react';
import { Context } from '../../context/index';
import Loader from '../../components/UI/Loader';
import MySelect from '../../components/UI/MySelect';

const defaultTheme = createTheme();

const Home = () => {
	const { publicationStore } = useContext(Context);
	const { loading, totalPages } = publicationStore;

	const [publications, setPublications] = useState([]);

	const [page, setPage] = useState(1);
	const [tagFitter, setTagFilter] = useState(null);

	const lastElement = createRef();
	const observerLoader = useRef();
	const actionInSight = (entries) => {
		if (entries[0].isIntersecting && page <= totalPages) {
			getPublications();
		}
	};

	useEffect(() => {
		if (observerLoader.current) {
			observerLoader.current.disconnect();
		}

		observerLoader.current = new IntersectionObserver(actionInSight);
		if (lastElement.current) {
			observerLoader.current.observe(lastElement.current);
		}
	}, [lastElement]);

	useEffect(() => {
		getPublications();
	}, []);

	async function getPublications() {
		const response = await publicationStore.getPublications(tagFitter, page);
		setPublications([...publications, ...response.data.rows]);
		setPage(page + 1);
	}

	console.log(lastElement);

	return (
		<ThemeProvider theme={defaultTheme}>
			<CssBaseline />
			<Box
				sx={{
					pt: 4,
					pb: 5,
				}}
			>
				<Container component="main" maxWidth="sm">
					<Typography
						component="h1"
						variant="h2"
						align="center"
						color="textPrimary"
						gutterBottom
					>
						Библиотека
					</Typography>
				</Container>
			</Box>
			<Container maxWidth="xl">
				<MySelect
					options={[
						{ value: 1, text: 'дизайн' },
						{ value: 2, text: 'фото' },
					]}
					value={tagFitter}
					onChange={setTagFilter}
					label="Тег"
				/>
			</Container>
			<Container maxWidth="xl">
				<ImageList variant="quilted" cols={3} gap={9}>
					{publications.map((item, index) => {
						if (index + 1 === publications.length) {
							return (
								<ImageItem
									ref={lastElement}
									key={item.id}
									title={item.title}
									image={item.image}
									author="Автор"
								/>
							);
						}
						return (
							<ImageItem
								key={item.id}
								title={item.title}
								image={item.image}
								author="Автор"
							/>
						);
					})}
				</ImageList>
				{loading.isLoading && <Loader />}
			</Container>
		</ThemeProvider>
	);
};

export default observer(Home);
