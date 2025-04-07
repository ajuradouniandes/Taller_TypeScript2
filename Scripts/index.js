import { series } from './data.js';
var tableBody = document.getElementById('bodyTable');
var tableFoot = document.getElementById('footTable');
function renderSeries(Series) {
    Series.forEach(function (serie) {
        var row = document.createElement('tr');
        row.innerHTML = "\n            <td>".concat(serie.id, "</a></td>\n            <td><a href=\"#\" data-id=\"").concat(serie.id, "\">").concat(serie.title, "</td>\n            <td>").concat(serie.platform, "</td>\n            <td>").concat(serie.seasons, "</td>\n        ");
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
tableBody.addEventListener('click', function (event) {
    var target = event.target;
    if (target.tagName === 'A' && target.dataset.id) {
        var id = parseInt(target.dataset.id);
        var serie = series[id - 1];
        if (serie) {
            var card = "\n                <div class=\"card mt-5\" style=\"width: 18rem;\">\n                    <img src=\"".concat(serie.image, "\" class=\"card-img-top\" alt=\"...\">\n                    <div class=\"card-body\">\n                        <p class=\"card-text\">").concat(serie.description, "</p>\n                        <a href=\"").concat(serie.link, "\" target=\"_blank\">").concat(serie.title, "</a>\n                    </div>\n                </div>\n            ");
            var div = document.getElementById('cardInformation');
            div.innerHTML = card;
        }
    }
});
