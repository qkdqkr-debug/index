const testBox=document.getElementById('test')
function shuffle(a){return [...a].sort(()=>Math.random()-.5)}

// Theme Toggle Functionality
const themeToggleBtn = document.getElementById('theme-toggle');
const htmlElement = document.documentElement; // This refers to the <html> tag

function applyThemePreference() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        htmlElement.setAttribute('data-theme', savedTheme);
    } else {
        // Check for system preference
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            htmlElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            htmlElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
    }
}

function toggleTheme() {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}

// Apply theme on page load
document.addEventListener('DOMContentLoaded', applyThemePreference);

// Attach event listener to the toggle button
if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', toggleTheme);
}


// ---------------- IQ ----------------
const IQ_POOL=[
{q:'2,4,8,16,?',a:['18','24','32','34'],c:2},{q:'1,1,2,3,5,?',a:['6','7','8','9'],c:2},
{q:'12의 약수가 아닌 것은?',a:['2','3','4','5'],c:3},{q:'정육면체의 면 수',a:['4','5','6','8'],c:2},
{q:'사과, 배, 바나나, 자동차',a:['사과','배','바나나','자동차'],c:3},{q:'5×5-10',a:['10','15','20','25'],c:1},
{q:'90분은 몇 시간?',a:['1','1.25','1.5','2'],c:2},{q:'소수가 아닌 것은?',a:['11','13','15','17'],c:2},
{q:'A>B, B>C 가장 작은 것?',a:['A','B','C'],c:2},{q:'동전 2개 모두 앞면 확률',a:['1/2','1/3','1/4','1/6'],c:2},
{q:'3,6,9,?',a:['10','12','15','18'],c:1},{q:'100의 제곱근',a:['5','10','20','50'],c:1},
{q:'짝수가 아닌 것',a:['2','4','6','9'],c:3},{q:'하루는 몇 분?',a:['720','1440','2880','3600'],c:1},
{q:'7의 배수',a:['21','22','23','24'],c:0},{q:'4의 제곱',a:['8','12','16','24'],c:2},
{q:'홀수 개수',a:['2,4,6','1,3,5','8,10,12'],c:1},{q:'삼각형의 내각합',a:['90','180','270','360'],c:1},
{q:'가장 큰 수',a:['0.5','1/2','0.6','2/4'],c:2},{q:'논리적으로 맞는 것은?',a:['모든 개는 동물이다','모든 동물은 개다'],c:0}
]
let currentIQ=[]
function startIQ(){
currentIQ=shuffle(IQ_POOL).slice(0,10)
testBox.innerHTML=currentIQ.map((o,i)=>`
<div class="question"><b>${i+1}. ${o.q}</b>${o.a.map((v,j)=>`<label><input type="radio" name="iq${i}" value="${j}"> ${v}</label>`).join('')}</div>`).join('')+
`<button onclick="finishIQ()">결과 보기</button>`
}
function finishIQ(){
for(let i=0;i<currentIQ.length;i++){
if(!document.querySelector(`input[name=iq${i}]:checked`)){
alert('모든 문항을 선택해주세요');return}}
let score=0
currentIQ.forEach((o,i)=>{
const v=document.querySelector(`input[name=iq${i}]:checked`);
if(+v.value===o.c)score++
})
alert(`정답 ${score} / 10
추정 IQ: ${80+score*4}`)
}

// ---------------- MBTI ----------------
const MBTI_POOL=[
{d:'EI',q:'사람들과 있으면 에너지가 난다'},{d:'EI',q:'혼자 있는 시간이 필요하다'},
{d:'SN',q:'현실적인 정보가 중요하다'},{d:'SN',q:'아이디어가 먼저 떠오른다'},
{d:'TF',q:'결정할 때 논리가 중요하다'},{d:'TF',q:'감정이 더 중요하다'},
{d:'JP',q:'계획이 있어야 편하다'},{d:'JP',q:'즉흥적인 게 좋다'},
{d:'EI',q:'모임이 즐겁다'},{d:'SN',q:'사실 위주로 생각한다'},
{d:'TF',q:'직설적인 말이 낫다'},{d:'JP',q:'마감은 미리 끝내야 한다'},
{d:'EI',q:'조용한 공간이 좋다'},{d:'SN',q:'상상력이 풍부하다'},
{d:'TF',q:'공감이 중요하다'},{d:'JP',q:'유연한 일정이 좋다'},
{d:'EI',q:'말로 표현하는 편이다'},{d:'SN',q:'현재에 집중한다'},
{d:'TF',q:'객관적 판단이 필요하다'},{d:'JP',q:'정리된 환경이 좋다'}]
let currentMBTI=[]
function startMBTI(){
currentMBTI=shuffle(MBTI_POOL).slice(0,10)
testBox.innerHTML=currentMBTI.map((o,i)=>`
<div class="question"><b>${i+1}. ${o.q}</b>
<label><input type="radio" name="mb${i}" value="Y"> 그렇다</label>
<label><input type="radio" name="mb${i}" value="N"> 아니다</label></div>`).join('')+
`<button onclick="finishMBTI()">결과 보기</button>`
}
function finishMBTI(){
for(let i=0;i<currentMBTI.length;i++){
if(!document.querySelector(`input[name=mb${i}]:checked`)){
alert('모든 문항을 선택해주세요');return}}
const c={E:0,I:0,S:0,N:0,T:0,F:0,J:0,P:0}
currentMBTI.forEach((o,i)=>{
const v=document.querySelector(`input[name=mb${i}]:checked`);
const y=v.value==='Y';
if(o.d==='EI')c[y?'E':'I']++;
if(o.d==='SN')c[y?'S':'N']++;
if(o.d==='TF')c[y?'T':'F']++;
if(o.d==='JP')c[y?'J':'P']++
})
const type=(c.E>=c.I?'E':'I')+(c.S>=c.N?'S':'N')+(c.T>=c.F?'T':'F')+(c.J>=c.P?'J':'P')
const DESC={
INFJ:'내향적이며 통찰력이 뛰어난 유형으로, 사람과 의미에 깊은 관심을 가집니다. 조용하지만 신념이 강하고 장기적인 비전을 중시합니다.',
INFP:'이상과 가치 중심의 내향적 유형으로, 공감 능력이 뛰어나며 자신만의 신념을 중요하게 여깁니다.',
INTJ:'전략적 사고가 강한 분석가 유형으로, 독립적이며 체계적인 계획을 선호합니다.',
INTP:'논리와 아이디어를 탐구하는 사색가로, 이론적 사고와 문제 분석에 강점이 있습니다.',
ISFJ:'책임감 있고 배려심 깊은 보호자 유형으로, 주변 사람들을 조용히 지원합니다.',
ISTJ:'원칙과 규칙을 중시하는 현실주의자로, 신뢰성과 정확성이 강점입니다.',
ISFP:'온화하고 감각적인 유형으로, 현재의 경험과 조화를 중요하게 여깁니다.',
ISTP:'실용적인 문제 해결사로, 상황에 맞는 즉각적인 대응에 능합니다.',
ENFJ:'타인을 이끄는 데 능한 리더형으로, 공감과 소통 능력이 뛰어납니다.',
ENFP:'열정적이고 창의적인 유형으로, 새로운 가능성과 사람을 좋아합니다.',
ENTJ:'결단력 있고 목표 지향적인 리더로, 조직과 성과를 중시합니다.',
ENTP:'재치 있고 아이디어가 풍부한 토론가로, 변화와 도전을 즐깁니다.',
ESFJ:'사교적이고 책임감 있는 조정자로, 주변의 조화를 중요시합니다.',
ESTJ:'체계적이고 현실적인 관리자 유형으로, 질서와 효율을 중시합니다.',
ESFP:'활동적이고 사교적인 분위기 메이커로, 현재의 즐거움을 중요하게 여깁니다.',
ESTP:'현실 감각이 뛰어난 행동가로, 즉각적인 실행력과 적응력이 강점입니다.'};
alert(`MBTI 결과: ${type}\n\n${DESC[type]}`)
}
