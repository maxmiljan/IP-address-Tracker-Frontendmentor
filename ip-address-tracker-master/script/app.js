const locationHtml = document.getElementById('location');
const ipAddressHtml = document.getElementById('ipAddress');
const timezoneHtml = document.getElementById('timezone');
const ispHtml = document.getElementById('isp');
const input = document.getElementById('inputField'); 

fetch('http://ip-api.com/json/?fields=61439')
    .then(res => res.json())
    .then(data => {
        const city = data.city
        const state = data.country
        const ip = data.query
        const timezone = data.timezone
        const isp = data.isp
        locationHtml.textContent = city + "," + state
        ipAddressHtml.textContent = ip
        timezoneHtml.textContent = timezone
        ispHtml.textContent = isp

        mapboxgl.accessToken = 'pk.eyJ1IjoibWF4bWlsamFuIiwiYSI6ImNrb215cnNkbDBpNDEybmw2eGRwNW1pZ24ifQ.Rgnyo9eb-tzP21cJwo6NVg';
        var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [data.lon, data.lat],
        zoom: 8
        });

        var marker1 = new mapboxgl.Marker()
            .setLngLat([data.lon, data.lat])
            .addTo(map);

        

        
    })








