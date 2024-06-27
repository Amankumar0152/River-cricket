// Sample Data for Teams and Players
const teams = [
    { id: 1, name: 'Team A', image: 'team-a.jpg' },
    { id: 2, name: 'Team B', image: 'team-b.png' },
    { id: 3, name: 'Team C', image: 'team-c.png' },
    // Add more teams as needed
];

const players = {
    1: [
        { id: 1, name: 'Player 1A' },
        { id: 2, name: 'Player 2A' },
        { id: 3, name: 'Player 3A' },
    ],
    2: [
        { id: 4, name: 'Player 1B' },
        { id: 5, name: 'Player 2B' },
        { id: 6, name: 'Player 3B' },
    ],
    3: [
        { id: 7, name: 'Player 1C' },
        { id: 8, name: 'Player 2C' },
        { id: 9, name: 'Player 3C' },
    ],
};

document.addEventListener('DOMContentLoaded', function () {
    const teamsContainer = document.getElementById('teams');
    const nextPageButton = document.getElementById('next-page');

    // Function to render teams
    function renderTeams() {
        teamsContainer.innerHTML = '';
        teams.forEach(team => {
            const teamElement = document.createElement('div');
            teamElement.classList.add('team');
            teamElement.innerHTML = `
                <img src="${team.name}" alt="${team.name}">
                <div>${team.name}</div>
            `;
            teamElement.addEventListener('click', () => {
                localStorage.setItem('selectedTeam', team.id);
                window.location.href = 'players.html';
            });
            teamsContainer.appendChild(teamElement);
        });
    }

    renderTeams();

    nextPageButton.addEventListener('click', () => {
        // Implement pagination if needed
    });
});
