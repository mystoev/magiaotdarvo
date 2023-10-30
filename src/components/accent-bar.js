import styled from 'styled-components';

const AccentBarBase = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.colors.accent};
  opacity: 0.5;
`;

export const AccentBarSlim = styled(AccentBarBase)`
  height: 1px;
`;

export const AccentBar = styled(AccentBarBase)`
  height: 3px;
`;
