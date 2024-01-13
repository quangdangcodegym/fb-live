function ChildComponent(props) {
    const [childCount, setChildCount] = useState(0);

    return {
        childCount: `Child count is ${childCount}`,
        setChildCount
    };
}

function App() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("John");
    const childComponent = ChildComponent(); // Instantiate the child component

    return {
        count: `Count is ${count}`,
        setCount,
        name: `Name is ${name}`,
        setName,
        childComponent
    };
}

let state = [];
let index = 0;

function useState(initialState) {
    const localIndex = index;
    if (typeof state[localIndex] === 'undefined') state[localIndex] = initialState;

    index++;
    return [state[localIndex], (newState) => (state[localIndex] = newState)];
}

let Rendered = App();

console.log(Rendered.count);
console.log(Rendered.name);
console.log(Rendered.childComponent.childCount);

Rendered.setCount(10);
Rendered.setName("Mark");
Rendered.childComponent.setChildCount(5);

index = 0; // Set the index to 0
Rendered = App(); // Re-render after state change

console.log(Rendered.count);
console.log(Rendered.name);
console.log(Rendered.childComponent.childCount);
