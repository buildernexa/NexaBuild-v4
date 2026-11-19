/* NexaBuild · customize.js — 16 sumbu kostumisasi */

/* ─── definisi semua sumbu ─── */
const CU_TEMA=[
 {id:'obsidian',nm:'Obsidian',bg:'#0A0A0A',paper:'#141414',paper2:'#1E1E1E'},
 {id:'void',    nm:'Void',    bg:'#000000',paper:'#0D0D0D',paper2:'#181818'},
 {id:'slate',   nm:'Slate',   bg:'#0D1117',paper:'#161B22',paper2:'#21262D'},
 {id:'navy',    nm:'Navy',    bg:'#060E1E',paper:'#0E1D35',paper2:'#162645'},
 {id:'forest',  nm:'Forest',  bg:'#060F08',paper:'#0E1A10',paper2:'#162319'},
 {id:'dusk',    nm:'Dusk',    bg:'#120A18',paper:'#1C1026',paper2:'#261535'},
 {id:'mocha',   nm:'Mocha',   bg:'#0F0A06',paper:'#1A1206',paper2:'#241A09'},
 {id:'light',   nm:'Light',   bg:'#F0F2F5',paper:'#FFFFFF',paper2:'#F4F5F7'},
 {id:'cream',   nm:'Cream',   bg:'#F5F0E8',paper:'#FFFDF7',paper2:'#F5F0E8'},
];
const CU_AKSEN=[
 {id:'yellow', nm:'Kuning',    hex:'#FFD600',txt:'#000'},
 {id:'white',  nm:'Putih',     hex:'#FFFFFF',txt:'#000'},
 {id:'green',  nm:'Hijau',     hex:'#00FF88',txt:'#000'},
 {id:'blue',   nm:'Biru',      hex:'#38BEFF',txt:'#000'},
 {id:'purple', nm:'Ungu',      hex:'#BB86FC',txt:'#000'},
 {id:'orange', nm:'Oranye',    hex:'#FF9B42',txt:'#000'},
 {id:'red',    nm:'Merah',     hex:'#FF6B6B',txt:'#000'},
 {id:'pink',   nm:'Merah Muda',hex:'#FF6EB4',txt:'#000'},
 {id:'cyan',   nm:'Cyan',      hex:'#00E5FF',txt:'#000'},
 {id:'teal',   nm:'Toska',     hex:'#00BFA5',txt:'#000'},
 {id:'gold',   nm:'Gold',      hex:'#F5A623',txt:'#000'},
 {id:'custom', nm:'Kustom',    hex:'',        txt:'#000'},
];
const CU_FONT=[
 {id:'grotesk',nm:'Grotesk',val:'"Space Grotesk",system-ui,sans-serif'},
 {id:'mono',   nm:'Mono',    val:'"JetBrains Mono",ui-monospace,monospace'},
 {id:'dmsans', nm:'DM Sans', val:'"DM Sans",system-ui,sans-serif'},
 {id:'inter',  nm:'Inter',   val:'"Inter",system-ui,sans-serif'},
 {id:'system', nm:'System',  val:'system-ui,-apple-system,sans-serif'},
 {id:'serif',  nm:'Serif',   val:'Georgia,"Times New Roman",serif'},
];
const CU_FZ=[
 {id:'xs', nm:'XS', val:'11px'},
 {id:'sm', nm:'Kecil', val:'12px'},
 {id:'md', nm:'Sedang', val:'14px'},
 {id:'lg', nm:'Besar', val:'16px'},
 {id:'xl', nm:'XL', val:'18px'},
];
const CU_BW=[
 {id:'0', nm:'Tanpa', val:'0px'},
 {id:'1', nm:'Tipis', val:'1px'},
 {id:'2', nm:'Normal',val:'2px'},
 {id:'3', nm:'Tebal', val:'3px'},
];
const CU_R=[
 {id:'none',  nm:'Kotak',   r:'0px', rc:'0px',  rf:'4px'},
 {id:'sharp', nm:'Tajam',   r:'4px', rc:'6px',  rf:'10px'},
 {id:'round', nm:'Bulat',   r:'10px',rc:'14px', rf:'22px'},
 {id:'pill',  nm:'Sangat Bulat',r:'18px',rc:'24px',rf:'36px'},
];
const CU_SH=[
 {id:'none', nm:'Tanpa', sh:'none',                       sh2:'none'},
 {id:'soft', nm:'Halus', sh:'2px 2px 0 var(--sh-color)', sh2:'1px 1px 0 var(--sh-color)'},
 {id:'norm', nm:'Normal',sh:'3px 3px 0 var(--sh-color)', sh2:'2px 2px 0 var(--sh-color)'},
 {id:'bold', nm:'Tebal', sh:'5px 5px 0 var(--sh-color)', sh2:'3px 3px 0 var(--sh-color)'},
];
const CU_SHC=[
 {id:'ac',    nm:'Aksen', val:'var(--ac-alpha)'},
 {id:'white', nm:'Putih', val:'rgba(255,255,255,.18)'},
 {id:'black', nm:'Hitam', val:'rgba(0,0,0,.8)'},
 {id:'ink',   nm:'Garis', val:'var(--bd)'},
];
const CU_SP=[
 {id:'xs',      nm:'XS',    s3:'4px', s4:'8px',  s5:'14px'},
 {id:'compact', nm:'Padat', s3:'8px', s4:'12px', s5:'18px'},
 {id:'normal',  nm:'Sedang',s3:'12px',s4:'16px', s5:'24px'},
 {id:'roomy',   nm:'Luas',  s3:'18px',s4:'22px', s5:'32px'},
 {id:'xl',      nm:'XL',    s3:'24px',s4:'28px', s5:'40px'},
];
const CU_AN=[
 {id:'full',    nm:'Penuh'},
 {id:'minimal', nm:'Minimal'},
 {id:'off',     nm:'Mati'},
];
const CU_PAT=[
 {id:'none', nm:'Polos'},
 {id:'grid', nm:'Grid'},
 {id:'dots', nm:'Dots'},
 {id:'noise',nm:'Noise'},
 {id:'lines',nm:'Garis'},
];
const CU_BTN=[
 {id:'solid',   nm:'Solid'},
 {id:'outline', nm:'Outline'},
 {id:'soft',    nm:'Lembut'},
];
const CU_NAV=[
 {id:'pill', nm:'Pil'},
 {id:'flat', nm:'Flat'},
 {id:'minimal', nm:'Minimal'},
];
const CU_CARD=[
 {id:'flat',  nm:'Flat'},
 {id:'glass', nm:'Glass'},
 {id:'raised',nm:'Raised'},
];
const CU_WIDTH=[
 {id:'narrow', nm:'Sempit',  val:'400px'},
 {id:'normal', nm:'Normal',  val:'560px'},
 {id:'wide',   nm:'Lebar',   val:'720px'},
 {id:'full',   nm:'Full',    val:'100%'},
];

/* ─── state ─── */
let CState={
 tema:'obsidian',aksen:'yellow',aksenHex:'',font:'grotesk',fz:'md',
 bw:'2',r:'round',sh:'norm',shc:'ac',sp:'normal',an:'full',
 pat:'none',btn:'solid',nav:'pill',card:'flat',width:'normal',
};
function cuLoad(){try{const s=JSON.parse(localStorage.getItem('cu'));if(s&&typeof s==='object')Object.assign(CState,s)}catch{}}
function cuSave(){localStorage.setItem('cu',JSON.stringify(CState))}

function hexAlpha(hex,a){
 if(!hex||hex.length<7)return`rgba(0,0,0,${a})`;
 const r=parseInt(hex.slice(1,3),16),g=parseInt(hex.slice(3,5),16),b=parseInt(hex.slice(5,7),16);
 return`rgba(${r},${g},${b},${a})`;
}
function adjustBg(hex,amt){
 if(!hex||hex.length<7)return hex;
 const p=h=>Math.min(255,Math.max(0,parseInt(h,16)+amt)).toString(16).padStart(2,'0');
 return'#'+p(hex.slice(1,3))+p(hex.slice(3,5))+p(hex.slice(5,7));
}
function acFromState(){
 if(CState.aksen==='custom'&&CState.aksenHex)return CState.aksenHex;
 return(CU_AKSEN.find(x=>x.id===CState.aksen)||CU_AKSEN[0]).hex;
}

function cuApply(){
 const R=document.documentElement;
 const tema=CU_TEMA.find(x=>x.id===CState.tema)||CU_TEMA[0];
 const font=CU_FONT.find(x=>x.id===CState.font)||CU_FONT[0];
 const fz=CU_FZ.find(x=>x.id===CState.fz)||CU_FZ[2];
 const bw=CU_BW.find(x=>x.id===CState.bw)||CU_BW[2];
 const radius=CU_R.find(x=>x.id===CState.r)||CU_R[2];
 const sh=CU_SH.find(x=>x.id===CState.sh)||CU_SH[2];
 const shc=CU_SHC.find(x=>x.id===CState.shc)||CU_SHC[0];
 const sp=CU_SP.find(x=>x.id===CState.sp)||CU_SP[2];
 const an=CU_AN.find(x=>x.id===CState.an)||CU_AN[0];
 const width=CU_WIDTH.find(x=>x.id===CState.width)||CU_WIDTH[1];

 const acHex=acFromState();
 const isLight=tema.id==='light'||tema.id==='cream';

 R.style.setProperty('--bg',tema.bg);
 R.style.setProperty('--paper',tema.paper);
 R.style.setProperty('--paper2',tema.paper2);
 R.style.setProperty('--paper3',adjustBg(tema.paper2,8));
 R.style.setProperty('--ink',isLight?'#15171C':'#E0E0E0');
 R.style.setProperty('--ink2',isLight?'#5B6170':'#888');
 R.style.setProperty('--ink3',isLight?'#9BA3B5':'#555');
 R.style.setProperty('--bd',isLight?'rgba(21,23,28,.18)':'rgba(255,255,255,.18)');
 R.style.setProperty('--ac',acHex);
 const acTxt=(CU_AKSEN.find(x=>x.id===CState.aksen)||CU_AKSEN[0]).txt;
 R.style.setProperty('--ac-txt',acTxt);
 R.style.setProperty('--ac2',hexAlpha(acHex,.14));
 R.style.setProperty('--ac3',hexAlpha(acHex,.07));
 R.style.setProperty('--bd-ac',acHex);
 R.style.setProperty('--ac-alpha',hexAlpha(acHex,.22));
 const shColor=shc.val.replace('var(--ac-alpha)',hexAlpha(acHex,.22));
 R.style.setProperty('--sh',sh.sh.replace('var(--sh-color)',shColor));
 R.style.setProperty('--sh2',sh.sh2.replace('var(--sh-color)',shColor));
 R.style.setProperty('--sh-ac',sh.sh.replace('var(--sh-color)',hexAlpha(acHex,.35)));
 R.style.setProperty('--f',font.val);
 R.style.setProperty('--fz',fz.val);
 R.style.setProperty('--bw',bw.val);
 R.style.setProperty('--r',radius.r);
 R.style.setProperty('--rc',radius.rc);
 R.style.setProperty('--rf',radius.rf);
 R.style.setProperty('--s3',sp.s3);
 R.style.setProperty('--s4',sp.s4);
 R.style.setProperty('--s5',sp.s5);
 /* content width */
 R.style.setProperty('--max-w',width.val);
 const mainEl=document.querySelector('main');
 if(mainEl)mainEl.style.maxWidth=width.val;
 /* background pattern */
 applyPattern(CState.pat,tema.bg,acHex);
 /* button style */
 applyBtnStyle(CState.btn,acHex,acTxt,bw.val,radius.r);
 /* nav style */
 applyNavStyle(CState.nav);
 /* card effect */
 applyCardEffect(CState.card,bw.val,sh.sh.replace('var(--sh-color)',shColor));
 /* animation */
 if(an.id==='off'){R.style.setProperty('--t1','0s');R.style.setProperty('--t2','0s');R.style.setProperty('--t3','0s')}
 else if(an.id==='minimal'){R.style.setProperty('--t1','.05s');R.style.setProperty('--t2','.1s');R.style.setProperty('--t3','.15s')}
 else{R.style.removeProperty('--t1');R.style.removeProperty('--t2');R.style.removeProperty('--t3')}
}

function applyPattern(pat,bg,ac){
 const R=document.documentElement;
 const patterns={
  none:'none',
  grid:`repeating-linear-gradient(rgba(255,255,255,.04) 0,rgba(255,255,255,.04) 1px,transparent 1px,transparent 40px),repeating-linear-gradient(90deg,rgba(255,255,255,.04) 0,rgba(255,255,255,.04) 1px,transparent 1px,transparent 40px)`,
  dots:`radial-gradient(rgba(255,255,255,.12) 1px,transparent 1px)`,
  noise:`url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
  lines:`repeating-linear-gradient(90deg,rgba(255,255,255,.025) 0,rgba(255,255,255,.025) 1px,transparent 1px,transparent 32px)`,
 };
 const sizes={none:'',grid:'',dots:'4px 4px',noise:'200px 200px',lines:''};
 R.style.setProperty('--pat',patterns[pat]||'none');
 R.style.setProperty('--pat-size',sizes[pat]||'');
 const bodyStyle=document.body.style;
 if(pat==='none'){bodyStyle.backgroundImage='';bodyStyle.backgroundSize=''}
 else{bodyStyle.backgroundImage=patterns[pat];bodyStyle.backgroundSize=sizes[pat]||'auto'}
}

function applyBtnStyle(style,ac,acTxt,bw,r){
 const ss=document.getElementById('cu-btn-override');
 const el=ss||document.createElement('style');
 el.id='cu-btn-override';
 if(style==='outline')el.textContent=`.btn{background:transparent!important;color:var(--ac)!important;border:${bw||'2px'} solid var(--ac)!important;box-shadow:none!important}.btn:active{transform:translate(0,0)!important}`;
 else if(style==='soft')el.textContent=`.btn{background:var(--ac2)!important;color:var(--ac)!important;border-color:var(--ac)!important;box-shadow:none!important}.btn.w{background:var(--paper3)!important;color:var(--ink)!important}`;
 else el.textContent='';
 if(!ss)document.head.appendChild(el);
}

function applyNavStyle(style){
 const ss=document.getElementById('cu-nav-override');
 const el=ss||document.createElement('style');
 el.id='cu-nav-override';
 if(style==='flat')el.textContent=`nav{border-radius:0!important;bottom:0!important;width:100%!important;max-width:100%!important;left:0!important;transform:none!important;border-left:0!important;border-right:0!important;border-bottom:0!important;border-radius:0!important}nav button{border-radius:0!important}`;
 else if(style==='minimal')el.textContent=`nav{background:transparent!important;border-color:transparent!important;box-shadow:none!important;bottom:4px!important}nav button{color:var(--ink2)}nav button[aria-current=page]{background:var(--ac2)!important;color:var(--ac)!important;border:var(--bw) solid var(--ac)!important}`;
 else el.textContent='';
 if(!ss)document.head.appendChild(el);
}

function applyCardEffect(effect,bw,sh){
 const ss=document.getElementById('cu-card-override');
 const el=ss||document.createElement('style');
 el.id='cu-card-override';
 if(effect==='glass')el.textContent=`.card{background:rgba(255,255,255,.04)!important;backdrop-filter:blur(12px)!important;-webkit-backdrop-filter:blur(12px)!important}.fr{background:rgba(255,255,255,.03)!important;backdrop-filter:blur(10px)!important}`;
 else if(effect==='raised')el.textContent=`.card{box-shadow:0 2px 8px rgba(0,0,0,.4),${sh}!important}`;
 else el.textContent='';
 if(!ss)document.head.appendChild(el);
}

function cuBtn(label,preview,active,onclick,extra){
 return`<button class="cu-btn" aria-pressed="${active}" onclick="${onclick}" ${extra||''}>${preview}<span>${label}</span></button>`;
}
function cuSwatch(color){
 return`<div class="cu-prev" style="background:${color};border-color:transparent"></div>`;
}
function cuFontPrev(val){
 return`<div class="cu-prev" style="font:700 11px ${val};display:flex;align-items:center;justify-content:center;color:var(--ink)">Aa</div>`;
}
function cuShPrev(sh){
 if(sh==='none')return`<div class="cu-prev" style="box-shadow:none;border-color:var(--bd)"></div>`;
 const off=sh.sh&&sh.sh.includes('5px')?'4px':sh.sh&&sh.sh.includes('3px')?'3px':'2px';
 return`<div class="cu-prev" style="box-shadow:${off} ${off} 0 var(--ac)"></div>`;
}
function cuBorderPrev(bw,r){
 return`<div class="cu-prev" style="border-width:${bw};border-radius:${r}"></div>`;
}
function cuSpPrev(s4){
 const p=parseInt(s4);
 return`<div class="cu-prev" style="display:flex;align-items:center;justify-content:center;gap:2px"><div style="width:${Math.min(p,20)}px;height:6px;background:var(--ac);border-radius:2px"></div></div>`;
}
function cuPatPrev(pat){
 const bg={none:'var(--paper2)',grid:'repeating-linear-gradient(rgba(255,255,255,.12) 0,rgba(255,255,255,.12) 1px,transparent 1px,transparent 8px),repeating-linear-gradient(90deg,rgba(255,255,255,.12) 0,rgba(255,255,255,.12) 1px,transparent 1px,transparent 8px)',dots:'radial-gradient(rgba(255,255,255,.3) 1px,transparent 1px)',noise:'var(--paper3)',lines:'repeating-linear-gradient(90deg,rgba(255,255,255,.12) 0,rgba(255,255,255,.12) 1px,transparent 1px,transparent 8px)'};
 return`<div class="cu-prev" style="background:${bg[pat]||bg.none};background-size:8px 8px;border-color:transparent"></div>`;
}

function custRender(){
 const C=CState;
 const ac=acFromState();
 let html='';
 const sec=(t,c)=>`<div class="dr-sec-h" style="margin-top:var(--s3)">${t}</div>${c}`;
 const grid=(items)=>`<div class="cu-g">${items}</div>`;
 const grid3=(items)=>`<div class="cu-g" style="grid-template-columns:repeat(3,1fr)">${items}</div>`;

 html+=sec('Tema Latar',grid(CU_TEMA.map(t=>cuBtn(t.nm,`<div class="cu-prev" style="background:${t.paper};border:2px solid ${t.paper2}"></div>`,C.tema===t.id,`cuSet('tema','${t.id}')`)).join('')));
 html+=sec('Warna Aksen',grid(CU_AKSEN.filter(a=>a.id!=='custom').map(a=>cuBtn(a.nm,cuSwatch(a.hex),C.aksen===a.id,`cuSet('aksen','${a.id}')`)).join('')+'<button class="cu-btn" aria-pressed="'+(C.aksen==='custom')+'" onclick="cuSet(\'aksen\',\'custom\')" style="grid-column:span 3"><span style="font-size:10px">🎨 Warna Kustom</span></button>'));
 if(C.aksen==='custom')html+=`<div style="margin-top:8px;display:flex;gap:8px;align-items:center"><input type="color" value="${C.aksenHex||'#FFD600'}" oninput="CState.aksenHex=this.value;cuApply();cuSave()" style="flex:1;min-height:40px;border:var(--bw) solid var(--bd);border-radius:var(--r);background:var(--paper2)"><span style="font-size:12px;color:var(--ink2)">${C.aksenHex||'#FFD600'}</span></div>`;
 html+=sec('Font',grid(CU_FONT.map(f=>cuBtn(f.nm,cuFontPrev(f.val),C.font===f.id,`cuSet('font','${f.id}')`)).join('')));
 html+=sec('Ukuran Teks',grid3(CU_FZ.map(f=>cuBtn(f.nm,`<div class="cu-prev" style="display:flex;align-items:center;justify-content:center;font:700 ${f.val} var(--f)">Aa</div>`,C.fz===f.id,`cuSet('fz','${f.id}')`)).join('')));
 html+=sec('Bobot Garis',grid3(CU_BW.map(b=>cuBtn(b.nm,cuBorderPrev(b.val||'1px','var(--rc)'),C.bw===b.id,`cuSet('bw','${b.id}')`)).join('')));
 html+=sec('Sudut Kartu',grid3(CU_R.map(r=>cuBtn(r.nm,`<div class="cu-prev" style="border-radius:${r.rc}"></div>`,C.r===r.id,`cuSet('r','${r.id}')`)).join('')));
 html+=sec('Gaya Bayangan',grid3(CU_SH.map(s=>cuBtn(s.nm,cuShPrev(s),C.sh===s.id,`cuSet('sh','${s.id}')`)).join('')));
 html+=sec('Warna Bayangan',grid3(CU_SHC.map(s=>cuBtn(s.nm,`<div class="cu-prev" style="box-shadow:3px 3px 0 ${s.val.replace('var(--ac-alpha)','rgba(255,214,0,.25)')};border-color:transparent"></div>`,C.shc===s.id,`cuSet('shc','${s.id}')`)).join('')));
 html+=sec('Kepadatan Spasi',grid3(CU_SP.map(s=>cuBtn(s.nm,cuSpPrev(s.s4),C.sp===s.id,`cuSet('sp','${s.id}')`)).join('')));
 html+=sec('Pola Latar',grid3(CU_PAT.map(p=>cuBtn(p.nm,cuPatPrev(p.id),C.pat===p.id,`cuSet('pat','${p.id}')`)).join('')));
 html+=sec('Gaya Tombol',grid3(CU_BTN.map(b=>cuBtn(b.nm,`<div class="cu-prev" style="display:flex;align-items:center;justify-content:center"><div style="padding:1px 6px;font:700 9px var(--f);border:1.5px solid var(--ac);border-radius:4px;${b.id==='solid'?'background:var(--ac);color:var(--ac-txt)':b.id==='soft'?'background:var(--ac2);color:var(--ac)':'color:var(--ac)'}">${b.id==='solid'?'BTN':'BTN'}</div></div>`,C.btn===b.id,`cuSet('btn','${b.id}')`)).join('')));
 html+=sec('Gaya Nav',grid3(CU_NAV.map(n=>cuBtn(n.nm,`<div class="cu-prev" style="display:flex;align-items:center;justify-content:center;gap:3px">${[1,2,3].map((i,idx)=>`<div style="width:8px;height:8px;border-radius:${n.id==='pill'?'50%':'2px'};background:${idx===0?'var(--ac)':'var(--paper3)'};border:1px solid var(--bd)"></div>`).join('')}</div>`,C.nav===n.id,`cuSet('nav','${n.id}')`)).join('')));
 html+=sec('Efek Kartu',grid3(CU_CARD.map(c=>cuBtn(c.nm,`<div class="cu-prev" style="${c.id==='glass'?'background:rgba(255,255,255,.08);backdrop-filter:blur(4px)':c.id==='raised'?'box-shadow:0 3px 8px rgba(0,0,0,.5)':''}"></div>`,C.card===c.id,`cuSet('card','${c.id}')`)).join('')));
 html+=sec('Lebar Konten',grid3(CU_WIDTH.map(w=>cuBtn(w.nm,`<div class="cu-prev" style="display:flex;align-items:center;justify-content:center;gap:1px"><div style="height:12px;background:var(--ac);border-radius:1px;width:${w.id==='narrow'?'10px':w.id==='normal'?'16px':w.id==='wide'?'22px':'28px'}"></div></div>`,C.width===w.id,`cuSet('width','${w.id}')`)).join('')));
 html+=sec('Animasi',grid3(CU_AN.map(a=>cuBtn(a.nm,`<div class="cu-prev" style="display:flex;align-items:center;justify-content:center;font-size:14px">${a.id==='full'?'✨':a.id==='minimal'?'💤':'⏹️'}</div>`,C.an===a.id,`cuSet('an','${a.id}')`)).join('')));
 html+=`<button class="btn w" onclick="cuReset()" style="margin-top:var(--s3);font-size:12px">↺ Reset tampilan ke default</button>`;

 const area=document.getElementById('cu-area');
 if(area)area.innerHTML=html;
}

function cuSet(axis,val){
 CState[axis]=val;
 cuApply();cuSave();custRender();
}
function cuReset(){
 CState={tema:'obsidian',aksen:'yellow',aksenHex:'',font:'grotesk',fz:'md',bw:'2',r:'round',sh:'norm',shc:'ac',sp:'normal',an:'full',pat:'none',btn:'solid',nav:'pill',card:'flat',width:'normal'};
 cuApply();cuSave();custRender();
}
function initCustomize(){
 cuLoad();cuApply();
}
