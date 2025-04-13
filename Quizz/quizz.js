let leaderboard = [
    { name: 'TIEN DUNG', points: 10, solveCount: 0 }, 
    { name: 'Hsulin', points: 10, solveCount: 0 },
    { name: 'Anastasiia', points: 10, solveCount: 0 },
    { name: 'A', points: 10, solveCount: 0 },
    { name: 'B', points: 10, solveCount: 0 },
    { name: 'C', points: 10, solveCount: 0 },
];

function updateLeaderboard() {
    const leaderboardContainer = document.getElementById('leaderboard-list');
    leaderboardContainer.innerHTML = '';  

    leaderboard.sort((a, b) => b.points - a.points);

    leaderboard.forEach(entry => {
        const li = document.createElement('li');
        li.innerHTML = `<span>${entry.name} - ${entry.points} points</span>`;
        leaderboardContainer.appendChild(li);
    });
}

function addPointsToUser(userIndex) {
    leaderboard[userIndex].points += 10;

    localStorage.setItem("leaderboard", JSON.stringify(leaderboard));
    updateLeaderboard();
}

function handleExtraPoints(userIndex) {
    leaderboard[userIndex].solveCount++;

    if (leaderboard[userIndex].solveCount === 3) {
        localStorage.setItem('extraPointsAwarded', 'true');
        leaderboard[userIndex].solveCount = 0;
    }

    addPointsToUser(userIndex);
}

document.querySelectorAll('.solve-button').forEach(button => {
    button.addEventListener("click", function() {
        handleExtraPoints(0);  
    });
});

if (localStorage.getItem("leaderboard")) {
    leaderboard = JSON.parse(localStorage.getItem("leaderboard"));
    updateLeaderboard();  
}

updateLeaderboard();

function showExtraPointsAnnouncement() {
    const extraPointsAwarded = localStorage.getItem('extraPointsAwarded');
    if (extraPointsAwarded === 'true') {
        const announcement = document.createElement('div');
        announcement.classList.add('announcement');
        announcement.innerHTML = `
            <p>Great job! You've earned an extra 10 points for your effort!</p>
            <button id="agree-button">Agree</button>
            <button id="cancel-button">Cancel</button>
        `;
        document.body.appendChild(announcement);

        document.getElementById('agree-button').addEventListener('click', function() {
            addPointsToUser(0);  
            localStorage.removeItem('extraPointsAwarded');  
            announcement.remove();  
        });

        document.getElementById('cancel-button').addEventListener('click', function() {
            localStorage.removeItem('extraPointsAwarded');  
            announcement.remove();  
        });
    }
}

window.addEventListener('load', showExtraPointsAnnouncement);
