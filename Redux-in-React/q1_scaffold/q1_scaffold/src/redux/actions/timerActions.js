// define action constants here
export const START_TIMER = "START TIMER"; 
export const RESET_TIMER = "RESET TIMER"; 
export const PAUSE_TIMER = "PAUSE TIMER"; 
export const INCREMENT_TIMER = "INCREMENT TIMER"; 

// define action creators here
export const startTimer = (isRunning) =>({isRunning, type:START_TIMER});
export const resetTimer = (isRunning) =>({isRunning, type:RESET_TIMER});
export const pauseTimer = (isRunning) =>({isRunning, type:PAUSE_TIMER});
export const incrementTimer = (elapsedTime) =>({elapsedTime, type:INCREMENT_TIMER});