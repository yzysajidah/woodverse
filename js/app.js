
const joints = {
  mortise: {name:'Tanggam Puting dan Lubang', prefix:'mortise_step'},
  dovetail:{name:'Tanggam Ekor Merpati', prefix:'dovetail_step'},
  box:{name:'Tanggam Kotak', prefix:'box_step'},
  lap:{name:'Tanggam Lekap', prefix:'lap_step'},
  miter:{name:'Tanggam Serong', prefix:'miter_step'},
  tongue:{name:'Tanggam Lidah dan Alur', prefix:'tongue_step'},
  cross:{name:'Tanggam Persilangan Tiga Hala', prefix:'cross_step'}
};
let current = 'mortise', step = 1;
function updateViewer(){
  const viewer = document.getElementById('viewer');
  const title = document.getElementById('viewerTitle');
  if(!viewer) return;
  viewer.src = `models/${joints[current].prefix}${step}.glb`;
  title.textContent = `${joints[current].name} — Step ${step}`;
  document.querySelectorAll('.step').forEach(b=>b.classList.toggle('active', b.dataset.step == step));
}
document.querySelectorAll('.choose').forEach(btn=>{
  btn.addEventListener('click',()=>{current=btn.dataset.key; step=1; updateViewer(); window.scrollTo({top:0,behavior:'smooth'});});
});
document.querySelectorAll('.step').forEach(btn=>btn.addEventListener('click',()=>{step=Number(btn.dataset.step); updateViewer();}));
const tips = ['Ukur dua kali sebelum memotong kayu.','Gunakan pahat yang tajam untuk hasil yang kemas.','Periksa arah ira kayu sebelum memotong.','Lakukan dry fit sebelum menggunakan gam.','Gunakan pengapit untuk memastikan sambungan tidak bergerak.'];
function newTip(){document.getElementById('dailyTip').textContent=tips[Math.floor(Math.random()*tips.length)]}
