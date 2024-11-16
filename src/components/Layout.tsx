import style from "@/styles/Layout.module.css"
import Card from "./Card"

export default function(){
    return (
        <>
        <main className={style.maincss}>
            <Card imgUrl='https://picsum.photos/500?random=1' imgTitle='大三巴、旅遊塔' travelTitle='澳門機加酒  3天2夜' price='9,999' qi='起' imgUrl1='https://picsum.photos/500?random=2' imgTitle1='晴空塔、迪士尼' travelTitle1='東京機加酒  5天4夜' price1='13,100' qi1='起'></Card> 
        </main>
        <main className={style.maincss}>
        <Card imgUrl='https://picsum.photos/500?random=3' imgTitle='美食、購物' travelTitle='曼谷機加酒  5天4夜' price='9,200' qi='起' imgUrl1='https://picsum.photos/500?random=4' imgTitle1='特色美食' travelTitle1='大阪機加酒  5天4夜' price1='15,000' qi1='起'></Card> 
        </main>
        <main className={style.maincss}>
        <Card imgUrl='https://picsum.photos/500?random=5' imgTitle='海景度假勝地' travelTitle='沖繩機加酒  5天4夜' price='9,300' qi='起' imgUrl1='https://picsum.photos/500?random=6' imgTitle1='豐富歷史文化' travelTitle1='名古屋機加酒  5天4夜' price1='12,900' qi1='起'></Card> 
        </main>
        </>
    )
}