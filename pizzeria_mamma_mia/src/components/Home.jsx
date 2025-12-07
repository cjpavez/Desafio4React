import Titulo from "./Header";
import CardPizza from "./CardPizzas";
import { useState, useEffect } from "react";

function Home(){
    const [info, setInfo] = useState([]);

    useEffect(() => {
        consultarApi();
    }, []);

    const consultarApi = async () => {
        const url = "http://localhost:5000/api/pizzas";
        const response = await fetch(url);
        const data = await response.json();
        console.log("Datos del API:", data);

        setInfo(data);
    };

    return(
        <>
            <div className="home">
                <Titulo/>
            </div>
            <div className="pizzas">
                {info.map((pizza) => (
                    <CardPizza 
                        key={pizza.id}
                        nombre={pizza.name}
                        precio={pizza.price}
                        ingredientes={pizza.ingredients}
                        img={pizza.img}
                    />
                ))}
            </div>            
        </>
    )
}

export default Home