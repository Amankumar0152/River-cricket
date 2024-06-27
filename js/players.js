document.addEventListener('DOMContentLoaded', function () {
    const playersContainer = document.getElementById('players');
    const selectedTeamId = localStorage.getItem('selectedTeam');
    const selectedPlayers = players[selectedTeamId];

    // Function to render players
    function renderPlayers() {
        playersContainer.innerHTML = '';
        selectedPlayers.forEach(player => {
            const playerElement = document.createElement('div');
            playerElement.classList.add('team');
            playerElement.innerHTML = `
                <img src="player-placeholder.png" alt="${player.name}">
                <div>${player.name}</div>
            `;
            playerElement.addEventListener('click', () => {
                localStorage.setItem('selectedPlayer', player.id);
                window.location.href = 'player-details.html';
            });
            playersContainer.appendChild(playerElement);
        });
    }

    renderPlayers();
});
