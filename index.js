function ToDoListApp() {
    const [todoItems, setTodoItems] = React.useState([
        {title: "item 1", description: "really important action", done: false},
        {title: "item 2", description: "really important action", done: true},
        {title: "item 3", description: "really important action", done: false},
    ]);
    
    const toggleDone = (index) => {
        const temp = [...todoItems];
        temp[index].done = !temp[index].done;
        setTodoItems(temp);
    }

    const addNew = (title) => {
        const todoItem = {
            title:title,
        };
        const temp = [...todoItems, todoItem];
        setTodoItems(temp);
    }

    const removeDone = () => {
        const incompleteItems = todoItems.filter(x => !x.done)
        setTodoItems(incompleteItems);
    }

    const updateTitle = (index, text) => {
        const temp = [...todoItems];
        temp[index].title = text;
        // const newValue = {
        //     title:text,
        //     description:temp[index].description,
        // }
        // temp[index] = newValue;
        setTodoItems(temp);
    }
    const updateDescription = (index, text) => {
        const temp = [...todoItems];
        temp[index].description = text;
        // const newValue = {
        //     title:temp[index].title,
        //     description:text
        // }
        // temp[index] = newValue;
        setTodoItems(temp);
    }
    return (
        <div className="todo-list">
            <button className="clear" type="toggle" onClick={removeDone}>Clear Done</button>
            
            <ToDoList todoItems={todoItems} toggleDone={toggleDone} onUpdateTitle={updateTitle} onUpdateDescription={updateDescription}/>
            <TextInput onSubmit={addNew} placeholder={"Add Item..."} resetOnSubmit='1'/>
        </div>
    )
}

ReactDOM.render(
    <ToDoListApp/>,
    document.getElementById('root')
  );
  