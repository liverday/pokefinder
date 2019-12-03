import styled from 'styled-components';
import { Colors, FontColors, Spacing, FontSize } from 'styles/variables';
import { Title, Text } from 'styles/typo';

export const CardContainer = styled.div`
    display: flex;
    flex-flow: column nowrap;
    width: 200px;
    border-radius: 5px;
    box-shadow: 1px 1px 5px rgba(${Colors.colorDarkRGB}, .7);
    transition: all .25s ease;
    margin: 0 0 ${Spacing.lg} ${Spacing.lg};

    &:hover {
        box-shadow: 2px 2px 7px ${Colors.colorDark};
    }
`

export const Header = styled.div`
    background: ${Colors.color}
    border-radius: 5px 5px 0 0;
    width: 100%;
    padding: ${Spacing.xs};
`;

export const HeaderTitle = styled(Title)`
    color: ${FontColors.primaryDark};
    font-size: ${FontSize.h4};
    text-shadow: none;
    font-family: 'Press Start 2P', cursive;
`;

export const Body = styled.div`
    display: flex;
    padding: ${Spacing.xs};
    flex-flow: column nowrap;
    align-items: center;
    flex: 1;
    text-shadow: none;
`

export const Sprite = styled.img`
    width: 5em;
    height: 5em;
    display: none;
`;


export const PokeTitle = styled(Text)`
    font-size: ${FontSize.h3};
    text-transform: capitalize;
    margin-bottom: ${Spacing.xs};
`