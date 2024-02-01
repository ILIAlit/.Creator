import { useState } from 'react';

export const useFetch = (callback) => {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState('');

	const fetching = (...args) => {
		try {
			setIsLoading(true);
			callback(...args);
		} catch ({ response: { data } }) {
			setError(data.massage);
		} finally {
			setIsLoading(false);
		}
	};
	return [fetching, isLoading, error];
};
