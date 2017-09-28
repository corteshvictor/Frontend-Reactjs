import React from 'react';
import { Button, Thumbnail, Row, Col, Grid } from 'react-bootstrap';
import './FeaturedCourseBox.css';

const FeaturedCourseBox = ({
  imageCourse,
  title,
  provider,
  description,
  price,
  ...rest
}) => {
  return (
    <div className="featured-course" {...rest}>
      <Grid className="fc-detail">
        <Row>
          <Col sm={4}>
            <Thumbnail src={imageCourse} alt={title} />
          </Col>
          <div className="fc-info">
            <p className="fc-title">{title}</p>
            <p className="fc-provider">{provider}</p>
            <p className="fc-description">
              {description ? description : title}
            </p>
          </div>

          <Col>
            <div className="hr-button">
              <hr />
              <Button bsStyle="success">{price ? price : '$ 0.00'}</Button>
            </div>
          </Col>
        </Row>
      </Grid>
    </div>
  );
};

export default FeaturedCourseBox;
