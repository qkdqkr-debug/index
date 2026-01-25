// main.js

// --- Navigation and Section Switching Logic ---
const sections = {
    home: document.getElementById('home-section'),
    mbti: document.getElementById('mbti-section'),
    iq: document.getElementById('iq-section')
};

const navLinks = {
    home: document.getElementById('nav-home'),
    mbti: document.getElementById('nav-mbti'),
    iq: document.getElementById('nav-iq')
};

const startMbtiButton = document.getElementById('start-mbti');
const startIqButton = document.getElementById('start-iq');

function showSection(sectionName) {
    for (const key in sections) {
        sections[key].style.display = 'none';
        navLinks[key]?.classList.remove('active');
    }
    sections[sectionName].style.display = 'block';
    navLinks[sectionName]?.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

navLinks.home.addEventListener('click', (e) => {
    e.preventDefault();
    showSection('home');
});
navLinks.mbti.addEventListener('click', (e) => {
    e.preventDefault();
    showSection('mbti');
    document.getElementById('mbti-test-container').innerHTML = '<mbti-test></mbti-test>';
});
navLinks.iq.addEventListener('click', (e) => {
    e.preventDefault();
    showSection('iq');
    document.getElementById('iq-test-container').innerHTML = '<iq-test></iq-test>';
});

startMbtiButton.addEventListener('click', () => {
    showSection('mbti');
    document.getElementById('mbti-test-container').innerHTML = '<mbti-test></mbti-test>';
});
startIqButton.addEventListener('click', () => {
    showSection('iq');
    document.getElementById('iq-test-container').innerHTML = '<iq-test></iq-test>';
});

// Initially show the home section
document.addEventListener('DOMContentLoaded', () => {
    showSection('home');
});

// --- MBTI Test Web Component ---
class MbtiTest extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.questions = [
            { question: "새로운 사람들과 어울리는 것을 즐기시나요?", options: [{ text: "네, 즐깁니다.", value: "E" }, { text: "아니요, 조용히 보내는 것을 선호합니다.", value: "I" }] },
            { question: "현실적이고 구체적인 사실에 집중하나요?", options: [{ text: "네, 현실적인 것을 중요하게 생각합니다.", value: "S" }, { text: "아니요, 미래 가능성과 추상적인 아이디어에 관심이 많습니다.", value: "N" }] },
            { question: "결정을 내릴 때 논리와 객관적인 분석을 중요하게 생각하나요?", options: [{ text: "네, 논리적인 판단을 선호합니다.", value: "T" }, { text: "아니요, 다른 사람들의 감정과 상황을 고려합니다.", value: "F" }] },
            { question: "계획을 세우고 체계적으로 일을 처리하는 것을 좋아하나요?", options: [{ text: "네, 계획적인 것을 좋아합니다.", value: "J" }, { text: "아니요, 유연하고 즉흥적인 것을 선호합니다.", value: "P" }] }
        ];
        this.answers = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
        this.currentQuestionIndex = 0;
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    padding: 20px;
                    border: 1px solid var(--border-color);
                    border-radius: 8px;
                    background-color: var(--card-background);
                    box-shadow: 0 2px 10px var(--shadow-light);
                }
                .question-container {
                    margin-bottom: 20px;
                }
                .question-text {
                    font-size: 1.2em;
                    margin-bottom: 15px;
                    color: var(--primary-color);
                }
                .option-button {
                    display: block;
                    width: 100%;
                    padding: 12px 15px;
                    margin-bottom: 10px;
                    border: 1px solid var(--primary-color);
                    border-radius: 5px;
                    background-color: transparent;
                    color: var(--primary-color);
                    font-size: 1em;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }
                .option-button:hover {
                    background-color: var(--primary-color);
                    color: white;
                }
                .option-button:focus {
                    outline: none;
                    box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.5);
                }
                .results-container h3 {
                    color: var(--primary-color);
                    text-align: center;
                    margin-bottom: 10px;
                }
                .results-container p {
                    text-align: center;
                    font-size: 1.1em;
                }
                .retake-button {
                    background-color: var(--accent-color);
                    color: white;
                    border: none;
                    padding: 10px 20px;
                    font-size: 1em;
                    border-radius: 5px;
                    cursor: pointer;
                    display: block;
                    margin: 20px auto 0;
                    transition: background-color 0.3s ease;
                }
                .retake-button:hover {
                    background-color: #E29B1E;
                }
            </style>
            <div id="test-content"></div>
        `;
        this.displayQuestion();
    }

    displayQuestion() {
        const testContent = this.shadowRoot.getElementById('test-content');
        if (this.currentQuestionIndex < this.questions.length) {
            const q = this.questions[this.currentQuestionIndex];
            testContent.innerHTML = `
                <div class="question-container">
                    <p class="question-text">${q.question}</p>
                    ${q.options.map((option, index) => `
                        <button class="option-button" data-value="${option.value}">${option.text}</button>
                    `).join('')}
                </div>
            `;
            testContent.querySelectorAll('.option-button').forEach(button => {
                button.addEventListener('click', this.handleAnswer.bind(this));
            });
        } else {
            this.showResults();
        }
    }

    handleAnswer(event) {
        const value = event.target.dataset.value;
        this.answers[value]++;
        this.currentQuestionIndex++;
        this.displayQuestion();
    }

    calculateMbti() {
        let mbtiType = "";
        mbtiType += (this.answers.E > this.answers.I) ? "E" : "I";
        mbtiType += (this.answers.S > this.answers.N) ? "S" : "N";
        mbtiType += (this.answers.T > this.answers.F) ? "T" : "F";
        mbtiType += (this.answers.J > this.answers.P) ? "J" : "P";
        return mbtiType;
    }

    getMbtiDescription(mbtiType) {
        // Placeholder descriptions, expand as needed
        const descriptions = {
            "ISTJ": "청렴결백한 논리주의자 (The Logistician)",
            "ISFJ": "용감한 수호자 (The Defender)",
            "INFJ": "선의의 옹호자 (The Advocate)",
            "INTJ": "용의주도한 전략가 (The Architect)",
            "ISTP": "만능 재주꾼 (The Virtuoso)",
            "ISFP": "호기심 많은 예술가 (The Adventurer)",
            "INFP": "열정적인 중재자 (The Mediator)",
            "INTP": "논리적인 사색가 (The Logician)",
            "ESTP": "모험을 즐기는 사업가 (The Entrepreneur)",
            "ESFP": "자유로운 영혼의 연예인 (The Entertainer)",
            "ENFP": "재기발랄한 활동가 (The Campaigner)",
            "ENTP": "논쟁을 즐기는 변론가 (The Debater)",
            "ESTJ": "엄격한 관리자 (The Executive)",
            "ESFJ": "사교적인 외교관 (The Consul)",
            "ENFJ": "정의로운 사회운동가 (The Protagonist)",
            "ENTJ": "대담한 통솔자 (The Commander)",
        };
        return descriptions[mbtiType] || "MBTI 유형을 찾을 수 없습니다.";
    }

    showResults() {
        const testContent = this.shadowRoot.getElementById('test-content');
        const mbtiType = this.calculateMbti();
        const description = this.getMbtiDescription(mbtiType);
        testContent.innerHTML = `
            <div class="results-container">
                <h3>당신의 MBTI 유형은...</h3>
                <p><strong>${mbtiType}</strong> - ${description}</p>
                <p>더 자세한 정보는 MBTI 전문 사이트에서 확인해보세요!</p>
                <button class="retake-button">다시 테스트하기</button>
            </div>
        `;
        this.shadowRoot.querySelector('.retake-button').addEventListener('click', () => {
            this.resetTest();
            this.render();
        });
    }

    resetTest() {
        this.answers = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
        this.currentQuestionIndex = 0;
    }
}
customElements.define('mbti-test', MbtiTest);

// --- IQ Test Web Component ---
class IqTest extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.questions = [
            { question: "다음 숫자 배열의 다음 숫자는 무엇일까요? 1, 2, 4, 7, 11, ?", answer: "16" },
            { question: "다음 도형 패턴의 빈 칸에 들어갈 도형은? (설명을 위한 텍스트입니다, 실제로는 이미지 필요)", answer: "특정 패턴을 완성하는 도형" },
            { question: "사과 한 개가 100원입니다. 10개를 사려면 얼마가 필요할까요?", answer: "1000" }
        ];
        this.userAnswers = [];
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    padding: 20px;
                    border: 1px solid var(--border-color);
                    border-radius: 8px;
                    background-color: var(--card-background);
                    box-shadow: 0 2px 10px var(--shadow-light);
                }
                .question-container {
                    margin-bottom: 20px;
                }
                .question-text {
                    font-size: 1.2em;
                    margin-bottom: 15px;
                    color: var(--primary-color);
                }
                .answer-input {
                    width: calc(100% - 22px);
                    padding: 10px;
                    margin-bottom: 15px;
                    border: 1px solid var(--border-color);
                    border-radius: 5px;
                    font-size: 1em;
                }
                .submit-button {
                    background-color: var(--primary-color);
                    color: white;
                    border: none;
                    padding: 10px 20px;
                    font-size: 1em;
                    border-radius: 5px;
                    cursor: pointer;
                    transition: background-color 0.3s ease;
                }
                .submit-button:hover {
                    background-color: #3A7BDC;
                }
                .results-container h3 {
                    color: var(--primary-color);
                    text-align: center;
                    margin-bottom: 10px;
                }
                .results-container p {
                    text-align: center;
                    font-size: 1.1em;
                }
                .retake-button {
                    background-color: var(--accent-color);
                    color: white;
                    border: none;
                    padding: 10px 20px;
                    font-size: 1em;
                    border-radius: 5px;
                    cursor: pointer;
                    display: block;
                    margin: 20px auto 0;
                    transition: background-color 0.3s ease;
                }
                .retake-button:hover {
                    background-color: #E29B1E;
                }
            </style>
            <div id="test-content"></div>
        `;
        this.displayQuestion();
    }

    displayQuestion() {
        const testContent = this.shadowRoot.getElementById('test-content');
        if (this.currentQuestionIndex < this.questions.length) {
            const q = this.questions[this.currentQuestionIndex];
            testContent.innerHTML = `
                <div class="question-container">
                    <p class="question-text">${q.question}</p>
                    <input type="text" class="answer-input" placeholder="정답을 입력하세요">
                    <button class="submit-button">다음</button>
                </div>
            `;
            this.shadowRoot.querySelector('.submit-button').addEventListener('click', this.handleAnswer.bind(this));
            this.shadowRoot.querySelector('.answer-input').addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    this.handleAnswer();
                }
            });
        } else {
            this.showResults();
        }
    }

    handleAnswer() {
        const input = this.shadowRoot.querySelector('.answer-input');
        this.userAnswers[this.currentQuestionIndex] = input.value.trim();
        this.currentQuestionIndex++;
        this.displayQuestion();
    }

    calculateIqScore() {
        let correctCount = 0;
        this.questions.forEach((q, index) => {
            // Simple case-insensitive comparison for demonstration
            if (this.userAnswers[index]?.toLowerCase() === q.answer.toLowerCase()) {
                correctCount++;
            }
        });
        // Very simplistic IQ calculation for demonstration
        const rawScore = (correctCount / this.questions.length) * 100;
        return Math.round(rawScore * 0.8 + 60); // Scale to a more typical IQ range (60-140)
    }

    showResults() {
        const testContent = this.shadowRoot.getElementById('test-content');
        this.score = this.calculateIqScore();
        testContent.innerHTML = `
            <div class="results-container">
                <h3>당신의 예상 IQ는...</h3>
                <p><strong>${this.score}</strong> 입니다.</p>
                <p>이것은 간단한 테스트 결과이며, 정확한 IQ 측정은 전문가에게 문의하십시오.</p>
                <button class="retake-button">다시 테스트하기</button>
            </div>
        `;
        this.shadowRoot.querySelector('.retake-button').addEventListener('click', () => {
            this.resetTest();
            this.render();
        });
    }

    resetTest() {
        this.userAnswers = [];
        this.currentQuestionIndex = 0;
        this.score = 0;
    }
}
customElements.define('iq-test', IqTest);