var fetch = global.nodemodule["node-fetch"];

var covid_get = function covid_get(type, data) {
	(async function () {
		var fetchdata = await fetch("https://code.junookyo.xyz/api/ncov-moh/data.json");
		var jsondatax = await fetchdata.json();
		var jsondata = jsondatax.data || {};
		var vn = jsondata.vietnam || {};
		var global = jsondata.global || {};
		var returntext = `Số ca bình phục/tử vong/nhiễm COVID-19 (K/D/A): \r\n- Việt Nam: ${vn.recovered}/${vn.deaths}/${vn.cases}\r\n- Thế giới: ${global.recovered}/${global.deaths}/${global.cases}`;
		return {
			handler: "internal",
			data: returntext
		}
	})().then(function (returndata) {
		data.return(returndata);
	});
} 

module.exports = {
	covid_get: covid_get
}