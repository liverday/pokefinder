import styled from 'styled-components';
import { Colors } from 'styles/variables';

export const BarContainer = styled.div`
    position: relative;
    width: 100%;
    border-radius: 5px;
    background-color: ${Colors.color};
    height: 25px;
`

export const FillerContainer = styled(BarContainer)`
    background: ${Colors.baseBlueLight};
    height: 100%;
    width: ${({ percentage }) => `${percentage}%` };
    transition: width .88s ease-out, background .2s ease;
    text-align: center;
    border-radius: inherit;
    color: white;
    padding: 3px;

    &:hover {
        background: ${Colors.baseBlue};
    }
`