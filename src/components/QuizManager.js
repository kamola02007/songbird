import { birdsData } from "../../assets/db/data.js";
import { UIUpdater } from "./UIUpdater.js";
import { AudioPlayer } from "./AudioPlayer.js";

export class QuizManager {
    constructor() {
        this.audioPlayer = new AudioPlayer()
        this.uiUpdater = new UIUpdater();
        this.currentCategory = 0;
        this.currentBird = null;
        this.score = 0
        this.attemps = 0
    }

    startQuiz() {
        this.initQuestion();
        this.uiUpdater.startQuizUi();
    }

    initQuestion() {
        const audioButton = document.querySelector('.play-button')
        const categoryBird = birdsData[this.currentCategory];
        const randomNumber = Math.floor(Math.random() * categoryBird.length);
        this.currentBird = categoryBird[randomNumber]; 

        audioButton.dataset.audio = this.currentBird.audio

        this.uiUpdater.updateBirdList(categoryBird)
    }

    handleBirdSelection (element) {
        if(this.givenCorrectAnswer) return

        if (element.dataset.bird === this.currentBird.name) {
            this.score = this.score + 5 - this.attemps
            this.uiUpdater.updateScore(this.score)
            this.givenCorrectAnswer = true
            element.classList.add('correct')
            this.correctSoundFn()
        } else {
            this,this.attemps++
            element.classList.add('incorrect')
            this.incorrectSoundFn()
        
        }
        
    } 

    correctSoundFn( ) {
        const correctSound = new Audio ('../../assets/sounds/rightanswer.mp3')
        correctSound.play()
    }

    incorrectSoundFn( ) {
        const incorrectSound = new Audio ('../../assets/sounds/wronganswer.mp3')
        incorrectSound.play()
    }
    

    
}
