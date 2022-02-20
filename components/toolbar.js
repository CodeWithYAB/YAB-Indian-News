import { useRouter } from 'next/router';
import Head from 'next/head';
import styles from '../styles/Toolbar.module.css';

export const Toolbar = () => {
  const router = useRouter();

  return (
    <>
    <Head>
        <title>YAB Indian News</title>
      </Head>
    <div className={styles.main}>
      <div onClick={() => router.push('/')}>Home</div>
      <div onClick={() => router.push('/news/1')}>News</div>
    </div>
    </>
  );
};