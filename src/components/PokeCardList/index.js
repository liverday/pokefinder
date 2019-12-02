import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPokes } from 'actions';
import { ListContainer } from './styles';

const PokeCardList = ({ pokes, isFetching, fetchPokes }) => {
    useEffect(() => {
        fetchPokes();
    }, [fetchPokes]);

    return (
        <ListContainer>
            {pokes && isFetching ? (
                pokes.map((poke, i) => <div key={i}></div>)
            ) : (
                'Loading...'
            )}
        </ListContainer>
    )
}

const mapStateToProps = ({ pokeReducer }) => {
    const { pokes, isFetching } = pokeReducer;

    return {
        pokes,
        isFetching
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchPokes: () => dispatch(fetchPokes())
})


export default connect(mapStateToProps, mapDispatchToProps)(PokeCardList);