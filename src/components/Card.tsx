import style from "../styles/Layout.module.css";

interface CardType {
  imgUrl: string;
  imgTitle: string;
  travelTitle: string;
  price: string;
  qi: string;
}

export default function Card({
  imgUrl,
  imgTitle,
  travelTitle,
  price,
  qi,
}: CardType) {
  return (
    <>
      <section className={style.sectionn}>
        <div className={style.imgg}>
          <img src={imgUrl} alt="#" />
          <h2>{imgTitle}</h2>
        </div>
        <div className={style.travelTitle}>
          <div>
            <h3>{travelTitle}</h3>
          </div>
          <div className={style.price}>
            <h3>{price}</h3>
            <h4>{qi}</h4>
          </div>
        </div>
      </section>
    </>
  );
}
