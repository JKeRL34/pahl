
function Message() {
    const name = 'JKerl';

    if (name.length > 5)
        return <h1>Hello {name}</h1>

    return <h1>Hello World</h1>
}

export default Message