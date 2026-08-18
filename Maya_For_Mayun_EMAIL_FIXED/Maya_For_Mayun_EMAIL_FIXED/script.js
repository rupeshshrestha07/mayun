const PIN="660830";
const memories=[
{src:"photos/photo01.png",caption:"A little moment that means a lot."},{src:"photos/photo02.png",caption:"Just us, being us. ♡"},{src:"photos/photo03.png",caption:"One of those memories I never want to lose."},{src:"photos/photo04.png",caption:"You looked beautiful. I probably forgot what I was saying."},{src:"photos/photo05.png",caption:"Some places become special because you're there."},{src:"photos/photo06.png",caption:"Walking beside you will always be one of my favourite things."},{src:"photos/photo07.png",caption:"Us, in our own little world."},{src:"photos/photo08.png",caption:"You + me = my favourite kind of chaos."},{src:"photos/photo09.png",caption:"A memory worth keeping forever."},{src:"photos/photo10.png",caption:"Even ordinary days feel different with you."},{src:"photos/photo11.png",caption:"My favourite person in the frame."},{src:"photos/photo12.png",caption:"Still smiling at this one."},{src:"photos/photo13.png",caption:"A thousand little moments, one big love."},{src:"photos/photo14.png",caption:"If I could pause time, I'd keep moments like these."},{src:"photos/photo15.png",caption:"And somehow, I still want a million more memories with you."}];

const lock=document.getElementById("lock"),app=document.getElementById("app"),pin=document.getElementById("pin"),error=document.getElementById("error");
function unlock(){if(pin.value===PIN){lock.style.display="none";app.classList.add("visible");window.scrollTo(0,0);startHearts()}else{error.textContent="Hmm… that isn't it, Maya. Try again, sanu ♡";pin.value="";pin.animate([{transform:"translateX(-6px)"},{transform:"translateX(6px)"},{transform:"translateX(0)"}],{duration:220})}}
document.getElementById("unlock").onclick=unlock;pin.addEventListener("keydown",e=>{if(e.key==="Enter")unlock()});

const gallery=document.getElementById("gallery");memories.forEach((m,i)=>{const card=document.createElement("div");card.className="photo-card";card.innerHTML=`<img src="${m.src}" alt="Memory ${i+1}" loading="lazy"><span>${m.caption}</span>`;card.onclick=()=>{document.getElementById("modalImg").src=m.src;document.getElementById("modalCaption").textContent=m.caption;document.getElementById("modal").classList.add("show")};gallery.appendChild(card)});
document.getElementById("close").onclick=()=>document.getElementById("modal").classList.remove("show");document.getElementById("modal").onclick=e=>{if(e.target.id==="modal")e.currentTarget.classList.remove("show")};


const loveForm=document.getElementById("loveForm");
const questions=document.querySelectorAll(".single-question");
const count=document.getElementById("questionCount");
const progress=document.getElementById("progressBar");
const reviewStage=document.getElementById("reviewStage");
const questionStage=document.getElementById("questionStage");
const status=document.getElementById("formStatus");
let currentQuestion=1;

function showQuestion(n){
  questions.forEach(q=>q.classList.remove("active"));
  const target=document.querySelector(`.single-question[data-question="${n}"]`);
  if(target) target.classList.add("active");
  currentQuestion=n;
  count.textContent=`Question ${n} of 10`;
  progress.style.width=(n*10)+"%";
  window.requestAnimationFrame(()=>target?.querySelector("textarea")?.focus());
}

document.querySelectorAll(".next-question").forEach(btn=>{
  btn.addEventListener("click",()=>{
    const n=Number(btn.dataset.next);
    const current=document.querySelector(`.single-question[data-question="${n-1}"]`);
    const area=current.querySelector("textarea");
    if(!area.value.trim()){area.focus();area.animate([{boxShadow:"0 0 0 0 rgba(255,111,174,0)"},{boxShadow:"0 0 0 6px rgba(255,111,174,.16)"},{boxShadow:"0 0 0 0 rgba(255,111,174,0)"}],{duration:400});return}
    if(n<=10) showQuestion(n);
    else{
      questionStage.style.display="none";
      reviewStage.classList.add("show");
      count.textContent="All 10 answered ♡";
      progress.style.width="100%";
      reviewStage.scrollIntoView({behavior:"smooth",block:"center"});
    }
  });
});

function startHearts(){const wrap=document.getElementById("hearts");for(let i=0;i<25;i++){const h=document.createElement("div");h.className="floating-heart";h.textContent=Math.random()>.25?"♡":"♥";h.style.left=Math.random()*100+"%";h.style.animationDuration=(7+Math.random()*8)+"s";h.style.animationDelay=(-Math.random()*12)+"s";h.style.fontSize=(13+Math.random()*22)+"px";wrap.appendChild(h)}}
