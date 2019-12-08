import styled from 'styled-components';

export const Sprite = styled.img`
    width: ${({ width }) => width || '5em'};
    height: ${({ height }) => height || '5em'};
    display: none;
`;
