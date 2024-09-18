import ToDoTable from "./ToDoTable";
import AddToDoForm from "./AddToDoForm";
import { useState} from "react";
import {FunctionContext} from "../context/FunctionContext";

const HomePage = () => {

  const [todoList, setTodoList] = useState([])

  return(
      <>
          <AddToDoForm setTodoList = {setTodoList} todoList = {todoList} />
          <FunctionContext.Provider value={setTodoList}>
              <ToDoTable todoList = {todoList}/>
          </FunctionContext.Provider>
      </>

);
}

export default HomePage