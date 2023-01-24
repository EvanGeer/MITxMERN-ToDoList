function ToDoItem({item, index, handleDone, onUpdateTitle, onUpdateDescription}) {
    
    const [editable, setEditable] = React.useState(false);
    const [itemValue, setItemValue] = React.useState(item);
    
    const todoClass = `todoItem ${item.done ? 'Done' : ''}`;

    const handleTitleChange = (e) => {
        setItemValue({
            title:e.target.value,
            description:itemValue.description,
        });
    }
    const handleDescriptionChange = (e) => {
        setItemValue({
            title:itemValue.title,
            description:e.target.value,
        });
    }

    const updateValue = (text, updater) => {
        updater(index, text);
    }

    const toggleEditable = (e) => {
        console.log(e?.target);
        setEditable(!editable);
    }

    const save = () => {
        updateValue(itemValue.title, onUpdateTitle);
        updateValue(itemValue.description, onUpdateDescription);
        toggleEditable();
    }
    const cancel = () => {
        toggleEditable();
        // updateValue(item.title, onUpdateTitle);
        // updateValue(item.description, onUpdateDescription);
    }

    const editableElements = (
        <div className="grid-container">
            <input type="checkbox"
                className="checkbox"
                checked={item.done}
                onChange={handleDone}/>
        <div id={index} key={index} className={todoClass}>
            {/* <form onSubmit={handleTitleUpdate}> */}
                <input type="text"
                    className="input-title"
                    value={itemValue.title}
                    placeholder="add title..."
                    onChange={handleTitleChange}
                    />
            {/* </form> */}
            {/* <TextInput 
                onSubmit={handleTitleUpdate}
                onChange={handleTitleChange}
                value={item.title} /> */}
            {/* <form onSubmit={handleDescriptionUpdate}> */}
                <input type="text"
                    className="input-description"
                    value={itemValue.description}
                    placeholder="add description..."
                    onChange={handleDescriptionChange}
                    />
            {/* </form> */}
            {/* <TextInput 
                onSubmit={handleDescriptionUpdate} 
                value={item.description}
                onChange={handleDescriptionChange}
                placeholder='add description...'/> */}
        <button type="toggle" checked={editable} onClick={cancel}>Cancel</button>
        <button type="toggle" checked={editable} onClick={save}>Ok</button>
        </div>
        </div>
    )

    const readonlyElements = (
        <div className="grid-container">
            <input type="checkbox"
                className="checkbox"
                checked={item.done}
                onChange={handleDone}/>
            <div id={index} key={index} className={todoClass}  onClick={toggleEditable}>
                <label className="todoItem-Title" >
                    {item.title}
                </label>
                <div className="todoItem-Description">{item.description}</div>
            </div>
        </div>
    )

    return editable ? editableElements : readonlyElements;

}