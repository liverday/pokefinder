import styled from 'styled-components';

import { Colors, FontSize } from 'styles/variables';

export const Container = styled.div`
    display: flex;
    flex-flow: row nowrap;
    width: 12em;
    justify-content: space-between;
    align-items: center;
`

export const ContainerColumn = styled(Container)`
    width: auto;
    justify-content: center;
    align-items: center;
    flex-flow: column nowrap;
`

export const Button = styled.button`
    background: transparent;
    border: none;
    outline: none;
    font-size: ${FontSize.h3};
    height: 20px;

    &:hover {
        color: ${Colors.baseRed};
        cursor: pointer;
    }

    &:disabled {
        color: ${Colors.color}
    }
`

export const Gender = styled.span`
    font-size: ${FontSize.h2};
    color: ${({ color }) => Colors[color] || 'inherit'};
`