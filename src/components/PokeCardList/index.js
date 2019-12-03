import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPokes } from 'actions';
import { ListContainer } from './styles';
import Loading from 'components/Loading';
import PokeCard from '../PokeCard';

const PokeCardList = ({ pokes, isFetching, fetchPokes }) => {
    useEffect(() => {
        fetchPokes();
    }, [fetchPokes]);

    return (
        <ListContainer>
            {pokes && pokes.length && !isFetching ? (
                pokes.map((poke, i) => <PokeCard poke={poke} key={i} />)
            ) : (
                <Loading />
            )}
        </ListContainer>
    )
}

const mapStateToProps = ({ pokeReducer }) => {
    const { pokesContext, isFetching } = pokeReducer;
    const { pokes } = pokesContext

    return {
        pokes,
        isFetching
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchPokes: () => dispatch(fetchPokes())
})


export default connect(mapStateToProps, mapDispatchToProps)(PokeCardList);