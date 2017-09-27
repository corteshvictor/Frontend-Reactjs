import React from 'react';

import './CourseBox.css';

const CourseBox = ({ title, provider, description, price, ...rest }) => {
  return (
    <div className="course-box" {...rest}>
      <div className="cb-detail">
        <div className="info-course">
          <p className="cb-title">{title}</p>
          <p className="cb-provider">{provider}</p>
          <p className="cb-description">{description}</p>
        </div>
        <hr />
        <button>
          {price - Math.floor(price) === 0 ? `${price}.00` : price}
        </button>
      </div>
    </div>
  );
};

export default CourseBox;
