import { useState } from 'react';
import style from './App.module.css';
import logoimg from './assets/powered.png'
import { calcIMC, levels } from './helpers/imc'
import GridItem from './components/GridItem/GridItem';

function App() {
  const [heightField, setHeightField] = useState(0)
  const [weightField, setWeightField] = useState(0)

  const handleChangeHeight = (e) => {
    setHeightField(Number(e.target.value))
  }
  const handleChangeWeight = (e) => {
    setWeightField(Number(e.target.value))
  }

  const handleClick = () => {
    if(weightField && heightField) {
      calcIMC(weightField, heightField)
      return
    }
    alert("Você precisa preencher todo os campos")
  }


  return (
    <div className={style.main}>
      <header className={style.header__container}>
        <img src={logoimg} className={style.header__logo} alt="logo" width={150}></img>
      </header>
      <section className={style.container}>
        <div className={style.container__leftSide}>
          <h1 className={style.leftSide__title}>Calcule o seu IMC</h1>
          <p className={style.leftSide__paragraph}>IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial da Saúde para calcular o epso ideal de cada pessoa.</p>
          <input 
            className={style.leftSide__input}
            type="number"
            placeholder="Digite a sua altura. Ex: 1.5 (em metros)"
            value={heightField === 0 ? '' : heightField}
            onChange={(e) => handleChangeHeight(e)} >              
          </input>
          <input 
            className={style.leftSide__input}
            type="number"
            placeholder="Digite o seu peso. Ex: 75.3 (em Kg)"
            value={weightField === 0 ? '' : weightField}
            onChange={(e) => handleChangeWeight(e)} >              
          </input>
          <button className={style.leftSide__button} onClick={handleClick}>Calcular</button>
        </div>
        <div className={style.container__rightSide}>
          <div className={style.rightSide__grid}>
            {levels.map((level, index) => (
              <GridItem key={index} item={level}/>              
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
