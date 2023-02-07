import { Card, Col, Row, Space, Tag, Spin, Empty, Typography } from "antd";
import styles from "../styles/Videodisplay.module.css";
import { motion, AnimatePresence } from "framer-motion";

const { Meta } = Card;

function Videodisplay(props) {
  const handleClick = (url) => {
    window.open(url, "_blank").focus();
  };

  var toDisplay = props.results;
  var isLoading = props.isLoading;

  if (toDisplay === undefined) {
    return <div>Error: Undefined passed</div>;
  }

  console.log('toDisplay', toDisplay)
  if (toDisplay.length == 0){
    return <Empty 
    image='/mac.jpg'
    imageStyle={{
      height: '70dvh'
    }}
    description={
      <span>
        <Typography.Title level={2}>Your search didn't return any results!</Typography.Title> 
      </span>
    }
    />
  }

  return (
    <div>
      <Spin spinning={isLoading}>
        <AnimatePresence initial={true}>
          <Row justify="space-evenly" gutter={[16, 16]}>
            {toDisplay.map((card, iteration) => (
              <Col xxl={6} xl={6} lg={6} md={8} sm={12} xs={24}>
                <motion.div
                  key={"motion" + iteration}
                  animate={{ x: 0, y: 0 }}
                  exit={{ opacity: 0 }}
                  whileHover={{
                    scale: 1.01,
                    transition: { duration: 0.03 },
                  }}
                >
                  <Card
                    hoverable={true}
                    className={styles.card}
                    key={"card" + iteration}
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
                    <Meta key={"meta" + iteration} title={card.title} />
                    <div>by {card["Creator.creator_name"]}</div>
                    <div style={{ height: "1em" }}></div>
                    <div className={styles.space}>
                      <Tag
                        className={styles.tag}
                        style={{ color: "black" }}
                        color="#efe7bc"
                      >
                        {card.elo} Rating
                      </Tag>
                      <Tag
                        className={styles.tag}
                        style={{ color: "black" }}
                        color="#ffa384"
                      >
                        {card["Opening.opening"]}
                      </Tag>
                      <Tag
                        className={styles.tag}
                        style={{ color: "black" }}
                        color="#90adc6"
                      >
                        {card.plays_as == "white"
                          ? "Plays as white"
                          : "Plays as black"}
                      </Tag>
                    </div>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </AnimatePresence>
      </Spin>
    </div>
  );
}

export default Videodisplay;
