import "./App.css";

const creatures = [
  {
    name: 'Aragorn',
    type: 'Human',
    alias: 'Stryder',
    desc: 'He is Aragorn',
  },
  {
    name: 'Gollum',
    hobbit: 'Stoor Hobbit',
    alias: 'Smeagol',
    desc: 'Creepy dude'
  }
]

function App() {

  return (
    <>
      <h1>LOTR</h1>
      {creatures.map((creature, index) => (
        <li key={index}>{creature.name}</li>
      ))}
    </>
  );
}

export default App;
