import { series } from './data.js';
var tableBody = document.getElementById('bodyTable');
var tableFoot = document.getElementById('footTable');
function renderSeries(Series) {
    Series.forEach(function (serie) {
        var row = document.createElement('tr');
        row.innerHTML = "\n            <td><a href=\"".concat(serie.link, "\" target=\"_blank\">").concat(serie.id, "</a></td>\n            <td>").concat(serie.title, "</td>\n            <td>").concat(serie.platform, "</td>\n            <td>").concat(serie.seasons, "</td>\n            <td>").concat(serie.description, "</td>\n        ");
        tableBody.appendChild(row);
    });
}
function getTotalCredits(Series) {
    var totalSeasons = 0;
    Series.forEach(function (Serie) { return totalSeasons = totalSeasons + Serie.seasons; });
    var totalSeries = Series.length;
    return totalSeasons / totalSeries;
}
renderSeries(series);
var promSeasons = getTotalCredits(series);
var row = document.createElement('tr');
row.innerHTML = "\n    <td colspan=\"4\">Average Seasons</td>\n    <td>".concat(promSeasons, "</td>\n");
tableFoot.appendChild(row);
