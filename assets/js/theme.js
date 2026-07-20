(function () {
  var FLAVORS = ["latte", "frappe", "macchiato", "mocha"];
  var STORAGE_KEY = "mobiusos-theme";
  var root = document.documentElement;

  function setActiveButton(flavor) {
    var buttons = document.querySelectorAll(".theme-switcher button");
    for (var i = 0; i < buttons.length; i++) {
      var btn = buttons[i];
      btn.setAttribute("aria-pressed", btn.dataset.flavor === flavor ? "true" : "false");
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    setActiveButton(root.getAttribute("data-theme"));

    var buttons = document.querySelectorAll(".theme-switcher button");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", function () {
        var flavor = this.dataset.flavor;
        if (FLAVORS.indexOf(flavor) === -1) return;
        root.setAttribute("data-theme", flavor);
        try {
          localStorage.setItem(STORAGE_KEY, flavor);
        } catch (e) {}
        setActiveButton(flavor);
      });
    }
  });
})();
