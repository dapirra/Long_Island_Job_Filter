// ==UserScript==
// @name         Long Island Job Filter
// @namespace    https://dapirra.github.io/
// @version      0.1
// @description  Filters out jobs that are not on Long Island from the search results of popular job search engines.
// @match        http*://www.indeed.com/jobs?*
// @require      https://cdnjs.cloudflare.com/ajax/libs/arrive/2.4.1/arrive.min.js
// ==/UserScript==

/*
	Libraries:
	* arrive.js: https://github.com/uzairfarooq/arrive/
*/

const LONG_ISLAND_TOWNS = new Set([
	// Suffolk County
	// https://geographic.org/streetview/usa/ny/suffolk/index.html
	"Amagansett",
	"Amityville",
	"Aquebogue",
	"Babylon",
	"Bay Shore",
	"Bayport",
	"Bellport",
	"Blue Point",
	"Bohemia",
	"Brentwood",
	"Bridgehampton",
	"Brightwaters",
	"Brookhaven",
	"Calverton",
	"Center Moriches",
	"Centereach",
	"Centerport",
	"Central Islip",
	"Cold Spring Harbor",
	"Commack",
	"Copiague",
	"Coram",
	"Cutchogue",
	"Deer Park",
	"East Hampton",
	"East Islip",
	"East Marion",
	"East Moriches",
	"East Northport",
	"East Quogue",
	"East Setauket",
	"Eastport",
	"Farmingville",
	"Fishers Island",
	"Great River",
	"Greenlawn",
	"Greenport",
	"Hampton Bays",
	"Hauppauge",
	"Holbrook",
	"Holtsville",
	"Huntington",
	"Huntington Station",
	"Islandia",
	"Islip",
	"Islip Terrace",
	"Jamesport",
	"Kings Park",
	"Lake Grove",
	"Laurel",
	"Lindenhurst",
	"Manorville",
	"Mastic",
	"Mastic Beach",
	"Mattituck",
	"Medford",
	"Melville",
	"Middle Island",
	"Miller Place",
	"Montauk",
	"Moriches",
	"Mount Sinai",
	"Nesconset",
	"New Suffolk",
	"North Babylon",
	"Northport",
	"Oakdale",
	"Ocean Beach",
	"Orient",
	"Patchogue",
	"Peconic",
	"Port Jefferson",
	"Port Jefferson Station",
	"Quogue",
	"Remsenburg",
	"Ridge",
	"Riverhead",
	"Rocky Point",
	"Ronkonkoma",
	"Sag Harbor",
	"Sagaponack",
	"Saint James",
	"Sayville",
	"Selden",
	"Shelter Island",
	"Shelter Island Heights",
	"Shirley",
	"Shoreham",
	"Smithtown",
	"Sound Beach",
	"South Jamesport",
	"Southampton",
	"Southold",
	"Speonk",
	"Stony Brook",
	"Upton",
	"Wading River",
	"Wainscott",
	"Water Mill",
	"West Babylon",
	"West Islip",
	"West Sayville",
	"Westhampton",
	"Westhampton Beach",
	"Wyandanch",
	"Yaphank",
	// Nassau County
	// https://geographic.org/streetview/usa/ny/nassau/index.html
	"Albertson",
	"Atlantic Beach",
	"Baldwin",
	"Bayville",
	"Bellmore",
	"Bethpage",
	"Carle Place",
	"Cedarhurst",
	"East Meadow",
	"East Norwich",
	"East Rockaway",
	"Elmont",
	"Farmingdale",
	"Floral Park",
	"Franklin Square",
	"Freeport",
	"Garden City",
	"Glen Cove",
	"Glen Head",
	"Glenwood Landing",
	"Great Neck",
	"Greenvale",
	"Hempstead",
	"Hewlett",
	"Hicksville",
	"Inwood",
	"Island Park",
	"Jericho",
	"Lawrence",
	"Levittown",
	"Locust Valley",
	"Long Beach",
	"Lynbrook",
	"Malverne",
	"Manhasset",
	"Massapequa",
	"Massapequa Park",
	"Merrick",
	"Mill Neck",
	"Mineola",
	"New Hyde Park",
	"Oceanside",
	"Old Bethpage",
	"Old Westbury",
	"Oyster Bay",
	"Plainview",
	"Point Lookout",
	"Port Washington",
	"Rockville Centre",
	"Roosevelt",
	"Roslyn",
	"Roslyn Heights",
	"Sea Cliff",
	"Seaford",
	"Syosset",
	"Uniondale",
	"Valley Stream",
	"Wantagh",
	"West Hempstead",
	"Westbury",
	"Williston Park",
	"Woodbury",
	"Woodmere",
	// MISC
	"Long Island"
]);

// const ERROR_RED = '#f44336';
// const ERROR_RED = '#a6001a';
// const ERROR_OUTLINE = 'solid red 3px';
const ERROR_RED = 'rgb(150, 0, 0)';

(function() {
	LIJF_Log('Long Island Job Filter is running');
	switch (location.host) {
		case 'www.indeed.com':
			LIJF_Log('Indeed detected');
			document.arrive('.result', {existing: true}, function() {
				var location = this.querySelector('.location').textContent;
				var matches = location.match(/([^,]+), ([A-Z]{2})(?: ([0-9]{5}))?/) ?? [];
				var town = matches[1];
				var state = matches[2];
				var zip = matches [3];
				if (state !== 'NY' || !LONG_ISLAND_TOWNS.has(town)) {
					this.style.backgroundColor = ERROR_RED;
				}
			});
			break;
	}
})();

function LIJF_Log(text) {
	console.log('%cLIJF: ' + text , 'color: green; background: black; padding: 5px');
}

function LIJF_Error(text) {
	console.log('%cLIJF Error: ' + text , 'color: red; background: black; padding: 5px');
}
