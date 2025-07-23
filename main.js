function typeText(id, text, speed = 110) {
  let i = 0;
  function typing() {
    if (i < text.length) {
      document.getElementById(id).innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    }
  }
  typing();
}

window.onload = function () {
  if (document.getElementById("typing-text")) {
    typeText("typing-text", "I am Agada Joseph, a Tech-Savvy Student.");
  } else if (document.getElementById("past-heading")) {
    typeText("past-heading", "What I've Done (Past)");
  } else if (document.getElementById("present-heading")) {
    typeText("present-heading", "What I'm Doing Now (Present)");
  } else if (document.getElementById("future-heading")) {
    typeText("future-heading", "My Goals Ahead (Future)");
  } else if (document.getElementById("contact-heading")) {
    typeText("contact-heading", "Let's Connect (Contact Me)");
  }
};