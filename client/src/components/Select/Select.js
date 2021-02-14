import styled from "styled-components";
// import PropTypes from 'prop-types'

// *** data, hooks & context

// *** components

// *** styled components
const Element = styled.select`
  min-width: 12rem;
  max-width: 15rem;
  padding: 0 0.5rem;
  border-radius: 0.25rem;
`;

const Select = ({ name, value, options, onChange, ...props }) => {
  return (
    <Element name={name} value={value} onChange={onChange} {...props}>
      {options.length ? (
        options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))
      ) : (
        <option>No Available Options</option>
      )}
    </Element>
  );
};

// Select.defaultProps = {}

// Select.propTypes = {}

export default Select;
