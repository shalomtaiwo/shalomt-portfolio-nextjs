import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header/Header";
import Content from "../components/Home/Content";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<div>
			<Header />
      <div className={styles.main}>
        <Content />
      </div>
		</div>
	);
}
