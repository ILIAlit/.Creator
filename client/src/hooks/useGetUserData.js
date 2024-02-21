import { useContext, useState } from 'react'
import { Context } from '../context'

export const useGetUserData = selectValue => {
	const [myPublications, setMyPublications] = useState([])
	const [myFavorites, setMyFavorites] = useState([])
	const [myLikes, setMyLikes] = useState([])

	const [page, setPage] = useState(1)

	const { userActivityStore } = useContext(Context)

	const resetState = () => {
		setMyFavorites([])
		setMyPublications([])
		setMyLikes([])
	}

	const getUserData = async (selectValue, page) => {
		switch (selectValue) {
			case 'publications': {
				const publications = await userActivityStore.getUserPublications(page)
				setMyPublications([...myPublications, ...publications.data.rows])
				break
			}
			case 'favorites': {
				const favorites = await userActivityStore.getUserFavorites(page)
				setMyFavorites([...myFavorites, ...favorites.data.rows])
				break
			}
			case 'liked': {
				const likes = await userActivityStore.getUserLikes(page)
				setMyLikes([...myLikes, ...likes.data.rows])
				break
			}
			default: {
				break
			}
		}
		setPage(page + 1)
	}

	return { getUserData, resetState, page, myFavorites, myLikes, myPublications }
}
