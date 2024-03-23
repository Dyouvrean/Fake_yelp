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
        <Card.Header className="title" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span onClick={redirectToOtherPage}>{info.name}</span>
         <span>{new Date(info.date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}</span>
         </Card.Header>
        <div>
        <span style={{ marginRight: '30px' }}>Star: {info.stars}</span>
        <span style={{ marginRight: '30px' }}>Cool: {info.cool}</span>
        <span style={{ marginRight: '30px' }}>Funny: {info.funny}</span>
        <span>Useful: {info.useful}</span>
        </div>
        
      <ListGroup variant="flush">
        <ListGroup.Item className="list">{info.text}</ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default ReviewCard;
