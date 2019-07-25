let currentColor = [90, 60, 50];
let seen = {};
function circle(y, z, colorDelta) {
  const elem = document.createElement("div");
  const scale = 44;
  let color;
  if (typeof colorDelta === "number") {
    color = [[0, 50, 50], [90, 50, 50], [180, 50, 50], [270, 50, 50]][
      colorDelta
    ];
    console.log("here", color);
  } else {
    color = currentColor.map((c, i) => c + colorDelta[i]);
  }
  let [h, s, l] = color;
  h = h % 360;
  s = Math.max(0, Math.min(100, s));
  l = Math.max(0, Math.min(100, l));
  color = [h, s, l];
  const colorString = JSON.stringify(color);
  const [r, g, b] = color;
  Object.assign(elem.style, {
    display: "inline-block",
    position: "absolute",
    bottom: 2.4 * scale + (y + z * 0.5) * scale + "px",
    left: 2.2 * scale * 0.85 + z * 0.85 * scale + "px",
    background: `hsl(${h},${s}%,${l}%)`,
    width: scale * 0.9 + "px",
    height: scale * 0.9 + "px",
    "border-radius": scale + "px",
    "box-shadow":
      "0px 0px 1px rgba(255,255,255,255), 2px 2px 4px rgba(0,0,0,255)",
    "text-shadow": "0px 0px 2px white",
    font: "8px sans-serif",
    "line-height": "12px",
    "font-weight": "bold",
    "text-align": "center"
  });
  //elem.innerHTML = '<br>#' + color.map(i => Math.floor(i/16).toString(16)).join('')
  elem.onmousedown = () => {
    currentColor = color;
    render();
  };
  //if(!seen[colorString]) {
  fixedPaletteElem.appendChild(elem);
  seen[colorString] = true;
  //}
}
function render() {
  while (fixedPaletteElem.firstChild) {
    fixedPaletteElem.removeChild(fixedPaletteElem.firstChild);
  }
  seen = {};
  const [r, g, b] = currentColor;
  //document.body.style.background = `hsl(${r},${g}%,${b}%)`

  circle(0, 0, [0, 0, 0]);

  circle(1, 0, [0, 0, 10]);
  circle(2, 0, [0, 0, 40]);

  circle(0, 1, [20, 0, 0]);
  circle(0, 2, [80, 0, 0]);

  circle(-1, 1, [0, -20, 0]);
  circle(-2, 2, [0, -80, 0]);

  circle(-1, 0, [0, 0, -10]);
  circle(-2, 0, [0, 0, -40]);

  circle(0, -1, [-20, 0, 0]);
  circle(0, -2, [-80, 0, 0]);

  circle(1, -1, [0, 20, 0]);
  circle(2, -2, [0, 30, 0]);

  circle(1.5, 1.5, 0);
  circle(-3, 1.5, 1);
  circle(-1.5, -1.5, 2);
  circle(3, -1.5, 3);

  /*
  circle(1,-1, [0,1,-1]);
  circle(1,0, [1,0,1]);
  circle(0,1, [-1,1,0]);
  circle(-1,1, [0,-1,1]);
  circle(-1,0, [-1,0,-1]);
  circle(0,-1, [1,-1,0]);

  circle(2,-2, [1,1,-1]);
  circle(2,0, [1,1,1]);
  circle(0,2, [-1,1,1]);
  circle(-2,2, [-1,-1,1]);
  circle(-2,0, [-1,-1,-1]);
  circle(0,-2, [1,-1,-1]);

  circle(2,-2, [1,0,0]);
  circle(2,0, [0,1,0]);
  circle(0,2, [0,0,1]);
  circle(-2,2, [-1,0,0]);
  circle(-2,0, [0,-1,0]);
  circle(0,-2, [0,0,-1]);

  circle(3,-3, [1,0,0]);
  circle(3,0, [0,1,0]);
  circle(0,3, [0,0,1]);
  circle(-3,3, [-1,0,0]);
  circle(-3,0, [0,-1,0]);
  circle(0,-3, [0,0,-1]);

  circle(2,-1, [1,1,0]);
  circle(1,1, [0,1,1]);
  circle(-1,2, [-1,0,1]);
  circle(-2,1, [-1,-1,0]);
  circle(-1,-1, [0,-1,-1]);
  circle(1,-2, [1,0,-1]);
  */
}
render();
