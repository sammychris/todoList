import {useState} from 'react';
import Button from "../components/Button";
import InputField from '../components/InputField';
import ListItems from '../components/ListItems';

// Question: Build a Todo List Application
// Problem Statement:
// Create a simple Todo List application using React. The application should allow users to add, delete, and mark tasks as completed.
// Additionally, users should be able to filter tasks based on their completion status (e.g., show all tasks, show only completed tasks, show only incomplete tasks).

// Requirements:
// 1) Display an input field and a button to add new tasks.
// 2) Display a list of tasks with options to mark each task
// 3) Implement filtering options to show all tasks, only completed tasks, or only incomplete tasks.
// 4) Style the application to provide a visually appealing and intuitive user interface.
// 5) Use React for building the application, including state management and component lifecycle methods where necessary.

// Additional Guidelines:
// - You can use CSS for styling or choose a CSS framework like Bootstrap if preferred.
// - Focus on code readability, maintainability, and adherence to best p
// Additional Guidelines:
// - You can use CSS for styling or choose a CSS framework like Bootstrap if preferred.
// - Focus on code readability, maintainability, and adherence to best practices.
// - Explain your thought process while solving this problem.


const AppContainer = () => {
  const [todoList, setTodoList] = useState([]);
  const [todoText, setTodoText] = useState('');
  const [statusText, setStatusText] = useState('');
  const [searchCheck, setSearchCheck] = useState('');

  const addTodo = () => {
    setTodoList([
      ...todoList, {
        id: Date.now(),
        name: todoText,
        status: statusText,
    }]);
    setTodoText('')
  }

  const handleTodoField = (e) => {
    setTodoText(e.target.value);
  }

  const handleStatusField = (e, id) => {
    const todoIndex = todoList.findIndex(todo => todo.id === id);
    todoList[todoIndex].status = e.target.value;


    setStatusText(e.target.checked ? e.target.value : '');
    setTodoList(todoList);
  }

  const deleteTodo = (id) => {
    const filtering = todoList.filter(todo => todo.id !== id);
    setTodoList(filtering);
  }

  const FilterAll = (e) => {
    setSearchCheck(e.target.checked ? e.target.value : '')
  }

  const filtering = searchCheck? todoList.filter(todo => todo.status === searchCheck): todoList;

  return (
    <div>
      
      <div>


        <div style={{marginLeft: 5, display: 'flex'}}>
          <InputField onChange={handleTodoField} type="text" value={todoText}/>
          <Button text={'Add todo'} onClick={addTodo}></Button>
          <label>{`Filter By: `}</label> <div style={{margin: '1px 15px'}}> All <InputField onChange={FilterAll} type="checkbox" value=""/></div>
          <div style={{margin: '1px 15px'}}>completed<InputField onChange={FilterAll} type="checkbox" value="completed"  checked={searchCheck === 'completed'}/></div>
          <div style={{margin: '1px 15px'}}>Not completed<InputField onChange={FilterAll}  type="checkbox" value="not completed" checked={searchCheck === "not completed"}/> </div>
        </div>
        
      </div>
      <div>
        Todo List: 
        <ListItems list={filtering} handleStatusField={handleStatusField} deleteTodo={deleteTodo}/>
      </div>
    </div>
  )
}

export default AppContainer;

