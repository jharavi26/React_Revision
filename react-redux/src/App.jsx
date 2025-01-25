
import './App.css'
import Conainer from './Component/Conainer';
import Form from './Component/Form';
import Header from './Component/Header'
import Timer from './Component/Timer';
import Todo from './Component/Todo';

function App() {

  const arr = ["Ravi", "Anuj","Rajan","Anant","Suraj"];

  

  return (
    <>
    <Header name={"Ravikumar"} Age={27} location ={"Mumbai"} arr = {arr}/>
  <Timer />
  <Todo />
  <Form />
  <Conainer />
    </>
  )
}

export default App
