import React from 'react';
import { LoadingContainer } from './styles';
import loadingGif from './loading.gif';

const Loading = ({ width, height }) => {
    return (
        <LoadingContainer>
            <img src={loadingGif} style={{ width, height }} alt="loading gif" />
        </LoadingContainer>
    )
}

export default Loading