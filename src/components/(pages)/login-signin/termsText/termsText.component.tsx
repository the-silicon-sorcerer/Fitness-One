import style from "./termsText.module.css";

const TermsText = () => {
  return (
    <p className={style.text}>
      By registering an account you accept the <br />
      <span className="underline bold">Terms of Service</span> and&nbsp;
      <span className="underline bold">Privacy policy</span>
    </p>
  );
};

export default TermsText;
