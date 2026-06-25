
const questions = [
  {q:'Apakah fungsi utama tanggam?', a:['Menyambung kayu','Mewarna kayu','Mengukur kayu'], correct:0},
  {q:'Lap Joint dalam Bahasa Melayu ialah?', a:['Tanggam Parit','Tanggam Lekap','Tanggam Serong'], correct:1},
  {q:'Tanggam Ekor Merpati sesuai untuk?', a:['Laci','Tali','Plastik'], correct:0},
  {q:'Alatan untuk memotong kayu ialah?', a:['Gergaji','Berus','Pemadam'], correct:0},
  {q:'Tanggam Serong biasanya pada sudut?', a:['45 darjah','90 darjah','180 darjah'], correct:0}
];
const box = document.getElementById('quiz');
box.innerHTML = questions.map((x,i)=>`<div class="question"><b>${i+1}. ${x.q}</b>${x.a.map((o,j)=>`<label class="option"><input type="radio" name="q${i}" value="${j}"> ${o}</label>`).join('')}</div>`).join('');
function markQuiz(){
  let s=0; questions.forEach((x,i)=>{const c=document.querySelector(`input[name=q${i}]:checked`); if(c && Number(c.value)===x.correct) s++;});
  document.getElementById('score').textContent = `Markah: ${s}/${questions.length}`;
}
