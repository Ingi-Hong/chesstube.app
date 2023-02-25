import { Card, Col, Tag } from "antd";
import { motion } from "framer-motion";
import styles from "../styles/Videocard.module.css";
import {Montserrat, Roboto_Condensed} from '@next/font/google'
const font = Montserrat({
  weight: '400',
  subsets: ['latin']
})

const condensedFont = Roboto_Condensed({
  weight: '400',
  subsets: ['latin']
})

const { Meta } = Card;
function Videocard(props) {
  var card = props.card;
  const handleClick = (url) => {
    window.open(url, "_blank").focus();
  };
  return (
    <Col key={"col" + card.title} xxl={6} xl={6} lg={6} md={12} sm={12} xs={24}>
      <motion.div
        layout
        layoutId={props.layoutId}
        exit={{ opacity: 0, scale: 0, zIndex: 100 }}
        initial={{ scale: 1, opacity: 0 }}
        animate={{ scale: 1, zIndex: 100, opacity: 1 }}
        transition={{ duration: 0.4 }}
        key={"motion"}
        style={{ height: "100%", zIndex: 100 }}
      >
        <Card
        style={{fontFamily: font.style.fontFamily}}
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
          <Meta style={{fontFamily: font.style.fontFamily}} key={"meta" + card.title} title={card.title}  />
          <div key={"by" + card.title}>by {card["Creator.creator_name"]}</div>
          <div
            key={"somestylething" + card.title}
            style={{ height: "1em" }}
          ></div>
          <div  key={"space" + card.title} className={styles.space}>
            <Tag
              className={styles.tag}
              style={{ color: "black", fontFamily: font.style.fontFamily }}
              color="#efe7bc"
              key={"rating" + card.title}
            >
              {card.elo} Rating
            </Tag>
            <Tag
              key={"opening" + card.title}
              className={styles.tag}
              style={{ color: "black", fontFamily: font.style.fontFamily }}
              color="#ffa384"
            >
              {card["Opening.opening"]}
            </Tag>
            <Tag
              key={"color" + card.title}
              className={styles.tag}
              style={{ color: "black", fontFamily: font.style.fontFamily }}
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
