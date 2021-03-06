import styled from 'styled-components';
import { Spacing } from 'styles/variables';


export const ListContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    padding: ${Spacing.xl};
    justify-content: center;
    flex: 1;
    overflow: auto;
`;