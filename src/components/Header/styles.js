import styled from 'styled-components';
import { Colors, Spacing, FontSize } from 'styles/variables';
import { Title } from 'styles/typo';

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

export const TitleContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column wrap;
`;

export const TitleSubText = styled(Title)`
    margin-top: ${Spacing.xs};
`;