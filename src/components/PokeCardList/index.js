import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPokes } from 'actions';
import { ListContainer } from './styles';
import Loading from 'components/Loading';
import PokeCard from '../PokeCard';
import InfiniteScroll from 'react-infinite-scroller';

const PokeCardList = ({ pokes, fetchPokes, hasMore }) => {
    const fetchMore = (page) => {
        fetchPokes(page, 40)
    }

    useEffect(() => {
        fetchMore(0);
    }, [])

    return (
        <InfiniteScroll
            pageStart={0}
            loadMore={fetchMore}
            hasMore={hasMore}
            loader={<Loading key={0}/>}
        >
            <ListContainer>
                {pokes.map((poke, i) => <PokeCard poke={poke} key={i} />)}
            </ListContainer>
        </InfiniteScroll>
    )
}

const mapStateToProps = ({ pokeReducer }) => {
    const { pokesContext } = pokeReducer;
    const { pokes, next } = pokesContext;

    return {
        pokes,
        hasMore: !!next
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchPokes: (page, pageSize) => dispatch(fetchPokes(page, pageSize))
})


export default connect(mapStateToProps, mapDispatchToProps)(PokeCardList);