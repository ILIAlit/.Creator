import { useCallback, useContext, useEffect, useState } from 'react'
import { Context } from '../context'

export const useCheckIsLikePublication = publicationId => {
	const [isLike, setIsLike] = useState(false)
	const { likeStore } = useContext(Context)

	async function checkIsLike(publicationId) {
		const isLikeResponse = await likeStore.checkIsLike(publicationId)
		setIsLike(isLikeResponse)
	}

	const setIsLikeValue = useCallback((value) => {
		setIsLike(value)
	}, [])
	useEffect(() => {
		checkIsLike(publicationId)
	}, [publicationId])
	return { isLike, setIsLikeValue }
}
