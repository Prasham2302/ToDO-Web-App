import {useState, useEffect} from 'react';
import './App.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import firebase from 'firebase';
import {db} from './firebase_config'
import TodoItem from './TodoItem'
function App() {

  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState([]);

  useEffect(() =>{
    getTasks();
  }, []); 

  function getTasks(){
    db.collection("todos").onSnapshot(
      function (querySnapshot){
        setTodoList(querySnapshot.docs.map((doc) =>({
          id: doc.id,
          todo: doc.data().todo,
          isDone: doc.data().isDone,
          timeStamp: doc.data().timeStamp,
        }))
        );
      }
    );
  }

  function addTodo(e){
    e.preventDefault();
    db.collection("todos").add({
      isDone: false,
      timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
      todo: input
    });
    setInput('')
  }
  const styles = theme => ({
    multilineColor:{
        color:'red'
    }
  });

  return (  
    <div className='bg' >
      <div className="main">
        <h1 style = {{textAlign: 'center', color: '#DAA520' }}>Prasham Narayan's ToDO App</h1>
        <form>
        <TextField className = "textField" 
        id="standard-basic" 
        label="Task" 
        value = {input}
        onChange = {(e) => setInput(e.target.value)}
        style ={{width: '90vw', maxWidth: '500px', color: '#FFF8DC'}}
        />
        <Button variant="contained"
        onClick = {addTodo} 
        type = 'submit'
        style = {{display : 'none'}}>Default</Button>
        </form>
        <div style ={{width: '90vw', maxWidth: '500px', marginTop: '24px'}}>
          {todoList.map((curr) => (
            <TodoItem todo = {curr.todo}
            isDone = {curr.isDone}
            id = {curr.id}/>
          ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
