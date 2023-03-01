import style from "./containingBlock.module.css";

const ContainingBlock = ({ children }: { children: React.ReactNode }) => {
  return <div className={style.block}>{children}</div>;
};

export default ContainingBlock;
