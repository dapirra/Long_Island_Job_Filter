// ==UserScript==
// @name         Long Island Job Filter
// @namespace    https://dapirra.github.io/
// @version      0.1
// @description  Filters out jobs that are not on Long Island from the search results of popular job search engines.
// @match        http*://www.indeed.com/jobs?*
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/arrive/2.4.1/arrive.min.js
// ==/UserScript==

/*
	Libraries:
	* jQuery: https://jquery.com/
	* arrive.js: https://github.com/uzairfarooq/arrive/
*/

(function() {
	console.log('Long Island Job Filter is running');
	switch (document.host) {
		case 'www.indeed.com':
			console.log('Indeed detected');
			break;
	}
})();
