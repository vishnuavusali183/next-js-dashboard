import styles from '../styles/UserCard.module.css';

export default function UserCard({ user }) {
  const initials = user.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .substring(0, 2)
    .toUpperCase();

  return (
    <div className={styles.card}>
      <div className={styles.avatar}>{initials}</div>
      <p className={styles.name}>{user.name}</p>
      <p className={styles.info}>
        <span className={styles.label}>Email:</span> {user.email}
      </p>
      <p className={styles.info}>
        <span className={styles.label}>Company:</span> {user.company.name}
      </p>
      <p className={styles.info}>
        <span className={styles.label}>City:</span> {user.address.city}
      </p>
    </div>
  );
}
