// player.js

// Mock data for players
const players = [
    {
        id: 1,
        name: "Haushila",
        image: "profile/golu.png",
        country: "India",
        info: {
            Born: "NA",
            birthPlace: "UP(Varanasi)",
            nickname: "Golu",
            height: "5 ft 3 in (175 cm)",
            role: "Batsman",
            battingStyle: "Right Handed Bat",
            bowlingStyle: "Right-arm medium"
        }
    },
    {
        id: 2,
        name: "Gillu",
        image: "profile",
        country: "India",
        info: {
            born: "NA",
            birthPlace: "Varanasi",
            nickname: "Arun",
            height: "5 ft 8 in (173 cm)",
            role: "Batsman",
            battingStyle: "Right Handed Bat",
            bowlingStyle: "Right-arm fast"
        }
    },
    {
        id: 3,
        name: "Priyanshu",
        image: "profile/priyanshu.jpg",
        country: "India",
        info: {
            born: "NA",
            birthPlace: "Varanasi",
            nickname: "Kumar",
            height: "5 ft 0.1 in (168 cm)",
            role: "Batsman",
            battingStyle: "Right Handed Bat",
            bowlingStyle: "Right-arm offbreak"
        }
    },
    {
        id: 4,
        name: "Tushar",
        image: "profile/tushar.png",
        country: "India",
        info: {
            born: "NA",
            birthPlace: "Varanasi",
            nickname: "How How",
            height: "5 ft 3 in (173 cm)",
            role: "Batsman",
            battingStyle: "Right Handed Bat",
            bowlingStyle: "Right-arm "
        }
    },
    {
        id: 5,
        name: "Shubham",
        image: "profile/shubham.png",
        country: "India",
        info: {
            born: "NA",
            birthPlace: "Varanasi",
            nickname: "Can va",
            height: "5 ft 1 in (173 cm)",
            role: "Batsman",
            battingStyle: "Right Handed Bat",
            bowlingStyle: "Right-arm spin"
        }
    },
    {
        id: 6,
        name: "Aman",
        image: "profile/aman.jpg",
        country: "India",
        info: {
            born: "NA",
            birthPlace: "Varanasi",
            nickname: "Pirates",
            height: "5 ft 2 in (173 cm)",
            role: "Batsman",
            battingStyle: "Right Handed Bat",
            bowlingStyle: "Right-arm fast medium "
        }
    },
    {
        id: 7,
        name: "Sonu",
        image: "profile/sonu.jpg",
        country: "India",
        info: {
            born: "NA",
            birthPlace: "Varanasi",
            nickname: "Sadhu",
            height: "5 ft 2 in (173 cm)",
            role: "Batsman",
            battingStyle: "Right Handed Bat",
            bowlingStyle: "Right-arm fast"
        }
    },
    {
        id: 8,
        name: "Tarun",
        image: "profile/tarun.png",
        country: "India",
        info: {
            born: "NA",
            birthPlace: "Varanasi",
            nickname: "Appa-Gappa",
            height: "3 ft 2 in (173 cm)",
            role: "Batsman",
            battingStyle: "Right Handed Bat",
            bowlingStyle: "Right-arm fast medium Spin"
        }
    },
    {
        id: 9,
        name: "Vinay",
        image: "profile/khalnayak.jpeg",
        country: "India",
        info: {
            born: "NA",
            birthPlace: "Varanasi",
            nickname: "Mangal Grah",
            height: "4 ft 9 in (173 cm)",
            role: "Batsman",
            battingStyle: "Right Handed Bat",
            bowlingStyle: "Right-arm very fast"
        }
    },
    // Add more players here
  ];
  
  // Function to get query parameter by name
  function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  }
  
  // Function to open tabs
  function openTab(evt, tabName) {
    var i, tabcontent, tabbuttons;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tabbuttons = document.getElementsByClassName("tab-button");
    for (i = 0; i < tabbuttons.length; i++) {
        tabbuttons[i].className = tabbuttons[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  // Get player ID from URL
  const playerId = parseInt(getQueryParam('id'));
  
  // Find player data by ID
  const player = players.find(p => p.id === playerId);
  
  if (player) {
    // Update HTML content with player data
    document.getElementById('player-name-header').textContent = player.name;
    document.getElementById('player-name').textContent = player.name;
    document.getElementById('player-image').src = player.image;
    document.getElementById('player-country').textContent = player.country;
  
    const playerInfoTable = document.getElementById('player-info').querySelector('tbody');
    for (const [key, value] of Object.entries(player.info)) {
        const row = document.createElement('tr');
        const cell1 = document.createElement('td');
        const cell2 = document.createElement('td');
        cell1.textContent = key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1');
        cell2.textContent = value;
        row.appendChild(cell1);
        row.appendChild(cell2);
        playerInfoTable.appendChild(row);
    }
  } else {
    // Handle case where player is not found (optional)
    document.getElementById('player-name-header').textContent = "Player not found";
    document.getElementById('player-name').textContent = "Player not found";
    document.getElementById('player-image').style.display = 'none';
    document.getElementById('player-country').textContent = "";
  }
  
  // Initialize the default tab
  document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementsByClassName('tab-button')[0].click();
  });
  