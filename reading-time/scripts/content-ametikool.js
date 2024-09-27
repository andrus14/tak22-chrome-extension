const articleA = document.querySelector("#main-content");

// `document.querySelector` may return null if the selector doesn't match anything.
if (articleA) {
  const textA = article.textContent;
  const wordMatchRegExpA = /[^\s]+/g; // Regular expression
  const wordsA = textA.matchAll(wordMatchRegExpA);
  // matchAll returns an iterator, convert to array to get word count
  const wordCountA = [...wordsA].length;
  const readingTimeA = Math.round(wordCountA / 200);
  const badgeA = document.createElement("p");
  // Use the same styling as the publish information in an article's header
  badgeA.classList.add("color-secondary-text", "type--caption");
  badgeA.textContent = `⏱️ ${readingTimeA} min read`;

  // Support for API reference docs
  const headingA = articleA.querySelector("h1");
  // Support for article docs with date
  const dateA = articleA.querySelector(".date-created")?.parentNode;

  (dateA ?? headingA).insertAdjacentElement("afterend", badgeA);
}