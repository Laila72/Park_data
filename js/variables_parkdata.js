const jsonUrl = "https://Laila72.github.io/Park_data/json/p_plasser_info.json";
const direct = "https://Laila72.github.io/Park_data/";
//const grunnkart = "https://services.geodataonline.no/arcgis/rest/services/Geocache_WMAS_WGS84/GeocacheBasis/MapServer/tile/{z}/{y}/{x}";
const grunnkart = "https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWF0aGlsZG8iLCJhIjoiY2lrdHZvMHdsMDAxMHdvbTR0MWZkY3FtaCJ9.u4bFYLBtEGNv4Qaa8Uaqzw";

const attribution_tag = '©️ Geodata AS, Kartverket, Geovekst og kommunene, OpenStreetMap';

const marker_svart = "css/images/icon/marker-icon_park_svart.png";
const marker_blaa = "css/images/icon/marker-icon_park_blaa.png";
const shadow = "css/images/marker-shadow.png";
const testtekst = "test ok";

var veiparkeringsforbud = L.layerGroup();

var alle_cluster = L.markerClusterGroup({
    maxClusterRadius: 55,
    disableClusteringAtZoom: 16
});
var hc_cluster = L.markerClusterGroup({
    maxClusterRadius: 55,
    disableClusteringAtZoom: 16
});
var mc_cluster = L.markerClusterGroup({
    maxClusterRadius: 55,
    disableClusteringAtZoom: 16
});
var lade_cluster = L.markerClusterGroup({
    maxClusterRadius: 55,
    disableClusteringAtZoom: 16
});

var svartikon = L.icon({
    iconUrl: `${direct}${marker_svart}`,
    shadowUrl: `${direct}${shadow}`,
    iconSize: [25, 41],
    shadowSize: [25, 41]
});

var blaatikon = L.icon({
    iconUrl: `${direct}${marker_blaa}`,
    shadowUrl: `${direct}${shadow}`,
    iconSize: [25, 41],
    shadowSize: [25, 41]
});

var mcikon = L.icon({
    iconUrl: `${direct}${marker_blaa}`,
    shadowUrl: `${direct}${shadow}`,
    iconSize: [25, 41],
    shadowSize: [25, 41]
});

const mc = [
    [59.046289508014254, 6.651780581972136],
    [58.85474301714041, 5.74084528545535],
    [58.85360521633842, 5.739766638632233],
    [58.850223151965054, 5.7344736541691645],
    [58.84901015574755, 5.738068321265104]
];


const polygon = L.polygon([
    [58.85045738849249, 5.738747897670606],
    [58.85033611992770, 5.738634355350229], 
    [58.85006717272685, 5.7394249575265235], 
    [58.849132774188634, 5.737728077816058], 
    [58.84905087501778, 5.737943105722479], 
    [58.84967398144522, 5.739522141907656], 
    [58.85003309603087, 5.739851189215585], 
    [58.84978756321331, 5.740837151988757], 
    [58.85000682806282, 5.740947119737029], 
    [58.85023627694156, 5.74003308566796], 
    [58.85144740640135, 5.7409931410614945], 
    [58.85119745394971, 5.744934992510679], 
    [58.85062123703844, 5.746874787664581], 
    [58.8508685192746, 5.7470322483313225], 
    [58.85140655848738, 5.745112264421152], 
    [58.85165982280151, 5.740941172002181],
    [58.850248641114206, 5.739662583834388],
    [58.85041998662456, 5.738962071178861]
], {
    color: 'red',
    weight: 2,
    opacity: 0.7   
});

const polygon2 = L.polygon([
    [58.85978039163831, 5.741805020422163],
    [58.85964704682641, 5.740897545691155],
    [58.859219858948194, 5.739763194594872],
    [58.85895217785543, 5.739069263800843],
    [58.85841100901263, 5.739582204334482],
    [58.85824934067898, 5.739640004880357],
    [58.85818895009464, 5.73889126816664],
    [58.857556845108576, 5.737843710774712],
    [58.85685923863289, 5.736924049233693],
    [58.8570058053908, 5.736381000201078],
    [58.854807700371566, 5.735005924963559],
    [58.853622133454394, 5.733064022527174],
    [58.855241277116875, 5.733135873292127],
    [58.8553683447123, 5.732769764420539],
    [58.854731928690455, 5.731726746709455],
    [58.8547411556024, 5.730752164264317],
    [58.85416493157689, 5.730855208721181],
    [58.85279966022722, 5.728579995171515],
    [58.851944830975356, 5.7283145796961605],
    [58.84928392493444, 5.734144653534344],
    [58.849566106755674, 5.7355491226207675],
    [58.85044841294729, 5.738196445715488],
    [58.85262108835454, 5.739997338093531],
    [58.85298720692873, 5.741197166363264],
    [58.852844627521876, 5.743289091578504],
    [58.85619088320061, 5.743904325756688],
    [58.85668481818726, 5.742662781743803],
    [58.85713691539081, 5.7426343297308335],
    [58.856917202033145, 5.741357384973128],
    [58.85775444845126, 5.741699522560225],
    [58.85835273925474, 5.742290395473873],
    [58.85855486857582, 5.741490853393344],
    [58.85972488153763, 5.742191937250539]
], {
    color: 'red',
    weight: 2,
    opacity: 0.7   
});


