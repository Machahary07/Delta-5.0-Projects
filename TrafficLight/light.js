document.getElementById('changeLight').addEventListener('click', changeLight);

//main code
let currentColor = 'gray';

function changeLight() {
    if (currentColor === 'gray') {
        currentColor = 'red';
    } else if (currentColor === 'red') {
        currentColor = 'yellow';
    } else if (currentColor === 'yellow') {
        currentColor = 'green';
    } else if (currentColor === 'green') {
        currentColor = 'gray';
    }

    updateTrafficLight();
}

//development code
function updateTrafficLight() {
    const trafficLight = document.getElementById('trafficLight');
    const message = document.getElementById('message');

    trafficLight.className = `traffic-light bg-${currentColor}-500`;
    message.textContent = getMessage(currentColor);
}

function getMessage(color) {
    switch (color) {
        case 'red':
            return 'Stop!';
        case 'yellow':
            return 'Caution!';
        case 'green':
            return 'Go!';
        default:
            return '';
    }
}