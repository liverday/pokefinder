import styled from 'styled-components';
import { FontColors, FontSize } from 'styles/variables';

export const Text = styled.span`
`;

export const Bold = styled(Text)`
    font-weight: 900;
`

export const Title = styled(Text)`
    font-family: 'Bangers', cursive;
    color: #FFF;
    width: auto;
    display: block;
    font-size: calc(${FontSize.h1} + ${FontSize.h5});
    text-shadow: 3px 0 ${FontColors.primaryDark}
`

export const Capitalize = styled(Text)`
    text-transform: capitalize;
    font-family: inherit;
`