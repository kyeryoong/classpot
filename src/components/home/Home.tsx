import { useNavigate } from "react-router-dom";

import styles from "./Home.module.css";



export default function Home() {
    const navigate = useNavigate()

    

    return (
        <div className={styles.homeContainer}>
            <div className={styles.homeContainerTop}>
                쉽고 빠르게<br />
                5자리 문자로<br />
                시험을 진행해보세요.
            </div>

            <div className={styles.homeContainerBottom}>
                <div className={styles.applyTestButton} onClick={() => {navigate("/apply")}}>
                    시험 응시하기
                </div>

                <div className={styles.sampleTestButton} onClick={() => {navigate("/apply/sample/applicant/sample")}}>
                    체험 해보기
                </div>
            </div>
        </div>
    )
}


