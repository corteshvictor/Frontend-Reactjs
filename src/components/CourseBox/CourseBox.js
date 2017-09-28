import React from 'react';
import { Button, Col, Thumbnail } from 'react-bootstrap';

import './CourseBox.css';

const CourseBox = ({ title, provider, description, price, ...rest }) => {
  return (
    <div className="course-box" {...rest}>
      <Col xs={6} md={4}>
        <Thumbnail className="cb-col">
          <div className="info-course">
            <p className="cb-title">{title}</p>
            <p className="cb-provider">{provider}</p>
            <p className="cb-description">{description}</p>
          </div>
          <div className="cb-hrbutton">
            <hr />
            <Button bsStyle="success">
              {price - Math.floor(price) === 0 ? `${price}.00` : price}
            </Button>
          </div>
        </Thumbnail>
      </Col>
    </div>
  );
};

export default CourseBox;
