import {useState} from "react";

const AddToDoForm = (props) => {

    const [header,setHeader] = useState("")
    const [description,setDescription] = useState("")

    const addTodo = () => {
        if (header !== "" && description !== "" ) {
            if (props.todoList.length === 0){
                const newListItem = {
                    id : 1,
                    description : description ,
                    header : header
                }

                console.log(newListItem)
                props.setTodoList([...props.todoList,newListItem]);
                setHeader("");
                setDescription("");
            }else{
                const newListItem = {
                    id : (props.todoList[(props.todoList.length)-1].id) + 1,
                    description : description ,
                    header : header
                }

                console.log(newListItem)
                props.setTodoList([...props.todoList,newListItem]);
                setHeader("");
                setDescription("");
            }
        }
    }

    return <div className="card m-5">
        <div className="card-header">
            <h3>ToDo Form</h3>
        </div>

        <div className="card-body m-3">
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Header</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" onChange={(e) => {setHeader(e.target.value)}} value={header} />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" onChange={(e) => {setDescription(e.target.value)}} value={description}></textarea>
            </div>
            <button className={"btn btn-primary"} onClick={addTodo} >Add ToDo</button>
        </div>
    </div>
}

export default AddToDoForm