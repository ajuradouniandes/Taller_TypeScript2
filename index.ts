import { series } from './data.js';
import { Serie } from './Serie.js';

var tableBody: HTMLElement = document.getElementById('bodyTable')!;
var tableFoot: HTMLElement = document.getElementById('footTable')!;

function renderSeries(Series: Serie[]):void {
    Series.forEach(serie => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><a href="${serie.link}" target="_blank">${serie.id}</a></td>
            <td>${serie.title}</td>
            <td>${serie.platform}</td>
            <td>${serie.seasons}</td>
            <td>${serie.description}</td>
        `;
        tableBody.appendChild(row);
    });
}

function getTotalCredits(Series: Serie[]): number {
    let totalSeasons: number = 0;
    Series.forEach((Serie) => totalSeasons = totalSeasons + Serie.seasons);
    let totalSeries = Series.length;
    return totalSeasons/totalSeries;
}

renderSeries(series);
let promSeasons = getTotalCredits(series);

let row = document.createElement('tr');
row.innerHTML = `
    <td colspan="4">Average Seasons</td>
    <td>${promSeasons}</td>
`;
tableFoot.appendChild(row);