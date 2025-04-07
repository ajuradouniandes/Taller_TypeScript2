import { series } from './data.js';
import { Serie } from './Serie.js';

var tableBody: HTMLElement = document.getElementById('bodyTable')!;
var tableFoot: HTMLElement = document.getElementById('footTable')!;

function renderSeries(Series: Serie[]):void {
    Series.forEach(serie => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${serie.id}</a></td>
            <td><a href="#" data-id="${serie.id}">${serie.title}</td>
            <td>${serie.platform}</td>
            <td>${serie.seasons}</td>
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

tableBody.addEventListener('click', (event) => {
    const target = event.target as HTMLElement;
    if (target.tagName === 'A' && target.dataset.id) {
        const id = parseInt(target.dataset.id);
        const serie = series[id - 1];
        if (serie) {
            let card = `
                <div class="card mt-5" style="width: 18rem;">
                    <img src="${serie.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <p class="card-text">${serie.description}</p>
                        <a href="${serie.link}" target="_blank">${serie.title}</a>
                    </div>
                </div>
            `;
            const div: HTMLElement = document.getElementById('cardInformation')!;
            div.innerHTML = card;
        }
    }
});