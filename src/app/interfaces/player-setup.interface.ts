import { Player } from "./player.interface";

export interface IPlayerSetupProps {
	onPlayersReady: (playerX: Player, playerO: Player) => void;
}