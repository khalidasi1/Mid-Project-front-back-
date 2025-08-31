function injectFooter() {
  if (document.querySelector(".site-footer")) return;

  const footer = document.createElement("footer");
  footer.className = "site-footer";
  footer.innerHTML = `<p>© 2025 Khalid Asiri. All rights reserved.</p>`;
  document.body.appendChild(footer);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", injectFooter);
} else {
  injectFooter();
}
