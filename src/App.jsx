import { useState } from "react"

let myName = "Péter";
let myNumber = 5;
let myBoolean = true;
let myArray = [1, 2, 3, true, "bela"];

let myUd = undefined;
let myNull = null;
let person = {
  name: "Bela",
  age: 20
}

/*let people = [
  "Béla", 
  "Lajos", 
  "Kázmér",
  "Ottó",
  "Bodri",
  "Cirmi"];*/
  let people = [
    {name: "Béla", age : 20},
    {name: "Jenő", age : 2},
    {name: "Vilmos", age : 18},
    {name: "Lajos", age : 20},
  ]


let peopleCard = []
  for (const p of people){
    peopleCard.push(<div>
    <p className="card-content">{ p }</p>
    </div>)
  }

  /*let wcounter = 1;
  const update = () => {
    wcounter++
    console.log(wcounter);
  }*/

const App = () => {

  const [isShown, setIsShown] = useState(false);

//  let shouldShow = false;

  const myToggleFunction = () => {
    setIsShown (!isShown)
  }

  const [counter, setCounter] = useState(1);

  const myIncrementFunction = () => {
    console.log(counter);
    setCounter(counter+1);
    console.log(counter);
    console.log("---------");
  }

  const [myArr, setArr] = useState([]);
  
  return (
    <div className="App">

    {isShown ? <p>Hidden content is show!!!!</p> : <p>Secret conten is hidden</p>}
    <button onClick={myToggleFunction}>Toggle</button>
    <p>counter value: {counter}</p>

    <button onClick={myIncrementFunction}>Increment</button>

    <button onClick={() => setArr([ ...myArr, "Béla" ])}>Add Béla</button>
    {myArr.map(elem => <p> { elem }</p>)}


      <h1>
      Hello world
      </h1>
      <p>{ myName }</p>
      <p>{ myNumber }</p>
      <p>{ myBoolean.toString() }</p>
      <p>{ myArray }</p>
      <p>{ myUd }</p>
      <p>{ myNull }</p>
      <p>Név: { person.name }  ({person.age})</p>
      <p id="first">First paragraph</p>
      <p className="myp">Second paragraph</p>
      <p className="myp">Third paragraph</p>
      <input placeholder="akarmi" type="password"/>
      {

      people.map( p => (
        <div className="card" key={ p.name } >
          <p className="card-content">{ p.age < 18 ? "******" : p.name }</p>  
          <p>Some other content</p>
        </div>
        )
      )
      }
    </div>

  );
}

export default App;
