let chant = "HOW BOUT THEM COWBOYS!";
  document.write(`<p class="js">${chant}</p>`);
  gsap.from(".js", {duration: 5, x: 200, backgroundColor: "silver", borderRadius: "20%",
  border: "10px solid blue", scale: 1.0, ease: "elastic", color: "blue" });
  