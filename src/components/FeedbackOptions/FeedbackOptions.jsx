import PropTypes from 'prop-types';
import { Button } from 'components/Button/Button';
import { Item, List } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const optionNames = Object.keys(options);

  return (
    <List>
      {optionNames.map(optionName => (
        <Item key={optionName}>
          <Button name={optionName} click={() => onLeaveFeedback(optionName)}>
            {optionName}
          </Button>
        </Item>
      ))}
    </List>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.objectOf(PropTypes.number.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
