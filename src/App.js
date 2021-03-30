import styles from './css/App.module.css';
import Card from './Card'

const cards = [
  {
    id: 0,
    title: "Supervisor",
    text: "Monitors activity to identify project roadblocks",
    image: "./img/icon-supervisor.svg",
    color: "hsl(180, 62%, 55%)"
  }, {
    id: 1,
    title: "Team Builder",
    text: "Scans our talent network to create the optimal team for your project",
    image: "./img/icon-team-builder.svg",
    color: "hsl(0, 78%, 62%)"
  }, {
    id: 2,
    title: "Karma",
    text: "Regularly evaluates our talent to ensure quality",
    image: "./img/icon-karma.svg",
    color: "hsl(34, 97%, 64%)"
  }, {
    id: 3,
    title: "Calculator",
    text: "Uses data from past projects to provide better delivery estimates",
    image: "./img/icon-calculator.svg",
    color: "hsl(212, 86%, 64%)"
  }
]

function App() {
  return (
    <div className={styles.App}>
      <header className={styles["App-header"]}>
        <h1> Reliable, efficient delivery <span>Powered by Technology</span></h1>
        <p>Our Artificial Intelligence powered tools use millions of project data 
          points to ensure that your project is successful
        </p>
      </header>

      <div className={styles["cards-container"]}>
        {cards.map(card => <Card title={card.title} text={card.text} image={card.image} color={card.color} id={card.id}/>)}
      </div>  

      <footer>
        <p className={styles.attribution}>
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
          Coded by <a href="#">Jorge Flagel</a>.
        </p>
      </footer>
    </div>
  );
}

export default App;
