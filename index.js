'Use strict';

const table = document.getElementById('multiplicationTable');
const tbody = table.getElementsByTagName('tbody')[0];

const headerRow = table.tHead.rows[0];
for (let i = 1; i <= 10; i++) {
    const th = document.createElement('th');
    th.textContent = i;
    headerRow.appendChild(th);
}

for (let i = 1; i <= 10; i++) {
    const row = document.createElement('tr');

    const headerCell = document.createElement('th');
    headerCell.textContent = i;
    row.appendChild(headerCell);

    for (let j = 1; j <= 10; j++) {
        const cell = document.createElement('td');
        cell.textContent = i * j;
        row.appendChild(cell);
    }

    tbody.appendChild(row);
}