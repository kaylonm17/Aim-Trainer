const React = require("react");
const { useState, useRef, useEffect } = require("react");
const Canvas = require("react-canvas-component");





const TARGET_TYPES = {
  CIRCLE: "circle",
  SQUARE: "square",
};

const TARGET_COLORS = ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#00ffff"];

function generateTarget() {
  const type = Math.random() < 0.5 ? TARGET_TYPES.CIRCLE : TARGET_TYPES.SQUARE;
  const color = TARGET_COLORS[Math.floor(Math.random() * TARGET_COLORS.length)];
  const radius = Math.random() * 50 + 10;
  const size = radius * 2;
  const x = Math.random() * (500 - size) + radius;
  const y = Math.random() * (500 - size) + radius;
  return { id: Date.now(), type, color, radius, size, x, y };
}

function App() {
  const [score, setScore] = useState(0);
  const [targets, setTargets] = useState([]);
  const canvasRef = useRef();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTargets((prevTargets) => [...prevTargets, generateTarget()]);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  function handleCanvasClick(event) {
    const canvas = canvasRef.current;
    const canvasRect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - canvasRect.left;
    const mouseY = event.clientY - canvasRect.top;

    const hitTargetIndex = targets.findIndex((target) => {
      if (target.type === TARGET_TYPES.CIRCLE) {
        const dx = target.x - mouseX;
        const dy = target.y - mouseY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        return distance <= target.radius;
      } else {
        const halfSize = target.size / 2;
        return mouseX >= target.x - halfSize && mouseX <= target.x + halfSize &&
               mouseY >= target.y - halfSize && mouseY <= target.y + halfSize;
      }
    });

    if (hitTargetIndex !== -1) {
      const hitTarget = targets[hitTargetIndex];
      setScore((prevScore) => prevScore + (hitTarget.type === TARGET_TYPES.CIRCLE ? 1 : 2));
      setTargets((prevTargets) => prevTargets.filter((target) => target.id !== hitTarget.id));
    }
  }

}

module.exports = App;