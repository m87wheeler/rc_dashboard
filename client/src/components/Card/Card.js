import styled from "styled-components";
// import PropTypes from 'prop-types'

// *** data, hooks & context

// *** components

// *** styled components
const Wrapper = styled.div`
  display: inline-flex;
  flex-flow: row nowrap;
  column-gap: 0.5rem;
  padding: 0.5rem;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  border: none;
  border-radius: 0.25rem;
  background: #fff;
`;

const Card = ({ children, ...props }) => {
  return <Wrapper {...props}>{children}</Wrapper>;
};

// Card.defaultProps = {}

// Card.propTypes = {}

export default Card;
