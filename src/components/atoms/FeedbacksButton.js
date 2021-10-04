import React from 'react';
import {Link} from "react-router-dom";

const FeedbacksButton = () => {
  return (
    <div>
      <Link to="/feedbacks">Отзывы</Link>
    </div>
  );
};

export default FeedbacksButton;