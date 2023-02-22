import style from "./haveAccount.module.css";

const HaveAccount = () => {
  return (
    <p className={`body-B-ExtraSmall ${style.text}`}>
      Already have an account? <span className="underline">Log in</span>
    </p>
  );
};

export default HaveAccount;
