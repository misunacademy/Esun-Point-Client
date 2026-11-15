export interface TimelinePoint {
  x: number;
  y: number;
}

const TURN_RATIO = 0.68;
const CORNER_RADIUS = 24;

function roundedPath(nodes: TimelinePoint[], radius = CORNER_RADIUS) {
  if (nodes.length === 0) return '';

  let d = `M ${nodes[0].x} ${nodes[0].y}`;

  for (let index = 1; index < nodes.length - 1; index += 1) {
    const previous = nodes[index - 1];
    const current = nodes[index];
    const next = nodes[index + 1];
    const inLength = Math.hypot(current.x - previous.x, current.y - previous.y);
    const outLength = Math.hypot(next.x - current.x, next.y - current.y);

    if (inLength === 0 || outLength === 0) {
      d += ` L ${current.x} ${current.y}`;
      continue;
    }

    const corner = Math.min(radius, inLength / 2, outLength / 2);
    const start = {
      x: current.x - ((current.x - previous.x) / inLength) * corner,
      y: current.y - ((current.y - previous.y) / inLength) * corner,
    };
    const end = {
      x: current.x + ((next.x - current.x) / outLength) * corner,
      y: current.y + ((next.y - current.y) / outLength) * corner,
    };

    d += ` L ${start.x} ${start.y} Q ${current.x} ${current.y} ${end.x} ${end.y}`;
  }

  const last = nodes[nodes.length - 1];
  return `${d} L ${last.x} ${last.y}`;
}

export function buildTimelinePath(points: TimelinePoint[]) {
  if (points.length < 2) {
    return { d: '', thresholds: [0] };
  }

  const nodes: TimelinePoint[] = [points[0]];
  const distances: number[] = [0];
  let total = 0;

  for (let index = 1; index < points.length; index += 1) {
    const from = points[index - 1];
    const to = points[index];
    const turnX = from.x + (to.x - from.x) * TURN_RATIO;

    total += Math.abs(turnX - from.x) + Math.abs(to.y - from.y) + Math.abs(to.x - turnX);
    distances.push(total);

    nodes.push({ x: turnX, y: from.y }, { x: turnX, y: to.y }, to);
  }

  const thresholds = total === 0 ? [0] : distances.map((distance) => distance / total);

  return { d: roundedPath(nodes), thresholds };
}
