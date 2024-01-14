import { FC } from "react";
import styles from "./header.module.css";

export const Header: FC = () => {
  return (
    <header className={styles.container}>
      <h1>Header</h1>
    </header>
  );
};
