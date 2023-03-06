import React from "react";
import style from "./viewAllBox.module.css";

interface ViewAllBoxProps {
  children: React.ReactNode;
  title: string;
  link?: string;
}

const ViewAllBox = ({ children, title, link }: ViewAllBoxProps) => {
  return (
    <div className={style.container}>
      <div className={style.text}>
        <p className="body-B-Small">{title}</p>
        <p className="body-ExtraSmall">View All</p>
      </div>
      <div className={style.children}>{children}</div>
    </div>
  );
};

export default ViewAllBox;
