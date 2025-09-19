let token = null;

function registerUser(event) {
    event.preventDefault();
    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;
    const email = document.getElementById('register-email').value;

    fetch('/api/users/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password, email, role: 'USER' })
    })
    .then(response => response.json())
    .then(data => {
        alert('Registration successful!');
        console.log(data);
    })
    .catch(error => console.error('Error:', error));
}

function loginUser(event) {
    event.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    fetch('/api/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data) {
            alert('Login successful!');
            token = '...'; // In a real application, you would get a token from the response
            document.getElementById('login-form').style.display = 'none';
            document.getElementById('register-form').style.display = 'none';
            document.getElementById('flight-search-form').style.display = 'block';
        } else {
            alert('Invalid credentials');
        }
    })
    .catch(error => console.error('Error:', error));
}

function searchFlights(event) {
    event.preventDefault();
    const origin = document.getElementById('origin').value;
    const destination = document.getElementById('destination').value;

    fetch(`/api/flights/search?origin=${origin}&destination=${destination}`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(response => response.json())
    .then(data => {
        const flightResults = document.getElementById('flight-results');
        flightResults.innerHTML = '';
        data.forEach(flight => {
            flightResults.innerHTML += `
                <div class="flight">
                    <p>Flight Number: ${flight.flightNumber}</p>
                    <p>Origin: ${flight.origin}</p>
                    <p>Destination: ${flight.destination}</p>
                    <p>Departure: ${new Date(flight.departureTime).toLocaleString()}</p>
                    <p>Arrival: ${new Date(flight.arrivalTime).toLocaleString()}</p>
                    <p>Price: $${flight.price}</p>
                    <button onclick="bookFlight(${flight.id})">Book</button>
                </div>
            `;
        });
    })
    .catch(error => console.error('Error:', error));
}

function bookFlight(flightId) {
    // In a real application, you would get the user id from the logged in user
    const userId = 1; 

    fetch('/api/bookings/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            user: { id: userId },
            flight: { id: flightId },
            bookingTime: new Date().toISOString(),
            status: 'CONFIRMED'
        })
    })
    .then(response => response.json())
    .then(data => {
        alert('Booking successful!');
        console.log(data);
    })
    .catch(error => console.error('Error:', error));
}
