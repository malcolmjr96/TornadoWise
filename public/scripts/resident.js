//Layers for resident map
var weatheralerts = L.tileLayer.wms("https://geo.weather.gc.ca/geomet?lang=en&service=WMS", {
    layers: "ALERTS",
    format: "image/png",
    transparent: true,
    attribution: "© Environment and Climate Change Canada",
});

var totalprecip = L.tileLayer.wms("https://geo.weather.gc.ca/geomet-climate?service=WMS&version=1.3.0", {
    layers: "CANGRD.TREND.PR_SUMMER",
    format: "image/png",
    transparent: true,
    attribution: "© Environment and Climate Change Canada",
});

var meantemp = L.tileLayer.wms("https://geo.weather.gc.ca/geomet-climate?service=WMS&version=1.3.0", {
    layers: "CANGRD.TREND.TM_SUMMER",
    format: "image/png",
    transparent: true,
    attribution: "© Environment and Climate Change Canada",
});

var overlaymaps = {
    "Weather Alerts": weatheralerts,
    "Total Precipitation in the Summer": totalprecip,
    "Mean Temperature in the Summer": meantemp,
};

L.control.layers(null, overlaymaps).addTo(map);
