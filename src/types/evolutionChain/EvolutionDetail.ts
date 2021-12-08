export interface EvolutionDetail {
    gender: number;
    held_item: {name: string; url: string; };
    item: {name: string; url: string; };
    known_move: {name: string; url: string; };
    known_move_type: {name: string; url: string; };
    location: {name: string; url: string; }
    min_affection: number;
    min_beauty: number;
    min_happiness: number;
    min_level: number;
    needs_overworld_rain: boolean;
    party_species: {name: string; url: string; };
    party_type: {name: string; url: string; };
    relative_physical_stats: number;
    time_of_day: string;
    trade_species: {name: string; url: string; };
    trigger: {name: string; url: string; };
    turn_upside_down: boolean;
}