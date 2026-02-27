import styles from './Customer.module.css';

function Customer({ customer }) {
	return (
		<div className={styles.customerCard}>
			<div className={styles.cardHeader}>
				<h3>
					{customer.first_name} {customer.last_name}
				</h3>
				<span className={styles.title}>{customer.title}</span>
			</div>

			<div className={styles.cardBody}>
				<div className={styles.row}>
					<span className={styles.label}>Email:</span>
					<span>{customer.email}</span>
				</div>

				<div className={styles.row}>
					<span className={styles.label}>Gender:</span>
					<span>{customer.gender}</span>
				</div>

				<div className={styles.row}>
					<span className={styles.label}>IP Address:</span>
					<span>{customer.ip_address}</span>
				</div>

				<div className={styles.row}>
					<span className={styles.label}>Company:</span>
					<span>{customer.company}</span>
				</div>

				<div className={styles.row}>
					<span className={styles.label}>City:</span>
					<span>{customer.city}</span>
				</div>

				{customer.website.length > 0 && (
					<div className={styles.row}>
						<span className={styles.label}>Website:</span>
						<a
							href={customer.website}
							target="_blank"
							rel="noopener noreferrer"
							className={styles.websiteLink}
						>
							Visit Site
						</a>
					</div>
				)}
			</div>
		</div>
	);
}

export default Customer;
