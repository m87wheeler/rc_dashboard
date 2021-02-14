import styled from "styled-components";
// import PropTypes from 'prop-types'

// *** data, hooks & context

// *** components

// *** styled components
const Wrapper = styled.nav`
  width: 100%;
  height: 3rem;
  padding: 0 1rem;
  display: grid;
  grid-template-columns: 1fr auto;
  background: #fff;

  ul {
    height: inherit;
    display: flex;
    flex-flow: row nowrap;
    gap: 2rem;
    align-items: center;
    list-style: none;

    li {
      margin-top: 0.1rem;
      font-size: 0.8rem;
      font-weight: 500;
      letter-spacing: 0.05em;
      color: #111;
      cursor: pointer;

      &:after {
        content: "";
        display: block;
        width: 0;
        height: 0.1rem;
        background: red;
        transition: width 0.2s ease-in-out;
      }

      &:hover {
        &:after {
          width: 100%;
        }
      }
    }
  }
`;

const Nav = ({ onClick, ...props }) => {
  return (
    <Wrapper {...props}>
      <ul>
        <li>Home</li>
        <li>Claims</li>
      </ul>
      <button onClick={onClick} style={{ alignSelf: "center" }}>
        Toggle Theme
      </button>
    </Wrapper>
  );
};

// Nav.defaultProps = {}

// Nav.propTypes = {}

export default Nav;
