const icons = {
  wire: '<svg viewBox="0 0 48 38" width="39" height="32" fill="none"><path d="M4 8c11 0 7 22 20 22S33 8 44 8" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><circle cx="4" cy="8" r="3" fill="#d8b397"/><circle cx="44" cy="8" r="3" fill="#d8b397"/></svg>',
  battery: '<svg viewBox="0 0 110 94" width="92" height="79" viewBox="0 0 110 94"><ellipse cx="55" cy="81" rx="33" ry="7" fill="#050605" opacity=".55"/><path d="M29 28h52v43a8 8 0 0 1-8 8H37a8 8 0 0 1-8-8V28Z" fill="#b8b6a6"/><path d="M29 28h52v11H29z" fill="#d4d0bf"/><path d="M36 44h38v24H36z" rx="3" fill="#32352c"/><path d="M55 48v14M50 55h10" stroke="#d5ee82" stroke-width="2" stroke-linecap="round"/><rect x="43" y="20" width="24" height="9" rx="2" fill="#8e9084"/><rect x="49" y="17" width="12" height="5" rx="1.5" fill="#c9c8b8"/><path d="M32 72h46" stroke="#88897e" stroke-width="2"/></svg>',
  bulb: '<svg viewBox="0 0 110 94" width="92" height="79" viewBox="0 0 110 94"><ellipse cx="55" cy="80" rx="24" ry="6" fill="#050605" opacity=".55"/><path class="bulb-rays" d="M55 7v8M27 18l6 6M83 18l-6 6M20 44h9M81 44h9" stroke="#ffcb72" stroke-width="2" stroke-linecap="round"/><circle class="bulb-glow" cx="55" cy="38" r="31" fill="#ffc976" opacity=".18"/><path class="bulb-glass" d="M40 47c-1-3-2-6-2-10a17 17 0 1 1 34 0c0 4-1 7-2 10-2 4-6 6-6 11H46c0-5-4-7-6-11Z" fill="#aeb0a0" stroke="#d7d5c6" stroke-width="1.4"/><path d="M46 58h18v9H46z" fill="#85877b"/><path d="M47 62h16M47 66h16M49 70h12" stroke="#55574e" stroke-width="2"/><path d="M51 43c2-5 7-5 9 0" stroke="#fff0bc" stroke-width="1.5" stroke-linecap="round" opacity=".7"/></svg>',
  switch: '<svg viewBox="0 0 110 94" width="92" height="79" viewBox="0 0 110 94"><ellipse cx="55" cy="79" rx="33" ry="7" fill="#050605" opacity=".55"/><rect x="25" y="25" width="60" height="48" rx="8" fill="#44463d" stroke="#76786c"/><rect x="31" y="31" width="48" height="36" rx="5" fill="#282a24"/><path d="M43 50h24" stroke="#85877b" stroke-width="4" stroke-linecap="round"/><circle cx="42" cy="50" r="4" fill="#b8b9ac"/><circle cx="68" cy="50" r="4" fill="#b8b9ac"/><path d="M44 49 61 39" stroke="#d5d5c9" stroke-width="4" stroke-linecap="round"/><circle cx="55" cy="68" r="2" fill="#d5ee82"/></svg>',
  motor: '<svg viewBox="0 0 110 94" width="92" height="79" viewBox="0 0 110 94"><ellipse cx="55" cy="79" rx="33" ry="7" fill="#050605" opacity=".55"/><path d="M34 32a8 8 0 0 1 8-8h27a8 8 0 0 1 8 8v32a8 8 0 0 1-8 8H42a8 8 0 0 1-8-8V32Z" fill="#85877b"/><path d="M42 24v-5h27v5M42 72v5h27v-5" fill="#b4b3a5"/><path d="M77 42h10v12H77" fill="#b8b7aa"/><g class="rotor"><circle cx="55" cy="48" r="12" fill="#34362e" stroke="#c1bfae" stroke-width="2"/><path d="M55 38v20M45 48h20M48 41l14 14M62 41 48 55" stroke="#d5ee82" stroke-width="2" stroke-linecap="round"/></g><path d="M42 31h27" stroke="#55574e" stroke-width="2"/></svg>',
  gear: '<svg viewBox="0 0 110 94" width="88" height="76" viewBox="0 0 110 94"><ellipse cx="55" cy="76" rx="31" ry="7" fill="#050605" opacity=".55"/><g class="gear-shape" fill="#a7a698" stroke="#d0cebd" stroke-width="2"><path d="m55 20 6 4 8-2 4-5 7 4-1 7 6 6 7 1v9l-6 3-2 8 4 6-6 6-7-3-7 4-2 7h-9l-3-7-8-3-7 3-6-7 4-6-3-8-6-3v-9l7-2 3-7-3-7 7-6 6 4 8-3 2-7Z"/><circle cx="55" cy="48" r="10" fill="#282a24"/></g><circle cx="55" cy="48" r="3" fill="#d5ee82"/></svg>',
  magnet: '<svg viewBox="0 0 110 94" width="88" height="76" viewBox="0 0 110 94"><ellipse cx="55" cy="75" rx="30" ry="6" fill="#050605" opacity=".55"/><path d="M32 28v23a23 23 0 0 0 46 0V28H62v23a7 7 0 0 1-14 0V28H32Z" fill="#c6c4b5"/><path d="M32 28h16v14H32zM62 28h16v14H62z" fill="#c56c5b"/><path d="M32 32h16M62 32h16" stroke="#e3a797" stroke-width="2"/></svg>',
  sensor: '<svg viewBox="0 0 110 94" width="86" height="74" viewBox="0 0 110 94"><ellipse cx="55" cy="76" rx="27" ry="6" fill="#050605" opacity=".55"/><path d="M32 37a23 23 0 0 1 46 0v24H32V37Z" fill="#a9aa9c" stroke="#d1d0c1"/><path d="M38 37a17 17 0 0 1 34 0" fill="none" stroke="#e4e2d4" stroke-width="2"/><circle cx="55" cy="49" r="7" fill="#33362d"/><circle class="sensor-core" cx="55" cy="49" r="3"/><path d="M38 62h34v8H38z" fill="#62645a"/></svg>',
  mystery: '<div class="mystery-art" aria-hidden="true"></div>'
};

const definitions = {
  battery: { name: 'Battery', type: 'Single DC cell', trayLabel: 'DC CELL', sub: '01 / power', ports: true, conducts: false, description: 'Provides low-voltage direct current at its plus and minus terminals.' },
  bulb: { name: 'Bulb', type: 'Incandescent lamp', trayLabel: 'INCANDESCENT', sub: '02 / light', ports: true, conducts: true, description: 'Lights when a complete powered circuit passes through it.' },
  switch: { name: 'Switch', type: 'SPST toggle switch', trayLabel: 'SPST', sub: '03 / control', ports: true, conducts: true, description: 'Opens or closes one circuit path.' },
  motor: { name: 'Motor', type: 'DC electric motor', trayLabel: 'DC MOTOR', sub: '04 / motion', ports: true, conducts: true, description: 'Turns its shaft when direct current flows.' },
  gear: { name: 'Gear', type: 'Spur gear', trayLabel: 'SPUR GEAR', sub: '05 / motion', ports: false, conducts: false, description: 'Transfers rotation when meshed with a powered motor or another turning gear.' },
  magnet: { name: 'Magnet', type: 'Horseshoe permanent magnet', trayLabel: 'HORSESHOE', sub: '06 / field', ports: false, conducts: false, description: 'Vibrates near a running motor and makes it turn faster.' },
  sensor: { name: 'Sensor', type: 'Proximity sensor', trayLabel: 'PROXIMITY', sub: '07 / listen', ports: true, conducts: true, description: 'Lights its indicator when a powered motor or bulb is nearby.' },
  mystery: { name: '???', type: 'Unknown component', trayLabel: 'UNKNOWN', sub: '08 / unknown', ports: true, conducts: false, description: 'It does not care about the rules.' }
};
const trayParts = ['wire', 'battery', 'bulb', 'switch', 'motor', 'gear', 'magnet', 'sensor', 'mystery'];
const state = { parts: [], wires: [], nextId: 1, selectedPort: null, wireMode: false, powered: new Set(), unlocked: false, frozen: false, sound: false, audio: null, startedAt: Date.now(), toastTimer: null, dragging: null, discoveries: new Set() };
const stage = document.getElementById('stage');
const wiresSvg = document.getElementById('wires');
const partsRow = document.getElementById('parts-row');
const toastNode = document.getElementById('toast');

function announce(message) {
  toastNode.textContent = message;
  toastNode.classList.add('visible');
  clearTimeout(state.toastTimer);
  state.toastTimer = setTimeout(() => toastNode.classList.remove('visible'), 2500);
}

function playNote(frequency = 520, duration = .08) {
  if (!state.sound) return;
  try {
    state.audio ||= new AudioContext();
    const oscillator = state.audio.createOscillator();
    const gain = state.audio.createGain();
    oscillator.type = 'sine';
    oscillator.frequency.value = frequency;
    gain.gain.setValueAtTime(.035, state.audio.currentTime);
    gain.gain.exponentialRampToValueAtTime(.001, state.audio.currentTime + duration);
    oscillator.connect(gain).connect(state.audio.destination);
    oscillator.start();
    oscillator.stop(state.audio.currentTime + duration);
  } catch (_) { /* Audio can be unavailable in a restricted browser. */ }
}

function renderTray() {
  partsRow.innerHTML = trayParts.map((kind) => {
    const locked = kind === 'mystery' && !state.unlocked;
    const label = kind === 'wire' ? 'Wire' : kind === 'mystery' ? (locked ? '???' : 'Unknown') : definitions[kind].name;
    const details = kind === 'wire' ? { type: 'Insulated copper hookup wire', trayLabel: 'CONNECT', description: 'Joins two terminals to complete a circuit.' } : definitions[kind];
    const hint = locked ? 'Locked' : details.trayLabel;
    const art = kind === 'mystery' && locked ? '<span class="text-[19px] text-[#83857a]">?</span>' : icons[kind];
    return `<button class="tray-part ${kind === 'wire' ? 'wire-tool' : ''} ${locked ? 'locked' : ''} ${state.wireMode && kind === 'wire' ? 'active' : ''}" type="button" data-kind="${kind}" ${locked ? 'disabled' : ''} title="${details.type}. ${details.description}" aria-label="${label}: ${details.type}. ${details.description}"><span class="tray-art">${art}</span><span class="tray-label">${label}</span><span class="tray-count">${kind === 'wire' ? (state.wireMode ? 'SELECTED' : '∞ / CONNECT') : locked ? 'LOCKED' : hint}</span></button>`;
  }).join('');
}

function componentMarkup(part) {
  const def = definitions[part.kind];
  const lit = state.powered.has(part.id) && part.kind === 'bulb';
  const active = state.powered.has(part.id);
  const spinning = part.kind === 'motor' ? active : part.kind === 'gear' && isGearMoving(part);
  const vibrating = part.kind === 'magnet' && isMagnetNearMotor(part);
  const sensing = part.kind === 'sensor' && isSensorActive(part);
  const art = part.kind === 'mystery' ? icons.mystery : icons[part.kind];
  const terminals = def.ports ? `<button class="terminal ${state.selectedPort === `${part.id}:a` ? 'selected' : ''}" data-part="${part.id}" data-end="a" aria-label="${def.name} input terminal" title="Connect terminal"></button><button class="terminal ${state.selectedPort === `${part.id}:b` ? 'selected' : ''}" data-part="${part.id}" data-end="b" aria-label="${def.name} output terminal" title="Connect terminal"></button><span class="terminal-label">${part.kind === 'battery' ? '+' : 'IN'}</span><span class="terminal-label bottom">${part.kind === 'battery' ? '−' : 'OUT'}</span>` : '';
  const switchButton = part.kind === 'switch' ? `<button class="switch-control ${part.on ? 'on' : ''}" type="button" data-switch="${part.id}" aria-label="Switch ${part.on ? 'on' : 'off'}" aria-pressed="${part.on}"></button>` : '';
  const sub = part.kind === 'switch' ? (part.on ? 'ON' : 'OFF') : part.kind === 'bulb' && lit ? 'GLOW' : part.kind === 'motor' && active ? 'RUNNING' : part.kind === 'gear' && spinning ? 'TURNING' : part.kind === 'magnet' && vibrating ? 'VIBRATING' : part.kind === 'sensor' && sensing ? 'DETECTED' : def.sub.split(' / ')[1];
  return `<article class="machine-part ${lit ? 'lit' : ''} ${spinning ? 'spinning' : ''} ${part.kind === 'motor' && spinning && isMagnetNearMotor(part) ? 'fast' : ''} ${vibrating ? 'vibrating' : ''} ${sensing ? 'sensing' : ''} ${part.kind === 'mystery' ? 'mystery' : ''}" data-id="${part.id}" style="left:${part.x * 100}%;top:${part.y * 100}%" title="${def.type}. ${def.description}"><div class="part-art">${art}${terminals}${switchButton}</div><span class="part-name">${def.name}</span><span class="part-sub">${sub}</span></article>`;
}

function terminalPosition(key) {
  const [id, end] = key.split(':');
  const part = state.parts.find((item) => String(item.id) === id);
  if (!part) return null;
  const rect = stage.getBoundingClientRect();
  const x = part.x * rect.width;
  const y = part.y * rect.height;
  return { x, y: y + (end === 'a' ? -42 : 34) };
}

function calculatePowered() {
  const graph = new Map();
  const add = (from, to, partId = null) => {
    if (!graph.has(from)) graph.set(from, []);
    if (!graph.has(to)) graph.set(to, []);
    graph.get(from).push({ node: to, partId });
    graph.get(to).push({ node: from, partId });
  };
  state.wires.forEach((wire) => add(wire.a, wire.b));
  state.parts.forEach((part) => {
    const def = definitions[part.kind];
    if (def.ports && def.conducts && (part.kind !== 'switch' || part.on)) add(`${part.id}:a`, `${part.id}:b`, part.id);
  });
  const powered = new Set();
  state.parts.filter((part) => part.kind === 'battery').forEach((battery) => {
    const start = `${battery.id}:a`;
    const finish = `${battery.id}:b`;
    const queue = [start];
    const previous = new Map([[start, null]]);
    while (queue.length && !previous.has(finish)) {
      const current = queue.shift();
      for (const edge of graph.get(current) || []) {
        if (previous.has(edge.node)) continue;
        previous.set(edge.node, { from: current, partId: edge.partId });
        queue.push(edge.node);
      }
    }
    if (previous.has(finish)) {
      let current = finish;
      while (current !== start) {
        const step = previous.get(current);
        if (step?.partId) powered.add(step.partId);
        current = step.from;
      }
    }
  });
  return powered;
}

function isGearMoving(gear) {
  const visited = new Set();
  const queue = [gear];
  while (queue.length) {
    const current = queue.shift();
    if (visited.has(current.id)) continue;
    visited.add(current.id);
    if (state.parts.some((part) => part.kind === 'motor' && state.powered.has(part.id) && isGearNear(part, current))) return true;
    state.parts.filter((part) => part.kind === 'gear' && !visited.has(part.id) && isGearNear(part, current)).forEach((part) => queue.push(part));
  }
  return false;
}

function isSensorActive(sensor) {
  return state.parts.some((part) => (part.kind === 'motor' && state.powered.has(part.id) || part.kind === 'bulb' && state.powered.has(part.id)) && Math.hypot((sensor.x - part.x) * stage.clientWidth, (sensor.y - part.y) * stage.clientHeight) < 185);
}

function isGearNear(one, two) {
  const rect = stage.getBoundingClientRect();
  return Math.hypot((one.x - two.x) * rect.width, (one.y - two.y) * rect.height) < 143;
}

function isMagnetNearMotor(magnet) {
  const rect = stage.getBoundingClientRect();
  return state.parts.some((part) => part.kind === 'motor' && state.powered.has(part.id) && Math.hypot((part.x - magnet.x) * rect.width, (part.y - magnet.y) * rect.height) < 205);
}

function renderWires() {
  const rect = stage.getBoundingClientRect();
  wiresSvg.setAttribute('viewBox', `0 0 ${rect.width} ${rect.height}`);
  wiresSvg.innerHTML = state.wires.map((wire) => {
    const from = terminalPosition(wire.a);
    const to = terminalPosition(wire.b);
    if (!from || !to) return '';
    const bend = Math.max(32, Math.abs(to.x - from.x) * .36);
    const direction = to.x >= from.x ? 1 : -1;
    const d = `M ${from.x} ${from.y} C ${from.x + bend * direction} ${from.y + 52}, ${to.x - bend * direction} ${to.y + 52}, ${to.x} ${to.y}`;
    return `<path class="wire-path ${wire.active ? 'active' : ''}" d="${d}"/>`;
  }).join('');
  if (state.selectedPort && state.dragging?.wire) {
    const from = terminalPosition(state.selectedPort);
    const rectStage = stage.getBoundingClientRect();
    if (from) wiresSvg.innerHTML += `<path class="wire-path preview" d="M ${from.x} ${from.y} L ${state.dragging.x - rectStage.left} ${state.dragging.y - rectStage.top}"/>`;
  }
}

function render() {
  state.powered = calculatePowered();
  stage.querySelectorAll('.machine-part').forEach((node) => node.remove());
  state.parts.forEach((part) => stage.insertAdjacentHTML('beforeend', componentMarkup(part)));
  renderWires();
  renderTray();
  document.getElementById('empty-state').classList.toggle('hidden', state.parts.length > 0);
  document.getElementById('part-count').textContent = `${state.parts.length} ${state.parts.length === 1 ? 'part' : 'parts'}`;
  const isLive = state.powered.size > 0;
  document.getElementById('status-light').classList.toggle('live', isLive);
  document.getElementById('power-status').textContent = isLive ? 'Something is happening' : state.wires.length ? 'Waiting for a loop' : 'No current';
  if (state.wires.length >= 3 && !state.unlocked) unlockMystery();
  if (state.powered.size) state.parts.filter((part) => part.kind === 'magnet' && isMagnetNearMotor(part)).forEach(() => {
    if (!state.discoveries.has('magnet')) {
      state.discoveries.add('magnet');
      announce('The magnet is humming. That is probably fine.');
      playNote(230, .2);
    }
  });
}

function unlockMystery() {
  state.unlocked = true;
  renderTray();
  announce('A new component appeared. It was not here before.');
  playNote(710, .22);
}

function addPart(kind, x, y) {
  const rect = stage.getBoundingClientRect();
  if (x === 0 && y === 0) {
    const columns = Math.max(1, Math.floor(rect.width / 185));
    const rows = Math.max(1, Math.floor(rect.height * .48 / 150));
    const slots = [];
    for (let row = 0; row < rows; row += 1) {
      for (let column = 0; column < columns; column += 1) {
        const slotX = columns === 1 ? .5 : .13 + column * .74 / (columns - 1);
        const slotY = rows === 1 ? .39 : .2 + row * .28 / (rows - 1);
        const nearest = Math.min(Infinity, ...state.parts.map((part) => Math.hypot((part.x - slotX) * rect.width, (part.y - slotY) * rect.height)));
        if (nearest > 145) slots.push({ x: slotX, y: slotY });
      }
    }
    const slot = slots[0];
    if (slot) {
      x = rect.left + slot.x * rect.width;
      y = rect.top + slot.y * rect.height;
    } else {
      x = rect.left + rect.width * .5;
      y = rect.top + rect.height * .5;
    }
  }
  const part = { id: state.nextId++, kind, x: Math.max(.09, Math.min(.91, (x - rect.left) / rect.width)), y: Math.max(.19, Math.min(.79, (y - rect.top) / rect.height)), on: false };
  state.parts.push(part);
  if (kind === 'mystery') {
    state.frozen = true;
    stage.classList.add('frozen');
    document.getElementById('freeze-overlay').classList.add('visible');
    announce('Everything stopped. Even the bulb.');
  }
  render();
  playNote(kind === 'battery' ? 240 : 390, .07);
}

function choosePort(key) {
  if (!state.wireMode) {
    announce('Pick up the wire to join two terminals.');
    return;
  }
  if (!state.selectedPort) {
    state.selectedPort = key;
    state.dragging = { wire: true, x: 0, y: 0 };
    render();
    return;
  }
  if (state.selectedPort === key) {
    state.selectedPort = null;
    state.dragging = null;
    render();
    return;
  }
  if (state.wires.some((wire) => wire.a === state.selectedPort && wire.b === key || wire.a === key && wire.b === state.selectedPort)) {
    announce('Those two terminals are already joined.');
  } else {
    state.wires.push({ a: state.selectedPort, b: key, active: false });
    playNote(360, .05);
  }
  state.selectedPort = null;
  state.dragging = null;
  render();
  state.wires.forEach((wire) => wire.active = isWireOnPoweredPath(wire));
  renderWires();
  if (state.wires.length === 3 && !state.unlocked) unlockMystery();
}

function isWireOnPoweredPath(wire) {
  const path = calculatePowered();
  const owners = [wire.a, wire.b].map((key) => Number(key.split(':')[0]));
  return owners.some((id) => path.has(id));
}

partsRow.addEventListener('pointerdown', (event) => {
  const button = event.target.closest('.tray-part');
  if (!button || button.disabled) return;
  const kind = button.dataset.kind;
  if (kind === 'wire') {
    state.wireMode = !state.wireMode;
    state.selectedPort = null;
    state.dragging = null;
    document.getElementById('tool-hint').textContent = state.wireMode ? 'Wire selected · click two terminals' : 'Drag a part onto the bench';
    renderTray();
    return;
  }
  event.preventDefault();
  state.dragging = { kind, startX: event.clientX, startY: event.clientY, moved: false };
});

stage.addEventListener('pointerdown', (event) => {
  const terminal = event.target.closest('.terminal');
  if (terminal) {
    event.stopPropagation();
    choosePort(`${terminal.dataset.part}:${terminal.dataset.end}`);
    return;
  }
  const toggle = event.target.closest('[data-switch]');
  if (toggle) {
    event.stopPropagation();
    const part = state.parts.find((item) => String(item.id) === toggle.dataset.switch);
    if (part) {
      part.on = !part.on;
      playNote(part.on ? 690 : 370, .09);
      render();
    }
    return;
  }
  const node = event.target.closest('.machine-part');
  if (node && !state.frozen) {
    const part = state.parts.find((item) => String(item.id) === node.dataset.id);
    if (part) state.dragging = { partId: part.id, node, offsetX: event.clientX - event.currentTarget.getBoundingClientRect().left - part.x * stage.clientWidth, offsetY: event.clientY - event.currentTarget.getBoundingClientRect().top - part.y * stage.clientHeight };
  }
});

document.addEventListener('pointermove', (event) => {
  const drag = state.dragging;
  if (!drag) return;
  if (drag.wire) {
    drag.x = event.clientX;
    drag.y = event.clientY;
    renderWires();
    return;
  }
  if (drag.kind) {
    const distance = Math.hypot(event.clientX - drag.startX, event.clientY - drag.startY);
    if (distance > 7) drag.moved = true;
    if (!drag.moved) return;
    let ghost = document.querySelector('.drag-ghost');
    if (!ghost) {
      ghost = document.createElement('div');
      ghost.className = 'drag-ghost';
      ghost.innerHTML = icons[drag.kind];
      document.body.append(ghost);
    }
    ghost.style.left = `${event.clientX}px`;
    ghost.style.top = `${event.clientY}px`;
    return;
  }
  if (drag.partId) {
    const part = state.parts.find((item) => item.id === drag.partId);
    const rect = stage.getBoundingClientRect();
    if (!part) return;
    part.x = Math.max(.08, Math.min(.92, (event.clientX - rect.left - drag.offsetX) / rect.width));
    part.y = Math.max(.19, Math.min(.8, (event.clientY - rect.top - drag.offsetY) / rect.height));
    drag.node.style.left = `${part.x * 100}%`;
    drag.node.style.top = `${part.y * 100}%`;
    renderWires();
  }
});

document.addEventListener('pointerup', (event) => {
  const drag = state.dragging;
  if (!drag) return;
  document.querySelector('.drag-ghost')?.remove();
  if (drag.kind) {
    const rect = stage.getBoundingClientRect();
    const inside = event.clientX >= rect.left && event.clientX <= rect.right && event.clientY >= rect.top && event.clientY <= rect.bottom;
    if (drag.moved && inside) addPart(drag.kind, event.clientX, event.clientY);
    else if (!drag.moved) addPart(drag.kind, 0, 0);
  }
  state.dragging = null;
  if (drag.partId) render();
  else renderWires();
});

document.getElementById('sound-toggle').addEventListener('click', (event) => {
  state.sound = !state.sound;
  event.currentTarget.setAttribute('aria-pressed', String(state.sound));
  event.currentTarget.setAttribute('aria-label', state.sound ? 'Turn sound off' : 'Turn sound on');
  playNote(520, .1);
});

function clearMachine() {
  state.parts = [];
  state.wires = [];
  state.selectedPort = null;
  state.wireMode = false;
  state.frozen = false;
  state.unlocked = false;
  state.discoveries.clear();
  stage.classList.remove('frozen');
  document.getElementById('freeze-overlay').classList.remove('visible');
  document.getElementById('tool-hint').textContent = 'Drag a part onto the bench';
  render();
  announce('Fresh bench. Nothing learned.');
}
document.getElementById('clear-button').addEventListener('click', clearMachine);
document.getElementById('reset-button').addEventListener('click', clearMachine);
document.getElementById('freeze-overlay').addEventListener('click', () => {
  state.frozen = false;
  state.parts = state.parts.filter((part) => part.kind !== 'mystery');
  stage.classList.remove('frozen');
  document.getElementById('freeze-overlay').classList.remove('visible');
  announce('Time is moving again. The box is gone.');
  render();
});

window.addEventListener('resize', renderWires);
window.setInterval(() => {
  if (state.frozen) return;
  const elapsed = Math.floor((Date.now() - state.startedAt) / 1000);
  const hours = String(Math.floor(elapsed / 3600)).padStart(2, '0');
  const minutes = String(Math.floor(elapsed / 60) % 60).padStart(2, '0');
  const seconds = String(elapsed % 60).padStart(2, '0');
  document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}, 1000);
render();
