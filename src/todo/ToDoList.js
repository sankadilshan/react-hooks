import Todo from "./Todo";

function TodoList({ todos, onChange, onDelete }) {
  return (
    <>
      {todos.map((todo) => (
        <div style={{marginTop: '5px', marginLeft: '20px'}}>
          <Todo key={todo.id} todo={todo} handleOnChange={onChange} handleonDelete={onDelete} />
        </div>
      ))}
    </>
  );
}

export default TodoList;
