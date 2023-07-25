// eslint-disable-next-line global-require
window.Buffer = window.Buffer || require('buffer').Buffer;

export function getHeader(headerArray, name) {
  const possibleMatches = headerArray.filter((header) => header.name === name);
  if (possibleMatches.length === 0) {
    return null;
  }
  return possibleMatches.length === 1 ?
    possibleMatches[0].value :
    possibleMatches.map((match) => match.value);
}

export function parseState(state) {
  const data = state.split('.')[1].trim();
  // lol
  const decoded = decodeURIComponent(Buffer.from(decodeURIComponent(decodeURIComponent(data)), 'base64')).trim();
  return JSON.parse(decoded);
}

export function getJWTClaims(jwt) {
  const parts = jwt.split('.');
  return JSON.parse(Buffer.from(parts[1], 'base64').toString());
}
