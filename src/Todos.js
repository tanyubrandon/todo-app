const Todos = ({todos,handleDelete}) => {

    const todosLis=todos.length?(
        todos.map(todo=>{
            return(
                <div className="collection-item" key={todo.id}>
                    <span onClick={()=>handleDelete(todo.id)}>{todo.content}</span>
                </div>
            );
        })
    ):(
        <p className="center">You have No todo left</p>
    );
    return (
        <div className="todos collection">
          {todosLis}
        </div>
    );
}
 
export default Todos;