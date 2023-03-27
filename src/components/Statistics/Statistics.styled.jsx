import styled from 'styled-components';

export const List = styled.ul`
  padding-left: ${p => p.theme.space[4]}px;
`;

export const Item = styled.li`
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.normal};
  line-height: ${p => p.theme.lineHeights.body};
`;

export const Total = styled(Item)`
  font-weight: ${p => p.theme.fontWeights.bold};
`;

export const Line = styled.hr``;
