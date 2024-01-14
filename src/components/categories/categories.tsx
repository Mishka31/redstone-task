import { FC } from "react";
import styles from "./categories.module.css";

interface ICategories {}

export const Categories: FC<ICategories> = () => {
  return (
    <div className={styles.container}>
      <h1>Banner</h1>
    </div>
  );
};
