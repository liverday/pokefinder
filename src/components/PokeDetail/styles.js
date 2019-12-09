import styled from 'styled-components';

import { Colors, Spacing, FontColors, FontSize } from 'styles/variables';
import { Title, Text } from 'styles/typo';

const BaseContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
`

export const Container = styled(BaseContainer)`
    flex-flow: row nowrap;
    padding: ${Spacing.lg};
    background-color: ${Colors.redLighten};
    flex: 1;
`

export const ContainerContent = styled(BaseContainer)`
    border-radius: 5px;
    flex-flow: column nowrap;
    background-color: white;
    height: auto;
    min-height: 100%;
`

export const Header = styled.div`
    background: ${Colors.color}
    border-radius: 5px 5px 0 0;
    width: 100%;
    padding: ${Spacing.md};
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
`;

export const HeaderTitle = styled(Title)`
    color: ${FontColors.primaryDark};
    font-size: ${FontSize.h3};
    text-shadow: none;
    font-family: 'Press Start 2P', cursive;
`;

export const Body = styled.div`
    display: flex;
    padding: ${Spacing.md};
    flex-flow: column nowrap;
    flex: 1;
`

export const TypeList = styled.div`
    display: flex;
    flex-flow: row nowrap;
    flex: 1;
    justify-content: flex-end;
`

export const Type = styled.span`
    margin-left: ${Spacing.sm};
    padding: ${Spacing.xs};
    background-color: ${({ backgroundColor }) => backgroundColor };
    color: white;
    text-transform: capitalize;
    border-radius: 5px;
    font-size: ${FontSize.h6}
    font-family: 'Press Start 2P', cursive;
`

export const Row = styled.div`
    display: flex;
    height: ${({ height }) => height ? `${height}px` : '100%'};
    width: 100%;
`

export const RowCentered = styled(Row)`
    justify-content: center;
`

export const FlavorText = styled(Text)`
    margin: ${Spacing.xl} 0 
`
