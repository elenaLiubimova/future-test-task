import styled from 'styled-components';
import { ChildrenType } from '../types/types';

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  justify-items: center;
`;

const List = ({ children }: ChildrenType) => {
  return <Wrapper>{children}</Wrapper>;
};

export default List;