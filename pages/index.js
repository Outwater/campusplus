import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import AppLayout from "../components/appLayout";
import { CarOutlined } from "@ant-design/icons";
import MeetingList from "../components/MeetingList";
import IconList from "../components/IconList";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppLayout></AppLayout>
      <div className={styles.mainContainer}>
        <div
          style={{
            height: "300px",
            background: "rgb(248, 249, 250)",
            padding: "30px",
          }}
        >
          <h1 className={styles.title} style={{ wordBreak: "keep-all" }}>
            <span>너와 나, 우리의 만남</span>
            <br />
          </h1>
          <h1 className={styles.title}>
            <Link href="/posts/first-post">
              <a>Campus+!</a>
            </Link>
          </h1>
          <p className={styles.description}>
            내가 원하는 모임을 만들거나, 참여할 수 있어요!
          </p>
        </div>
        <div>
          <IconList />
        </div>
        <div>
          <MeetingList />
        </div>
      </div>
    </div>
  );
}
