// Get the search input element
const searchInput = document.getElementById('searchInput');
// Get the glossary terms container
const glossaryContainer = document.getElementById('glossaryContainer');
// Add an event listener to the search input
searchInput.addEventListener('input', function () {
  const searchTerm = searchInput
    .value
    .toLowerCase()
    .trim();
  // Loop through the glossary terms and hide/show them based on the search input
  Array.from(glossaryContainer.children).forEach((glossaryItem) => {
    const term = glossaryItem
      .querySelector('.term')
      .textContent
      .toLowerCase();
    if (term.includes(searchTerm)) {
      glossaryItem.style.display = 'block'; // Show matched terms
    } else {
      glossaryItem.style.display = 'none'; // Hide non-matching terms
    }
  });
});