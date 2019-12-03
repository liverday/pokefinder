import styled from 'styled-components';
import { FontColors, FontSize } from 'styles/variables';

export const Text = styled.span`
    font-family: 'Roboto', sans-serif;
`;

export const Title = styled(Text)`
    font-family: 'Bangers', cursive;
    color: #FFF;
    width: auto;
    display: block;
    font-size: calc(${FontSize.h1} + ${FontSize.h5});
    text-shadow: 3px 0 ${FontColors.primaryDark}
`