const App = () =>{

    // let arr = [1,2,3,4,5,6,7,8,9];
    // // we can't access objects directly but we can access to its properties
    // let obj = {
    //     name: "Abhay",
    //     age:22
    // }
    // return (
    //     <>
    //         <p>{arr}</p>
    //         {obj.name}
    //         {arr.map((num)=> <p>{num}</p>)}
    //     </>
    // );

    //--------------------------------------------------------------------------

    // let car = ['BMW', 'Audi', 'Mercedes', 'Honda', 'Toyota'];
    // return (
    //     <>
    //         <h1>List of Cars</h1>
    //         <ol>
    //             {car.map((car, index)=>{
    //                 return <li key={index}>{car}</li>
    //             })}
    //         </ol>
    //     </>
    // )

    //---------------------------------------------------------------------------

    const f1Teams = [
        {
            name:'Ferrari',
            firstDriver:'Charles',
            secondDriver:'Lewis'
        },
        {
            name:'RedBull',
            firstDriver:'Maxx',
            secondDriver:'Isac'
        },
        {
            name:'Mclaren',
            firstDriver:'Lando',
            secondDriver:'Oscar'
        },
        {
            name:'Mersedes',
            firstDriver:'George',
            secondDriver:'Kimi'
        },
    ];

    return(
        <>
            <table>
                <thead>
                    <tr>
                        <th>TeamName</th>
                        <th>First Driver</th>
                        <th>Second Driver</th>
                    </tr>
                </thead>
                <tbody>
                     {f1Teams.map((team, index)=>{
                        return (
                            <tr key={index}>
                                <td>{team.name}</td>
                                <td>{team.firstDriver}</td>
                                <td>{team.secondDriver}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}



ReactDOM.createRoot(document.getElementById('root')).render(<App />);