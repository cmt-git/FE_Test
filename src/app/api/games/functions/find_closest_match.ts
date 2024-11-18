//region: levenshtein
function levenshtein(a: string, b: string): number {
  const tmp: number[][] = [];
  let i: number, j: number;

  for (i = 0; i <= a.length; i++) {
    tmp[i] = [i];
  }
  for (j = 0; j <= b.length; j++) {
    tmp[0][j] = j;
  }

  for (i = 1; i <= a.length; i++) {
    for (j = 1; j <= b.length; j++) {
      tmp[i][j] = Math.min(
        tmp[i - 1][j] + 1,
        tmp[i][j - 1] + 1,
        tmp[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1)
      );
    }
  }

  return tmp[a.length][b.length];
}

/**
 *
 *
 * SPACE
 *
 *
 */

interface StringDistance {
  string: string;
  distance: number;
}

//region: Find Closest Match
export function findClosestMatches(
  target: string,
  strings: string[]
): string[] {
  const distances: StringDistance[] = strings.map((str) => ({
    string: str,
    distance: levenshtein(target, str),
  }));

  distances.sort((a, b) => a.distance - b.distance);

  const minDistance = distances[0].distance;

  const closestMatches: string[] = distances
    .filter((item) => item.distance === minDistance)
    .map((item) => item.string);

  return closestMatches;
}
