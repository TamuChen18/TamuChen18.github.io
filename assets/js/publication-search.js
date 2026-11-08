document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("publication-search");
  if (!form) return;
  const input = document.getElementById("publication-query");
  const clear = document.getElementById("publication-search-clear");
  const status = document.getElementById("publication-search-status");
  const empty = document.getElementById("publication-search-empty");
  const entries = Array.from(document.querySelectorAll("#publication-list ol.bibliography > li"));
  const searchable = entries.map((entry) =>
    Array.from(entry.querySelectorAll(".title, .author, .periodical, .overview-content"))
      .map((element) => element.textContent)
      .join(" ")
      .toLowerCase()
  );
  const filter = () => {
    const terms = input.value.trim().toLowerCase().split(/\s+/).filter(Boolean);
    let visible = 0;
    entries.forEach((entry, index) => {
      const matches = terms.every((term) => searchable[index].includes(term));
      entry.hidden = !matches;
      if (matches) visible += 1;
    });
    status.textContent = `Showing ${visible} of ${entries.length} publications`;
    empty.hidden = visible !== 0;
    clear.disabled = input.value.length === 0;
  };
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    filter();
  });
  input.addEventListener("input", filter);
  clear.addEventListener("click", () => {
    input.value = "";
    filter();
    input.focus();
  });
  filter();
});
