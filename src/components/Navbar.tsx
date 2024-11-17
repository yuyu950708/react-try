import style from "../styles/Navbar.module.css";

export default function Navbar() {
  return (
    <>
      <section className={style.nav}>
        <div>
          <h1>自由最夯</h1>
        </div>
        <div className={style.navDiv}>
          <h3>
            <a href="#" className={style.navTitle}>
              {" "}
              精選推薦
            </a>
          </h3>
          <h3>
            <a href="#" className={style.navTitle}>
              日本
            </a>
          </h3>
          <h3>
            <a href="#" className={style.navTitle}>
              東南亞
            </a>
          </h3>
          <h3>
            <a href="#" className={style.navTitle}>
              島嶼/歐洲
            </a>
          </h3>
          <h3>
            <a href="#" className={style.navTitle}>
              高雄出發
            </a>
          </h3>
        </div>
      </section>
    </>
  );
}
