import { AiFillDelete } from 'react-icons/ai';

function ToDoItem({ todoName, todoDate, onDeleteClick }) {
  return (
    <div className="container">

      <div className="row ag-row">
        <div className="col-6">
          {todoName}
        </div>
        <div className="col-4">
          {todoDate}  
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-danger ag-button" onClick={() => onDeleteClick(todoName)}><AiFillDelete/></button>
        </div>
      </div>
    </div>
  )
}
export default ToDoItem;