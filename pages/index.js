import styles from "../styles.module.css";
import Image from "next/image";
import Link from "next/link";
import ViewSource from "../components/view-source";
import vercel from "../public/vercel.png";

const Code = (p) => <code className={styles.inlineCode} {...p} />;

const Index = () => (
  <div className={styles.container}>
    <ViewSource pathname="pages/index.js" />
    <div className={styles.card}>
      <Image
        priority={true}
        alt="Description"
        width={290}
        height={145}
        src={`https://s3-ap-southeast-1.amazonaws.com/public-bitkub/web_banner/20210706150017Merchandise for Web-07.png`}
      />
      <hr className={styles.hr} />
      <h2 id="more">Learn More</h2>
      <p>
        You can optionally configure a cloud provider, device sizes, and more!
      </p>
      <p>
        Checkout the{" "}
        <a href="https://nextjs.org/docs/basic-features/image-optimization">
          Image Optimization documentation
        </a>{" "}
        to learn more.
      </p>
    </div>
  </div>
);

export default Index;
