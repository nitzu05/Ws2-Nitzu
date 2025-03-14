// Schimbă culoarea de fundal în verde
document.getElementById('greenButton').addEventListener('click', function() {
    document.body.style.backgroundColor = 'green';
});

// Schimbă culoarea dintr-un array
const colors = ['red', 'blue', 'yellow', 'purple', 'orange'];
let index = 0;

document.getElementById('arrayButton').addEventListener('click', function() {
    document.body.style.backgroundColor = colors[index];
    index = (index + 1) % colors.length;
});

// Schimbă culoarea random dintr-un array
document.getElementById('randomArrayButton').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomIndex];
});

// Afișează datele de la The Cat API
document.getElementById('catButton').addEventListener('click', function() {
    fetch('https://api.thecatapi.com/v1/breeds')
        .then(response => response.json())
        .then(data => {
            const catDataDiv = document.getElementById('catData');
            catDataDiv.innerHTML = '';
            data.forEach(breed => {
                const breedElement = document.createElement('p');
                breedElement.textContent = `Name: ${breed.name}, Origin: ${breed.origin}`;
                catDataDiv.appendChild(breedElement);
            });
        });
});

// Afișează locația de la ip-api.com
document.getElementById('locationButton').addEventListener('click', function() {
    fetch('http://ip-api.com/json/')
        .then(response => response.json())
        .then(data => {
            const locationDataDiv = document.getElementById('locationData');
            locationDataDiv.innerHTML = `
                <p>IP: ${data.query}</p>
                <p>Oraș: ${data.city}</p>
                <p>Regiune: ${data.regionName}</p>
                <p>Țară: ${data.country}</p>
                <p>Latitudine: ${data.lat}</p>
                <p>Longitudine: ${data.lon}</p>
            `;
        });
});
