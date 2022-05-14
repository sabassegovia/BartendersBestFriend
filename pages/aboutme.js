import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { TiSocialInstagram } from "react-icons/ti";
import styles from "../styles/Home.module.css";

const AboutMe = () => {
  return (
    <>
      <main className={styles.main}>
        <h1 className={styles.title}>
          <Link href="/">
            <a className={styles.mainHeader}>Bartender&#39;s Best Friend</a>
          </Link>
        </h1>
        <p className={styles.code}>My Story</p>
        <p className={styles.code}>[photo of alex here]</p>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit
          amet sapien mi. Quisque ut diam eget est vulputate porta imperdiet a
          diam. Morbi tristique, nisl et imperdiet vestibulum, nisi eros mollis
          arcu, vitae commodo erat dolor quis purus. Nulla rhoncus nunc odio, id
          blandit velit cursus a. Nullam nec lobortis ante. Fusce nec vulputate
          velit, at venenatis mauris. Quisque at rutrum metus. Donec a risus
          orci. Suspendisse facilisis convallis tempor. Mauris tristique nec ex
          ac tincidunt. Fusce congue, sem at rutrum posuere, nisi tortor commodo
          urna, eu ultricies mauris nisi nec dolor. Nam tempor, justo non
          fermentum placerat, sem odio volutpat nunc, sed bibendum nisl sapien
          id sapien. In ac tortor at mi feugiat semper. Morbi eget urna et lacus
          viverra sodales molestie sit amet sem.
        </p>
      </main>
      <div className={styles.lrButtons}>
        <Link href="/">
          <button className={styles.lButton}>Home</button>
        </Link>
      </div>
    </>
  );
};

export default AboutMe;
