import style from './App.module.css';
import logoimg from './assets/powered.png'

function App() {
  return (
    <div className={style.main}>
      <header className={style.header__container}>
        <img src={logoimg} className={style.header__logo} alt="logo" width={150}></img>
      </header>
      <section className={style.container}>
        <div className={style.container__leftSide}>esquerdo</div>
        <div className={style.container__rightSide}>direito</div>
      </section>
    </div>
  );
}

export default App;
