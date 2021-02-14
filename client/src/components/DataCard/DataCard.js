import styled from "styled-components";
// import PropTypes from 'prop-types'

// *** data, hooks & context

// *** components

// *** styled components
const Wrapper = styled.div`
  padding: 1rem 1rem 2.5rem;
  display: grid;
  grid-template-rows: auto 1fr auto;
  row-gap: 0.5rem;

  p {
    line-height: 1;

    &:first-of-type {
      font-size: 0.9rem;
      font-weight: 500;
      color: #555;

      span {
        font-size: 0.8rem;
        font-weight: 400;
      }
    }

    &:nth-of-type(2) {
      font-size: 1.9rem;
      font-weight: 700;
      color: #111;
    }

    &:last-of-type {
      font-size: 0.8rem;
      font-weight: 700;
      color: #555;

      span {
        font-weight: 400;
      }
    }
  }
`;

const DataCard = ({ title, subtitle, currentData, prevData, ...props }) => {
  return (
    <Wrapper {...props}>
      <p>
        {title} <span>{subtitle}</span>
      </p>
      <p>{currentData}</p>
      <p>
        {prevData}
        <span> (previous month)</span>
      </p>
    </Wrapper>
  );
};

// DataCard.defaultProps = {}

// DataCard.propTypes = {}

export default DataCard;
