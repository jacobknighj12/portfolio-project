document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("keydown", (event) => {
    if (event.key == "Enter")
      window.location.href =
        "http://127.0.0.1:5500/html/" +
        document.getElementById("navigate").value;
  });
});
