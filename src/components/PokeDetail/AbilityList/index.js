import React from 'react';

import { Container, AbilityContainer, Ability, Label, Title } from './styles';
import { TitleContainer } from '../StatusList/styles';

const AbilityList = ({ abilities }) => {
    return (
        <Container>
            <TitleContainer>
                <Title>Abilities</Title>
            </TitleContainer>
            {abilities && abilities.length && abilities.map(({ ability, is_hidden }, i) => (
                <AbilityContainer key={i}>
                    <Label>
                        {is_hidden ? 'Hidden Ability' : 'Common Ability'}
                    </Label>
                    <Ability>
                        {ability.name}
                    </Ability>
                </AbilityContainer>
            ))}
        </Container>
    )
}

export default AbilityList;