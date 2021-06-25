import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
    constructor() {
        super();
        this.state = {
            pokemonIndex: 0,
            pokemonType: 'all',
        }
        this.nextPokemon = this.nextPokemon.bind(this);
        this.filterPokemons = this.filterPokemons.bind(this);
    }

    changeType(type) {
        this.setState({ pokemonIndex:0, pokemonType: type });
    }

    filterPokemons(type) {
        if (type === 'all') {
            return this.props.pokemons;
        }
        return this.props.pokemons.filter((pokemon) => pokemon.type === type);
    }

    nextPokemon(list) {
        if (this.state.pokemonIndex + 1 > list.length - 1) {
            this.setState({ pokemonIndex: 0 });
        } else {
            this.setState((previous, _prop) => ({ pokemonIndex: previous.pokemonIndex + 1 }));
        }
    }

    render() {
        const pokemonList = this.filterPokemons(this.state.pokemonType);
        return (
            <div className="pokedex">
                <Pokemon pokemon={ pokemonList[this.state.pokemonIndex] } />
                <div>
                    <button onClick={ () => this.nextPokemon(pokemonList) } >Próximo pokémon</button>
                    <br/>
                    <button onClick={ () => this.changeType('all') } >All</button>
                    <button onClick={ () => this.changeType('Fire') } >Fire</button>
                    <button onClick={ () => this.changeType('Psychic') } >Psychic</button>
                </div>
            </div>
        );
    }
}

export default Pokedex;
