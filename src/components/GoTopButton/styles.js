import styled from 'styled-components';
import { Spacing, Colors, FontSize } from 'styles/variables';

export const Button = styled.span`
    position: fixed;
    color: ${Colors.baseRed};
    font-size: ${FontSize.h1};
    bottom: ${Spacing.sm};
    right: ${Spacing.sm};
    cursor: pointer;
`