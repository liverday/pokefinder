import styled from 'styled-components';
import { Capitalize, Bold } from 'styles/typo';
import { Spacing, FontSize } from 'styles/variables';

export const ListContainer = styled.div`
    flex: 1;
    margin-left: ${Spacing.md}
    text-align: center;
`;

export const TitleContainer = styled.div`
    margin-bottom: ${Spacing.md};
`

export const Title = styled(Bold)`
    font-size: ${FontSize.h3};
`

export const StatContainer = styled.div`
    display: flex;
    margin-top: ${Spacing.xs};
    align-items: center;
    text-align: left;
`

export const StatTitle = styled(Capitalize)`
    margin-right: ${Spacing.sm};
    width: 150px;
`