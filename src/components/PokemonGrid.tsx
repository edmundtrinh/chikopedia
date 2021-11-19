import React from "react";
import "../scss/PokemonGrid.scss";
import PokemonGridResults from "./PokemonGridResults";
import { SimplePokemon } from "../types/SimplePokemon";

export interface PokemonGridProps {
  isLoading: boolean;
  allPokemon: SimplePokemon[];
}

export default function PokemonGrid({
  isLoading,
  allPokemon,
}: PokemonGridProps) {
  return (
    <div id="pokemon-grid-container">
      {isLoading ? (
        <span> Loading ... </span>
      ) : (
        <PokemonGridResults pokemon={allPokemon} />
      )}
    </div>
  );
}
