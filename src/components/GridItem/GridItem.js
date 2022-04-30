import style from './GridItem.module.css'
import upImage from '../../assets/up.png'
import downImage from '../../assets/down.png'

function GridItem({item}) {
    return (
        <div className={style.grid__main} style={{backgroundColor: item.color}}>
            <div className={style.grid__icon}>
                <img src={item.icon === "up" ? upImage : downImage} alt="" width= "30px"/>
            </div>
            <div className={style.grid__title}>{item.title}</div>
            <p className={style.grid__paragraph}>IMC está entre {item.imc[0]} e {item.imc[1]}</p>
            {item.yourImc > 0 &&
                <p>Seu IMC é de {item.yourImc} kg/m2</p>
            
            }
        </div>
    )
}

export default GridItem;