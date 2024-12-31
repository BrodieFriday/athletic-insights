import { Team } from "./team";

export interface Game {

    id?: number;
    visitor_team?: Array<Team>
    home_team?: Array<Team>
    summary?: string;
    venue?: string;
    week?: number;
    date?: number;
    season?: number;
    postseason?: boolean;
    status?: string;
    home_team_score?: number;
    visitor_team_score?: number;
}
