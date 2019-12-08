import React from 'react';

import { ListContainer, StatContainer, StatTitle, Title, TitleContainer } from './styles'
import ProgressBar from 'components/ProgressBar';

const StatusList = ({ stats }) => {
    return (
        <ListContainer>
            <TitleContainer>
                <Title>Status</Title>
            </TitleContainer>
            {stats && stats.length && stats.map(({ stat, base_stat }, i) => (
                <StatContainer key={i}>
                    <StatTitle>
                        {stat.name}
                    </StatTitle>
                    <ProgressBar percentage={base_stat} />
                </StatContainer>
            ))}
        </ListContainer>
    )
}

export default StatusList;