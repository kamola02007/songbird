import { birdsData } from "../../assets/db/data.js";
import { UIUpdater } from "./UIUpdater.js";
import { AudioPlayer } from "./AudioPlayer.js";

export class QuizManager {
    constructor() {
        this.audioPlayer = new AudioPlayer()
        this.uiUpdater = new UIUpdater();
        this.currentCategory = 0;
        this.currentBird = null;
    }

    startQuiz() {
        this.initQuestion();
        this.uiUpdater.startQuizUi();
    }

    initQuestion() {
        const audioButton = document.querySelector('.play-button')
        console.log(audioButton)
        const categoryBird = birdsData[this.currentCategory];
        const randomNumber = Math.floor(Math.random() * categoryBird.length);
        this.currentBird = categoryBird[randomNumber];

        audioButton.dataset.audio = this.currentBird.audio

        this.uiUpdater.updateBirdList(categoryBird)
    }
}
