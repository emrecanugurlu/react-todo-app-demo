import {useContext} from "react";
import {FunctionContext} from "../context/FunctionContext";

const ToDoTableItem = (props) => {

    const setTodoList = useContext(FunctionContext);

    const deleteTodoItem = (deletedId) => {
        setTodoList(
            props.todoList.filter((listItem) => {
                return listItem.id !== deletedId
            })
        )
    }

    return <tr>
        <th scope="row">{props.id}</th>
        <td>{props.header}</td>
        <td>{props.description}</td>
        <td>
            <button className={"btn btn-danger"} onClick={ () => deleteTodoItem(props.id)}><i className="bi bi-trash-fill"></i></button>
        </td>
    </tr>
}

export default ToDoTableItem