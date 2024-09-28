# IQ Odyssey Quiz Game 🎮

**IQ Odyssey** is a timed quiz game that challenges players with general knowledge questions. The user has 60 seconds to answer as many questions as possible, and the score is updated based on correct answers.

## Features
- A 10-question quiz with various topics.
- 60-second countdown timer to complete the quiz.
- Dynamic feedback on whether an answer is correct or incorrect.
- Displays the final score after the quiz ends.
- Option to end the quiz early with a "Submit" button.

## Project Structure
- `index.html`: The main HTML structure of the quiz.
- `styles.css`: The CSS file that handles the design and layout.
- `script.js`: The JavaScript file that powers the quiz functionality, including the timer and question logic.

## How to Play
1. Open the `index.html` file in your browser.
2. A question with multiple options will appear.
3. Click the correct answer for each question.
4. You have 60 seconds to answer all 10 questions.
5. When the time runs out or you finish the quiz, your score will be displayed.

## Project Files

### 1. HTML (`index.html`)
- Quiz Structure:
  - Quiz Header: Displays the title and the countdown timer.
  - Quiz Content: Displays the current question and multiple choice options.
  - Submit Button: Allows users to manually end the quiz.
  - Feedback Section: Shows whether the answer is correct or incorrect after each question.
  - Score Display: Shows the final score after the quiz ends.

### 2. CSS (`styles.css`)
- Styles the layout and appearance of the quiz interface.
- Key design elements:
  - Centered quiz container with a dark color theme.
  - Buttons with hover effects for better interactivity.
  - Timer and feedback messages are styled to stand out during gameplay.

### 3. JavaScript (`script.js`)
- Contains the quiz logic:
  - Question Loading: Dynamically displays questions and multiple choice options.
  - Answer Checking: Verifies if the selected answer is correct and provides immediate feedback.
  - Score Tracking: Updates the score based on correct answers.
  - Timer: A countdown timer that ends the quiz when it reaches 0.
  - Quiz End: The game ends either when all questions are answered or when time runs out, displaying the user's final score.

## How the Quiz Works
- The quiz consists of 10 multiple-choice questions, each with 4 possible answers.
- The user has 60 seconds to complete the quiz. Once the timer hits zero or the user finishes all questions, the quiz ends.
- Feedback on whether the user's answer is correct or incorrect is provided after each question.
- At the end of the quiz, the user’s score is displayed as the number of correct answers out of 10.

## How to Run Locally
1. Clone or download this repository.
2. Open the `index.html` file in your browser.

```bash
git clone https://github.com/deepakp2410/iq-odyssey-quiz-game.git
```

## Video Demonstration
Watch the game in action! Check out the video demonstration of IQ Odyssey on my [LinkedIn profile](https://www.linkedin.com/feed/update/urn:li:activity:7245343803765628928/).

## Future Enhancements
- Add the ability to pause and resume the timer.
- Introduce multiple difficulty levels or question categories.
- Display the correct answers at the end of the quiz for wrong responses.
- Add sound effects for correct/incorrect answers and time warnings.

## Technologies Used
- HTML5: Structure and layout of the quiz.
- CSS3: Styling for a visually appealing interface.
- JavaScript: Quiz logic, question handling, and timer functionality.
