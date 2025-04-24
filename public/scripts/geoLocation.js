let latitude, longitude;

var map = L.map("map", {
    center: [60.18, -102.2],
    zoom: 3,
    crs: L.CRS.EPSG3857
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

//Shared Layers
L.tileLayer(`https://tile.openstreetmap.org/{z}/{x}/{y}.png`, {
    maxZoom: 13,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

var provinces = L.tileLayer.wms("https://maps.geogratis.gc.ca/wms/canvec_en?service=WMS", {
        layers: "provinces_names",
        format: "image/png",
        transparent: true,
        attribution: "© Natural Resources Canada",
}).addTo(map);

var placename1 = L.tileLayer.wms("https://maps.geogratis.gc.ca/wms/canvec_en?service=WMS", {
        layers: "places_mid",
        format: "image/png",
        transparent: true,
        attribution: "© Natural Resources Canada",
}).addTo(map);

var placename2 = L.tileLayer.wms("https://maps.geogratis.gc.ca/wms/canvec_en?service=WMS", {
        layers: "places_large",
        format: "image/png",
        transparent: true,
        attribution: "© Natural Resources Canada",
}).addTo(map);

var contour1 = L.tileLayer.wms("https://maps.geogratis.gc.ca/wms/canvec_en?service=WMS", {
        layers: "contour_elevation_250k_02",
        format: "image/png",
        transparent: true,
        attribution: "© Natural Resources Canada",
}).addTo(map);

var contour2 = L.tileLayer.wms("https://maps.geogratis.gc.ca/wms/canvec_en?service=WMS", {
        layers: "contour_approximative_250k_01",
        format: "image/png",
        transparent: true,
        attribution: "© Natural Resources Canada",
}).addTo(map);

var contour3 = L.tileLayer.wms("https://maps.geogratis.gc.ca/wms/canvec_en?service=WMS", {
        layers: "contour_approximative_50k",
        format: "image/png",
        transparent: true,
        attribution: "© Natural Resources Canada",
}).addTo(map);

var tracks1 = L.tileLayer.wms("https://maps.geogratis.gc.ca/wms/canvec_en?service=WMS", {
        layers: "track_segment_large",
        format: "image/png",
        transparent: true,
        attribution: "© Natural Resources Canada",
 }).addTo(map);

var tracks2 = L.tileLayer.wms("https://maps.geogratis.gc.ca/wms/canvec_en?service=WMS", {
        layers: "track_segment_250k",
        format: "image/png",
        transparent: true,
        attribution: "© Natural Resources Canada",
}).addTo(map);

var tracks3 = L.tileLayer.wms("https://maps.geogratis.gc.ca/wms/canvec_en?service=WMS", {
        layers: "track_segment_50k",
        format: "image/png",
        transparent: true,
        attribution: "© Natural Resources Canada",
}).addTo(map);

var roads1 = L.tileLayer.wms("https://maps.geogratis.gc.ca/wms/canvec_en?service=WMS", {
        layers: "road_segment_large",
        format: "image/png",
        transparent: true,
        attribution: "© Natural Resources Canada",
}).addTo(map);

var roads2 = L.tileLayer.wms("https://maps.geogratis.gc.ca/wms/canvec_en?service=WMS", {
        layers: "roads_250k",
        format: "image/png",
        transparent: true,
        attribution: "© Natural Resources Canada",
}).addTo(map);

var roads3 = L.tileLayer.wms("https://maps.geogratis.gc.ca/wms/canvec_en?service=WMS", {
        layers: "road_segment_50k",
        format: "image/png",
        transparent: true,
        attribution: "© Natural Resources Canada",
}).addTo(map);

var waterlines1 = L.tileLayer.wms("https://maps.geogratis.gc.ca/wms/canvec_en?service=WMS", {
        layers: "watercourse_small",
        format: "image/png",
        transparent: true,
        attribution: "© Natural Resources Canada",
}).addTo(map);

var waterlines2 = L.tileLayer.wms("https://maps.geogratis.gc.ca/wms/canvec_en?service=WMS", {
        layers: "watercourse_mid",
        format: "image/png",
        transparent: true,
        attribution: "© Natural Resources Canada",
}).addTo(map);

var waterlines3 = L.tileLayer.wms("https://maps.geogratis.gc.ca/wms/canvec_en?service=WMS", {
        layers: "watercourse_large",
        format: "image/png",
        transparent: true,
        attribution: "© Natural Resources Canada",
}).addTo(map);

var waterlines4 = L.tileLayer.wms("https://maps.geogratis.gc.ca/wms/canvec_en?service=WMS", {
        layers: "watercourse_250k",
        format: "image/png",
        transparent: true,
        attribution: "© Natural Resources Canada",
}).addTo(map);

var waterbodies1 = L.tileLayer.wms("https://maps.geogratis.gc.ca/wms/canvec_en?service=WMS", {
        layers: "waterbody_small",
        format: "image/png",
        transparent: true,
        attribution: "© Natural Resources Canada",
}).addTo(map);

var waterbodies2 = L.tileLayer.wms("https://maps.geogratis.gc.ca/wms/canvec_en?service=WMS", {
        layers: "waterbody_mid",
        format: "image/png",
        transparent: true,
        attribution: "© Natural Resources Canada",
}).addTo(map);

var waterbodies3 = L.tileLayer.wms("https://maps.geogratis.gc.ca/wms/canvec_en?service=WMS", {
        layers: "waterbody_continental_large",
        format: "image/png",
        transparent: true,
        attribution: "© Natural Resources Canada",
}).addTo(map);

var waterbodies4 = L.tileLayer.wms("https://maps.geogratis.gc.ca/wms/canvec_en?service=WMS", {
        layers: "waterbody_250k",
        format: "image/png",
        transparent: true,
        attribution: "© Natural Resources Canada",
}).addTo(map);

var waterbodies5 = L.tileLayer.wms("https://maps.geogratis.gc.ca/wms/canvec_en?service=WMS", {
        layers: "waterbody_50k",
        format: "image/png",
        transparent: true,
        attribution: "© Natural Resources Canada",
}).addTo(map);

var buildings1 = L.tileLayer.wms("https://maps.geogratis.gc.ca/wms/canvec_en?service=WMS", {
        layers: "residentialarea_250k_01",
        format: "image/png",
        transparent: true,
        attribution: "© Natural Resources Canada",
}).addTo(map);

var buildings2 = L.tileLayer.wms("https://maps.geogratis.gc.ca/wms/canvec_en?service=WMS", {
        layers: "residentialarea_250k_02",
        format: "image/png",
        transparent: true,
        attribution: "© Natural Resources Canada",
}).addTo(map);

var buildings3 = L.tileLayer.wms("https://maps.geogratis.gc.ca/wms/canvec_en?service=WMS", {
        layers: "residentialarea_50k",
        format: "image/png",
        transparent: true,
        attribution: "© Natural Resources Canada",
}).addTo(map);

fetch('https://raw.githubusercontent.com/TornadoWise/TornadoWise/refs/heads/Martha_Sandbox/data/Tornados_1980_2009.geojson')    
.then(res => res.json())
.then(data => {
        data.features = data.features.map(f => ({
                ...f,
                geometry: {
                  type: "Point",
                  coordinates: [
                    parseFloat(f.properties.start_lon),
                    parseFloat(f.properties.start_lat)
                  ]
                }
              }));

    L.geoJSON(data,{ 
        pointToLayer: function(feature, latlng) {
                return L.circleMarker(latlng, {
                  radius: 8,
                  fillColor: "#ffff00", 
                  color: "#eaff00",
                  weight: 2,
                  opacity: 1,
                  fillOpacity: 0.9
                });
              },
              onEachFeature: function(feature, layer) {
                let props = feature.properties;
                let popup = `<b>Year:</b> ${props.yyyy_local || "N/A"}<br>
                             <b>Nearest Community:</b> ${props.nearcmmty || "N/A"}<br>
                             <b>Fujita Scale:</b> ${props.fujita_ || "N/A"}`;
                layer.bindPopup(popup);
              }
            }).addTo(map);
});

fetch('https://raw.githubusercontent.com/TornadoWise/TornadoWise/refs/heads/Martha_Sandbox/data/TornadoTracks_1980_2009.geojson')
  .then(res => res.json())
  .then(data => {
        data.features = data.features.map(f => ({
                ...f,
                geometry: {
                  type: "LineString",
                  coordinates: [
                    [parseFloat(f.properties.start_lon), parseFloat(f.properties.start_lat)],
                    [parseFloat(f.properties.end_lon), parseFloat(f.properties.end_lat)]
                  ]
                }
              }));
    
        L.geoJSON(data, {
      style: function(feature) {
        return {
          color: "#ffff00",
          weight: 4,
          opacity: 1
        };
      },
      onEachFeature: function(feature, layer) {
        let popup = `<b>Year:</b> ${feature.properties.yyyy_local || "N/A"}`;
        layer.bindPopup(popup);
      }
    }).addTo(map);
});

function setMap(locationData) {
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

    let refinedData = locationData.items;

    document.getElementById("cityDropDown").addEventListener("change", function () {
        console.log(refinedData);
        let selectedCity = document.getElementById("cityDropDown").selectedIndex;
        console.log(selectedCity);
    });
}

function success(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;

    console.log("Your current location:");
    console.log(position);

    map.flyTo(new L.LatLng(latitude, longitude), 8);
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
