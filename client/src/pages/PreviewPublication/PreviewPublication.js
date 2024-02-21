import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import { observer } from 'mobx-react-lite'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PublicationPreviewCard from '../../components/UI/PublicationPreviewCard'
import { Context } from '../../context'

const defaultTheme = createTheme()

export default observer(function PreviewPublication() {
	const [publication, setPublication] = useState({})
	const { image, title, description, likeCount, user } = publication
	const  name = user?.name
	const { publicationStore } = useContext(Context)

	const params = useParams()
	const publicationId = params.id

	useEffect(() => {
		getOnePublication(publicationId)
	}, [])

	async function getOnePublication(publicationId) {
		const publication = await publicationStore.getOnePublication(publicationId)
		console.log(publication)
		setPublication(publication)
	}

	return (
		<ThemeProvider theme={defaultTheme}>
			<CssBaseline />
			<PublicationPreviewCard
				publicationId={publicationId}
				image={image}
				name={name}
				title={title}
				description={description}
				likeCount={likeCount}
			/>
		</ThemeProvider>
	)
})
