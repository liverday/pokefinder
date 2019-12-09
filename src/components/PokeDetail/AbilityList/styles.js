import styled from 'styled-components';
import { Capitalize, Bold } from 'styles/typo';
import { Spacing, FontSize } from 'styles/variables';

export const Container = styled.div`
    padding: 0 ${Spacing.md}
`

export const TitleContainer = styled.div`
    margin-bottom: ${Spacing.md};
`;

export const Title = styled(Bold)`
    font-size: ${FontSize.h3};
`

export const Label = styled(Capitalize)`
    font-weight: 900;
`;

export const Ability = styled(Capitalize)`
    margin-top: ${Spacing.xs}
    margin-bottom: ${Spacing.xs};
`;

export const AbilityContainer = styled.div`
    display: flex;
    flex-flow: column nowrap;
    margin-bottom: ${Spacing.sm};
`