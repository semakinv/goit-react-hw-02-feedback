import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const FeedbackButton = styled.button`
  margin: 5px;
  padding: 2px;
  border-radius: 5px;

  &::first-letter {
    text-transform: uppercase;
  }
`;
const FeedbackButtonLi = styled.li`
  list-style: none;
  display: inline;
`;
const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <>
      <ul>
        {Object.keys(options).map(option => (
          <FeedbackButtonLi key={option}>
            <FeedbackButton type="button" onClick={onLeaveFeedback}>
              {option}
            </FeedbackButton>
          </FeedbackButtonLi>
        ))}
      </ul>
    </>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.objectOf(PropTypes.number).isRequired,
};

export default FeedbackOptions;
