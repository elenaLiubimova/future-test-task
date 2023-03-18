import styled from 'styled-components';

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  row-gap: 28px;
  justify-items: center;
`;

const List = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default List;