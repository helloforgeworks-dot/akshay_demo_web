/**
 * Technical Canvas: Interactive CNC Toolpath, Precision Metrology Grid & Laser Simulation
 */
export function initTechnicalCanvas(canvasId = 'hero-tech-canvas') {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let animationFrameId;
  let width = (canvas.width = canvas.parentElement.offsetWidth);
  let height = (canvas.height = canvas.parentElement.offsetHeight);

  let mouse = { x: width / 2, y: height / 2, active: false };

  window.addEventListener('resize', () => {
    if (!canvas.parentElement) return;
    width = canvas.width = canvas.parentElement.offsetWidth;
    height = canvas.height = canvas.parentElement.offsetHeight;
  });

  canvas.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
    mouse.active = true;
  });

  canvas.addEventListener('mouseleave', () => {
    mouse.active = false;
  });

  // Simulated CNC Toolpath Nodes
  const numNodes = 28;
  const nodes = [];
  for (let i = 0; i < numNodes; i++) {
    nodes.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      radius: Math.random() * 2 + 1,
      targetX: Math.random() * width,
      targetY: Math.random() * height,
    });
  }

  // Laser machining beam state
  let laserAngle = 0;

  function render() {
    ctx.clearRect(0, 0, width, height);

    // 1. Subtle Precision Coordinate Grid
    ctx.strokeStyle = 'rgba(199, 203, 206, 0.035)';
    ctx.lineWidth = 1;
    const gridSize = 40;

    for (let x = 0; x < width; x += gridSize) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }
    for (let y = 0; y < height; y += gridSize) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    // 2. Dynamic CNC Toolpaths Connecting Nodes
    ctx.lineWidth = 1;
    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i];

      // Update position
      node.x += node.vx;
      node.y += node.vy;

      if (node.x < 0 || node.x > width) node.vx *= -1;
      if (node.y < 0 || node.y > height) node.vy *= -1;

      // Mouse influence
      if (mouse.active) {
        const dx = mouse.x - node.x;
        const dy = mouse.y - node.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 180) {
          node.x += dx * 0.012;
          node.y += dy * 0.012;
        }
      }

      // Draw node marker (technical square/cross)
      ctx.fillStyle = 'rgba(201, 138, 75, 0.5)';
      ctx.fillRect(node.x - 1.5, node.y - 1.5, 3, 3);

      // Connect neighboring nodes to simulate toolpath arcs
      for (let j = i + 1; j < nodes.length; j++) {
        const other = nodes[j];
        const dist = Math.hypot(node.x - other.x, node.y - other.y);
        if (dist < 140) {
          const alpha = (1 - dist / 140) * 0.22;
          ctx.strokeStyle = `rgba(201, 138, 75, ${alpha})`;
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(other.x, other.y);
          ctx.stroke();
        }
      }
    }

    // 3. Central Rotating High-Precision Spindle / Calibration Reticle
    const cx = width * 0.72;
    const cy = height * 0.48;
    laserAngle += 0.008;

    // Concentric precision rings
    ctx.strokeStyle = 'rgba(199, 203, 206, 0.08)';
    ctx.beginPath();
    ctx.arc(cx, cy, 120, 0, Math.PI * 2);
    ctx.stroke();

    ctx.strokeStyle = 'rgba(201, 138, 75, 0.2)';
    ctx.beginPath();
    ctx.arc(cx, cy, 75, laserAngle, laserAngle + Math.PI * 1.2);
    ctx.stroke();

    ctx.strokeStyle = 'rgba(199, 203, 206, 0.12)';
    ctx.beginPath();
    ctx.arc(cx, cy, 35, -laserAngle * 1.5, -laserAngle * 1.5 + Math.PI * 0.8);
    ctx.stroke();

    // Spindle axis crosshairs
    ctx.strokeStyle = 'rgba(199, 203, 206, 0.08)';
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    ctx.moveTo(cx - 150, cy);
    ctx.lineTo(cx + 150, cy);
    ctx.moveTo(cx, cy - 150);
    ctx.lineTo(cx, cy + 150);
    ctx.stroke();
    ctx.setLineDash([]);

    // Live Technical Toolpath Coordinates Overlay
    if (mouse.active) {
      ctx.font = '10px "JetBrains Mono", monospace';
      ctx.fillStyle = 'rgba(201, 138, 75, 0.8)';
      ctx.fillText(
        `X: ${(mouse.x * 0.125).toFixed(3)} mm  Y: ${(mouse.y * 0.125).toFixed(3)} mm  Z: 0.000 µm`,
        mouse.x + 12,
        mouse.y - 12
      );
      
      // Cursor targeting crosshair
      ctx.strokeStyle = 'rgba(201, 138, 75, 0.35)';
      ctx.beginPath();
      ctx.moveTo(mouse.x - 8, mouse.y);
      ctx.lineTo(mouse.x + 8, mouse.y);
      ctx.moveTo(mouse.x, mouse.y - 8);
      ctx.lineTo(mouse.x, mouse.y + 8);
      ctx.stroke();
    }

    animationFrameId = requestAnimationFrame(render);
  }

  render();

  return () => {
    cancelAnimationFrame(animationFrameId);
  };
}
