import { Card, Col, Row, Space, Tag } from "antd";
import styles from "../styles/Videodisplay.module.css";
const { Meta } = Card;

function Videodisplay(props) {
  var toDisplay = props.results;
  var columns = props.columns;
  var rows = props.rows;

  return (
    <div>

    <Row gutter={[25, 15]} justify="center">
      {toDisplay.map((card, iteration) => (
        <Col key={"col" + iteration}>
          <Card
            className={styles.card}
            key={"card" + iteration}
            cover=
            {
              <img
                className={styles.thumbnail}
                alt="example"
                src="https://i.ytimg.com/vi/C6RUp21s6BQ/maxresdefault.jpg"
              />
            }
            hoverable
          >
            <Meta
              key={"meta" + iteration}
              title={card.title} 
            />
            <div>by {card.creator}</div>
            <div style={{height: '1em'}}></div>
            <div className={styles.space}>
              <Tag className={styles.tag} style={{color: "black"}} color="#efe7bc">{card.elo} Rating</Tag>
              <Tag className={styles.tag} style={{color: "black"}} color="#ffa384">{card.opening}</Tag>
              <Tag className={styles.tag} style={{color: "black"}} color="#90adc6">{card.isWhite ? "Plays as white" : "Plays as black"}</Tag>
            </div>
          </Card>
        </Col>
      ))}
    </Row>
    </div>
  );
}

export default Videodisplay;
