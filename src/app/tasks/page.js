import styles from "../page.module.css";
import { kv } from '@vercel/kv';
import { unstable_cache } from 'next/cache';

export function getUser() {
  return kv.hgetall('user:me');
}

const getCachedUser = unstable_cache(
  async () => getUser(),
  ['my-app-user'],
  { tags: ['user'] }
);

export default async function Tasks() {
  const user = await getCachedUser();
  // const userJson = await NextResponse.json(user);
  console.log('user: ', user);

  return (
    <main className={styles.main} >
      <div className={styles.description}>
        {Object.keys(user).map((key) => (
          <div key={key}>
            <code className={styles.code}>{key}:</code>&nbsp;
            {user[key]}
          </div>
        ))}
      </div>
    </main>
  )
}