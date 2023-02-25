const topNav = document.querySelector('.top-nav');
const topNavText = document.querySelectorAll('a');
const footer = document.querySelector('.footer')
const themeToggle = document.querySelector('#themeToggle');



function applyTheme(theme) {
    // top-nav elements
    topNav.classList.remove("theme-light", "theme-dark");
    topNav.classList.add(`theme-${theme}`);	

    // top-nav text elements
    topNavText.forEach(function(anchorTag) {
        anchorTag.classList.remove("theme-light", "theme-dark");
        anchorTag.classList.add(`theme-${theme}`);
      });

    // body elements
    document.body.classList.remove("theme-light", "theme-dark");
    document.body.classList.add(`theme-${theme}`);	

    // footer elements
    footer.classList.remove("theme-light", "theme-dark");
    footer.classList.add(`theme-${theme}`);	

    // Store the theme preference in localStorage
    localStorage.setItem("theme", theme);
}

    // Retrieve the theme preference from localStorage, if it exists
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      applyTheme(savedTheme);

      // Update the toggle switch to match the saved theme
      if (savedTheme === "dark") {
        themeToggle.checked = true;
      }
    }

themeToggle.addEventListener('change', () => {
    if (themeToggle.checked) {
      applyTheme('dark');
    } else {
      applyTheme('light');
    }
  });
