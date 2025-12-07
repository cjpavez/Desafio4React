import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

function CardPizza({nombre,precio,ingredientes,img}) {
    const capitalize = (str) => {
        if (!str && str !== 0) return '';
        return String(str)
            .trim()
            .split(' ')
            .map((w) => (w.length ? w.charAt(0).toUpperCase() + w.slice(1) : w))
            .join(' ');
    };

    const capitalizeFirst = (s) => {
        if (!s && s !== 0) return '';
        const str = String(s).trim();
        return str.length ? str.charAt(0).toUpperCase() + str.slice(1) : '';
    };

    return (
        <Card className='cardPizzas'>
            <Card.Img variant="top" src={img}/>
            <Card.Body>
                    <Card.Title style={{ fontSize: 'x-large' }}><strong>{capitalizeFirst(nombre)}</strong></Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item style={{ textAlign: 'center' }}>
                    <p style={{ fontSize: 'large' }}>Ingredientes</p>
                    <ul className='listaIngredientes'>
                        {ingredientes.map((ingredientes, key) => (<li key={key} style={{ fontSize: 'large' }}>🍕 {capitalize(ingredientes)}</li>))}
                    </ul>
                </ListGroup.Item>
            </ListGroup>
            <Card.Body>
                <Card.Title style={{ marginBottom: '30px', textAlign: 'center' }}>{`Precio: $${Number(precio).toLocaleString('es-CL')}`}</Card.Title>
                <Card.Title className='btnCarrito'>
                    <Button variant="light">Ver Más <i class="em em-eyes" aria-role="presentation" aria-label="EYES"></i></Button>
                    <Button variant="dark">Añadir 🛒</Button>
                </Card.Title>           
            </Card.Body>
        </Card>    
  );
};

export default CardPizza;