import { useState } from 'react';
import UserCard from '../components/UserCard';
import styles from '../styles/Home.module.css';

export default function Home({ users }) {
  const [search, setSearch] = useState('');

  const filteredUsers =
    search.length > 0
      ? users.filter((user) =>
          user.name.toLowerCase().includes(search.toLowerCase())
        )
      : users;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>User Dashboard</h1>

      <input
        className={styles.searchBox}
        type="text"
        placeholder="Search User"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredUsers.length > 0 ? (
        <div className={styles.grid}>
          {filteredUsers.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      ) : (
        <p className={styles.noResults}>No users found</p>
      )}
    </div>
  );
}

// SSR Function — runs on every request on the server
export async function getServerSideProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await res.json();

  return {
    props: {
      users,
    },
  };
}
