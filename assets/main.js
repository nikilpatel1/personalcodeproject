(function () {
  var site = window.SITE || {};

  // Mark the current page in the navigation.
  var page = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".site-nav a").forEach(function (a) {
    var target = a.getAttribute("href");
    if (target === page || (page === "" && target === "index.html")) {
      a.setAttribute("aria-current", "page");
    }
  });

  // Build the list of contact links from config.js, skipping empty values.
  var links = [];
  if (site.email) links.push({ label: "Email", text: site.email, href: "mailto:" + site.email });
  if (site.linkedin) links.push({ label: "LinkedIn", text: "LinkedIn profile", href: site.linkedin });
  if (site.github) links.push({ label: "GitHub", text: site.github.replace(/^https?:\/\//, ""), href: site.github });
  if (site.resume) links.push({ label: "Resume", text: "Download the PDF", href: site.resume });

  function external(a, href) {
    a.href = href;
    if (/^https?:/.test(href)) {
      a.rel = "noopener";
    }
  }

  var list = document.getElementById("contact-links");
  if (list && links.length) {
    list.innerHTML = "";
    links.forEach(function (l) {
      var li = document.createElement("li");
      var label = document.createElement("span");
      label.className = "label";
      label.textContent = l.label;
      var a = document.createElement("a");
      a.textContent = l.text;
      external(a, l.href);
      li.appendChild(label);
      li.appendChild(a);
      list.appendChild(li);
    });
  }

  var foot = document.getElementById("footer-links");
  if (foot && links.length) {
    foot.innerHTML = "";
    links.forEach(function (l) {
      var a = document.createElement("a");
      a.textContent = l.label;
      external(a, l.href);
      foot.appendChild(a);
    });
  }

  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();
