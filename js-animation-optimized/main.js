const circle = document.getElementById("circle");

let startTime = null;
const duration = 2000; // Total animation duration in milliseconds

const animate = (timestamp) => {
  if (!startTime) startTime = timestamp;

  const elapsedTime = timestamp - startTime;
  const progress = elapsedTime / duration;

  // Calculate scale using a sinusoidal function for smooth pulsing effect
  const scale = 1 + 0.5 * Math.sin(progress * Math.PI * 2);
  circle.style.transform = `scale(${scale})`;

  // Continue the animation loop or reset for a new cycle
  if (elapsedTime < duration) {
    requestAnimationFrame(animate);
  } else {
    startTime = null;
    requestAnimationFrame(animate);
  }
};

// Start the animation
requestAnimationFrame(animate);
