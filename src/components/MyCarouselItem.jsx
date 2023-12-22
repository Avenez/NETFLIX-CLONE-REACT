import { Carousel } from "react-bootstrap";
import Image from "react-bootstrap/Image";

const MyCarouselItem = (props) => (
  <Carousel.Item>
    <Image src={props.imageUrl} className="d-block h-100 w-100" alt="film" />
    <Carousel.Caption>
      <h3>{props.title}</h3>
      <p>{props.year}</p>
    </Carousel.Caption>
  </Carousel.Item>
);

export default MyCarouselItem;
