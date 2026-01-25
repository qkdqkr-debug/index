// main.js

// --- Translation Data ---
const translations = {
    "ko": {
        "site_title": "MBTI & IQ 테스트",
        "nav_home": "홈",
        "nav_mbti": "MBTI 테스트",
        "nav_iq": "IQ 테스트",
        "nav_about": "사이트 소개",
        "home_title": "나를 알아가는 시간: MBTI & IQ 테스트",
        "home_subtitle": "자신을 이해하고 잠재력을 발견하세요!",
        "home_paragraph1": "이 웹사이트는 여러분이 자신의 성격 유형과 지능 지수를 무료로 탐색할 수 있도록 설계되었습니다. MBTI (Myers-Briggs Type Indicator)는 개인의 선호도를 바탕으로 16가지 성격 유형을 분류하여 자기 이해를 돕고, IQ (Intelligence Quotient) 테스트는 인지 능력과 문제 해결 능력을 측정하여 지적 강점을 파악하는 데 유용합니다.",
        "home_paragraph2": "우리 테스트는 쉽고 재미있게 구성되어 있으며, 여러분이 자신을 더 깊이 이해하고 개인적인 성장을 위한 통찰력을 얻는 데 도움이 될 것입니다. 한국인과 외국인 모두에게 유익한 콘텐츠를 제공하며, 여러분의 궁금증을 해소하고 새로운 자신을 발견하는 여정을 응원합니다.",
        "start_mbti": "MBTI 테스트 시작",
        "start_iq": "IQ 테스트 시작",
        "mbti_section_title": "MBTI 성격 유형 테스트",
        "mbti_section_description": "당신은 어떤 유형의 사람일까요? 흥미로운 질문들을 통해 당신의 성격 선호도를 알아보세요.",
        "iq_section_title": "IQ 테스트",
        "iq_section_description": "당신의 지능 지수를 확인해보세요! 논리력, 추론력, 문제 해결 능력을 평가하는 다양한 문제들이 준비되어 있습니다.",
        "about_section_title": "우리에 대하여",
        "about_paragraph1": "저희 MBTI & IQ 테스트 웹사이트는 사용자들이 자신을 더 잘 이해하고 개인적인 성장을 도모할 수 있도록 돕기 위해 만들어졌습니다. 우리는 MBTI 성격 유형과 IQ 지수를 쉽고 접근 가능한 방식으로 제공함으로써, 자기 탐색의 여정에 동반자가 되고자 합니다.",
        "about_paragraph2": "모든 테스트는 무료로 제공되며, 재미있고 교육적인 경험을 선사하기 위해 노력하고 있습니다. 여러분의 피드백은 언제나 환영하며, 더 나은 서비스를 위해 지속적으로 발전해 나가겠습니다.",
        "about_contact_prompt": "문의사항이 있으시면 언제든지 아래 폼을 통해 연락 주십시오.",
        "form_name_label": "이름:",
        "form_email_label": "이메일:",
        "form_message_label": "메시지:",
        "form_submit_button": "문의하기",
        "footer_copyright": "&copy; 2026 MBTI & IQ Test. All rights reserved.",
        "footer_privacy": "개인정보처리방침",
        "footer_terms": "이용약관",
        // MBTI Descriptions
        "ISTJ_desc": "청렴결백한 논리주의자 (The Logistician): 실용적이고 사실을 중시하는 사람들로, 신뢰할 수 있는 성격입니다. 조용하고 진지하며, 철저하고 신뢰할 수 있음으로써 성공을 이룹니다. 전통과 충성심을 중요하게 생각합니다.",
        "ISFJ_desc": "용감한 수호자 (The Defender): 매우 헌신적이고 따뜻한 보호자로, 언제나 사랑하는 사람들을 지킬 준비가 되어 있습니다. 조용하고 친근하며 책임감이 강하고 양심적이며, 의무를 다하는 데 헌신적이고 꾸준합니다.",
        "INFJ_desc": "선의의 옹호자 (The Advocate): 조용하고 신비로우며, 동시에 매우 영감을 주고 지칠 줄 모르는 이상주의자입니다. 아이디어, 관계, 물질적 소유물에서 의미와 연결을 찾으려 하며, 사람들을 동기 부여하는 요인을 이해하고 타인에 대한 통찰력이 뛰어납니다.",
        "INTJ_desc": "용의주도한 전략가 (The Architect): 상상력이 풍부하고 전략적인 사고를 하는 사람들로, 모든 것에 대한 계획을 가지고 있습니다. 독창적인 사고를 가지고 있으며, 자신의 아이디어를 실행하고 목표를 달성하려는 강한 의지를 가지고 있습니다. 외부 사건에서 패턴을 빠르게 파악하고 장기적인 설명적 관점을 개발합니다.",
        "ISTP_desc": "만능 재주꾼 (The Virtuoso): 대담하고 실용적인 실험가로, 모든 종류의 도구를 능숙하게 다룹니다. 유연하고 관대하며, 문제가 발생하기 전까지는 조용한 관찰자이지만, 문제가 생기면 빠르게 실행 가능한 해결책을 찾기 위해 행동합니다.",
        "ISFP_desc": "호기심 많은 예술가 (The Adventurer): 유연하고 매력적인 예술가로, 항상 새롭고 특별한 경험을 탐험할 준비가 되어 있습니다. 조용하고 친근하며 감성적이고 친절하며, 현재 순간과 주변에서 일어나는 일들을 즐깁니다.",
        "INFP_desc": "열정적인 중재자 (The Mediator): 시적이고 친절하며 이타적인 사람들로, 항상 좋은 대의를 돕기 위해 열심입니다. 이상주의적이며 자신의 가치와 중요한 사람들에게 충성하며, 자신의 가치와 일치하는 삶을 살고자 합니다. ",
        "INTP_desc": "논리적인 사색가 (The Logician): 지식에 대한 끊임없는 갈증을 가진 혁신적인 발명가입니다. 자신에게 흥미로운 모든 것에 대한 논리적인 설명을 개발하려고 하며, 이론적이고 추상적이며, 사회적 상호작용보다는 아이디어에 더 관심이 많습니다.",
        "ESTP_desc": "모험을 즐기는 사업가 (The Entrepreneur): 영리하고 에너지가 넘치며 매우 지각이 빠른 사람들로, 스릴 넘치는 삶을 진정으로 즐깁니다. 유연하고 관대하며, 즉각적인 결과에 초점을 맞춘 실용적인 접근 방식을 취합니다.",
        "ESFP_desc": "자유로운 영혼의 연예인 (The Entertainer): 자발적이고 활기차며 열정적인 사람들로, 이들과 함께라면 삶은 결코 지루하지 않습니다. 외향적이고 친근하며 포용적이며, 삶과 사람, 물질적 안락을 열정적으로 사랑합니다.",
        "ENFP_desc": "재기발랄한 활동가 (The Campaigner): 열정적이고 창의적이며 사교적인 자유로운 영혼으로, 항상 웃을 이유를 찾습니다. 따뜻하고 열정적이며 상상력이 풍부하고, 삶을 가능성으로 가득 찬 것으로 보며 사건과 정보 사이의 연관성을 매우 빠르게 파악합니다.",
        "ENTP_desc": "논쟁을 즐기는 변론가 (The Debater): 똑똑하고 호기심 많은 사상가로, 지적인 도전을 거부할 수 없습니다. 빠르고 독창적이며 자극적이고 솔직하며, 새롭고 도전적인 문제 해결에 능숙합니다.",
        "ESTJ_desc": "엄격한 관리자 (The Executive): 뛰어난 관리자로, 사물이나 사람을 관리하는 데 탁월합니다. 실용적이고 현실적이며 사실적이고, 단호하며 신속하게 결정을 실행합니다.",
        "ESFJ_desc": "사교적인 외교관 (The Consul): 놀라울 정도로 배려심 많고 사교적이며 인기 있는 사람들로, 항상 돕기를 열망합니다. 따뜻하고 양심적이며 협조적이며, 환경에서 조화를 원하고 이를 확립하기 위해 결단력 있게 노력합니다.",
        "ENFJ_desc": "정의로운 사회운동가 (The Protagonist): 카리스마 있고 영감을 주는 리더로, 청중을 매료시킬 수 있습니다. 따뜻하고 공감하며 반응적이고 책임감이 강하며, 타인의 감정, 필요, 동기에 매우 잘 공감합니다.",
        "ENTJ_desc": "대담한 통솔자 (The Commander): 대담하고 상상력이 풍부하며 강한 의지를 가진 리더로, 항상 길을 찾거나 만듭니다. 솔직하고 단호하며 쉽게 리더십을 발휘하고, 비논리적이고 비효율적인 절차를 신속하게 식별하여 포괄적인 해결책을 개발하고 실행합니다.",
        // MBTI Questions
        "mbti_q1": "새로운 사람들과 어울리는 것을 즐기시나요?", "mbti_q1_opt1": "네, 즐깁니다.", "mbti_q1_opt2": "아니요, 조용히 보내는 것을 선호합니다.",
        "mbti_q2": "파티나 모임이 끝나면 에너지가 고갈되는 느낌인가요?", "mbti_q2_opt1": "네, 그렇습니다.", "mbti_q2_opt2": "아니요, 오히려 에너지를 얻습니다.",
        "mbti_q3": "현실적이고 구체적인 사실에 집중하나요?", "mbti_q3_opt1": "네, 현실적인 것을 중요하게 생각합니다.", "mbti_q3_opt2": "아니요, 미래 가능성과 추상적인 아이디어에 관심이 많습니다.",
        "mbti_q4": "새로운 아이디어를 탐색하는 것을 좋아하나요, 아니면 검증된 방법에 머무는 것을 선호하나요?", "mbti_q4_opt1": "새로운 아이디어를 탐색합니다.", "mbti_q4_opt2": "검증된 방법을 선호합니다.",
        "mbti_q5": "결정을 내릴 때 논리와 객관적인 분석을 중요하게 생각하나요?", "mbti_q5_opt1": "네, 논리적인 판단을 선호합니다.", "mbti_q5_opt2": "아니요, 다른 사람들의 감정과 상황을 고려합니다.",
        "mbti_q6": "다른 사람의 감정을 공감하고 이해하는 것이 쉬운가요?", "mbti_q6_opt1": "네, 쉽게 공감합니다.", "mbti_q6_opt2": "아니요, 객관적으로 상황을 봅니다.",
        "mbti_q7": "계획을 세우고 체계적으로 일을 처리하는 것을 좋아하나요?", "mbti_q7_opt1": "네, 계획적인 것을 좋아합니다.", "mbti_q7_opt2": "아니요, 유연하고 즉흥적인 것을 선호합니다.",
        "mbti_q8": "마감 기한이 임박했을 때 집중력이 높아지는 편인가요?", "mbti_q8_opt1": "네, 그렇습니다.", "mbti_q8_opt2": "아니요, 미리 계획하고 완수합니다.",
        "mbti_result_title": "당신의 MBTI 유형은...",
        "mbti_result_disclaimer": "더 자세한 정보는 MBTI 전문 사이트에서 확인해보세요!",

        // IQ Questions
        "iq_q1": "다음 숫자 배열의 다음 숫자는 무엇일까요? 1, 3, 6, 10, 15, ?", "iq_q1_opt1": "20", "iq_q1_opt2": "21", "iq_q1_opt3": "22", "iq_q1_opt4": "23",
        "iq_q2": "강철이 무쇠보다 강하다면, 무쇠는 종이보다 어떤가요?", "iq_q2_opt1": "강하다", "iq_q2_opt2": "약하다", "iq_q2_opt3": "같다", "iq_q2_opt4": "관련 없다",
        "iq_q3": "다음 중 나머지 셋과 다른 하나는? (사물 기준)", "iq_q3_opt1": "사과", "iq_q3_opt2": "바나나", "iq_q3_opt3": "감자", "iq_q3_opt4": "오렌지",
        "iq_q4": "어떤 달은 28일까지 있고, 또 어떤 달은 30일까지 있습니다. 모든 달은 며칠까지 있나요?", "iq_q4_opt1": "28일", "iq_q4_opt2": "29일", "iq_q4_opt3": "30일", "iq_q4_opt4": "31일",
        "iq_q5": "다음 단어들 중 관련 없는 하나는? (의미 기준)", "iq_q5_opt1": "행복", "iq_q5_opt2": "기쁨", "iq_q5_opt3": "슬픔", "iq_q5_opt4": "즐거움",
        "iq_q6": "다음 빈칸에 들어갈 숫자는? 2, 4, 8, 16, ?", "iq_q6_opt1": "24", "iq_q6_opt2": "32", "iq_q6_opt3": "48", "iq_q6_opt4": "64",
        "iq_result_title": "당신의 예상 IQ는...",
        "iq_result_disclaimer": "이것은 간단한 테스트 결과이며, 정확한 IQ 측정은 전문가에게 문의하십시오.",
        "retake_button": "다시 테스트하기"
    },
    "en": {
        "site_title": "MBTI & IQ Test",
        "nav_home": "Home",
        "nav_mbti": "MBTI Test",
        "nav_iq": "IQ Test",
        "nav_about": "About Us",
        "home_title": "Time to Know Yourself: MBTI & IQ Test",
        "home_subtitle": "Understand yourself and discover your potential!",
        "home_paragraph1": "This website is designed for you to freely explore your personality type and intelligence quotient. The MBTI (Myers-Briggs Type Indicator) helps you understand yourself by classifying 16 personality types based on individual preferences, and the IQ (Intelligence Quotient) test is useful for identifying intellectual strengths by measuring cognitive abilities and problem-solving skills.",
        "home_paragraph2": "Our tests are designed to be easy and fun, and they will help you understand yourself more deeply and gain insights for personal growth. We provide valuable content for both Koreans and foreigners, supporting your journey to explore your curiosities and discover a new you.",
        "start_mbti": "Start MBTI Test",
        "start_iq": "Start IQ Test",
        "mbti_section_title": "MBTI Personality Type Test",
        "mbti_section_description": "What type of person are you? Find out your personality preferences through interesting questions.",
        "iq_section_title": "IQ Test",
        "iq_section_description": "Check your intelligence quotient! Various problems designed to assess your logic, reasoning, and problem-solving skills are prepared.",
        "about_section_title": "About Us",
        "about_paragraph1": "Our MBTI & IQ Test website was created to help users better understand themselves and foster personal growth. We aim to be a companion on your journey of self-discovery by providing MBTI personality types and IQ scores in an easy and accessible way.",
        "about_paragraph2": "All tests are provided free of charge, and we strive to offer a fun and educational experience. Your feedback is always welcome, and we will continue to evolve for better service.",
        "about_contact_prompt": "If you have any questions, please contact us using the form below.",
        "form_name_label": "Name:",
        "form_email_label": "Email:",
        "form_message_label": "Message:",
        "form_submit_button": "Send Inquiry",
        "footer_copyright": "&copy; 2026 MBTI & IQ Test. All rights reserved.",
        "footer_privacy": "Privacy Policy",
        "footer_terms": "Terms of Service",
        // MBTI Descriptions
        "ISTJ_desc": "ISTJ (The Logistician): Practical and fact-minded individuals whose reliability cannot be doubted. They are quiet, serious, and earn success by being thorough and dependable, valuing tradition and loyalty.",
        "ISFJ_desc": "ISFJ (The Defender): Very dedicated and warm protectors, always ready to defend their loved ones. They are quiet, friendly, responsible, and conscientious, committed and steady in meeting their obligations.",
        "INFJ_desc": "INFJ (The Advocate): Quiet and mystical, yet very inspiring and tireless idealists. They seek meaning and connection in ideas, relationships, and material possessions, wanting to understand what motivates people and being insightful about others.",
        "INTJ_desc": "INTJ (The Architect): Imaginative and strategic thinkers with a plan for everything. They have original minds and a great drive for implementing their ideas and achieving their goals. They quickly see patterns in external events and develop long-range explanatory perspectives.",
        "ISTP_desc": "ISTP (The Virtuoso): Bold and practical experimenters, masters of all kinds of tools. They are tolerant and flexible, quiet observers until a problem appears, then act quickly to find workable solutions.",
        "ISFP_desc": "ISFP (The Adventurer): Flexible and charming artists, always ready to explore and experience something new. They are quiet, friendly, sensitive, and kind, enjoying the present moment and what's going on around them.",
        "INFP_desc": "INFP (The Mediator): Poetic, kind, and altruistic people, always eager to help a good cause. They are idealistic, loyal to their values and to people important to them, and want to live a life congruent with their values.",
        "INTP_desc": "INTP (The Logician): Innovative inventors with an unquenchable thirst for knowledge. They seek to develop logical explanations for everything that interests them, are theoretical and abstract, and are more interested in ideas than social interaction.",
        "ESTP_desc": "ESTP (The Entrepreneur): Smart, energetic, and very perceptive people, who truly enjoy living on the edge. They are flexible and tolerant, taking a pragmatic approach focused on immediate results.",
        "ESFP_desc": "ESFP (The Entertainer): Spontaneous, energetic, and enthusiastic people—life is never boring around them. They are outgoing, friendly, and accepting, exuberant lovers of life, people, and material comforts.",
        "ENFP_desc": "ENFP (The Campaigner): Enthusiastic, creative, and sociable free spirits, who can always find a reason to smile. They are warmly enthusiastic and imaginative, seeing life as full of possibilities and making connections between events and information very quickly.",
        "ENTP_desc": "ENTP (The Debater): Smart and curious thinkers who cannot resist an intellectual challenge. They are quick, ingenious, stimulating, alert, and outspoken, resourceful in solving new and challenging problems.",
        "ESTJ_desc": "ESTJ (The Executive): Excellent administrators, unsurpassed at managing things or people. They are practical, realistic, and matter-of-fact, decisive, and quickly move to implement decisions.",
        "ESFJ_desc": "ESFJ (The Consul): Extraordinarily caring, social, and popular people, always eager to help. They are warmhearted, conscientious, and cooperative, wanting harmony in their environment and working with determination to establish it.",
        "ENFJ_desc": "ENFJ (The Protagonist): Charismatic and inspiring leaders, able to mesmerize their listeners. They are warm and empathetic, responsive and responsible, highly attuned to the emotions, needs, and motivations of others.",
        "ENTJ_desc": "ENTJ (The Commander): Bold, imaginative, and strong-willed leaders, always finding a way or making one. They are frank, decisive, and readily assume leadership, quickly identifying illogical and inefficient procedures to develop and implement comprehensive solutions.",
        // MBTI Questions
        "mbti_q1": "Do you enjoy mingling with new people?", "mbti_q1_opt1": "Yes, I enjoy it.", "mbti_q1_opt2": "No, I prefer spending time quietly.",
        "mbti_q2": "Do you feel drained after parties or social gatherings?", "mbti_q2_opt1": "Yes, I do.", "mbti_q2_opt2": "No, I gain energy from them.",
        "mbti_q3": "Do you focus on realistic and concrete facts?", "mbti_q3_opt1": "Yes, I value realism.", "mbti_q3_opt2": "No, I'm more interested in future possibilities and abstract ideas.",
        "mbti_q4": "Do you prefer exploring new ideas or sticking to proven methods?", "mbti_q4_opt1": "I explore new ideas.", "mbti_q4_opt2": "I prefer proven methods.",
        "mbti_q5": "When making decisions, do you prioritize logic and objective analysis?", "mbti_q5_opt1": "Yes, I prefer logical judgment.", "mbti_q5_opt2": "No, I consider other people's feelings and circumstances.",
        "mbti_q6": "Is it easy for you to empathize with and understand others' feelings?", "mbti_q6_opt1": "Yes, I easily empathize.", "mbti_q6_opt2": "No, I view situations objectively.",
        "mbti_q7": "Do you like to plan and process tasks systematically?", "mbti_q7_opt1": "Yes, I like planning.", "mbti_q7_opt2": "No, I prefer flexibility and spontaneity.",
        "mbti_q8": "Do you become more focused when a deadline is approaching?", "mbti_q8_opt1": "Yes, I do.", "mbti_q8_opt2": "No, I plan and complete tasks in advance.",
        "mbti_result_title": "Your MBTI Type is...",
        "mbti_result_disclaimer": "Find more detailed information on a professional MBTI website!",

        // IQ Questions
        "iq_q1": "What is the next number in the sequence? 1, 3, 6, 10, 15, ?", "iq_q1_opt1": "20", "iq_q1_opt2": "21", "iq_q1_opt3": "22", "iq_q1_opt4": "23",
        "iq_q2": "If steel is stronger than cast iron, how is cast iron compared to paper?", "iq_q2_opt1": "Stronger", "iq_q2_opt2": "Weaker", "iq_q2_opt3": "Same", "iq_q2_opt4": "Irrelevant",
        "iq_q3": "Which one is different from the rest? (Based on objects)", "iq_q3_opt1": "Apple", "iq_q3_opt2": "Banana", "iq_q3_opt3": "Potato", "iq_q3_opt4": "Orange",
        "iq_q4": "Some months have 28 days, and some have 30. How many days do all months have?", "iq_q4_opt1": "28 days", "iq_q4_opt2": "29 days", "iq_q4_opt3": "30 days", "iq_q4_opt4": "31 days",
        "iq_q5": "Which word is unrelated to the others? (Based on meaning)", "iq_q5_opt1": "Happiness", "iq_q5_opt2": "Joy", "iq_q5_opt3": "Sadness", "iq_q5_opt4": "Pleasure",
        "iq_q6": "What is the next number in the blank? 2, 4, 8, 16, ?", "iq_q6_opt1": "24", "iq_q6_opt2": "32", "iq_q6_opt3": "48", "iq_q6_opt4": "64",
        "iq_result_title": "Your Estimated IQ is...",
        "iq_result_disclaimer": "This is a simple test result; please consult an expert for accurate IQ measurement.",
        "retake_button": "Retake Test"
    }
};

let currentLang = localStorage.getItem('lang') || 'ko'; // Default to Korean

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);

    // Update main document elements
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.dataset.key;
        if (translations[currentLang] && translations[currentLang][key]) {
            element.textContent = translations[currentLang][key];
        }
    });

    // Update input placeholders
    const nameInput = document.getElementById('name');
    if (nameInput) nameInput.placeholder = translations[currentLang]?.form_name_label?.replace(':', '') || '';
    const emailInput = document.getElementById('email');
    if (emailInput) emailInput.placeholder = translations[currentLang]?.form_email_label?.replace(':', '') || '';
    const messageInput = document.getElementById('message');
    if (messageInput) messageInput.placeholder = translations[currentLang]?.form_message_label?.replace(':', '') || '';


    // Update language buttons active state
    document.querySelectorAll('.lang-button').forEach(button => {
        if (button.dataset.lang === lang) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });

    // Update Web Components (MBTI and IQ tests)
    if (mbtiTestComponent) {
        mbtiTestComponent.updateLanguage(lang);
    }
    if (iqTestComponent) {
        iqTestComponent.updateLanguage(lang);
    }
}

// Event listeners for language buttons
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('lang-ko').addEventListener('click', () => setLanguage('ko'));
    document.getElementById('lang-en').addEventListener('click', () => setLanguage('en'));
    document.getElementById('lang-ja').addEventListener('click', () => setLanguage('ja'));
    document.getElementById('lang-zh').addEventListener('click', () => setLanguage('zh'));
});

// --- Navigation and Section Switching Logic ---
const sections = {
    home: document.getElementById('home-section'),
    mbti: document.getElementById('mbti-section'),
    iq: document.getElementById('iq-section'),
    about: document.getElementById('about-section')
};

const navLinks = {
    home: document.getElementById('nav-home'),
    mbti: document.getElementById('nav-mbti'),
    iq: document.getElementById('nav-iq'),
    about: document.getElementById('nav-about')
};

const startMbtiButton = document.getElementById('start-mbti');
const startIqButton = document.getElementById('start-iq');
const footerPrivacyLink = document.getElementById('footer-privacy');
const footerTermsLink = document.getElementById('footer-terms');

// Get references to the Web Components - declared globally
let mbtiTestComponent;
let iqTestComponent;

function showSection(sectionName) {
    for (const key in sections) {
        sections[key].style.display = 'none';
        navLinks[key]?.classList.remove('active');
    }
    sections[sectionName].style.display = 'block';
    navLinks[sectionName]?.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Event listeners for navigation links
navLinks.home.addEventListener('click', (e) => {
    e.preventDefault();
    showSection('home');
});
navLinks.mbti.addEventListener('click', (e) => {
    e.preventDefault();
    showSection('mbti');
    mbtiTestComponent?.resetTest();
});
navLinks.iq.addEventListener('click', (e) => {
    e.preventDefault();
    showSection('iq');
    iqTestComponent?.resetTest();
});
navLinks.about.addEventListener('click', (e) => {
    e.preventDefault();
    showSection('about');
});

// Event listeners for start buttons
startMbtiButton.addEventListener('click', () => {
    showSection('mbti');
    mbtiTestComponent?.resetTest();
});
startIqButton.addEventListener('click', () => {
    showSection('iq');
    iqTestComponent?.resetTest();
});

// Event listeners for footer links (placeholders for now)
document.addEventListener('DOMContentLoaded', () => {
    footerPrivacyLink.addEventListener('click', (e) => {
        e.preventDefault();
        alert(translations[currentLang].footer_privacy + ' 페이지로 이동합니다. (아직 구현되지 않았습니다)');
        console.log('Navigate to Privacy Policy');
    });
    footerTermsLink.addEventListener('click', (e) => {
        e.preventDefault();
        alert(translations[currentLang].footer_terms + ' 페이지로 이동합니다. (아직 구현되지 않았습니다)');
        console.log('Navigate to Terms of Service');
    });
});

// Initially show the home section and initialize web component references
document.addEventListener('DOMContentLoaded', () => {
    showSection('home');
    mbtiTestComponent = document.querySelector('mbti-test');
    iqTestComponent = document.querySelector('iq-test');
    setLanguage(currentLang); // Apply initial language
});


// --- MBTI Test Web Component ---
class MbtiTest extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.questions = [
            { question: "새로운 사람들과 어울리는 것을 즐기시나요?", options: [{ text: "네, 즐깁니다.", value: "E" }, { text: "아니요, 조용히 보내는 것을 선호합니다.", value: "I" }] },
            { question: "파티나 모임이 끝나면 에너지가 고갈되는 느낌인가요?", options: [{ text: "네, 그렇습니다.", value: "I" }, { text: "아니요, 오히려 에너지를 얻습니다.", value: "E" }] },
            { question: "현실적이고 구체적인 사실에 집중하나요?", options: [{ text: "네, 현실적인 것을 중요하게 생각합니다.", value: "S" }, { text: "아니요, 미래 가능성과 추상적인 아이디어에 관심이 많습니다.", value: "N" }] },
            { question: "새로운 아이디어를 탐색하는 것을 좋아하나요, 아니면 검증된 방법에 머무는 것을 선호하나요?", options: [{ text: "새로운 아이디어를 탐색합니다.", value: "N" }, { text: "검증된 방법을 선호합니다.", value: "S" }] },
            { question: "결정을 내릴 때 논리와 객관적인 분석을 중요하게 생각하나요?", options: [{ text: "네, 논리적인 판단을 선호합니다.", value: "T" }, { text: "아니요, 다른 사람들의 감정과 상황을 고려합니다.", value: "F" }] },
            { question: "다른 사람의 감정을 공감하고 이해하는 것이 쉬운가요?", options: [{ text: "네, 쉽게 공감합니다.", value: "F" }, { text: "아니요, 객관적으로 상황을 봅니다.", value: "T" }] },
            { question: "계획을 세우고 체계적으로 일을 처리하는 것을 좋아하나요?", options: [{ text: "네, 계획적인 것을 좋아합니다.", value: "J" }, { text: "아니요, 유연하고 즉흥적인 것을 선호합니다.", value: "P" }] },
            { question: "마감 기한이 임박했을 때 집중력이 높아지는 편인가요?", options: [{ text: "네, 그렇습니다.", value: "P" }, { text: "아니요, 미리 계획하고 완수합니다.", value: "J" }] }
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
            // Use translation for question text and options
            testContent.innerHTML = `
                <div class="question-container">
                    <p class="question-text">${translations[this.language][`mbti_q${this.currentQuestionIndex + 1}`]}</p>
                    ${q.options.map((option, index) => `
                        <button class="option-button" data-value="${option.value}">${translations[this.language][`mbti_q${this.currentQuestionIndex + 1}_opt${index + 1}`]}</button>
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
        return translations[this.language][`${mbtiType}_desc`] || translations[this.language][`mbti_type_not_found`];
    }

    showResults() {
        const testContent = this.shadowRoot.getElementById('test-content');
        const mbtiType = this.calculateMbti();
        const description = this.getMbtiDescription(mbtiType);
        testContent.innerHTML = `
            <div class="results-container">
                <h3>${translations[this.language].mbti_result_title}</h3>
                <p><strong>${mbtiType}</strong> - ${description}</p>
                <p>${translations[this.language].mbti_result_disclaimer}</p>
                <button class="retake-button">${translations[this.language].retake_button}</button>
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
        this.render(); // Make sure render is called after reset
    }

    // New method to update language
    updateLanguage(lang) {
        this.language = lang;
        this.render(); // Re-render to apply new language
    }
}
customElements.define('mbti-test', MbtiTest);

// --- IQ Test Web Component ---
class IqTest extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.questions = [
            { question: "다음 숫자 배열의 다음 숫자는 무엇일까요? 1, 3, 6, 10, 15, ?", options: ["20", "21", "22", "23"], correctAnswerIndex: 1 }, // +2, +3, +4, +5, +6
            { question: "강철이 무쇠보다 강하다면, 무쇠는 종이보다 어떤가요?", options: ["강하다", "약하다", "같다", "관련 없다"], correctAnswerIndex: 0 },
            { question: "다음 중 나머지 셋과 다른 하나는? (사물 기준)", options: ["사과", "바나나", "감자", "오렌지"], correctAnswerIndex: 2 },
            { question: "어떤 달은 28일까지 있고, 또 어떤 달은 30일까지 있습니다. 모든 달은 며칠까지 있나요?", options: ["28일", "29일", "30일", "31일"], correctAnswerIndex: 3 },
            { question: "다음 단어들 중 관련 없는 하나는? (의미 기준)", options: ["행복", "기쁨", "슬픔", "즐거움"], correctAnswerIndex: 2 },
            { question: "다음 빈칸에 들어갈 숫자는? 2, 4, 8, 16, ?", options: ["24", "32", "48", "64"], correctAnswerIndex: 1 } // x2 progression
        ];
        this.userAnswers = Array(this.questions.length).fill(null);
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
            // Use translation for question text and options
            testContent.innerHTML = `
                <div class="question-container">
                    <p class="question-text">${translations[this.language][`iq_q${this.currentQuestionIndex + 1}`]}</p>
                    ${q.options.map((option, index) => `
                        <button class="option-button" data-index="${index}">${translations[this.language][`iq_q${this.currentQuestionIndex + 1}_opt${index + 1}`]}</button>
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
        const selectedOptionIndex = parseInt(event.target.dataset.index);
        this.userAnswers[this.currentQuestionIndex] = selectedOptionIndex;
        this.currentQuestionIndex++;
        this.displayQuestion();
    }

    calculateIqScore() {
        let correctCount = 0;
        this.questions.forEach((q, index) => {
            if (this.userAnswers[index] === q.correctAnswerIndex) {
                correctCount++;
            }
        });
        // Simplistic IQ calculation for demonstration, scaled from 80-160
        const rawScore = (correctCount / this.questions.length);
        return Math.round(80 + (rawScore * 80)); 
    }

    showResults() {
        const testContent = this.shadowRoot.getElementById('test-content');
        this.score = this.calculateIqScore();
        testContent.innerHTML = `
            <div class="results-container">
                <h3>${translations[this.language].iq_result_title}</h3>
                <p><strong>${this.score}</strong> 입니다.</p>
                <p>${translations[this.language].iq_result_disclaimer}</p>
                <button class="retake-button">${translations[this.language].retake_button}</button>
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
        this.render();
    }

    // New method to update language
    updateLanguage(lang) {
        this.language = lang;
        this.render(); // Re-render to apply new language
    }
}
customElements.define('iq-test', IqTest);