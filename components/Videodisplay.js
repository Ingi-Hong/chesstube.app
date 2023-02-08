import { Card, Col, Row, Space, Tag, Spin, Empty, Typography } from "antd";
import styles from "../styles/Videodisplay.module.css";
import { motion, AnimatePresence } from "framer-motion";
import Videocard from "./Videocard";

const { Meta } = Card;

function Videodisplay(props) {
  var results = props.results;
  var toDisplay;
  if (results === undefined) {
    toDisplay = [];
  }else{
    toDisplay = results.Videos; 
  }

  {
    if (toDisplay.length == 0) {
      return (
        <motion.div
        key='nothingToDisplay'
        initial={{opacity: 0}}
        exit={{opacity: 0}}
        animate={{opacity: 1}}
        >

        <Empty
          image="/mac.jpg"
          imageStyle={{
            height: "70dvh",
          }}
          description={
            <span>
              <Typography.Title level={2}>
                Your search didn't return any results!
              </Typography.Title>
            </span>
          }
          />
          </motion.div>
      );
    }
  }

  const DisplayThis = toDisplay.map((card, iteration) => (
    <Videocard key={"videocard" + iteration} card={card} />
  ));
  return (
    <motion.div key="motiondivOutter" exit={{ opacity: 0, y: "10%" }}>
      <div key="wrappa">
        <Row key={"rowID"} justify="space-evenly" gutter={[16, 16]}>
          <AnimatePresence key="animatepresenceinner">
            {DisplayThis}
          </AnimatePresence>
        </Row>
      </div>
    </motion.div>
  );
}

export default Videodisplay;
