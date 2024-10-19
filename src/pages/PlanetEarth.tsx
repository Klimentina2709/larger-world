import styles from "./PlanetEarth.module.css";
import HorizontalScroll from "react-scroll-horizontal";

function PlanetEarth() {
  return (
    <div className={styles.app}>
      <HorizontalScroll>
        <div className={`${styles.main} ${styles.bg}`}>
          <img src="/img/icons/LogoVersion2.png" alt="" />
        </div>
        <div className={`${styles.main} ${styles.bg1}`}>
          <div>
            <img
              src="/img/graphics/GTree1.png"
              alt=""
              className={styles.tree1}
            />
          </div>

          <img src="/img/graphics/GTree2.png" alt="" className={styles.tree2} />
          <img
            src="/img/graphics/hedgehog.png"
            alt=""
            className={styles.hedgehog}
          />
          <img
            src="/img/graphics/butterfly1.png"
            alt=""
            className={styles.butterfly1}
          />
          <img
            src="/img/graphics/butterfly2.png"
            alt=""
            className={styles.butterfly2}
          />
        </div>
        <div className={`${styles.main} ${styles.bg2}`}>
          <img src="/img/graphics/rock1.png" alt="" className={styles.rock1} />
          <img
            src="/img/graphics/butterfly3.png"
            alt=""
            className={styles.butterfly3}
          />
          <img
            src="/img/graphics/noleavestree.png"
            alt=""
            className={styles.noleavestree}
          />
          <img
            src="/img/graphics/butterfly2.png"
            alt=""
            className={styles.butterfly2_bg2}
          />
          <img
            src="/img/graphics/stone1.png"
            alt=""
            className={styles.stone1}
          />
          <img
            src="/img/graphics/butterfly3.png"
            alt=""
            className={styles.butterfly3_v2}
          />
          <img
            src="/img/graphics/GTree1.png"
            alt=""
            className={styles.tree1_v2}
          />
          <img
            src="/img/graphics/rock1.png"
            alt=""
            className={styles.rock1_v2}
          />

          <img
            src="/img/graphics/butterfly3.png"
            alt=""
            className={styles.butterfly3_v3}
          />
        </div>
        <div className={`${styles.main} ${styles.bg3}`}>
          <img
            src="/img/graphics/Layer_3.png"
            alt=""
            className={styles.leaves}
          />
          <img
            src="/img/graphics/butterfly1.png"
            alt=""
            className={styles.butterfly1_bg4}
          />
          <img
            src="/img/graphics/Layer_1.png"
            alt=""
            className={styles.leaves1}
          />
          <img
            src="/img/graphics/butterfly1.png"
            alt=""
            className={styles.butterfly1_v2}
          />
          <img
            src="/img/graphics/Layer_1.png"
            alt=""
            className={styles.leaves2}
          />
          <img
            src="/img/graphics/butterfly4.png"
            alt=""
            className={styles.butterfly4}
          />
        </div>
        <div className={`${styles.main} ${styles.bg4}`}></div>
        <div className={`${styles.main} ${styles.bg5}`}></div>
      </HorizontalScroll>
    </div>
  );
}
export default PlanetEarth;
