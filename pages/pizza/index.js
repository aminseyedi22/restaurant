import styles from "../../styles/Pizza.module.css";
import { pizza } from "../../data/pizzadata";
import { useState } from "react";

export default function Pizza({ data }) {
  const [reload, setReload] = useState([]);
  function refresh() {
    setReload([]);
  }

  return (
    <div>
      <img src='/images/arrowdown.png' alt='' className={styles.arrow} />
      <div className={styles.title}>پیتزا ها</div>
      <div className={`${styles.menutext} row`}>
        <div className='cols'>
          {data.map((val) => (
            <div
              className={`${styles.item} ${styles.preventselect} row`}
              onClick={() => {
                val.order++;
                refresh();
              }}
            >
              <span className='col-auto'>{val.name}</span>
              <span className={`${styles.dash} col`}></span>
              <span className='col-auto'>{val.price} تومان</span>
              <span className={`${styles.ord} col-2`}>
                {" "}
                <span>{val.order}</span> عدد{" "}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export const getStaticProps = async (ctx) => {
  return {
    props: {
      data: pizza,
    },
  };
};
