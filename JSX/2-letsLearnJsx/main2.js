const App = () =>{
    
    let name = "React";
    let Greeting = "Good Evening";
    let value = null;
    const header = <h2>This is Second Heading</h2>;

    function sum(a, b){
        return a+b;
    }
    
    return (
    <>
        <h1>Hello {name}, {Greeting}, {value}</h1>
        <p>The sum of a and b is: {sum(3,2)}</p>
        {header}
    </>
)}



ReactDOM.createRoot(document.getElementById("root")).render(<App/>);