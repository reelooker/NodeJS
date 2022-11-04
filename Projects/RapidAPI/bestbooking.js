const http = require("https");

const options = {
	"method": "GET",
	"hostname": "best-booking-com-hotel.p.rapidapi.com",
	"port": null,
	"path": "/booking/best-accommodation?cityName=Berlin&countryName=Germany",
	"headers": {
		"X-RapidAPI-Key": "5dbd4184e4mshd551a55bf8fd0f9p18eb3ajsnd48273def2fb",
		"X-RapidAPI-Host": "best-booking-com-hotel.p.rapidapi.com",
		"useQueryString": true
	}
};

const req = http.request(options, function (res) {
	const chunks = [];

	res.on("data", function (chunk) {
		chunks.push(chunk);
	});

	res.on("end", function () {
		const body = Buffer.concat(chunks);
		console.log(body.toString());
	});
});

req.end();