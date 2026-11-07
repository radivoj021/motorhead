const IMG = {"lezajevi": "img/lezajevi.jpg", "semerinzi": "img/semerinzi.jpg", "akumulatori": "img/akumulatori.jpg", "sijalice": "img/sijalice.jpg", "kaisevi": "img/kaisevi.jpg", "filteri": "img/filteri.jpg", "ostalo": "img/ostalo.jpg"};
const CATS = [
  {id:'lezajevi',name:'Ležajevi'},{id:'semerinzi',name:'Semerinzi'},{id:'akumulatori',name:'Akumulatori'},
  {id:'sijalice',name:'Sijalice'},{id:'kaisevi',name:'Kaiševi'},{id:'filteri',name:'Filteri'},{id:'ostalo',name:'Ostali delovi'}
];
// Primer asortimana – zameniti stvarnim artiklima i cenama
const P = [
  {id:1,cat:'lezajevi',name:'Kuglični ležaj 6204-2RS',sku:'LZ-6204',spec:'20 × 47 × 14 mm, zatvoren',price:690,old:850,stock:42,pop:98,specs:{'Unutrašnji prečnik':'20 mm','Spoljašnji prečnik':'47 mm','Širina':'14 mm','Zaptivanje':'2RS (gumeno, obostrano)','Primena':'kosačice, sejalice, kultivatori'}},
  {id:2,cat:'lezajevi',name:'Kuglični ležaj 6205-2RS',sku:'LZ-6205',spec:'25 × 52 × 15 mm, zatvoren',price:790,stock:36,pop:90,specs:{'Unutrašnji prečnik':'25 mm','Spoljašnji prečnik':'52 mm','Širina':'15 mm','Zaptivanje':'2RS'}},
  {id:3,cat:'lezajevi',name:'Kuglični ležaj 6306-2RS',sku:'LZ-6306',spec:'30 × 72 × 19 mm, zatvoren',price:1450,stock:8,pop:70,specs:{'Unutrašnji prečnik':'30 mm','Spoljašnji prečnik':'72 mm','Širina':'19 mm','Zaptivanje':'2RS','Primena':'tanjirače, prikolice'}},
  {id:4,cat:'lezajevi',name:'Ležaj glavčine prednjeg točka IMT',sku:'LZ-30207',spec:'Konusni 30207, 35 × 72 × 18,25 mm',price:1690,old:1990,stock:4,pop:76,specs:{'Tip':'konusni valjkasti','Oznaka':'30207','Mere':'35 × 72 × 18,25 mm','Odgovara':'IMT 533, 539, 542'}},
  {id:5,cat:'semerinzi',name:'Semering 35 × 52 × 7',sku:'SM-35527',spec:'NBR guma, sa oprugom',price:290,stock:60,pop:80,specs:{'Mere':'35 × 52 × 7 mm','Materijal':'NBR','Tip':'jednousni sa oprugom'}},
  {id:6,cat:'semerinzi',name:'Semering 45 × 62 × 8',sku:'SM-45628',spec:'NBR guma, sa oprugom',price:340,stock:48,pop:72,specs:{'Mere':'45 × 62 × 8 mm','Materijal':'NBR','Tip':'jednousni sa oprugom'}},
  {id:7,cat:'semerinzi',name:'Semering radilice zadnji IMT 539',sku:'SM-IMT539',spec:'95 × 125 × 13 mm, viton',price:1290,old:1490,stock:6,pop:84,specs:{'Mere':'95 × 125 × 13 mm','Materijal':'FKM (viton)','Odgovara':'IMT 539, IMT 542, motor IMR S33'}},
  {id:8,cat:'akumulatori',name:'Akumulator 12V 75Ah 640A',sku:'AK-75',spec:'278 × 175 × 190 mm, desni +',price:11900,old:12900,stock:7,pop:88,specs:{'Napon':'12 V','Kapacitet':'75 Ah','Startna struja':'640 A (EN)','Polaritet':'desni +','Garancija':'24 meseca'}},
  {id:9,cat:'akumulatori',name:'Akumulator 12V 110Ah 750A',sku:'AK-110',spec:'393 × 175 × 190 mm, levi +',price:16500,stock:5,pop:66,specs:{'Napon':'12 V','Kapacitet':'110 Ah','Startna struja':'750 A (EN)','Polaritet':'levi +','Garancija':'24 meseca'}},
  {id:10,cat:'akumulatori',name:'Akumulator 12V 143Ah 900A',sku:'AK-143',spec:'513 × 189 × 223 mm, za traktore',price:21900,stock:2,pop:54,specs:{'Napon':'12 V','Kapacitet':'143 Ah','Startna struja':'900 A (EN)','Primena':'traktori, kombajni','Garancija':'24 meseca'}},
  {id:11,cat:'sijalice',name:'Sijalica H4 12V 60/55W',sku:'SJ-H4',spec:'Podnožje P43t, halogena',price:390,stock:80,pop:86,specs:{'Tip':'H4','Napon':'12 V','Snaga':'60/55 W','Podnožje':'P43t'}},
  {id:12,cat:'sijalice',name:'Sijalica P21W 12V (10 kom)',sku:'SJ-P21',spec:'Podnožje BA15s, pakovanje 10 kom',price:590,stock:30,pop:60,specs:{'Tip':'P21W','Napon':'12 V','Snaga':'21 W','Pakovanje':'10 komada'}},
  {id:13,cat:'sijalice',name:'Pozicioni far narandžasti okrugli',sku:'SJ-FAR95',spec:'Ø 95 mm, sa grlom',price:1290,old:1590,stock:12,pop:58,specs:{'Prečnik':'95 mm','Boja stakla':'narandžasta','Napon':'12 V','Montaža':'na vijak'}},
  {id:14,cat:'kaisevi',name:'Klinasti kaiš A-50',sku:'KS-A50',spec:'13 × 1270 mm (Li)',price:890,stock:25,pop:64,specs:{'Profil':'A (13 mm)','Unutrašnja dužina':'1270 mm','Primena':'kosačice, pumpe, kombajni'}},
  {id:15,cat:'kaisevi',name:'Kaiš ventilatora IMT 539',sku:'KS-IMT539',spec:'13 × 1000 mm',price:690,stock:18,pop:74,specs:{'Profil':'13 mm','Dužina':'1000 mm','Odgovara':'IMT 533, 539'}},
  {id:16,cat:'filteri',name:'Filter ulja IMT 539 / 560',sku:'FL-UL539',spec:'Navojni, M20 × 1,5',price:1150,old:1350,stock:20,pop:92,specs:{'Tip':'navojni (spin-on)','Navoj':'M20 × 1,5','Odgovara':'IMT 539, 542, 560, 577'}},
  {id:17,cat:'filteri',name:'Filter goriva fini',sku:'FL-GOR',spec:'Uložak, motori IMR i Perkins',price:690,stock:28,pop:68,specs:{'Tip':'uložak','Odgovara':'IMR S33, S44, Perkins A4'}},
  {id:18,cat:'filteri',name:'Filter vazduha spoljni',sku:'FL-VAZ',spec:'Ø 160 × 300 mm',price:2350,stock:9,pop:50,specs:{'Mere':'Ø 160 × 300 mm','Tip':'spoljni uložak','Odgovara':'Zetor, IMT 577'}},
  {id:19,cat:'ostalo',name:'Vijci i navrtke M12 (set 10 kom)',sku:'OS-M12',spec:'Klasa 10.9, cinkovani',price:650,stock:40,pop:46,specs:{'Navoj':'M12 × 1,75','Klasa':'10.9','Pakovanje':'10 vijaka + navrtke + podloške'}},
  {id:20,cat:'ostalo',name:'Nož rotacione kosačice (par)',sku:'OS-NOZ',spec:'Dužina 107 mm, rupa Ø 21 mm',price:780,stock:3,pop:52,specs:{'Dužina':'107 mm','Rupa':'Ø 21 mm','Pakovanje':'2 komada'}}
];
const FREE = 10000, SHIP = 450;
const $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)];
const fmt = n => n.toLocaleString('sr-RS').replace(/,/g,'.') + ' RSD';
const fmtN = n => String(n).replace(/\B(?=(\d{3})+(?!\d))/g,'.');
const rsd = n => fmtN(n) + ' RSD';
const byId = id => P.find(p => p.id === id);
const catName = id => CATS.find(c => c.id === id)?.name || '';
const esc = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));

function load(k, d){ try{ const v = localStorage.getItem(k); return v ? JSON.parse(v) : d }catch(e){ return d } }
function save(k, v){ try{ localStorage.setItem(k, JSON.stringify(v)) }catch(e){} }
let cart = load('mh_cart', {}); // {id: qty}
let favs = load('mh_favs', []);
let filter = 'all', sort = 'pop', query = '';

/* ---------- toast ---------- */
let tT; function toast(m){ $('#toastMsg').textContent = m; $('#toast').classList.add('show'); clearTimeout(tT); tT = setTimeout(()=>$('#toast').classList.remove('show'), 2200) }

/* ---------- categories ---------- */
function renderCats(){
  const cnt = id => P.filter(p => p.cat === id).length;
  $('#cats').innerHTML = CATS.map(c => `<button class="cat${filter===c.id?' on':''}" data-cat="${c.id}"><div class="ph"><img src="${IMG[c.id]}" alt=""></div><div class="nm">${c.name}<svg class="i"><use href="#i-chev"/></svg></div><small>${cnt(c.id)} artikala</small></button>`).join('');
  $('#chips').innerHTML = [{id:'all',name:'Sve'},{id:'akcija',name:'Na akciji'},...CATS].map(c => `<button class="chip${filter===c.id?' on':''}" data-cat="${c.id}" role="tab" aria-selected="${filter===c.id}">${c.name}</button>`).join('');
}
function staticCats(){
  $('#megaList').innerHTML = CATS.map(c => `<button data-cat="${c.id}"><img src="${IMG[c.id]}" alt=""><span>${c.name}<small>${P.filter(p=>p.cat===c.id).length} artikala</small></span></button>`).join('');
  $('#mCats').innerHTML = CATS.map(c => `<li><button data-cat="${c.id}"><img src="${IMG[c.id]}" alt="">${c.name}<svg class="i chev"><use href="#i-chev"/></svg></button></li>`).join('');
  $('#footCats').innerHTML = CATS.map(c => `<li><a href="#proizvodi" data-cat="${c.id}">${c.name}</a></li>`).join('');
}
function setFilter(id, scroll=true){
  filter = id; query = ''; $('#q').value = '';
  renderCats(); renderGrid();
  closeAll();
  if (scroll) document.getElementById('proizvodi').scrollIntoView({behavior: matchMedia('(prefers-reduced-motion:reduce)').matches ? 'auto' : 'smooth'});
  const chip = $(`#chips .chip.on`); chip && chip.scrollIntoView({inline:'center', block:'nearest'});
}
document.addEventListener('click', e => {
  const b = e.target.closest('[data-cat]');
  if (b){ e.preventDefault(); setFilter(b.dataset.cat) }
});

/* ---------- products ---------- */
function matches(p){
  if (query){
    const q = query.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'');
    const hay = (p.name+' '+p.sku+' '+p.spec+' '+catName(p.cat)+' '+Object.values(p.specs).join(' ')).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/đ/g,'dj');
    return q.split(/\s+/).every(w => hay.includes(w.replace(/đ/g,'dj')));
  }
  if (filter === 'all') return true;
  if (filter === 'akcija') return !!p.old;
  return p.cat === filter;
}
function list(){
  const l = P.filter(matches);
  const f = {pop:(a,b)=>b.pop-a.pop, asc:(a,b)=>a.price-b.price, desc:(a,b)=>b.price-a.price, akc:(a,b)=>(!!b.old - !!a.old) || b.pop-a.pop}[sort];
  return l.sort(f);
}
function stockHtml(p){ return p.stock > 5 ? `<span class="stock ok">Na stanju</span>` : `<span class="stock low">Još ${p.stock} kom</span>` }
function cardHtml(p){
  const fav = favs.includes(p.id), off = p.old ? Math.round((1 - p.price/p.old)*100) : 0;
  return `<article class="card">
    ${off ? `<span class="tag num">−${off}%</span>` : ''}
    <button class="fav${fav?' on':''}" data-fav="${p.id}" aria-label="${fav?'Ukloni iz omiljenih':'Dodaj u omiljeno'}" aria-pressed="${fav}"><svg class="i" style="width:20px;height:20px"><use href="#i-heart"/></svg></button>
    <button class="ph" data-open="${p.id}" aria-label="Detalji: ${esc(p.name)}"><img src="${IMG[p.cat]}" alt="" loading="lazy"></button>
    <div class="bd">
      <span class="sku">${p.sku} · ${catName(p.cat)}</span>
      <h3><button data-open="${p.id}">${esc(p.name)}</button></h3>
      <span class="spec">${esc(p.spec)}</span>
      ${stockHtml(p)}
      <div class="pr num"><b>${rsd(p.price)}</b>${p.old ? `<s>${rsd(p.old)}</s>` : ''}</div>
      <button class="add" data-add="${p.id}"><svg class="i" style="width:19px;height:19px"><use href="#i-cart"/></svg>Dodaj<span class="lbl-long">&nbsp;u korpu</span></button>
    </div></article>`;
}
function renderGrid(){
  const l = list();
  $('#prodTitle').textContent = query ? `Rezultati za „${query}“` : filter === 'all' ? 'Ponuda i akcije' : filter === 'akcija' ? 'Artikli na akciji' : catName(filter);
  $('#count').textContent = `${l.length} ${l.length === 1 ? 'artikal' : 'artikala'}`;
  $('#grid').innerHTML = l.length ? l.map(cardHtml).join('') : `<div class="empty">Nema artikala za ovu pretragu. Pošaljite nam <a href="#upit" style="color:var(--red);font-weight:700">upit za deo</a> i proverićemo dostupnost.</div>`;
}
$('#sort').addEventListener('change', e => { sort = e.target.value; renderGrid() });

/* ---------- search ---------- */
const q = $('#q'), sug = $('#suggest');
q.addEventListener('input', () => {
  const v = q.value.trim();
  if (v.length < 2){ sug.hidden = true; return }
  const prev = query; query = v; const l = list().slice(0,5); query = prev;
  sug.innerHTML = l.length ? l.map(p => `<button type="button" data-open="${p.id}"><img src="${IMG[p.cat]}" alt=""><span>${esc(p.name)}<br><small style="color:var(--muted)">${p.sku}</small></span><span class="p num">${rsd(p.price)}</span></button>`).join('') + `<button type="submit" style="justify-content:center;color:var(--red);font-weight:700">Svi rezultati za „${esc(v)}“</button>`
    : `<div class="none">Nema rezultata. Probajte oznaku dela (npr. 6204) ili pošaljite upit.</div>`;
  sug.hidden = false;
});
$('#searchForm').addEventListener('submit', e => {
  e.preventDefault(); sug.hidden = true; q.blur();
  query = q.value.trim(); filter = 'all'; renderCats(); renderGrid();
  document.getElementById('proizvodi').scrollIntoView();
});
document.addEventListener('click', e => { if (!e.target.closest('.search')) sug.hidden = true });

/* ---------- favorites ---------- */
function toggleFav(id){
  favs = favs.includes(id) ? favs.filter(x => x !== id) : [...favs, id];
  save('mh_favs', favs); updateBadges();
  $$(`[data-fav="${id}"]`).forEach(b => { const on = favs.includes(id); b.classList.toggle('on', on); b.setAttribute('aria-pressed', on) });
  toast(favs.includes(id) ? 'Dodato u omiljeno' : 'Uklonjeno iz omiljenih');
  renderFav();
}
function renderFav(){
  const l = favs.map(byId).filter(Boolean);
  $('#favBody').innerHTML = l.length ? l.map(p => `<div class="line"><img src="${IMG[p.cat]}" alt=""><div style="min-width:0"><b>${esc(p.name)}</b><span class="s num">${rsd(p.price)}</span><div style="display:flex;gap:8px;margin-top:6px"><button class="btn" style="padding:7px 12px;font-size:14px;box-shadow:none" data-add="${p.id}">U korpu</button></div></div><button class="rm" data-fav="${p.id}" aria-label="Ukloni"><svg class="i"><use href="#i-trash"/></svg></button></div>`).join('')
    : `<div class="cempty"><svg class="i"><use href="#i-heart"/></svg><p>Još nemate omiljenih artikala.<br>Dodirnite srce na proizvodu da ga sačuvate.</p></div>`;
}

/* ---------- cart ---------- */
let step = 'cart';
const cartItems = () => Object.entries(cart).map(([id,qty]) => ({p:byId(+id), qty})).filter(x => x.p);
const subtotal = () => cartItems().reduce((s,x) => s + x.p.price*x.qty, 0);
function addToCart(id, n=1){
  cart[id] = (cart[id]||0) + n; save('mh_cart', cart); updateBadges(); renderCart();
  $$(`.add[data-add="${id}"]`).forEach(b => { b.classList.add('done'); const h = b.innerHTML; b.innerHTML = '<svg class="i" style="width:19px;height:19px"><use href="#i-check"/></svg>Dodato'; setTimeout(()=>{ b.classList.remove('done'); b.innerHTML = h }, 1200) });
  toast(`${byId(id).name} – dodato u korpu`);
}
function setQty(id, qn){ if (qn <= 0) delete cart[id]; else cart[id] = qn; save('mh_cart', cart); updateBadges(); renderCart() }
function updateBadges(){
  const n = Object.values(cart).reduce((a,b)=>a+b,0);
  ['#cartCount','#cartCount2'].forEach(s => $(s).textContent = n);
  ['#favCount','#favCount2'].forEach(s => $(s).textContent = favs.length);
}
function totalsHtml(delivery){
  const sub = subtotal(), ship = delivery === 'licno' || sub >= FREE ? 0 : SHIP;
  return `<div class="tot"><span>Međuzbir</span><span class="num">${rsd(sub)}</span></div>
  <div class="tot"><span>Dostava</span><span class="num">${ship ? rsd(ship) : 'Besplatno'}</span></div>
  <div class="tot big"><span>Ukupno</span><span class="num">${rsd(sub+ship)}</span></div>`;
}
function renderCart(){
  const items = cartItems(), body = $('#cartBody'), foot = $('#cartFoot');
  if (step === 'done') return;
  if (!items.length){
    step = 'cart'; $('#cartTitle').textContent = 'Korpa';
    body.innerHTML = `<div class="cempty"><svg class="i"><use href="#i-cart"/></svg><p>Korpa je prazna.</p><a class="btn" href="#proizvodi" data-close>Pogledaj ponudu</a></div>`;
    foot.innerHTML = ''; foot.hidden = true; return;
  }
  foot.hidden = false;
  if (step === 'cart'){
    $('#cartTitle').textContent = `Korpa (${items.reduce((a,x)=>a+x.qty,0)})`;
    const sub = subtotal(), left = FREE - sub;
    body.innerHTML = `<div style="display:grid;gap:6px;margin-bottom:6px"><span class="pnote">${left > 0 ? `Još <b class="num">${rsd(left)}</b> do besplatne dostave` : '<b style="color:var(--ok)">Ostvarili ste besplatnu dostavu</b>'}</span><div class="prog"><i style="width:${Math.min(100, sub/FREE*100)}%"></i></div></div>` +
      items.map(({p,qty}) => `<div class="line"><img src="${IMG[p.cat]}" alt=""><div style="min-width:0"><b>${esc(p.name)}</b><span class="s num">${rsd(p.price)} / kom</span><br><div class="qty"><button data-q="${p.id}" data-d="-1" aria-label="Smanji">−</button><span class="num">${qty}</span><button data-q="${p.id}" data-d="1" aria-label="Povećaj">+</button></div></div><div style="text-align:right"><b class="num">${rsd(p.price*qty)}</b><button class="rm" data-q="${p.id}" data-d="-999" aria-label="Ukloni"><svg class="i" style="width:20px;height:20px"><use href="#i-trash"/></svg></button></div></div>`).join('');
    foot.innerHTML = totalsHtml('kurir') + `<button class="btn" id="toCheckout">Nastavi na poručivanje</button>`;
  } else if (step === 'checkout'){
    $('#cartTitle').textContent = 'Poručivanje';
    body.innerHTML = `<form id="orderForm" style="display:grid;gap:12px" novalidate>
      <button type="button" class="rm" id="backCart" style="justify-self:start;display:flex;align-items:center;gap:4px;padding:0;font-weight:600"><svg class="i" style="width:18px;height:18px"><use href="#i-back"/></svg>Nazad u korpu</button>
      <div class="field"><label for="oName">Ime i prezime *</label><input id="oName" autocomplete="name" required></div>
      <div class="field"><label for="oPhone">Telefon *</label><input id="oPhone" type="tel" autocomplete="tel" inputmode="tel" required placeholder="06x xxx xx xx"></div>
      <div class="field"><label>Način preuzimanja</label>
        <label class="opt"><input type="radio" name="dl" value="kurir" checked><span><b>Kurirska dostava</b><small>1–2 radna dana · ${subtotal() >= FREE ? 'besplatno' : rsd(SHIP)}</small></span></label>
        <label class="opt"><input type="radio" name="dl" value="licno"><span><b>Lično preuzimanje u Žablju</b><small>besplatno · obično isti dan</small></span></label>
      </div>
      <div id="addrFields" style="display:grid;gap:12px">
        <div class="field"><label for="oAddr">Ulica i broj *</label><input id="oAddr" autocomplete="street-address" required></div>
        <div class="form2"><div class="field"><label for="oCity">Mesto *</label><input id="oCity" autocomplete="address-level2" required></div><div class="field"><label for="oZip">Poštanski broj</label><input id="oZip" inputmode="numeric" autocomplete="postal-code"></div></div>
      </div>
      <div class="field"><label>Plaćanje</label>
        <label class="opt"><input type="radio" name="pay" value="pouzece" checked><span><b>Pouzećem</b><small>plaćate kuriru ili u radnji</small></span></label>
        <label class="opt"><input type="radio" name="pay" value="racun"><span><b>Uplata na račun</b><small>šaljemo predračun na telefon/email</small></span></label>
      </div>
      <div class="field"><label for="oNote">Napomena</label><textarea id="oNote" style="min-height:70px" placeholder="Npr. model traktora, broj šasije"></textarea></div>
      <span class="err" id="oErr" hidden></span>
    </form>`;
    foot.innerHTML = `<div id="ckTot">${totalsHtml('kurir')}</div><button class="btn" id="placeOrder">Potvrdi porudžbinu</button>`;
    $$('input[name="dl"]').forEach(r => r.addEventListener('change', () => { const v = $('input[name="dl"]:checked').value; $('#addrFields').hidden = v === 'licno'; $('#ckTot').innerHTML = totalsHtml(v) }));
  }
}
function placeOrder(){
  const req = ['#oName','#oPhone'].concat($('#addrFields').hidden ? [] : ['#oAddr','#oCity']);
  const miss = req.filter(s => !$(s).value.trim());
  const err = $('#oErr');
  if (miss.length){ err.textContent = 'Popunite obavezna polja označena zvezdicom.'; err.hidden = false; $(miss[0]).focus(); return }
  if ($('#oPhone').value.replace(/\D/g,'').length < 8){ err.textContent = 'Unesite ispravan broj telefona.'; err.hidden = false; $('#oPhone').focus(); return }
  const nr = 'MH-' + String(Date.now()).slice(-6);
  const dl = $('input[name="dl"]:checked').value, sub = subtotal(), tot = sub + (dl === 'licno' || sub >= FREE ? 0 : SHIP);
  step = 'done'; $('#cartTitle').textContent = 'Porudžbina';
  $('#cartBody').innerHTML = `<div class="done-box"><svg class="i"><use href="#i-checkc"/></svg><h3 style="margin:12px 0 6px;font-size:22px">Hvala, ${esc($('#oName').value.trim().split(' ')[0])}!</h3><p style="color:var(--muted)">Porudžbina <b class="num" style="color:var(--text)">${nr}</b> na iznos od <b class="num" style="color:var(--text)">${rsd(tot)}</b> je zabeležena. Pozvaćemo vas na <b class="num" style="color:var(--text)">${esc($('#oPhone').value)}</b> radi potvrde.</p></div>`;
  $('#cartFoot').innerHTML = `<button class="btn line" id="finish">Nastavi kupovinu</button>`;
  cart = {}; save('mh_cart', cart); updateBadges();
}
document.addEventListener('click', e => {
  const t = e.target;
  const qb = t.closest('[data-q]'); if (qb){ const id = +qb.dataset.q; setQty(id, (cart[id]||0) + +qb.dataset.d); return }
  if (t.closest('#toCheckout')){ step = 'checkout'; renderCart(); $('#cartBody').scrollTop = 0; return }
  if (t.closest('#backCart')){ step = 'cart'; renderCart(); return }
  if (t.closest('#placeOrder')){ placeOrder(); return }
  if (t.closest('#finish')){ step = 'cart'; renderCart(); closeAll(); return }
  const a = t.closest('[data-add]'); if (a){ addToCart(+a.dataset.add, +(a.dataset.n||1)); return }
  const f = t.closest('[data-fav]'); if (f){ toggleFav(+f.dataset.fav); return }
  const o = t.closest('[data-open]'); if (o){ sug.hidden = true; openProduct(+o.dataset.open); return }
});

/* ---------- product modal ---------- */
let mq = 1;
function openProduct(id){
  const p = byId(id); mq = 1;
  const fav = favs.includes(id);
  $('#modal').innerHTML = `<div class="mg"><div class="ph"><img src="${IMG[p.cat]}" alt="${esc(p.name)}">${p.old ? `<span class="tag num">−${Math.round((1-p.price/p.old)*100)}%</span>` : ''}</div>
    <div class="bd" style="position:relative">
      <button class="x" data-close aria-label="Zatvori"><svg class="i"><use href="#i-x"/></svg></button>
      <span class="sku">Šifra: ${p.sku} · ${catName(p.cat)}</span>
      <h3 style="padding-right:44px">${esc(p.name)}</h3>
      ${stockHtml(p)}
      <div class="pr num" style="margin:0"><b style="font-size:28px">${rsd(p.price)}</b>${p.old ? `<s>${rsd(p.old)}</s>` : ''}</div>
      <div style="overflow-x:auto"><table class="specs"><tbody>${Object.entries(p.specs).map(([k,v]) => `<tr><td>${k}</td><td>${esc(v)}</td></tr>`).join('')}</tbody></table></div>
      <div class="mrow"><div class="qty"><button id="mMinus" aria-label="Smanji">−</button><span class="num" id="mQty">1</span><button id="mPlus" aria-label="Povećaj">+</button></div>
        <button class="add" id="mAdd"><svg class="i" style="width:19px;height:19px"><use href="#i-cart"/></svg>Dodaj u korpu</button>
        <button class="fav${fav?' on':''}" data-fav="${p.id}" style="position:static;border:1px solid var(--line);width:46px;height:46px;box-shadow:none" aria-label="Omiljeno" aria-pressed="${fav}"><svg class="i" style="width:20px;height:20px"><use href="#i-heart"/></svg></button></div>
      <span class="pnote">Niste sigurni da li odgovara? Pozovite <b class="num">069 123 45 67</b> pre poručivanja.</span>
    </div></div>`;
  $('#mMinus').onclick = () => { mq = Math.max(1, mq-1); $('#mQty').textContent = mq };
  $('#mPlus').onclick = () => { mq++; $('#mQty').textContent = mq };
  $('#mAdd').onclick = () => { addToCart(p.id, mq); closeAll() };
  openLayer('#modal');
}

/* ---------- layers ---------- */
let lastFocus;
function openLayer(sel){
  closeAll(true); lastFocus = document.activeElement;
  $(sel).classList.add('open'); $('#scrim').classList.add('show');
  document.body.style.overflow = 'hidden';
  setTimeout(() => { const f = $(sel).querySelector('button,input,a'); f && f.focus({preventScroll:true}) }, 60);
}
function closeAll(silent){
  $$('.drawer.open,.modal.open').forEach(d => d.classList.remove('open'));
  $('#scrim').classList.remove('show'); document.body.style.overflow = '';
  $('#mega').hidden = true; $('#allcats').setAttribute('aria-expanded','false');
  if (step === 'done' && !silent){ step = 'cart'; renderCart() }
  if (!silent && lastFocus) { try{ lastFocus.focus({preventScroll:true}) }catch(e){} lastFocus = null }
  setTab();
}
$('#scrim').addEventListener('click', () => closeAll());
document.addEventListener('click', e => { if (e.target.closest('[data-close]')) closeAll() });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeAll() });
$('#burger').onclick = () => openLayer('#menuDrawer');
$('#cartBtn').onclick = () => { renderCart(); openLayer('#cartDrawer') };
$('#favBtn').onclick = () => { renderFav(); openLayer('#favDrawer') };
$('#allcats').onclick = e => { e.stopPropagation(); const m = $('#mega'); m.hidden = !m.hidden; $('#allcats').setAttribute('aria-expanded', String(!m.hidden)) };
document.addEventListener('click', e => { if (!e.target.closest('#mega,#allcats')) { $('#mega').hidden = true; $('#allcats').setAttribute('aria-expanded','false') } });

/* ---------- tab bar ---------- */
function setTab(name){ $$('.tabbar button').forEach(b => b.classList.toggle('on', b.dataset.tab === (name || 'home'))) }
$$('.tabbar button').forEach(b => b.addEventListener('click', () => {
  const t = b.dataset.tab;
  if (t === 'home'){ closeAll(); window.scrollTo({top:0}); }
  if (t === 'cats'){ openLayer('#menuDrawer') }
  if (t === 'search'){ closeAll(); window.scrollTo({top:0}); setTimeout(() => q.focus(), 50) }
  if (t === 'fav'){ renderFav(); openLayer('#favDrawer') }
  if (t === 'cart'){ renderCart(); openLayer('#cartDrawer') }
  setTab(t);
}));

/* ---------- forms ---------- */
$('#askForm').addEventListener('submit', e => { e.preventDefault(); const n = $('#askNote'); n.textContent = 'Upit je zabeležen. Javljamo se u toku radnog dana.'; n.hidden = false; e.target.reset() });
$('#contactForm').addEventListener('submit', e => { e.preventDefault(); const n = $('#cNote'); n.textContent = 'Poruka je zabeležena. Odgovaramo u toku radnog dana.'; n.hidden = false; e.target.reset() });
$$('.copy').forEach(b => b.addEventListener('click', () => {
  const v = b.dataset.copy;
  const ok = () => { b.textContent = 'Kopirano'; setTimeout(() => b.textContent = 'Kopiraj', 1500) };
  try { navigator.clipboard.writeText(v).then(ok, () => { selectText(b) }) } catch(e){ selectText(b) }
}));
function selectText(b){ const el = b.parentElement.querySelector('b'); const r = document.createRange(); r.selectNodeContents(el); const s = getSelection(); s.removeAllRanges(); s.addRange(r) }

/* ---------- theme ---------- */
function themeLabel(){ const d = document.documentElement.dataset.theme || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'); $('#themeBtn').textContent = d === 'dark' ? 'Svetla tema' : 'Tamna tema' }
$('#themeBtn').onclick = () => { const d = document.documentElement.dataset.theme || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'); document.documentElement.dataset.theme = d === 'dark' ? 'light' : 'dark'; themeLabel() };
themeLabel();

/* ---------- nav highlight ---------- */
const navLinks = $$('nav.main ul a');
const secs = ['top','akcije','o-nama','dostava','kontakt'];
addEventListener('scroll', () => {
  let cur = 'top';
  secs.slice(1).forEach(id => { const el = document.getElementById(id); if (el && el.getBoundingClientRect().top < 200) cur = id });
  navLinks.forEach(a => a.classList.toggle('on', a.getAttribute('href') === '#'+cur));
}, {passive:true});

staticCats(); renderCats(); renderGrid(); renderFav(); updateBadges();
