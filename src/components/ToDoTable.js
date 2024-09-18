import ToDoTableItem from "./ToDoTableItem";

const ToDoTable = (props) => {

    return <div className="card m-5" >
        <div className="card-header">
            <h3>ToDo List</h3>
        </div>

        <div className="card-body m-3">
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Header</th>
                    <th scope="col">Description</th>
                    <th scope="col">Delete</th>
                </tr>
                </thead>
                <tbody>
                {
                    props.todoList.map((todoListItem) => {
                        return <ToDoTableItem {...todoListItem} key={todoListItem.id}  todoList = {props.todoList}/>
                    })
                }
                </tbody>
            </table>
        </div>
    </div>

}

export default ToDoTable