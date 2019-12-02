import styled from 'styled-components';
import { Colors, Spacing } from 'styles/variables';

export const HeaderContainer = styled.div`
    display: flex;
    padding: ${Spacing.sm};
    justify-content: center;
    align-items: center;
    background-color: ${Colors.headerBackground};
    width: 100%;
`;

export const TitleImage = styled.img`
    width: 450px;
    height: 125px;
`;