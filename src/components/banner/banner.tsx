import { FC } from "react";
import styles from "./banner.module.css";

interface IBanner {}

export const Banner: FC<IBanner> = () => {
  return (
    <div className={styles.container}>
      <h1>Banner</h1>
    </div>
  );
};
