const circle = document.getElementById("circle");

let scale = 1;
let growing = true;

const animate = () => {
  // Increment or decrement the scale based on the direction
  if (growing) {
    scale += 0.01;
    if (scale >= 1.5) growing = false;
  } else {
    scale -= 0.01;
    if (scale <= 1) growing = true;
  }

  // Apply the updated scale to the circle
  circle.style.transform = `scale(${scale})`;

  // Continue the animation loop
  requestAnimationFrame(animate);
};

// Start the animation
requestAnimationFrame(animate);
