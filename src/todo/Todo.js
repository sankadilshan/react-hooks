import { useState } from "react";

const button = {
    color: 'white',
    backgroundColor: 'black',
    width: '100px',
    height: '40px',
    textAlign: 'center',
    padding: '4px',
    borderRadius: '10px',
    margin:'5px'
}

function Todo({ todo, handleOnChange, handleonDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  let todoContent;
  if (isEditing) {
    todoContent = (
      <>
        <input
          value={todo.title}
          onChange={e => {
            handleOnChange({
              ...todo,
              title: e.target.value,
            });
          }}
        />
        <button style={button} onClick={() => setIsEditing(false)}>Save</button>
      </>
    );
  } else {
    todoContent = (
      <>
        {todo.title}
        <button style={button} onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
  }
  return (
    <label>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={e => {
            handleOnChange({
            ...todo,
            done: e.target.value,
          });
        }}
      />
      {todoContent}
      <button style={{...button, backgroundColor: 'red'}} onClick={() => handleonDelete(todo.id)}>Delete</button>
    </label>
  );
}

export default Todo;
