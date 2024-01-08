export class Tiles {
	ALL_TILES : Tile[] = [
		{
			videoUrl: "assets/v2/vid/home.mov",
			pageUrl: "/v2/home",
			label: "Home",
			startTime: 1
		},
		{
			videoUrl: "assets/v2/vid/work.mov",
			pageUrl: "/v2/work",
			label: "Work",
			startTime: 0
		},
		{
			videoUrl: "assets/v2/vid/education.mov",
			pageUrl: "/v2/education",
			label: "Education",
			startTime: 6
		},
		{
			videoUrl: "assets/v2/vid/life.mov",
			pageUrl: "/v2/about",
			label: "About",
			startTime: 0
		},
		{
			videoUrl: "assets/v2/vid/connect.mov",
			pageUrl: "/v2/connect",
			label: "Connect",
			startTime: 1.5
		}
	]

	getAllTiles() {
		return this.ALL_TILES
	}

	getFilteredTiles(label : string) {
		return this.ALL_TILES.filter((tile) => tile.label?.toLowerCase() != label.toLowerCase());
	}
}