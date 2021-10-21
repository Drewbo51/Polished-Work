import React from "react";
import "./style.css";

function CollaborativeProjects() {
    return (
            <div className="leaderDiv">
                <div className="introToProjects">
                    <h1>These are projects I completed with my fellow students at the University of California Riverside coding boot camp.</h1>
                </div>
                <div className="projectDivHolder">
                    <div className="imgDiv2">
                        <p className="boldMe diffP">Upon exiting the program the final requirement was this group project which utilized React and React-Router-Dom, which proved to be very fun and allowed for someone who likes to compartmentalize things to be at ease. Our project was a movie review site which first welcomes you with a kind message stating to you our purpose, which is to bring reliable reviews to you and show top rated movies, and what is hot in theatres now. The "About" tab does just that and you can navigate to the "In Theatres" tab which shows what is out now, the "Genres" tab which shows top rated movies from 4 top genres, and a "Search Reviews" tab which utilizes reviews from an API from New York Times movie reviews. After you submit your search a card pops up showing a brief description of the movie being searched and a photo if available. During the project another API we were using deprecated, so we individually got the info for each movie needed in the "Genres" tab as well as the "In Theatres" tab. We then stored the info in JSON files and distributed the images, titles, year of release, and made the images clickable as links with the ".map()" method. This info was brought in by our IMDB API and the links take you to their website for better information on each movie. Feel free to check out the project yourself at <a className="underlineMe" href="https://distracted-jang-0c080c.netlify.app/">https://distracted-jang-0c080c.netlify.app/</a>, and the code and file structure at <a className="underlineMe" href="https://github.com/Drewbo51/OnTheCouch">https://github.com/Drewbo51/OnTheCouch</a></p>
                        <img src="./images/project1-1.png" height="400px" width="625px" alt="project1" />
                        <img src="./images/project1-2.png" height="400px" width="625px" alt="project1" />
                        <img src="./images/project1-3.png" height="400px" width="625px" alt="project1" />
                        <img src="./images/project1-4.png" height="400px" width="625px" alt="project1" />
                        <img src="./images/project1-5.png" height="400px" width="625px" alt="project1" />
                    </div>
                    <div className="imgDiv2">
                        <p className="boldMem diffP">This project I worked on with my classmates when first learning jQuery, our project was a marvel themed tic-tac-toe game. The game is designed so that after you choose your spot the computer automatically selects their spot. This is done by placing all the available locations in an array and as the spots are chosen, whether it be by computer or by user, they are spliced out of the array. The computer's choice is made by the "    Math.random()" method from spots that remain in the array. Once you win, OR if the computer wins, a Giphy is selected through an API based on the emotion you are feeling(GIPHY.com). "Happy" for a Win, or "Sad" for a loss. We were given much praise for our project as our tic-tac-toe game was completely an original design and the fact that everybody took part in our presentation. Feel free to check out the project yourself at <a className="underlineMe" href="https://drewbo51.github.io/Project1-MarvelTicTacToe/">https://drewbo51.github.io/Project1-MarvelTicTacToe/</a>, and the code and file structure at <a className="underlineMe" href="https://github.com/Drewbo51/Project1-MarvelTicTacToe">https://github.com/Drewbo51/Project1-MarvelTicTacToe</a></p>
                    <img src="./images/project2-1.png" height="400px" width="625px" alt="project2-1" />
                    <img src="./images/project2-2.png" height="400px" width="625px" alt="project2-2" />
                    <img src="./images/project2-3.png" height="400px" width="625px" alt="project2-3" />
                    <img src="./images/project2-4.png" height="400px" width="625px" alt="project2-4" />
                    <img src="./images/project2-5.png" height="400px" width="625px" alt="project2-5" />
                    </div>
                </div>
            </div>
    )
}

export default CollaborativeProjects;