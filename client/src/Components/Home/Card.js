import "./card.css"
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

const CustCard =({Business_name, state,stars, categories})=> {   
  
  return (
    <Card style={{ width: '20rem' }}>
        <Card.Header className="title">{Business_name}</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item className="list">Star:{stars}</ListGroup.Item>
        <ListGroup.Item className="list">State:{state}</ListGroup.Item>
        <ListGroup.Item className="list">categories:{categories}</ListGroup.Item>
      </ListGroup>
      <Button className="button" variant="primary">Go somewhere</Button>
    </Card>
  );
}

export default CustCard;


