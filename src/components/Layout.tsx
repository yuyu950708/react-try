import style from "@/styles/Layout.module.css";
import Card from "./Card";

export default function Layout() {
  return (
    <>
      <main className={style.maincss}>
        <section className={style.sectionn}>
          <Card
            imgUrl="https://picsum.photos/500?random=1" imgTitle="大三巴、旅遊塔" travelTitle="澳門機加酒  3天2夜" price="9,999" qi="起"/>
        </section>
        <section className={style.sectionn}>
          <Card
            imgUrl="https://picsum.photos/500?random=2" imgTitle="晴空塔、迪士尼" travelTitle="東京機加酒  5天4夜" price="13,100" qi="起"/>
        </section>
        <section className={style.sectionn}>
          <Card
            imgUrl="https://picsum.photos/500?random=3" imgTitle="美食、購物" travelTitle="曼谷機加酒  5天4夜" price="9,200" qi="起"/>
        </section>
        <section className={style.sectionn}>
          <Card
            imgUrl="https://picsum.photos/500?random=4" imgTitle="特色美食" travelTitle="大阪機加酒  5天4夜" price="15,000" qi="起"/>
        </section>
        <section className={style.sectionn}>
          <Card
            imgUrl="https://picsum.photos/500?random=5" imgTitle="海景度假勝地" travelTitle="沖繩機加酒  5天4夜" price="9,300" qi="起"/>
        </section>
        <section className={style.sectionn}>
          <Card
            imgUrl="https://picsum.photos/500?random=6" imgTitle="豐富歷史文化" travelTitle="名古屋機加酒  5天4夜" price="12,900" qi="起"/>
        </section>
      </main>
    </>
  );
}
