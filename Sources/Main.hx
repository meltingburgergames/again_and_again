package;

import game.Game;
import kha.Assets;
import slayter.Slayter;

class Main {
	private static function main() {
		var slayter = new Slayter("Game", 1366, 768, (slayter) -> {
			Assets.loadEverything(function() {
				slayter.root.addChild(new Game(1366, 768));
			});
		});
	}
}
