
function init_page() {
    init_map();
    init_datatable();
}

function init_map() {
    var map = L.map('map').setView([51.505, -0.09], 13);
    //L.tileLayer('http://a.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    L.tileLayer('http://c.tiles.mapbox.com/v3/mapbox.mapbox-light/{z}/{x}/{y}.png', {
        attribution: null,
        maxZoom: 17,
    }).addTo(map);
}

function init_datatable() {
    $('#datatable').dataTable({
        "sDom": "<'row'<'span8'l><'span8'f>r>t<'row'<'span8'i><'span8'p>>",
    });
}
