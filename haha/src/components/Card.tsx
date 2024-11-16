import style from "../styles/Layout.module.css"

interface CardType{
    imgUrl:string
    imgTitle:string
    travelTitle:string
    price:string
    qi:string
    imgUrl1:string
    imgTitle1:string
    travelTitle1:string
    price1:string
    qi1:string
}

export default function Card({imgUrl,imgTitle,travelTitle,price,qi,imgUrl1,imgTitle1,travelTitle1,price1,qi1}:(CardType)){
    return(
        <main className={style.maincss}>
        <section className={style.sectionn}>
            <div className={style.imgg}>
                <img src={imgUrl} alt="" />
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
        <section className={style.sectionn}>
            <div className={style.imgg}>
                <img src={imgUrl1} alt="" />
                <h2>{imgTitle1}</h2>
            </div>
            <div className={style.travelTitle}>
                <div>
                    <h3>{travelTitle1}</h3>
                </div>
                <div className={style.price}>
                    <h3>{price1}</h3>
                    <h4>{qi1}</h4>
                </div>
            </div>
        </section>
    </main>
    )
}