import Loader from "react-loader-spinner";
import style from "./Loader.module.css";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const LoaderSpinner = () => {
  return (
    <Loader
      className={style.Loader}
      type="ThreeDots"
      color="green"
      height={80}
      width={80}
    />
  );
};

export default LoaderSpinner;
