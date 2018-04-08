/**
 * Get text field without counting HTML
 * Source: http://stackoverflow.com/questions/822452/strip-html-from-text-javascript
 *
 * @param  {String} html HTML Text
 * @return {string} Text with HTML stripped
 */
export function getTextWithoutHtml(html) {
  const tempCharWrapper = document.createElement('div');
  tempCharWrapper.innerHTML = html;

  return tempCharWrapper.textContent || tempCharWrapper.innerText || '';
}

/**
 * Truncate text in a post
 *
 * @param  {String} text
 * @param  {Number} count
 * @return {String}
 */
export function truncateString(text, count) {
  const limit = count || 160;
  const trimmed = text.trim();

  if (trimmed.length <= limit) {
    return trimmed;
  }

  const trimRegex = new RegExp(`^(.{${limit}}[^\\s]*).*`);
  return `${trimmed.replace(trimRegex, '$1')} ...`;
}

export function urlEncoder(obj) {
  return Object.keys(obj).map(i => `${i}=${obj[i]}`).join('&');
}
