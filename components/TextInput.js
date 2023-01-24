function TextInput({onSubmit, placeholder = '', value='', resetOnSubmit=false}) {
    const [textValue, setTextValue] = React.useState(value);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(textValue);
        if (resetOnSubmit) setTextValue('');
    }

    const handleChange = (e) => {
        setTextValue(e.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text"
                className="input"
                value={textValue}
                placeholder={placeholder}
                onChange={handleChange}
                />
        </form>
    )
}