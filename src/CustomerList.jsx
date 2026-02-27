import { useEffect, useState } from 'react';
import { fetchCustomers } from './api';
import Logout from './Logout';
import { useURLFilter } from './hooks/useURLFilter';
import Customer from './Customer';
import styles from './CustomerList.module.css';

function CustomerList() {
	const [customers, setCustomers] = useState([]);
	const [page, setPage] = useState(1);
	const [limit, setLimit] = useState(import.meta.env.VITE_PER_PAGE || 10);
	const [lastPage, setLastPage] = useState(1);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');

	// custom hook
	const [urlPage, urlPerPage] = useURLFilter();

	const token = localStorage.getItem('token');

	const loadCustomers = async (pageNumber) => {
		setLoading(true);
		setError('');
		if (urlPerPage) {
			setLimit(urlPerPage);
		}

		try {
			const data = await fetchCustomers(token, pageNumber, limit);
			setCustomers(data.data);
			setPage(data.pagination.current_page);
			setLastPage(data.pagination.last_page);
		} catch (err) {
			setError(err.message);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		if (urlPage) {
			setPage(urlPage);
		}

		loadCustomers(page);
	}, []);

	return (
		<div>
			<h2>Customers List</h2>
			<Logout />

			{loading && <p>Loading customers...</p>}
			{error && <p style={{ color: 'red' }}>{error}</p>}

			<div className={styles.customerList}>
				{customers.map((customer) => (
					<Customer key={customer.id} customer={customer} />
				))}
			</div>

			<div>
				<button
					disabled={page <= 1}
					onClick={() => loadCustomers(page - 1)}
				>
					Previous
				</button>

				<span>
					Page {page} of {lastPage}
				</span>

				<button
					disabled={page >= lastPage}
					onClick={() => loadCustomers(page + 1)}
				>
					Next
				</button>
			</div>
		</div>
	);
}

export default CustomerList;
