import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from 'react-router-dom';
import Login from './Login';
import CustomerList from './CustomerList';

const PrivateRoute = ({ children }) => {
	const token = localStorage.getItem('token');
	return token ? children : <Navigate to="/" />;
};

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route
					path="/customers"
					element={
						<PrivateRoute>
							<CustomerList />
						</PrivateRoute>
					}
				/>
			</Routes>
		</Router>
	);
}

export default App;
