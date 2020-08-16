import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import AppLayout from "../components/appLayout";
import { Row, Col } from "antd";
import { CarOutlined } from "@ant-design/icons";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppLayout></AppLayout>
      <main className={styles.main}>
        <Row>
          <Col xs={24} md={24}>
            <h1 className={styles.title} style={{ wordBreak: "keep-all" }}>
              <span>우리 학교 사람 만날 땐?</span>
            </h1>
          </Col>
          <Col xs={24} md={24}>
            <h1 className={styles.title}>
              <Link href="/posts/first-post">
                <a>Campus+!</a>
              </Link>
            </h1>
          </Col>
        </Row>
        <p className={styles.description}>
          내가 원하는 모임을 만들거나, 참여할 수 있어요!
        </p>
        <div className={styles.grid}>
          <div className={styles.grid}>
            <div className={styles.icons}>
              <CarOutlined />
              <div className={styles.icontext}>창업</div>
            </div>
            <div className={styles.icons}>
              <CarOutlined />
              <div className={styles.icontext}>창업</div>
            </div>
            <div className={styles.icons}>
              <CarOutlined />
              <div className={styles.icontext}>창업</div>
            </div>
            <div className={styles.icons}>
              <CarOutlined />
              <div className={styles.icontext}>창업</div>
            </div>
          </div>
          <div className={styles.grid}>
            <div className={styles.icons}>
              <CarOutlined />
              <div className={styles.icontext}>창업</div>
            </div>
            <div className={styles.icons}>
              <CarOutlined />
              <div className={styles.icontext}>창업</div>
            </div>
            <div className={styles.icons}>
              <CarOutlined />
              <div className={styles.icontext}>창업</div>
            </div>
            <div className={styles.icons}>
              <CarOutlined />
              <div className={styles.icontext}>창업</div>
            </div>
          </div>
        </div>
        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
