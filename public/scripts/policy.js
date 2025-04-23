// POLICY LAYERS DETAILS
var wthstation = L.tileLayer.wms("https://geo.weather.gc.ca/geomet-climate?service=WMS", {
    layers: "AHCCD.STATIONS",
    format: "image/png",
    transparent: true,
    attribution: "© National Resources Canada",
});

var transformers1 = L.tileLayer.wms("https://maps.geogratis.gc.ca/wms/canvec_en?service=WMS", {
    layers: "transformerstation_250k",
    format: "image/png",
    transparent: true,
    attribution: "© National Resources Canada",
});

var transformers2 = L.tileLayer.wms("https://maps.geogratis.gc.ca/wms/canvec_en?service=WMS", {
    layers: "transformer_station_point_50k",
    format: "image/png",
    transparent: true,
    attribution: "© National Resources Canada",
});

var powerlines1 = L.tileLayer.wms("https://maps.geogratis.gc.ca/wms/canvec_en?service=WMS", {
    layers: "powerline_50k",
    format: "image/png",
    transparent: true,
    attribution: "© National Resources Canada",
});

var powerlines2 = L.tileLayer.wms("https://maps.geogratis.gc.ca/wms/canvec_en?service=WMS", {
    layers: "powerline_50k",
    format: "image/png",
    transparent: true,
    attribution: "© National Resources Canada",
});

var landcover = L.tileLayer.wms("https://datacube.services.geo.ca/web/landcover.xml?request=GetCapabilities&service=WMS&version=1.3.0", {
    layers: "landcover-2010",
    format: "image/png",
    transparent: true,
    attribution: "© National Resources Canada",
});

var homevalue = L.tileLayer.wms("https://maps-cartes.services.geo.ca/server2_serveur2/services/StatCan/cd_socioeconomic_variables_2016_en/MapServer/WMSServer?", {
    layers: "9",
    format: "image/png",
    transparent: true,
    attribution: "© Statistics Canada",
});

var abovenrmltemp = L.tileLayer.wms("https://geo.weather.gc.ca/geomet?lang=en&service=WMS", {
    layers: "CanSIPS_100km_AirTemp-ProbAboveNormal-2m_P00M-P02M",
    format: "image/png",
    transparent: true,
    attribution: "© Environment and Climate Change Canada",
});

var precipabv10 = L.tileLayer.wms("https://geo.weather.gc.ca/geomet?lang=en&service=WMS", {
    layers: "REPS.DIAG.6_PRMM.ERGE10",
    format: "image/png",
    transparent: true,
    attribution: "© Environment and Climate Change Canada",
});

var hotnights = L.tileLayer.wms("https://geo.weather.gc.ca/geomet?lang=en&service=WMS", {
    layers: "INDICES.TN20.RCP26_PCTL50",
    format: "image/png",
    transparent: true,
    attribution: "© Environment and Climate Change Canada",
});

var historprecip = L.tileLayer.wms("https://geo.weather.gc.ca/geomet?lang=en&service=WMS", {
    layers: "CMIP5.PR.HISTO.SUMMER.ABS_PCTL50",
    format: "image/png",
    transparent: true,
    attribution: "© Environment and Climate Change Canada",
});

var historictemp = L.tileLayer.wms("https://geo.weather.gc.ca/geomet?lang=en&service=WMS", {
    layers: "CMIP5.TT.HISTO.SUMMER.ANO_PCTL50",
    format: "image/png",
    transparent: true,
    attribution: "© Environment and Climate Change Canada",
});

var historicwind = L.tileLayer.wms("https://geo.weather.gc.ca/geomet?lang=en&service=WMS", {
    layers: "CMIP5.SFCWIND.HISTO.SUMMER.ANO_PCTL50",
    format: "image/png",
    transparent: true,
    attribution: "© Environment and Climate Change Canada",
});

var overlaymaps = {
    "Weather Stations": wthstation,
    transformers1: transformers1,
    transformers2: transformers2,
    powerlines1: powerlines1,
    powerlines2: powerlines2,
    landcover: landcover,
    homevalue: homevalue,
    abovenrmltemp: abovenrmltemp,
    precipabv10: precipabv10,
    hotnights: hotnights,
    historprecip: historprecip,
    historictemp: historictemp,
    historicwind: historicwind,

    "Days above 30C": hotdays,
    // "Total Precipitation in the Summer": totalprecip,
    // "Mean Temperature in the Summer": meantemp,
};

L.control.layers(null, overlaymaps).addTo(map);
