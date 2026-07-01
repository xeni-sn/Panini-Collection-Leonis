
const MISSING = [{"code": "KOR", "flag": "🇰🇷", "name": "South Korea", "num": "15"}, {"code": "CZE", "flag": "🇨🇿", "name": "Czechia", "num": "19"}, {"code": "CAN", "flag": "🇨🇦", "name": "Canada", "num": "7"}, {"code": "BRA", "flag": "🇧🇷", "name": "Brazil", "num": "11"}, {"code": "BRA", "flag": "🇧🇷", "name": "Brazil", "num": "20"}, {"code": "MAR", "flag": "🇲🇦", "name": "Morocco", "num": "11"}, {"code": "PAR", "flag": "🇵🇾", "name": "Paraguay", "num": "8"}, {"code": "PAR", "flag": "🇵🇾", "name": "Paraguay", "num": "13"}, {"code": "AUS", "flag": "🇦🇺", "name": "Australia", "num": "5"}, {"code": "GER", "flag": "🇩🇪", "name": "Germany", "num": "19"}, {"code": "CUW", "flag": "🇨🇼", "name": "Curaçao", "num": "12"}, {"code": "CUW", "flag": "🇨🇼", "name": "Curaçao", "num": "19"}, {"code": "ECU", "flag": "🇪🇨", "name": "Ecuador", "num": "4"}, {"code": "ECU", "flag": "🇪🇨", "name": "Ecuador", "num": "9"}, {"code": "NED", "flag": "🇳🇱", "name": "Netherlands", "num": "9"}, {"code": "NED", "flag": "🇳🇱", "name": "Netherlands", "num": "14"}, {"code": "JPN", "flag": "🇯🇵", "name": "Japan", "num": "6"}, {"code": "JPN", "flag": "🇯🇵", "name": "Japan", "num": "12"}, {"code": "SWE", "flag": "🇸🇪", "name": "Sweden", "num": "3"}, {"code": "SWE", "flag": "🇸🇪", "name": "Sweden", "num": "18"}, {"code": "EGY", "flag": "🇪🇬", "name": "Egypt", "num": "6"}, {"code": "EGY", "flag": "🇪🇬", "name": "Egypt", "num": "12"}, {"code": "EGY", "flag": "🇪🇬", "name": "Egypt", "num": "17"}, {"code": "NZL", "flag": "🇳🇿", "name": "New Zealand", "num": "6"}, {"code": "NZL", "flag": "🇳🇿", "name": "New Zealand", "num": "15"}, {"code": "ESP", "flag": "🇪🇸", "name": "Spain", "num": "2"}, {"code": "ESP", "flag": "🇪🇸", "name": "Spain", "num": "6"}, {"code": "KSA", "flag": "🇸🇦", "name": "Saudi Arabia", "num": "16"}, {"code": "IRQ", "flag": "🇮🇶", "name": "Iraq", "num": "10"}, {"code": "NOR", "flag": "🇳🇴", "name": "Norway", "num": "12"}, {"code": "NOR", "flag": "🇳🇴", "name": "Norway", "num": "16"}, {"code": "NOR", "flag": "🇳🇴", "name": "Norway", "num": "18"}, {"code": "ARG", "flag": "🇦🇷", "name": "Argentina", "num": "6"}, {"code": "ALG", "flag": "🇩🇿", "name": "Algeria", "num": "13"}, {"code": "AUT", "flag": "🇦🇹", "name": "Austria", "num": "3"}, {"code": "AUT", "flag": "🇦🇹", "name": "Austria", "num": "5"}, {"code": "JOR", "flag": "🇯🇴", "name": "Jordan", "num": "6"}, {"code": "JOR", "flag": "🇯🇴", "name": "Jordan", "num": "15"}, {"code": "JOR", "flag": "🇯🇴", "name": "Jordan", "num": "20"}, {"code": "UZB", "flag": "🇺🇿", "name": "Uzbekistan", "num": "8"}, {"code": "COL", "flag": "🇨🇴", "name": "Colombia", "num": "2"}, {"code": "COL", "flag": "🇨🇴", "name": "Colombia", "num": "5"}, {"code": "COL", "flag": "🇨🇴", "name": "Colombia", "num": "10"}, {"code": "COL", "flag": "🇨🇴", "name": "Colombia", "num": "19"}, {"code": "COL", "flag": "🇨🇴", "name": "Colombia", "num": "20"}, {"code": "ENG", "flag": "🏴", "name": "England", "num": "15"}, {"code": "ENG", "flag": "🏴", "name": "England", "num": "18"}, {"code": "CRO", "flag": "🇭🇷", "name": "Croatia", "num": "19"}, {"code": "GHA", "flag": "🇬🇭", "name": "Ghana", "num": "10"}, {"code": "PAN", "flag": "🇵🇦", "name": "Panama", "num": "3"}, {"code": "FWC", "flag": "🏆", "name": "FWC", "num": "17"}, {"code": "CC", "flag": "🥤", "name": "Coca-Cola", "num": "3"}, {"code": "CC", "flag": "🥤", "name": "Coca-Cola", "num": "4"}, {"code": "CC", "flag": "🥤", "name": "Coca-Cola", "num": "7"}, {"code": "CC", "flag": "🥤", "name": "Coca-Cola", "num": "9"}, {"code": "CC", "flag": "🥤", "name": "Coca-Cola", "num": "10"}];
const TEAMS = [{"code": "KOR", "flag": "🇰🇷", "name": "South Korea", "missing": ["15"]}, {"code": "CZE", "flag": "🇨🇿", "name": "Czechia", "missing": ["19"]}, {"code": "CAN", "flag": "🇨🇦", "name": "Canada", "missing": ["7"]}, {"code": "BRA", "flag": "🇧🇷", "name": "Brazil", "missing": ["11", "20"]}, {"code": "MAR", "flag": "🇲🇦", "name": "Morocco", "missing": ["11"]}, {"code": "PAR", "flag": "🇵🇾", "name": "Paraguay", "missing": ["8", "13"]}, {"code": "AUS", "flag": "🇦🇺", "name": "Australia", "missing": ["5"]}, {"code": "GER", "flag": "🇩🇪", "name": "Germany", "missing": ["19"]}, {"code": "CUW", "flag": "🇨🇼", "name": "Curaçao", "missing": ["12", "19"]}, {"code": "ECU", "flag": "🇪🇨", "name": "Ecuador", "missing": ["4", "9"]}, {"code": "NED", "flag": "🇳🇱", "name": "Netherlands", "missing": ["9", "14"]}, {"code": "JPN", "flag": "🇯🇵", "name": "Japan", "missing": ["6", "12"]}, {"code": "SWE", "flag": "🇸🇪", "name": "Sweden", "missing": ["3", "18"]}, {"code": "EGY", "flag": "🇪🇬", "name": "Egypt", "missing": ["6", "12", "17"]}, {"code": "NZL", "flag": "🇳🇿", "name": "New Zealand", "missing": ["6", "15"]}, {"code": "ESP", "flag": "🇪🇸", "name": "Spain", "missing": ["2", "6"]}, {"code": "KSA", "flag": "🇸🇦", "name": "Saudi Arabia", "missing": ["16"]}, {"code": "IRQ", "flag": "🇮🇶", "name": "Iraq", "missing": ["10"]}, {"code": "NOR", "flag": "🇳🇴", "name": "Norway", "missing": ["12", "16", "18"]}, {"code": "ARG", "flag": "🇦🇷", "name": "Argentina", "missing": ["6"]}, {"code": "ALG", "flag": "🇩🇿", "name": "Algeria", "missing": ["13"]}, {"code": "AUT", "flag": "🇦🇹", "name": "Austria", "missing": ["3", "5"]}, {"code": "JOR", "flag": "🇯🇴", "name": "Jordan", "missing": ["6", "15", "20"]}, {"code": "UZB", "flag": "🇺🇿", "name": "Uzbekistan", "missing": ["8"]}, {"code": "COL", "flag": "🇨🇴", "name": "Colombia", "missing": ["2", "5", "10", "19", "20"]}, {"code": "ENG", "flag": "🏴", "name": "England", "missing": ["15", "18"]}, {"code": "CRO", "flag": "🇭🇷", "name": "Croatia", "missing": ["19"]}, {"code": "GHA", "flag": "🇬🇭", "name": "Ghana", "missing": ["10"]}, {"code": "PAN", "flag": "🇵🇦", "name": "Panama", "missing": ["3"]}, {"code": "FWC", "flag": "🏆", "name": "FWC", "missing": ["17"]}, {"code": "CC", "flag": "🥤", "name": "Coca-Cola", "missing": ["3", "4", "7", "9", "10"]}];
const LS_DONE = 'panini_done_v3';
const LS_DUP = 'panini_dup_v3';

let currentView = 'home';

const $ = (id) => document.getElementById(id);
const key = (x) => x.code + '-' + x.num;
const readDone = () => JSON.parse(localStorage.getItem(LS_DONE) || '{}');
const saveDone = (x) => localStorage.setItem(LS_DONE, JSON.stringify(x));
const readDups = () => JSON.parse(localStorage.getItem(LS_DUP) || '[]');
const saveDups = (x) => localStorage.setItem(LS_DUP, JSON.stringify(x));

function toast(msg){
  const t = $('toast');
  t.textContent = msg;
  t.className = 'show';
  setTimeout(() => t.className = '', 1300);
}

function calcStats(){
  const d = readDone();
  const doneCount = MISSING.filter(x => d[key(x)]).length;
  const dupCount = readDups().reduce((s,x) => s + Number(x.qty || 0), 0);
  return {
    total: MISSING.length,
    done: doneCount,
    open: MISSING.length - doneCount,
    dup: dupCount,
    pct: Math.round(doneCount / MISSING.length * 100)
  };
}

function setView(v){
  currentView = v;
  render();
}

function shell(content){
  const s = calcStats();
  const tabs = [
    ['home','Home'],
    ['missing','Fehlend'],
    ['teams','Teams'],
    ['dups','Doppelt'],
    ['trade','Tausch']
  ].map(([id,label]) => `<button class="tab ${currentView === id ? 'active' : ''}" onclick="setView('${id}')">${label}</button>`).join('');

  $('app').innerHTML = `
    <main class="app">
      <section class="hero">
        <div class="heroTop">
          <div>
            <h1>Panini Leonis</h1>
            <p>Fehlende abhaken, doppelte verwalten und schnell tauschen.</p>
          </div>
          <div class="percent">${s.pct}%</div>
        </div>
        <div class="barBg"><div class="bar" style="width:${s.pct}%"></div></div>
      </section>

      <section class="stats">
        <div class="stat"><b>${s.open}</b><span>offen</span></div>
        <div class="stat"><b>${s.done}</b><span>erledigt</span></div>
        <div class="stat"><b>${s.total}</b><span>fehlend total</span></div>
        <div class="stat"><b>${s.dup}</b><span>doppelte</span></div>
      </section>

      <nav class="tabs">${tabs}</nav>
      ${content}
    </main>

    <div class="bottom">
      <button class="btn grey" onclick="shareList()">Liste teilen</button>
      <button class="btn grey" onclick="setView('more')">Mehr</button>
    </div>
  `;
}

function toggleSticker(code,num){
  const d = readDone();
  const k = code + '-' + num;
  d[k] = !d[k];
  saveDone(d);
  toast(d[k] ? 'Erledigt ✅' : 'Wieder offen');
  render();
}

function stickerCard(x){
  const d = readDone();
  const isDone = !!d[key(x)];
  return `
    <button class="sticker ${isDone ? 'done' : ''}" onclick="toggleSticker('${x.code}','${x.num}')">
      <span class="flag">${x.flag}</span>
      <span class="info"><b>${x.code} · Nr. ${x.num}</b><small>${x.name}</small></span>
      <span class="pill">${isDone ? 'erledigt' : 'offen'}</span>
    </button>
  `;
}

function renderHome(){
  const d = readDone();
  const almost = TEAMS.map(t => ({
    ...t,
    open: t.missing.filter(n => !d[t.code + '-' + n]).length
  })).sort((a,b) => a.open - b.open).slice(0,6);

  shell(`
    <div class="panel">
      <h2>Fast komplett</h2>
      <div class="teamGrid">
        ${almost.map(t => `
          <div class="card teamCard">
            <div class="teamHead">
              <div class="teamTitle">
                <span class="flag">${t.flag}</span>
                <div><b>${t.code}</b><br><small class="note">${t.name}</small></div>
              </div>
              <span class="pill">${t.open} offen</span>
            </div>
          </div>
        `).join('')}
      </div>
    </div>

    <div class="panel">
      <h2>Schnell prüfen</h2>
      <div class="grid2">
        <input id="quickCode" placeholder="Land, z.B. BRA" autocapitalize="characters">
        <input id="quickNum" placeholder="Nr., z.B. 11" inputmode="numeric">
        <button class="btn full" onclick="quickCheck()">Prüfen</button>
      </div>
      <div id="quickResult" class="result">Sticker eingeben und prüfen.</div>
    </div>
  `);
}

function quickCheck(){
  const code = $('quickCode').value.trim().toUpperCase();
  const num = $('quickNum').value.trim();
  const found = MISSING.find(x => x.code === code && x.num === num);
  const d = readDone();

  if(!found){
    $('quickResult').textContent = `❌ ${code} ${num} fehlt nicht auf der Liste.`;
    return;
  }
  if(d[key(found)]){
    $('quickResult').textContent = `✅ ${code} ${num} ist schon erledigt.`;
    return;
  }
  $('quickResult').textContent = `🔥 ${code} ${num} fehlt noch.`;
}

function renderMissing(){
  const q = (sessionStorage.getItem('q') || '').toLowerCase();
  const filter = sessionStorage.getItem('filter') || 'open';
  const d = readDone();

  const arr = MISSING.filter(x => {
    const isDone = !!d[key(x)];
    const text = `${x.code} ${x.name} ${x.num}`.toLowerCase();
    return (!q || text.includes(q)) &&
      (filter === 'all' || (filter === 'open' && !isDone) || (filter === 'done' && isDone));
  });

  shell(`
    <div class="toolbar">
      <input placeholder="Suchen: BRA, 11, Spain..." value="${sessionStorage.getItem('q') || ''}" oninput="sessionStorage.setItem('q',this.value);renderMissing()">
      <select onchange="sessionStorage.setItem('filter',this.value);renderMissing()">
        <option value="open" ${filter === 'open' ? 'selected' : ''}>Offen</option>
        <option value="all" ${filter === 'all' ? 'selected' : ''}>Alle</option>
        <option value="done" ${filter === 'done' ? 'selected' : ''}>Erledigt</option>
      </select>
    </div>
    <div class="list">${arr.map(stickerCard).join('') || '<div class="empty">Nichts gefunden.</div>'}</div>
  `);
}

function renderTeams(){
  const d = readDone();
  shell(`
    <div class="teamGrid">
      ${TEAMS.map(t => {
        const open = t.missing.filter(n => !d[t.code + '-' + n]).length;
        return `
          <div class="card teamCard">
            <div class="teamHead">
              <div class="teamTitle">
                <span class="flag">${t.flag}</span>
                <div><b>${t.code}</b><br><small class="note">${t.name}</small></div>
              </div>
              <span class="pill">${open} offen</span>
            </div>
            <div class="chips">
              ${t.missing.map(n => `<button class="chip ${d[t.code+'-'+n] ? 'done' : ''}" onclick="toggleSticker('${t.code}','${n}')">${n}</button>`).join('')}
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `);
}

function addDuplicate(){
  const code = $('dupCode').value.trim().toUpperCase();
  const num = $('dupNum').value.trim();
  const note = $('dupNote').value.trim();
  if(!code || !num){ toast('Land und Nummer eingeben'); return; }

  const meta = TEAMS.find(t => t.code === code) || {flag:'🏷️', name:code};
  const list = readDups();
  const existing = list.find(x => x.code === code && x.num === num && (x.note || '') === note);

  if(existing) existing.qty += 1;
  else list.push({code,num,note,qty:1,flag:meta.flag,name:meta.name});

  saveDups(list);
  renderDups();
  toast('Doppelter gespeichert');
}

function changeDup(i,delta){
  const list = readDups();
  list[i].qty += delta;
  if(list[i].qty <= 0) list.splice(i,1);
  saveDups(list);
  renderDups();
}

function renderDups(){
  const list = readDups().map((x,i) => ({...x,i}));
  shell(`
    <div class="panel">
      <h2>Doppelten hinzufügen</h2>
      <div class="grid2">
        <input id="dupCode" placeholder="Land, z.B. SUI" autocapitalize="characters">
        <input id="dupNum" placeholder="Nr." inputmode="numeric">
        <input id="dupNote" class="full" placeholder="Notiz optional">
        <button class="btn full" onclick="addDuplicate()">Hinzufügen</button>
      </div>
    </div>

    <div class="list">
      ${list.map(x => `
        <div class="card dup">
          <div class="dupLeft">
            <span class="flag">${x.flag}</span>
            <div><b>${x.code} · Nr. ${x.num}</b><br><small class="note">${x.note || x.name}</small></div>
          </div>
          <div class="qty">
            <button onclick="changeDup(${x.i},-1)">−</button>
            <strong>${x.qty}</strong>
            <button onclick="changeDup(${x.i},1)">+</button>
          </div>
        </div>
      `).join('') || '<div class="empty">Noch keine doppelten Sticker erfasst.</div>'}
    </div>
  `);
}

function renderTrade(){
  shell(`
    <div class="panel">
      <h2>Tausch-Check</h2>
      <p class="note">Prüfe sofort, ob ein angebotener Sticker noch fehlt.</p>
      <div class="grid2">
        <input id="tradeCode" placeholder="Land, z.B. BRA" autocapitalize="characters">
        <input id="tradeNum" placeholder="Nr., z.B. 11" inputmode="numeric">
        <button class="btn full" onclick="tradeCheck()">Prüfen</button>
      </div>
      <div id="tradeResult" class="result">Sticker eingeben und prüfen.</div>
    </div>
  `);
}

function tradeCheck(){
  const code = $('tradeCode').value.trim().toUpperCase();
  const num = $('tradeNum').value.trim();
  const found = MISSING.find(x => x.code === code && x.num === num);
  const d = readDone();

  if(!found) $('tradeResult').textContent = `❌ ${code} ${num} fehlt nicht auf der Liste.`;
  else if(d[key(found)]) $('tradeResult').textContent = `✅ ${code} ${num} ist schon erledigt.`;
  else $('tradeResult').textContent = `🔥 Ja! ${code} ${num} fehlt noch. Tauschen!`;
}

function renderMore(){
  shell(`
    <div class="panel">
      <h2>Backup</h2>
      <div class="grid2">
        <button class="btn" onclick="exportData()">Exportieren</button>
        <label class="btn grey" style="text-align:center">Importieren<input type="file" hidden accept="application/json" onchange="importData(event)"></label>
        <button class="btn red full" onclick="resetAll()">Alles zurücksetzen</button>
      </div>
    </div>
    <p class="note">Zum Installieren auf dem iPhone: Safari → Teilen → Zum Home-Bildschirm.</p>
  `);
}

function shareList(){
  const d = readDone();
  const open = MISSING.filter(x => !d[key(x)]);
  const dup = readDups();
  const text =
    'Panini Leonis\n\nFehlt noch:\n' +
    (open.map(x => `${x.code} ${x.num}`).join('\n') || 'Alles erledigt 🎉') +
    '\n\nDoppelte:\n' +
    (dup.map(x => `${x.code} ${x.num} x${x.qty}`).join('\n') || 'Keine');

  if(navigator.share) navigator.share({title:'Panini Leonis', text});
  else navigator.clipboard.writeText(text).then(() => toast('Liste kopiert'));
}

function exportData(){
  const blob = new Blob([JSON.stringify({done:readDone(), dups:readDups()}, null, 2)], {type:'application/json'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'panini-backup.json';
  a.click();
  URL.revokeObjectURL(url);
}

function importData(e){
  const file = e.target.files[0];
  if(!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try{
      const data = JSON.parse(reader.result);
      if(data.done) saveDone(data.done);
      if(data.dups) saveDups(data.dups);
      toast('Backup importiert');
      render();
    }catch(err){
      toast('Backup ungültig');
    }
  };
  reader.readAsText(file);
}

function resetAll(){
  if(!confirm('Wirklich alles löschen?')) return;
  localStorage.removeItem(LS_DONE);
  localStorage.removeItem(LS_DUP);
  render();
}

function render(){
  if(currentView === 'home') renderHome();
  if(currentView === 'missing') renderMissing();
  if(currentView === 'teams') renderTeams();
  if(currentView === 'dups') renderDups();
  if(currentView === 'trade') renderTrade();
  if(currentView === 'more') renderMore();
}

if('serviceWorker' in navigator){
  navigator.serviceWorker.register('./sw-v3.js?v=3').catch(() => {});
}
render();
