import styles from "../../styles/Pizza.module.css";
import { pizza } from "../../data/pizzadata";
import { useState } from "react";

export default function Pizza({ data }) {
  const [reload, setReload] = useState([]);
  function refresh() {
    setReload([]);
  }
  function increase(value) {
    value.order++;
    refresh();
  }
  function decrease(value) {
    value.order--;
    refresh();
  }

  return (
    <div>

      <img
        src='/images/arrowdown.png'
        alt=''
        className={`${styles.arrow} d-none d-lg-block`}
      />
      <div className={`${styles.title}`}><img src="/images/pizzaWord.png" width={`250px`} alt="" /></div>
      <div className={`${styles.menutext} row`}>
        <div className='cols '>
          {data.map((val) => (
            <div
              className={`${styles.item} ${styles.preventselect} row  `} >
              <span className='col-lg-auto col-auto'>{val.name}</span>
              <span className={`${styles.dash} col-lg col`}></span>
              <span className='col-lg-auto  cols text-center'>
                {val.price} تومان
              </span>
              <span className="col-3">
                <div className="row">
                  <span
                    className=' col-lg-auto  col-auto mb-4 mb-lg-0 me-3'
                    onClick={() => {
                      increase(val);
                    }}
                  >
                    +
                  </span>
                  <span
                    className={`${styles.ord} col-lg-auto  col-auto ms-auto me-auto `}
                  >
                    {" "}
                    <span>{val.order}</span> عدد{" "}
                  </span>
                  <span
                    className=' col-lg-auto  col-auto mb-4 mb-lg-0'
                    onClick={() => {
                      val.order > 0 &&
                        decrease(val);
                    }}
                  >
                    -
                  </span>
                </div>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div >
  );
}

export const getStaticProps = async (ctx) => {
  return {
    props: {
      data: pizza,
    },
  };
};
