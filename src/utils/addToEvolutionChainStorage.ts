import getEvolutionChainStorage from "./getEvolutionChainStorage";
import { PokemonEvolutionTreeNode } from "../types/PokemonEvolutionTreeNode";
import { EVOLUTION_CHAIN_KEY } from "../variables/globalVariables";

export default function addToEvolutionChainStorage(
  pokemonEvolutionId: number,
  evolutionChain: PokemonEvolutionTreeNode
) {
  const evolutionChains = getEvolutionChainStorage();
  evolutionChains[pokemonEvolutionId] = evolutionChain;

  sessionStorage.setItem(EVOLUTION_CHAIN_KEY, JSON.stringify(evolutionChains));
}
