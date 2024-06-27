const playerDetails = {
    1: { name: 'Player 1A', bio: 'Bio of Player 1A', image: 'player1a.png' },
    2: { name: 'Player 2A', bio: 'Bio of Player 2A', image: 'player2a.png' },
    // Add more player details as needed
};

document.addEventListener('DOMContentLoaded', function () {
    const playerDetailsContainer = document.getElementById('player-details');
    const selectedPlayerId = localStorage.getItem('selectedPlayer');
    const selectedPlayer = playerDetails[selectedPlayerId];

    // Function to render player details
    function renderPlayerDetails() {
        playerDetailsContainer.innerHTML = `
            <img src="${selectedPlayer.image}" alt="${selectedPlayer.name}">
            <h2>${selectedPlayer.name}</h2>
            <p>${selectedPlayer.bio}</p>
        `;
    }

    renderPlayerDetails();
});
