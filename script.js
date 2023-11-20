//your JS code here. If required.
// Function to update the timer
function updateTimer() {
  const timerElement = document.getElementById('timer');
  const currentDate = new Date();
  
  // Get the current date and time components
  const date = currentDate.toDateString();
  const time = currentDate.toLocaleTimeString();

  // Display the date and time in the timer element
  timerElement.textContent = `${date} ${time}`;
}

// Update the timer every second
setInterval(updateTimer, 1000);

// Initial call to display the timer immediately
updateTimer();
