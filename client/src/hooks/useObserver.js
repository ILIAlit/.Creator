import { useEffect, useRef } from 'react';

export const useObserver = (ref, canLoad, callback) => {
	const observerLoader = useRef();
	useEffect(() => {
		if (observerLoader.current) {
			observerLoader.current.disconnect();
		}
		function actionInSight(entries, observer) {
			if (entries[0].isIntersecting && canLoad) {
				callback();
			}
		}
		observerLoader.current = new IntersectionObserver(actionInSight);
		if (ref.current) {
			observerLoader.current.observe(ref.current);
		}
	}, [ref]);
};
