import styles from "../../styles/Pizza.module.css";

export default function Pizza() {
    return (
        <div>
            <div className={styles.title}>پیتزا ها</div>
            <div className={`${styles.menutext} row`}>
                <div className='cols'>
                    <div className={`${styles.item} row`}>
                        <span className="col-auto">پپرونی کوچک</span>
                        <span className={`${styles.dash} col`}></span>
                        <span className="col-auto">150000 تومان</span>
                        <span className={`${styles.ord} col-2`}> - <span>0</span> عدد </span>
                    </div>
                    <div className={`${styles.item} row`}>
                        <span className="col-auto">پپرونی کوچک</span>
                        <span className={`${styles.dash} col`}></span>
                        <span className="col-auto">150000 تومان</span>
                        <span className={`${styles.ord} col-2`}> - <span>0</span> عدد </span>
                    </div>


                </div>

            </div>
        </div>
    );
}
