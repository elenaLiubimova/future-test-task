import styled from 'styled-components';

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
  justify-items: center;
`;

const List = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default List;