import styled from 'styled-components';
import List from '../List';

const TopicsList = styled(List)`
  display: flex;
  align-items: stretch;
  align-content: flex-start;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
`;

export default TopicsList;
