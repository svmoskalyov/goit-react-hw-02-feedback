import styled from 'styled-components';

export const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: ${p => p.theme.space[2]}px;
  margin: ${p => p.theme.space[0]}px;
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;
  text-transform: capitalize;
  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.normal};
  background-color: ${p => p.theme.colors.primary};
  color: ${p => p.theme.colors.white};
  cursor: pointer;

  :hover {
    background-color: ${p => {
      let color = '';
      switch (p.name) {
        case 'good':
          color = 'green';
          break;
        case 'neutral':
          color = 'grey';
          break;
        case 'bad':
          color = 'red';
          break;
        default:
          color = 'white';
      }
      return color;
    }};
  }
`;
