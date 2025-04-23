let latitude, longitude;

var map = L.map("map" , {
    center: [60.18, -102.20],
    zoom: 3,
    crs: L.CRS.EPSG3857 // crs: L.CRS.EPSG3857,
});

var layer = L.marker([0, 0]).addTo(map);

let provinceCodes = {
    10: "NL",
    11: "PE",
    12: "NS",
    13: "NB",
    24: "QC",
    35: "ON",
    46: "MB",
    47: "SK",
    48: "AB",
    59: "BC",
    60: "YT",
    61: "NT",
    62: "NU",
    72: "Undersea Feature",
    73: "International Waters",
};

L.tileLayer(`https://tile.openstreetmap.org/{z}/{x}/{y}.png`, {
    maxZoom: 13,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

var provinces = L.tileLayer.wms('https://maps.geogratis.gc.ca/wms/canvec_en?service=WMS', {
    layers:'provinces_names',
    format: 'image/png',
    transparent: true,
    attribution: '© Natural Resources Canada'
}).addTo(map);

var placename1 = L.tileLayer.wms('https://maps.geogratis.gc.ca/wms/canvec_en?service=WMS',{
    layers:'places_mid',
    format: 'image/png',
    transparent: true,
    attribution: '© Natural Resources Canada'
}).addTo(map);

var placename2 = L.tileLayer.wms('https://maps.geogratis.gc.ca/wms/canvec_en?service=WMS',{
    layers:'places_large',
    format: 'image/png',
    transparent: true,
    attribution: '© Natural Resources Canada'
}).addTo(map);

var contour1 = L.tileLayer.wms('https://maps.geogratis.gc.ca/wms/canvec_en?service=WMS', {
    layers:'contour_elevation_250k_02',
    format: 'image/png',
    transparent: true,
    attribution: '© Natural Resources Canada'
}).addTo(map);

var contour2 = L.tileLayer.wms('https://maps.geogratis.gc.ca/wms/canvec_en?service=WMS', {
    layers:'contour_approximative_250k_01',
    format: 'image/png',
    transparent: true,
    attribution: '© Natural Resources Canada'
}).addTo(map);

var contour3 = L.tileLayer.wms('https://maps.geogratis.gc.ca/wms/canvec_en?service=WMS', {
    layers:'contour_approximative_50k',
    format: 'image/png',
    transparent: true,
    attribution: '© Natural Resources Canada'
}).addTo(map);

var tracks1 = L.tileLayer.wms('https://maps.geogratis.gc.ca/wms/canvec_en?service=WMS', {
    layers: 'track_segment_large',
    format: 'image/png',
    transparent: true,
    attribution: '© Natural Resources Canada'
}).addTo(map);

var tracks2 = L.tileLayer.wms('https://maps.geogratis.gc.ca/wms/canvec_en?service=WMS', {
    layers: 'track_segment_250k',
    format: 'image/png',
    transparent: true,
    attribution: '© Natural Resources Canada'
}).addTo(map);

var tracks3 = L.tileLayer.wms('https://maps.geogratis.gc.ca/wms/canvec_en?service=WMS', {
    layers: 'track_segment_50k',
    format: 'image/png',
    transparent: true,
    attribution: '© Natural Resources Canada'
}).addTo(map);

var roads1 = L.tileLayer.wms('https://maps.geogratis.gc.ca/wms/canvec_en?service=WMS', {
    layers:'road_segment_large',
    format: 'image/png',
    transparent: true,
    attribution: '© Natural Resources Canada'
}).addTo(map);

var roads2 = L.tileLayer.wms('https://maps.geogratis.gc.ca/wms/canvec_en?service=WMS', {
    layers: 'roads_250k',
    format: 'image/png',
    transparent: true,
    attribution: '© Natural Resources Canada'
}).addTo(map);

var roads3 = L.tileLayer.wms('https://maps.geogratis.gc.ca/wms/canvec_en?service=WMS', {
    layers: 'road_segment_50k',
    format: 'image/png',
    transparent: true,
    attribution: '© Natural Resources Canada'
}).addTo(map);

var waterlines1 =  L.tileLayer.wms('https://maps.geogratis.gc.ca/wms/canvec_en?service=WMS', {
    layers: 'watercourse_small',
    format: 'image/png',
    transparent: true,
    attribution: '© Natural Resources Canada'
}).addTo(map);

var waterlines2 =  L.tileLayer.wms('https://maps.geogratis.gc.ca/wms/canvec_en?service=WMS', {
    layers: 'watercourse_mid',
    format: 'image/png',
    transparent: true,
    attribution: '© Natural Resources Canada'
}).addTo(map);

var waterlines3 =  L.tileLayer.wms('https://maps.geogratis.gc.ca/wms/canvec_en?service=WMS', {
    layers: 'watercourse_large',
    format: 'image/png',
    transparent: true,
    attribution: '© Natural Resources Canada'
}).addTo(map);

var waterlines4 =  L.tileLayer.wms('https://maps.geogratis.gc.ca/wms/canvec_en?service=WMS', {
    layers: 'watercourse_250k',
    format: 'image/png',
    transparent: true,
    attribution: '© Natural Resources Canada'
}).addTo(map);

var waterbodies1 = L.tileLayer.wms('https://maps.geogratis.gc.ca/wms/canvec_en?service=WMS', {
    layers: 'waterbody_small',
    format: 'image/png',
    transparent: true,
    attribution: '© Natural Resources Canada'
}).addTo(map);

var waterbodies2 = L.tileLayer.wms('https://maps.geogratis.gc.ca/wms/canvec_en?service=WMS', {
    layers: 'waterbody_mid',
    format: 'image/png',
    transparent: true,
    attribution: '© Natural Resources Canada'
}).addTo(map);

var waterbodies3 = L.tileLayer.wms('https://maps.geogratis.gc.ca/wms/canvec_en?service=WMS', {
    layers: 'waterbody_continental_large',
    format: 'image/png',
    transparent: true,
    attribution: '© Natural Resources Canada'
}).addTo(map);

var waterbodies4 = L.tileLayer.wms('https://maps.geogratis.gc.ca/wms/canvec_en?service=WMS', {
    layers: 'waterbody_250k',
    format: 'image/png',
    transparent: true,
    attribution: '© Natural Resources Canada'
}).addTo(map);

var waterbodies5 = L.tileLayer.wms('https://maps.geogratis.gc.ca/wms/canvec_en?service=WMS', {
    layers: 'waterbody_50k',
    format: 'image/png',
    transparent: true,
    attribution: '© Natural Resources Canada'
}).addTo(map);

var buildings1 = L.tileLayer.wms('https://maps.geogratis.gc.ca/wms/canvec_en?service=WMS', {
    layers: 'residentialarea_250k_01',
    format: 'image/png',
    transparent: true,
    attribution: '© Natural Resources Canada'
}).addTo(map);

var buildings2 = L.tileLayer.wms('https://maps.geogratis.gc.ca/wms/canvec_en?service=WMS', {
    layers: 'residentialarea_250k_02',
    format: 'image/png',
    transparent: true,
    attribution: '© Natural Resources Canada'
}).addTo(map);

var buildings3 = L.tileLayer.wms('https://maps.geogratis.gc.ca/wms/canvec_en?service=WMS', {
    layers: 'residentialarea_50k',
    format: 'image/png',
    transparent: true,
    attribution: '© Natural Resources Canada'
}).addTo(map);

var weatheralerts = L.tileLayer.wms('https://geo.weather.gc.ca/geomet?lang=en&service=WMS', {
    layers: 'ALERTS',
    format: 'image/png',
    transparent: true,
    attribution: '© Environment and Climate Change Canada'
});

var hotdays = L.tileLayer.wms('https://geo.weather.gc.ca/geomet-climate?service=WMS&version=1.3.0',{
    layers: 'INDICES.TX30.HISTO_PCTL50',
    format: 'image/png',
    transparent: true,
    attribution: '© Environment and Climate Change Canada'
});

var totalprecip = L.tileLayer.wms('https://geo.weather.gc.ca/geomet-climate?service=WMS&version=1.3.0',{
    layers: 'CANGRD.TREND.PR_SUMMER',
    format: 'image/png',
    transparent: true,
    attribution: '© Environment and Climate Change Canada'
});

var meantemp = L.tileLayer.wms('https://geo.weather.gc.ca/geomet-climate?service=WMS&version=1.3.0',{
    layers: 'CANGRD.TREND.TM_SUMMER',
    format: 'image/png',
    transparent: true,
    attribution: '© Environment and Climate Change Canada'
});

 var overlaymaps = {
     "Weather Alerts": weatheralerts,
     "Days above 30C": hotdays,
     "Total Precipitation in the Summer": totalprecip,
     "Mean Temperature in the Summer": meantemp
};
L.control.layers(null, overlaymaps).addTo(map);

// POLICY LAYERS DETAILS
var transformers1 = L.tileLayer.wms('https://geo.weather.gc.ca/geomet-climate?service=WMS', {
    layers: 'AHCCD.STATIONS',
    format: 'image/png',
    transparent: true,
    attribution: '© National Resources Canada'
});

var transformers1 = L.tileLayer.wms('https://maps.geogratis.gc.ca/wms/canvec_en?service=WMS', {
    layers: 'transformerstation_250k',
    format: 'image/png',
    transparent: true,
    attribution: '© National Resources Canada'
});

var transformers2 = L.tileLayer.wms('https://maps.geogratis.gc.ca/wms/canvec_en?service=WMS', {
    layers: 'transformer_station_point_50k',
    format: 'image/png',
    transparent: true,
    attribution: '© National Resources Canada'
});

var powerlines1 = L.tileLayer.wms('https://maps.geogratis.gc.ca/wms/canvec_en?service=WMS', {
    layers: 'powerline_50k',
    format: 'image/png',
    transparent: true,
    attribution: '© National Resources Canada'
});

var powerlines2 = L.tileLayer.wms('https://maps.geogratis.gc.ca/wms/canvec_en?service=WMS', {
    layers: 'powerline_50k',
    format: 'image/png',
    transparent: true,
    attribution: '© National Resources Canada'
});

var landcover = L.tileLayer.wms('https://datacube.services.geo.ca/web/landcover.xml?request=GetCapabilities&service=WMS&version=1.3.0', {
    layers: 'landcover-2010',
    format: 'image/png',
    transparent: true,
    attribution: '© National Resources Canada'
});

var homevalue = L.tileLayer.wms('https://maps-cartes.services.geo.ca/server2_serveur2/services/StatCan/cd_socioeconomic_variables_2016_en/MapServer/WMSServer?', {
    layers: '9',
    format: 'image/png',
    transparent: true,
    attribution: '© Statistics Canada'
});

var abovenrmltemp = L.tileLayer.wms('https://geo.weather.gc.ca/geomet?lang=en&service=WMS', {
    layers: 'CanSIPS_100km_AirTemp-ProbAboveNormal-2m_P00M-P02M',
    format: 'image/png',
    transparent: true,
    attribution: '© Environment and Climate Change Canada'
});

var precipabv10 = L.tileLayer.wms('https://geo.weather.gc.ca/geomet?lang=en&service=WMS', {
    layers: 'REPS.DIAG.6_PRMM.ERGE10',
    format: 'image/png',
    transparent: true,
    attribution: '© Environment and Climate Change Canada'
});

var hotnights = L.tileLayer.wms('https://geo.weather.gc.ca/geomet?lang=en&service=WMS', {
    layers: 'INDICES.TN20.RCP26_PCTL50',
    format: 'image/png',
    transparent: true,
    attribution: '© Environment and Climate Change Canada'
});

var historprecip = L.tileLayer.wms('https://geo.weather.gc.ca/geomet?lang=en&service=WMS', {
    layers: 'CMIP5.PR.HISTO.SUMMER.ABS_PCTL50',
    format: 'image/png',
    transparent: true,
    attribution: '© Environment and Climate Change Canada'
});

var historictemp = L.tileLayer.wms('https://geo.weather.gc.ca/geomet?lang=en&service=WMS', {
    layers: 'CMIP5.TT.HISTO.SUMMER.ANO_PCTL50',
    format: 'image/png',
    transparent: true,
    attribution: '© Environment and Climate Change Canada'
});

var historicwind = L.tileLayer.wms('https://geo.weather.gc.ca/geomet?lang=en&service=WMS', {
    layers: 'CMIP5.SFCWIND.HISTO.SUMMER.ANO_PCTL50',
    format: 'image/png',
    transparent: true,
    attribution: '© Environment and Climate Change Canada'
});

function setMap(locationData) {
    var markerOptions = {
        title: "You are here",
    };

    console.log(locationData);

    let searchFields = document.getElementById("searchFields");
    let cityDropDown = document.createElement("select");

    for (let i = 0; i < locationData.items.length; i++) {
        let cityOption = document.createElement("option");

        cityOption.setAttribute("name", "citySelect");
        cityOption.setAttribute("id", "citySelect");
        cityOption.setAttribute("value", locationData.items[i].name);
        cityDropDown.setAttribute("name", "cityDropDown");
        cityDropDown.setAttribute("id", "cityDropDown");

        cityOption.setAttribute("value", locationData.items[i].name + ", " + provinceCodes[locationData.items[i].province.code]);

        console.log(locationData.items[i].province.code);

        cityOption.textContent = locationData.items[i].name + ", " + provinceCodes[locationData.items[i].province.code];
        cityDropDown.appendChild(cityOption);
    }
    searchFields.appendChild(cityDropDown);

    console.log(locationData);

    document.getElementById("cityDropDown").addEventListener("change", function () {
        console.log("test");
        let selectedCity = document.getElementById("citySelect").textContent;
        for (let i = 0; i < locationData.items.length; i++) {
            console.log(selectedCity);
            if (locationData.items[i].name == selectedCity) {
                console.log("Found!");
            } else {
                console.log("Not found");
            }
        }

        // map.setView([locationData.latitude, locationData.longitude]);
        // L.marker([locationData.latitude, locationData.longitude, markerOptions]).addTo(map);
    });
}

function success(position) {
    let location = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
    };

    console.log("Your current location:");
    console.log(position);

    setMap(location);
}

function useMyLocation() {
    navigator.geolocation.getCurrentPosition(success);
}

function useSearch() {
    let xhttp = new XMLHttpRequest();
    let userInput = document.getElementById("searchField").value;

    let requestData = {
        userInput: userInput,
    };

    xhttp.open("POST", "/searchCity", true);

    xhttp.onload = function () {
        if (!xhttp.status === "200") {
            console.log(xhttp.responseText);
        } else {
            let jsonData = JSON.parse(xhttp.responseText);
            // let coordinates = jsonData.features[0].geometry.coordinates;

            // let location = {
            //     coordinates: coordinates,
            // };

            console.log(jsonData);
            setMap(jsonData);
        }
    };

    console.log(requestData);

    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.send(JSON.stringify(requestData));
}
