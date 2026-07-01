
const INITIAL_MISSING = [{"code": "MEX", "flag": "🇲🇽", "name": "Mexico", "num": "alle", "label": "Alle fehlen"}, {"code": "RSA", "flag": "🇿🇦", "name": "South Africa", "num": "alle", "label": "Alle fehlen"}, {"code": "KOR", "flag": "🇰🇷", "name": "South Korea", "num": "15", "label": "Nr. 15"}, {"code": "CZE", "flag": "🇨🇿", "name": "Czechia", "num": "19", "label": "Nr. 19"}, {"code": "CAN", "flag": "🇨🇦", "name": "Canada", "num": "7", "label": "Nr. 7"}, {"code": "BIH", "flag": "🇧🇦", "name": "Bosnia", "num": "alle", "label": "Alle fehlen"}, {"code": "QAT", "flag": "🇶🇦", "name": "Qatar", "num": "alle", "label": "Alle fehlen"}, {"code": "SUI", "flag": "🇨🇭", "name": "Switzerland", "num": "alle", "label": "Alle fehlen"}, {"code": "BRA", "flag": "🇧🇷", "name": "Brazil", "num": "11", "label": "Nr. 11"}, {"code": "BRA", "flag": "🇧🇷", "name": "Brazil", "num": "20", "label": "Nr. 20"}, {"code": "MAR", "flag": "🇲🇦", "name": "Morocco", "num": "11", "label": "Nr. 11"}, {"code": "HAI", "flag": "🇭🇹", "name": "Haiti", "num": "alle", "label": "Alle fehlen"}, {"code": "SCO", "flag": "🏴󠁧󠁢󠁳󠁣󠁴󠁿", "name": "Scotland", "num": "alle", "label": "Alle fehlen"}, {"code": "USA", "flag": "🇺🇸", "name": "USA", "num": "alle", "label": "Alle fehlen"}, {"code": "PAR", "flag": "🇵🇾", "name": "Paraguay", "num": "8", "label": "Nr. 8"}, {"code": "PAR", "flag": "🇵🇾", "name": "Paraguay", "num": "13", "label": "Nr. 13"}, {"code": "AUS", "flag": "🇦🇺", "name": "Australia", "num": "5", "label": "Nr. 5"}, {"code": "TUR", "flag": "🇹🇷", "name": "Turkey", "num": "alle", "label": "Alle fehlen"}, {"code": "GER", "flag": "🇩🇪", "name": "Germany", "num": "19", "label": "Nr. 19"}, {"code": "CUW", "flag": "🇨🇼", "name": "Curaçao", "num": "12", "label": "Nr. 12"}, {"code": "CUW", "flag": "🇨🇼", "name": "Curaçao", "num": "19", "label": "Nr. 19"}, {"code": "CIV", "flag": "🇨🇮", "name": "Ivory Coast", "num": "alle", "label": "Alle fehlen"}, {"code": "ECU", "flag": "🇪🇨", "name": "Ecuador", "num": "4", "label": "Nr. 4"}, {"code": "ECU", "flag": "🇪🇨", "name": "Ecuador", "num": "9", "label": "Nr. 9"}, {"code": "NED", "flag": "🇳🇱", "name": "Netherlands", "num": "9", "label": "Nr. 9"}, {"code": "NED", "flag": "🇳🇱", "name": "Netherlands", "num": "14", "label": "Nr. 14"}, {"code": "JPN", "flag": "🇯🇵", "name": "Japan", "num": "6", "label": "Nr. 6"}, {"code": "JPN", "flag": "🇯🇵", "name": "Japan", "num": "12", "label": "Nr. 12"}, {"code": "SWE", "flag": "🇸🇪", "name": "Sweden", "num": "3", "label": "Nr. 3"}, {"code": "SWE", "flag": "🇸🇪", "name": "Sweden", "num": "18", "label": "Nr. 18"}, {"code": "TUN", "flag": "🇹🇳", "name": "Tunisia", "num": "alle", "label": "Alle fehlen"}, {"code": "BEL", "flag": "🇧🇪", "name": "Belgium", "num": "alle", "label": "Alle fehlen"}, {"code": "EGY", "flag": "🇪🇬", "name": "Egypt", "num": "6", "label": "Nr. 6"}, {"code": "EGY", "flag": "🇪🇬", "name": "Egypt", "num": "12", "label": "Nr. 12"}, {"code": "EGY", "flag": "🇪🇬", "name": "Egypt", "num": "17", "label": "Nr. 17"}, {"code": "IRN", "flag": "🇮🇷", "name": "Iran", "num": "alle", "label": "Alle fehlen"}, {"code": "NZL", "flag": "🇳🇿", "name": "New Zealand", "num": "6", "label": "Nr. 6"}, {"code": "NZL", "flag": "🇳🇿", "name": "New Zealand", "num": "15", "label": "Nr. 15"}, {"code": "ESP", "flag": "🇪🇸", "name": "Spain", "num": "2", "label": "Nr. 2"}, {"code": "ESP", "flag": "🇪🇸", "name": "Spain", "num": "6", "label": "Nr. 6"}, {"code": "CPV", "flag": "🇨🇻", "name": "Cape Verde", "num": "alle", "label": "Alle fehlen"}, {"code": "KSA", "flag": "🇸🇦", "name": "Saudi Arabia", "num": "16", "label": "Nr. 16"}, {"code": "URU", "flag": "🇺🇾", "name": "Uruguay", "num": "alle", "label": "Alle fehlen"}, {"code": "FRA", "flag": "🇫🇷", "name": "France", "num": "alle", "label": "Alle fehlen"}, {"code": "SEN", "flag": "🇸🇳", "name": "Senegal", "num": "alle", "label": "Alle fehlen"}, {"code": "IRQ", "flag": "🇮🇶", "name": "Iraq", "num": "10", "label": "Nr. 10"}, {"code": "NOR", "flag": "🇳🇴", "name": "Norway", "num": "12", "label": "Nr. 12"}, {"code": "NOR", "flag": "🇳🇴", "name": "Norway", "num": "16", "label": "Nr. 16"}, {"code": "NOR", "flag": "🇳🇴", "name": "Norway", "num": "18", "label": "Nr. 18"}, {"code": "ARG", "flag": "🇦🇷", "name": "Argentina", "num": "6", "label": "Nr. 6"}, {"code": "ALG", "flag": "🇩🇿", "name": "Algeria", "num": "13", "label": "Nr. 13"}, {"code": "AUT", "flag": "🇦🇹", "name": "Austria", "num": "3", "label": "Nr. 3"}, {"code": "AUT", "flag": "🇦🇹", "name": "Austria", "num": "5", "label": "Nr. 5"}, {"code": "JOR", "flag": "🇯🇴", "name": "Jordan", "num": "6", "label": "Nr. 6"}, {"code": "JOR", "flag": "🇯🇴", "name": "Jordan", "num": "15", "label": "Nr. 15"}, {"code": "JOR", "flag": "🇯🇴", "name": "Jordan", "num": "20", "label": "Nr. 20"}, {"code": "POR", "flag": "🇵🇹", "name": "Portugal", "num": "alle", "label": "Alle fehlen"}, {"code": "COD", "flag": "🇨🇩", "name": "DR Congo", "num": "alle", "label": "Alle fehlen"}, {"code": "UZB", "flag": "🇺🇿", "name": "Uzbekistan", "num": "8", "label": "Nr. 8"}, {"code": "COL", "flag": "🇨🇴", "name": "Colombia", "num": "2", "label": "Nr. 2"}, {"code": "COL", "flag": "🇨🇴", "name": "Colombia", "num": "5", "label": "Nr. 5"}, {"code": "COL", "flag": "🇨🇴", "name": "Colombia", "num": "10", "label": "Nr. 10"}, {"code": "COL", "flag": "🇨🇴", "name": "Colombia", "num": "19", "label": "Nr. 19"}, {"code": "COL", "flag": "🇨🇴", "name": "Colombia", "num": "20", "label": "Nr. 20"}, {"code": "ENG", "flag": "🏴", "name": "England", "num": "15", "label": "Nr. 15"}, {"code": "ENG", "flag": "🏴", "name": "England", "num": "18", "label": "Nr. 18"}, {"code": "CRO", "flag": "🇭🇷", "name": "Croatia", "num": "19", "label": "Nr. 19"}, {"code": "GHA", "flag": "🇬🇭", "name": "Ghana", "num": "10", "label": "Nr. 10"}, {"code": "PAN", "flag": "🇵🇦", "name": "Panama", "num": "3", "label": "Nr. 3"}, {"code": "FWC", "flag": "🏆", "name": "FWC", "num": "17", "label": "Nr. 17"}, {"code": "CC", "flag": "🥤", "name": "Coca-Cola", "num": "3", "label": "Nr. 3"}, {"code": "CC", "flag": "🥤", "name": "Coca-Cola", "num": "4", "label": "Nr. 4"}, {"code": "CC", "flag": "🥤", "name": "Coca-Cola", "num": "7", "label": "Nr. 7"}, {"code": "CC", "flag": "🥤", "name": "Coca-Cola", "num": "9", "label": "Nr. 9"}, {"code": "CC", "flag": "🥤", "name": "Coca-Cola", "num": "10", "label": "Nr. 10"}];
const LS_DONE = "panini_leonis_done_v4";
const LS_DUPS = "panini_leonis_dups_v4";
const LS_THEME = "panini_leonis_theme_v4";

let tab = "missing";

const $ = (id) => document.getElementById(id);
const keyOf = (x) => `${x.code}-${x.num}`;
const getDone = () => JSON.parse(localStorage.getItem(LS_DONE) || "{}");
const setDone = (v) => localStorage.setItem(LS_DONE, JSON.stringify(v));
const getDups = () => JSON.parse(localStorage.getItem(LS_DUPS) || "[]");
const setDups = (v) => localStorage.setItem(LS_DUPS, JSON.stringify(v));

function toast(msg) {
  $("toast").textContent = msg;
  $("toast").classList.add("show");
  setTimeout(() => $("toast").classList.remove("show"), 1300);
}

function setTab(next) {
  tab = next;
  document.querySelectorAll(".tab").forEach(b => b.classList.remove("active"));
  $(`tab-${next}`).classList.add("active");
  ["missing","dups","trade","settings"].forEach(v => $(`view-${v}`).classList.toggle("hidden", v !== next));
  renderAll();
}

function toggleMissing(k) {
  const done = getDone();
  done[k] = !done[k];
  setDone(done);
  renderAll();
  toast(done[k] ? "Erledigt ✅" : "Wieder offen");
}

function renderMissing() {
  const done = getDone();
  const q = $("missingSearch").value.trim().toLowerCase();
  const f = $("missingFilter").value;
  const list = $("missingList");

  const arr = INITIAL_MISSING.filter(x => {
    const isDone = !!done[keyOf(x)];
    const text = `${x.code} ${x.name} ${x.num} ${x.label}`.toLowerCase();
    return (!q || text.includes(q)) && (f === "all" || (f === "open" && !isDone) || (f === "done" && isDone));
  });

  list.innerHTML = arr.length ? arr.map(x => {
    const k = keyOf(x);
    const isDone = !!done[k];
    return `<button class="sticker-card ${isDone ? "done" : ""}" onclick="toggleMissing('${k}')">
      <span class="flag">${x.flag}</span>
      <span class="info"><b>${x.code}</b><small>${x.name} · ${x.label}</small></span>
      <span class="pill">${isDone ? "erledigt" : "offen"}</span>
    </button>`;
  }).join("") : `<div class="empty">Nichts gefunden.</div>`;
}

function addDup() {
  const code = $("dupCode").value.trim().toUpperCase();
  const num = $("dupNum").value.trim();
  const note = $("dupNote").value.trim();
  if (!code || !num) return toast("Land und Nummer eingeben");
  const flag = (INITIAL_MISSING.find(x => x.code === code) || {flag:"🏷️", name: code}).flag;
  const name = (INITIAL_MISSING.find(x => x.code === code) || {name: code}).name;
  const dups = getDups();
  const existing = dups.find(x => x.code === code && x.num === num && (x.note || "") === note);
  if (existing) existing.qty++;
  else dups.push({code, num, note, qty: 1, flag, name});
  setDups(dups);
  $("dupCode").value = ""; $("dupNum").value = ""; $("dupNote").value = "";
  renderAll();
  toast("Doppelter gespeichert");
}

function changeDupQty(i, delta) {
  const dups = getDups();
  dups[i].qty += delta;
  if (dups[i].qty <= 0) dups.splice(i, 1);
  setDups(dups);
  renderAll();
}

function renderDups() {
  const q = $("dupSearch").value.trim().toLowerCase();
  const sort = $("dupSort").value;
  let dups = getDups().map((x,i) => ({...x, i}));
  dups = dups.filter(x => !q || `${x.code} ${x.num} ${x.note||""} ${x.name||""}`.toLowerCase().includes(q));
  dups.sort(sort === "qty" ? (a,b) => b.qty - a.qty || a.code.localeCompare(b.code) : (a,b) => a.code.localeCompare(b.code) || Number(a.num)-Number(b.num));
  $("dupsList").innerHTML = dups.length ? dups.map(x => `<div class="dup-card">
    <div class="dup-left"><span class="flag">${x.flag || "🏷️"}</span><div><b>${x.code} · Nr. ${x.num}</b><small>${x.note ? x.note + " · " : ""}${x.name || ""}</small></div></div>
    <div class="qty"><button onclick="changeDupQty(${x.i},-1)">−</button><strong>${x.qty}</strong><button onclick="changeDupQty(${x.i},1)">+</button></div>
  </div>`).join("") : `<div class="empty">Noch keine doppelten Sticker erfasst.</div>`;
}

function checkTrade() {
  const code = $("tradeCode").value.trim().toUpperCase();
  const num = $("tradeNum").value.trim();
  if (!code || !num) return toast("Land und Nummer eingeben");
  const done = getDone();
  const found = INITIAL_MISSING.find(x => x.code === code && (x.num === num || x.num === "alle"));
  let msg = "";
  if (!found) msg = `❌ ${code} ${num} ist nicht in der Fehlliste.`;
  else if (done[keyOf(found)]) msg = `✅ ${code} ${num} ist schon erledigt.`;
  else msg = `🔥 JA! ${code} ${num} fehlt noch. Tauschen!`;
  $("tradeResult").textContent = msg;
}

function renderStats() {
  const done = getDone();
  const doneCount = INITIAL_MISSING.filter(x => done[keyOf(x)]).length;
  const total = INITIAL_MISSING.length;
  const open = total - doneCount;
  const dups = getDups().reduce((s,x)=>s+Number(x.qty||0),0);
  $("statOpen").textContent = open;
  $("statDone").textContent = doneCount;
  $("statDups").textContent = dups;
  $("percent").textContent = Math.round(doneCount/total*100) + "%";
  $("bar").style.width = (doneCount/total*100) + "%";
}

function buildShareText() {
  const done = getDone();
  const open = INITIAL_MISSING.filter(x => !done[keyOf(x)]);
  const dups = getDups();
  return "Panini Leonis\n\nNoch fehlend:\n" +
    (open.map(x => `${x.code} ${x.num === "alle" ? "alle" : x.num}`).join("\n") || "Alles erledigt 🎉") +
    "\n\nDoppelte:\n" +
    (dups.length ? dups.map(x => `${x.code} ${x.num} x${x.qty}${x.note ? " ("+x.note+")" : ""}`).join("\n") : "Keine erfasst");
}

async function shareList() {
  const text = buildShareText();
  if (navigator.share) {
    try { await navigator.share({title:"Panini Leonis", text}); return; } catch(e) {}
  }
  await navigator.clipboard.writeText(text);
  toast("Liste kopiert");
}

function exportData() {
  const data = {done:getDone(), dups:getDups(), exportedAt:new Date().toISOString()};
  const blob = new Blob([JSON.stringify(data,null,2)], {type:"application/json"});
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url; a.download = "panini-backup.json"; a.click();
  URL.revokeObjectURL(url);
}

function importData(ev) {
  const file = ev.target.files[0]; if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const data = JSON.parse(reader.result);
      if (data.done) setDone(data.done);
      if (data.dups) setDups(data.dups);
      renderAll();
      toast("Backup importiert");
    } catch(e) { toast("Backup ungültig"); }
  };
  reader.readAsText(file);
}

function resetAll() {
  if (!confirm("Wirklich alles löschen?")) return;
  localStorage.removeItem(LS_DONE);
  localStorage.removeItem(LS_DUPS);
  renderAll();
}

function applyTheme() {
  const pref = localStorage.getItem(LS_THEME) || "auto";
  document.documentElement.dataset.theme = pref;
  $("themeSelect").value = pref;
}
function saveTheme() {
  localStorage.setItem(LS_THEME, $("themeSelect").value);
  applyTheme();
}

function renderAll() {
  renderStats();
  renderMissing();
  renderDups();
}

if ("serviceWorker" in navigator) navigator.serviceWorker.register("./sw.js").catch(()=>{});
applyTheme();
renderAll();
