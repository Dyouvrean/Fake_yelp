// import "./card.css"
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const  ReviewCard =({info})=> {   
    const navigate = useNavigate();
    const redirectToOtherPage = () => {
    navigate(`/User/${info.user_id}`);
    };

  return (
    <Card >
        <Card.Header className="title" onClick={redirectToOtherPage}>{info.name}
        <div>
        <span style={{ marginRight: '30px' }}>Star: {info.stars}</span>
        <span style={{ marginRight: '30px' }}>Cool: {info.cool}</span>
        <span style={{ marginRight: '30px' }}>Funny: {info.funny}</span>
        <span>Useful: {info.useful}</span>
        </div>
        </Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item className="list">{info.text}</ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default ReviewCard;
