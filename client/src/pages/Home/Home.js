import {
	Box,
	Container,
	CssBaseline,
	Grid,
	ThemeProvider,
	Typography,
	createTheme,
} from '@mui/material'
import { observer } from 'mobx-react-lite'

import { createRef, useContext, useEffect, useState } from 'react'
import PublicationSort from '../../components/PublicationSort/PublicationSort'
import Loader from '../../components/UI/Loader'
import MyPublicationsList from '../../components/UI/MyPublicationsList'
import { Context } from '../../context/index'
import { useObserver } from '../../hooks/useObserver'

const defaultTheme = createTheme()

const Home = () => {
	const { publicationStore } = useContext(Context)
	const { loading, totalPages } = publicationStore

	const [publications, setPublications] = useState([])

	const [page, setPage] = useState(1)
	const [sort, setSort] = useState({ tagId: '', orderBy: '' })

	const lastElement = createRef()

	useObserver(lastElement, page <= totalPages, () => {
		getPublications(page, sort)
	})

	async function getPublications(page, sort) {
		const response = await publicationStore.getPublications(sort, page)
		setPublications([...publications, ...response.data.rows])
		setPage(page + 1)
	}

	async function getSortedPublications(page, sort) {
		const response = await publicationStore.getPublications(sort, page)
		setPublications([...response.data.rows])
		setPage(page + 1)
	}

	useEffect(() => {
		getPublications(page, sort)
	}, [])

	useEffect(() => {
		setPublications([])
		getSortedPublications(1, sort)
	}, [sort])

	console.log('Publications', publications)

	return (
		<ThemeProvider theme={defaultTheme}>
			<Grid>
				<CssBaseline />
				<Box sx={{ m: 3, mb: 10, mt: 7 }}>
					<Container component='main' maxWidth='sm'>
						<Typography
							component='h1'
							variant='h2'
							fontSize={{ lg: 55, xs: 50 }}
							align='center'
							color='textPrimary'
							gutterBottom
						>
							Библиотека
						</Typography>
					</Container>
				</Box>
				<Container
					maxWidth='xl'
					sx={{
						display: 'flex',
						justifyContent: 'space-between',
						gap: 3,
						alignItems: 'center',
						mb: 3,
					}}
				>
					<PublicationSort sort={sort} setSort={setSort} />
				</Container>
				<Container sx={{ mb: 6 }} maxWidth='xl'>
					<MyPublicationsList
						publications={publications}
						lastElement={lastElement}
					/>
					{loading.isLoading && <Loader />}
				</Container>
			</Grid>
		</ThemeProvider>
	)
}

export default observer(Home)
