# Tenzies

Tenzies is a web-based game where players roll and match dice. It requires quick thinking, dexterity, and friendly competition, making it exciting, versatile, and fun for all ages.

https://648df4d311e1f62d1964faa8--vocal-sunburst-504795.netlify.app/

## Description

Tenzies is built using React, HTML, and CSS. The game involves rolling dice and trying to match their values. If all dice are held and have the same value, it's called "Tenzies" and the player wins the game.

The project utilizes React hooks for managing state and components, and it also incorporates the Confetti library to add visual effects when Tenzies is achieved. Additionally, a Modal component is included for displaying additional information or actions.

### how it works:

- The App component is the main component that renders the Tenzies game.
- The generateNewDice function is used to generate a new dice object with a random value, an isHeld property set to false, and a unique id generated using crypto.randomUUID().
- The allNewDice function generates an array of 10 new dice objects using the generateNewDice function.
- The holdDice function is called when a dice is clicked. It toggles the isHeld property of the clicked dice object.
- The dice state is initialized using the allNewDice function and is used to store the current dice objects.
- The tenzies state is used to track whether the game has been won with a "Tenzies" (all dice held and having the same value).
- The openModal state is used to control the visibility of the modal component.
- The useEffect hook is used to check if all dice are held and have the same value whenever the dice state changes. If this condition is met, tenzies is set to true, and the openModal state is set to true to display the modal component.
- The handleDice variable maps over the dice state to generate the Die components for rendering the dice.
- The rollDice function is called when the "Roll" button is clicked. If tenzies is true, indicating a win, the dice state is reset by generating new dice objects using allNewDice. Otherwise, the isHeld property of unheld dice objects is toggled to generate new dice values.
- The return statement renders the game interface with the dice, roll button, and modal component. If tenzies is true, the Confetti component is displayed for visual effects.
- The Modal component is included for additional information or actions related to the game.
#### That's a brief explanation of how the code works. It generates and manages the dice, allows the player to hold and roll them, checks for a "Tenzies" win condition, and provides a modal for additional functionality.

Feel free to modify and enhance the code according to your specific needs and requirements.

Let me know if you have any further questions!
