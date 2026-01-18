const App1 = () =>{ return <React.Fragment>
    <h1>This is React fragment in App1</h1>
    <p>Which is rendered by useing ReactDOM and Babel library</p>
</React.Fragment>}


// without return 
const App2 = () =>(<>
    <h1>This is React fragment in App2</h1>
    <p>Which is rendered by useing ReactDOM and Babel library</p>
</>)

const App = <><App1 /><App2 /></>
const Root = ReactDOM.createRoot(document.getElementById('root'));
Root.render(App);   