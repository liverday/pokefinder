import styled from 'styled-components';

import { Colors, Spacing, FontSize } from 'styles/variables';
import { Bold } from 'styles/typo';

export const Container = styled.div`
    display: flex;
    flex-flow: column nowrap;
    height: 100%;
    width: 100%;
`;

export const Header = styled.div`
    display: flex;
    width: 100%;
    border-radius 5px 5px 0 0;
    padding: ${Spacing.sm}
    background-color: ${Colors.color};
    border: thin solid ${Colors.color};
    border-bottom: none;
    justify-content: center;
`

export const HeaderTitle = styled(Bold)`
    font-size: ${FontSize.h3}
`;

export const Body = styled.div`
    border: thin solid rgba(${Colors.colorDarkRGB}, .1);
    border-top: none;
    display: flex;
    flex-flow: row nowrap;
    height: 100%;
    border-radius: 0 0 5px 5px;
`;

export const Column = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    flex: 1;
    align-items: ${({ alignItems }) => alignItems || 'center'};
    padding: ${Spacing.sm};
`;

export const Label = styled(Bold)`
    margin-bottom: ${({ marginBottom }) => marginBottom || Spacing.sm };
`;

export const Detail = styled(Label)`
    font-weight: normal;
`;