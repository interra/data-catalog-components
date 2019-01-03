import styled from 'styled-components';
import List from '../List';

const TopicsList = styled(List)`
  display: flex;
  align-items: flex-start;
  align-content: stretch;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
`;

export default TopicsList;
