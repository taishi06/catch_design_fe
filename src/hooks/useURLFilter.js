import { useSearchParams } from 'react-router-dom';

export function useURLFilter() {
	const [searchParams] = useSearchParams();

	const page = searchParams.get('page');
	const perPage =
		searchParams.get('per_page') || import.meta.env.VITE_DEFAULT_PER_PAGE;

	return [page, perPage];
}
