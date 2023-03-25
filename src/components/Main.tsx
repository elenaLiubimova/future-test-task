import { Container } from './Container';
import { ChildrenType } from '../types/types';

const Main = ({ children }: ChildrenType) => {
  return <Container>{children}</Container>;
};

export default Main;
