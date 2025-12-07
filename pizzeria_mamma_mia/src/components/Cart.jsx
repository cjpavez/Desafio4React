import { useState } from "react";
import SelectPizza from "./SelectPizza";
import { pizzaCart } from "../pizzas"

function Cart() {
    const [cart, setCart] = useState(pizzaCart);

    const increase = (id) => {
        setCart((prev) => prev.map((p) => p.id === id ? { ...p, count: p.count + 1 } : p));
    };

    const decrease = (id) => {
        setCart((prev) => prev.map((p) => p.id === id ? { ...p, count: Math.max(0, p.count - 1) } : p));
    };

    const total = cart.reduce((sum, p) => sum + (Number(p.price) * Number(p.count || 0)), 0);

    return(
        <>
            <div className="cartPizzas">
                <h4>Detalles del pedido</h4>
                <div>
                    {cart.map((item) => (
                        <SelectPizza 
                            key={item.id}
                            idn={item.id}
                            nombre={item.name}
                            precio={item.price}
                            cantidad={item.count}
                            imagen={item.img}
                            onIncrease={() => increase(item.id)}
                            onDecrease={() => decrease(item.id)}
                        />
                    ))}  
                </div>        
                <h3>{`Total: $${Number(total).toLocaleString('es-CL')}`}</h3>
                <button style={{ color: 'white', backgroundColor: '#212529', borderRadius: '5px', height: '30px', width: '60px' }}>Pagar</button>
            </div>
        </>        
    );    
};

export default Cart;