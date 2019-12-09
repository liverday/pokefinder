import styled from 'styled-components';
import { Colors } from 'styles/variables';

export const BarContainer = styled.div`
    position: relative;
    width: 100%;
    border-radius: 5px;
    background-color: ${({ percentage }) => !!percentage ? Colors.basePink : Colors.color};
    height: 25px;
    font-size: ${({ fontSize }) => fontSize ? `${fontSize}px` : 'inherit'};
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
    font-size: inherit;
    &:hover {
        background: ${Colors.baseBlue};
    }
`