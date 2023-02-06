if (window.matchMedia) {
  const darkModeMedia = window.matchMedia("(prefers-color-scheme: dark)");

  if (darkModeMedia.matches) {
    jtd.setTheme("dark");
  }

  darkModeMedia.addEventListener("change", event => {
    if (event.matches) {
      jtd.setTheme("dark");
    } else {
      jtd.setTheme("light");
    }
  });
}
