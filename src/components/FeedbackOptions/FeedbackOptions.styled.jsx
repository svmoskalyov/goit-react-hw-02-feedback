import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  justify-content: center;
`;

export const Item = styled.li`
  margin-right: ${p => p.theme.space[5] - 2}px;
`;
