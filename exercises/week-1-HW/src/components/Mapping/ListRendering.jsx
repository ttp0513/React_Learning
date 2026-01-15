const listText = [
    "Step to use useState Hook",
    "Import useState from React",
    "Initialize state variable and setter function",
    "Create a function to update the state",
    "Use the state variable in component",
    "Add event handlers to trigger state updates",
    "Render the component based on the state"
]

export const ListRendering = () => {
    return (
        <div>
            <h3>Steps to use useState in React</h3>
            <ul>
                {listText.map((text, index) => (
                    <li key={index}>{text}</li>
                ))}
            </ul>
        </div>
    );
;}   
