const bands = [
    'The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean',
    'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans',
    'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'
];

const bandList = document.getElementById('band');

// Sorting function to ignore "The", "An", and "A" while sorting
function strip(bandName) {
    return bandName.replace(/^(The |An |A )/, '').trim();
}

bands.sort((a, b) => strip(a).localeCompare(strip(b)));

bands.forEach(band => {
    const li = document.createElement('li');
    li.textContent = band;
    bandList.appendChild(li);
});