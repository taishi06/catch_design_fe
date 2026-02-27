const API_BASE = `${import.meta.env.VITE_API_URL}/api`;

export const loginRequest = async (email, password) => {
	const response = await fetch(`${API_BASE}/login`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ email, password }),
	});

	if (!response.ok) {
		throw new Error('Invalid credentials');
	}

	return response.json();
};

export const fetchCustomers = async (token, page = 1, per_page = 10) => {
	const response = await fetch(
		`${API_BASE}/customers?page=${page}&per_page=${per_page}`,
		{
			headers: {
				Authorization: `Bearer ${token}`,
			},
		},
	);

	if (!response.ok) {
		throw new Error('Failed to fetch customers');
	}

	return response.json();
};

export const logout = async () => {
	const response = await fetch(`${API_BASE}/logout`, {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${localStorage.getItem('token')}`,
		},
	});

	if (!response.ok) {
		throw new Error('Failed to logout');
	}

	localStorage.removeItem('token');

	return response.json;
};
