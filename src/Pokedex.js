import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
    constructor() {
        super();
        this.state = {
            pokemonIndex: 0,
        }
        this.nextPokemon = this.nextPokemon.bind(this);
    }

    nextPokemon() {
        if (this.state.pokemonIndex + 1 > this.props.pokemons.length - 1) {
            this.setState({ pokemonIndex : 0 });
        } else {
            this.setState((previous, _prop) => ({ pokemonIndex: previous.pokemonIndex + 1 }));
        }
    }

    render() {
        return (
            <div className="pokedex">
                <Pokemon pokemon={ this.props.pokemons[this.state.pokemonIndex] } />
                <button onClick={this.nextPokemon} >Próximo pokémon</button>
            </div>
        );
    }
}

export default Pokedex;
