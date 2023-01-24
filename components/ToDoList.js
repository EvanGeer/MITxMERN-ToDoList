function ToDoList({todoItems, toggleDone, onUpdateTitle, onUpdateDescription}) {
    return (<>
    {todoItems.map((item, i) => (
        <ToDoItem item={item} index={i} key={i} 
            handleDone={() => toggleDone(i)} 
            onUpdateTitle={onUpdateTitle} 
            onUpdateDescription={onUpdateDescription}/>
        ))}
    </>
    )
}