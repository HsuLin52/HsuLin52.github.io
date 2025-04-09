const cardData = [
    {
        title: "ALGEBRA",
        lessons: [
            {
                grade: "10",
                easy: { title: "Linear Equations", url: "https://www.youtube.com/watch?v=Ft2_QtXAnh8" },
                medium: { title: "Solve Functions", url: "https://www.youtube.com/watch?v=1xATmTI-YY8" },
                hard: { title: "Polynomial Equations", url: "https://www.youtube.com/watch?v=ZaXaBcZxhq4" }
            },
            {
                grade: "11",
                easy: { title: "Quadratic Equations", url: "https://www.youtube.com/watch?v=qeByhTF8WEw" },
                medium: { title: "Matrix Operations", url: "https://www.youtube.com/watch?v=yRwQ7A6jVLk" },
                hard: { title: "Complex Numbers", url: "https://www.youtube.com/watch?v=y2wPAZwZTng" }
            },
            {
                grade: "12",
                easy: { title: "Matrix Operations", url: "https://www.youtube.com/watch?v=p48uw2vFWQs&t=8s" },
                medium: { title: "Determinant of Matrices", url: "https://www.youtube.com/watch?v=3ROzG6n4yMc" },
                hard: { title: "Eigenvectors Eigenvalues", url: "https://www.youtube.com/watch?v=PFDu9oVAE-g" }
            }
        ]
    },
    {
        title: "GEOMETRY",
        lessons: [
            {
                grade: "10",
                easy: { title: "Intro to Geometry", url: "https://www.youtube.com/watch?v=302eJ3TzJQU" },
                medium: { title: "Angle Theorems", url: "https://www.youtube.com/watch?v=Bq1QyT-HZrU" },
                hard: { title: "Geometry Shapes", url: "https://www.youtube.com/watch?v=eVDqk-39TZQ" }
            },
            {
                grade: "11",
                easy: { title: "Triangle Properties", url: "https://www.youtube.com/watch?v=q7vI2oXL0gQ" },
                medium: { title: "Circles In Geometry", url: "https://www.youtube.com/watch?v=Fzaof9cX-PM" },
                hard: { title: "Geometric Transformations", url: "https://www.youtube.com/watch?v=GqHWdTLL8Qw" }
            },
            {
                grade: "12",
                easy: { title: "Geometry Vectors", url: "https://www.youtube.com/watch?v=iXdMpXMuEGI" },
                medium: { title: "Coordinate Geometry", url: "https://www.youtube.com/watch?v=PXnAKcBipKM" },
                hard: { title: "Conic Sections - Circle", url: "https://www.youtube.com/watch?v=PLrgwD9TleU" }
            }
        ]
    },
    {
        title: "CALCULUS",
        lessons: [
            {
                grade: "10",
                easy: { title: "Intro to Calculus", url: "https://www.youtube.com/watch?v=WsQQvHm4lSw" },
                medium: { title: "Derivatives introduction", url: "https://www.youtube.com/watch?v=5yfh5cf4-0w" },
                hard: { title: "Indefinite Integral", url: "https://www.youtube.com/watch?v=o75AqTInKDU" }
            },
            {
                grade: "11",
                easy: { title: "Introduction to Limits", url: "https://www.youtube.com/watch?v=YNstP0ESndU" },
                medium: { title: "Differentiation Formulas", url: "https://www.youtube.com/watch?v=AdLAkD-r9Rs" },
                hard: { title: "Indefinite Integral", url: "https://www.youtube.com/watch?v=o75AqTInKDU&t=15s" }
            },
            {
                grade: "12",
                easy: { title: "Differential Equations", url: "https://www.youtube.com/watch?v=6o7b9yyhH7k" },
                medium: { title: "Integral Calculus", url: "https://www.youtube.com/watch?v=o75AqTInKDU&t=15s" },
                hard: { title: "Multivariable Calculus", url: "https://www.youtube.com/watch?v=JAf_aSIJryg" }
            }
        ]
    }
];

// Function to create a card HTML
function createCard(card) {
    return `
        <section>
            <div class="card-image">
                <table class="card-table">
                    <tr>
                        <th class="card-table-header">GRADE</th>
                        <th>Easy</th>
                        <th>Medium</th>
                        <th>Hard</th>
                    </tr>
                    ${card.lessons.map(lesson => `
                        <tr>
                            <td>${lesson.grade}</td>
                            <td><a href="${lesson.easy.url}"><button>${lesson.easy.title}</button></a></td>
                            <td><a href="${lesson.medium.url}"><button>${lesson.medium.title}</button></a></td>
                            <td><a href="${lesson.hard.url}"><button>${lesson.hard.title}</button></a></td>
                        </tr>
                    `).join('')}
                </table>
                <div class="card-title">${card.title}</div>
            </div>
        </section>
    `;
}

// Function to render all cards
function renderCards() {
    const cardsContainer = document.querySelector('.cards-container');
    if (cardsContainer) {
        cardsContainer.innerHTML = cardData.map(card => createCard(card)).join('');
    }
}

document.addEventListener('DOMContentLoaded', renderCards);
