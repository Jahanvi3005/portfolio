document.addEventListener("DOMContentLoaded", () => {
  // --- 💡 EFFECT 1: Interactive Mouse Spotlight ---
  const cursorGlow = document.getElementById("cursor-glow");
  document.addEventListener("mousemove", (e) => {
    // Update CSS custom properties to the mouse's X and Y coordinates
    cursorGlow.style.setProperty("--x", e.clientX + "px");
    cursorGlow.style.setProperty("--y", e.clientY + "px");
  });

  // --- 🚀 EFFECT 2: 3D Tilt on Card Hover ---
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left; // Mouse X position within the card
      const y = e.clientY - rect.top; // Mouse Y position within the card

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Calculate rotation values (e.g., -10deg to 10deg)
      const rotateX = ((y - centerY) / centerY) * -10; // Invert for natural feel
      const rotateY = ((x - centerX) / centerX) * 10;

      // Apply the 3D transformation
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      card.style.boxShadow = "0 16px 40px 0 rgba(0, 0, 0, 0.5)";
    });

    // Reset the card's transformation when the mouse leaves
    card.addEventListener("mouseleave", () => {
      card.style.transform = "perspective(1000px) rotateX(0) rotateY(0)";
      card.style.boxShadow = "0 8px 32px 0 rgba(0, 0, 0, 0.37)";
    });
  });

  // --- ✨ EFFECT 3: Scroll-Reveal Animation ---
  const hiddenElements = document.querySelectorAll(".hidden");

  // Set up the Intersection Observer
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // If the element is in view, add the 'show' class to trigger the animation
          entry.target.classList.add("show");
        }
      });
    },
    {
      threshold: 0.1, // Trigger when 10% of the element is visible
    }
  );

  // Observe each hidden element
  hiddenElements.forEach((el) => observer.observe(el));
});
