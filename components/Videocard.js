import { Card, Tag, Col } from "antd";
import { motion } from "framer-motion";
import styles from "../styles/Videocard.module.css";
const { Meta } = Card;
function Videocard(props) {
  var card = props.card;
  const handleClick = (url) => {
    window.open(url, "_blank").focus();
  };
  return (
    <Col key={"col" + card.title} xxl={6} xl={6} lg={6} md={8} sm={12} xs={24}>
      <motion.div
        
        exit={{ opacity: 0, y: '90%', zIndex: 100 }}
        initial={{ opacity: 0, y: '-80%',}}
        animate={{ y: 0, zIndex: 100}}
        transition={{duration: 0.25}}
        whileInView={{opacity: 1}}
        whileHover={{scale: 1.03}}
        key={"motion" + card.title}
        style={{height: '100%', zIndex: 100}}
      >
        <Card
          key={"card" + card.title}
          hoverable={true}
          className={styles.card}
          cover={
            <img
              className={styles.thumbnail}
              alt="example"
              src={card.thumbnail}
              style={{ border: 0, frameborder: 0 }}
            />
          }
          onClick={() => handleClick(card.video_link)}
        >
          <Meta key={"meta" + card.title} title={card.title} />
          <div key={"by" + card.title}>by {card["Creator.creator_name"]}</div>
          <div
            key={"somestylething" + card.title}
            style={{ height: "1em" }}
          ></div>
          <div key={"space" + card.title} className={styles.space}>
            <Tag
              className={styles.tag}
              style={{ color: "black" }}
              color="#efe7bc"
              key={"rating" + card.title}
            >
              {card.elo} Rating
            </Tag>
            <Tag
              key={"opening" + card.title}
              className={styles.tag}
              style={{ color: "black" }}
              color="#ffa384"
            >
              {card["Opening.opening"]}
            </Tag>
            <Tag
              key={"color" + card.title}
              className={styles.tag}
              style={{ color: "black" }}
              color="#90adc6"
            >
              {card.plays_as == "white" ? "Plays as white" : "Plays as black"}
            </Tag>
          </div>
        </Card>
      </motion.div>
    </Col>
  );
}

export default Videocard;
