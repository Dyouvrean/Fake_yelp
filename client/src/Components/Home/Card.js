import "./card.css"
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const CustCard =({Business_name, state,stars, categories,Business_id})=> {   
  const navigate = useNavigate();
  const redirectToOtherPage = () => {
  navigate(`/Business/${Business_id}`);
  };
  return (
    <Card style={{ width: '40rem' }}>
        <Card.Header className="title">{Business_name}</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item className="list">Star:{stars}</ListGroup.Item>
        <ListGroup.Item className="list">State:{state}</ListGroup.Item>
        <ListGroup.Item className="list">categories:{categories}</ListGroup.Item>
      </ListGroup>
      <Button className="button" variant="primary" onClick={redirectToOtherPage}>Go Detail Page</Button>
    </Card>
  );
}

export default CustCard;


