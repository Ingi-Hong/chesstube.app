import { Card, Empty, Row, Typography } from "antd";
import {
  AnimatePresence,
  AnimateSharedLayout,
  LayoutGroup,
  motion,
} from "framer-motion";
import Videocard from "./Videocard";

const { Meta } = Card;

function Videodisplay(props) {
  var results = props.results;
  var toDisplay;
  if (results === undefined) {
    toDisplay = [];
  } else {
    toDisplay = results.Videos;

    if (toDisplay.length == 0) {
      return (
        <motion.div
          key="nothingToDisplay"
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          animate={{ opacity: 1 }}
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
    <Videocard layoutId={card.title} key={"videocard" + iteration} card={card} />
  ));
  return (
    <div key="wrappa">
      <Row key={"rowID"} justify="space-evenly" gutter={[16, 16]}>
        <LayoutGroup key={"layoutgroup"}>
          <AnimatePresence key="animatepresenceinner">
            {DisplayThis}
          </AnimatePresence>
        </LayoutGroup>
      </Row>
    </div>
  );
}

export default Videodisplay;
