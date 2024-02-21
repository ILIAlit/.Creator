import { useCallback, useContext, useEffect, useState } from 'react'
import { Context } from '../context'



export const useCheckIsSavePublication = (publicationId) => {
	const [isSave, setIsSave] = useState(false)
    const { favoriteStore } = useContext(Context)

    async function checkIsSave(publicationId) {
        const isSaveResponse = await favoriteStore.checkIsSave(publicationId)
        setIsSave(isSaveResponse)
    }

    const setIsSaveValue = useCallback((value) => {
        setIsSave(value)
    }, [])
	
    useEffect(() => {
        checkIsSave(publicationId)
    }, [publicationId])
    return { isSave, setIsSaveValue }
}