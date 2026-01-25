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
        "alert_not_implemented": " 페이지로 이동합니다. (아직 구현되지 않았습니다)",
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
        "alert_not_implemented": " page (not implemented yet)",
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
    },
    "ja": {
        "site_title": "MBTI & IQ テスト",
        "nav_home": "ホーム",
        "nav_mbti": "MBTI テスト",
        "nav_iq": "IQ テスト",
        "nav_about": "サイト紹介",
        "home_title": "自分を知る時間: MBTI & IQ テスト",
        "home_subtitle": "自分を理解し、可能性を発見しましょう！",
        "home_paragraph1": "このウェブサイトは、あなたが自分の性格タイプと知能指数を無料で探求できるように設計されています。MBTI (Myers-Briggs Type Indicator) は、個人の好みに基づいて16の性格タイプを分類し、自己理解を助けます。IQ (Intelligence Quotient) テストは、認知能力と問題解決能力を測定し、知的な強みを特定するのに役立ちます。",
        "home_paragraph2": "私たちのテストは簡単で楽しく設計されており、あなたが自分をより深く理解し、個人的な成長のための洞察を得るのに役立ちます。韓国人および外国人の方々にも役立つコンテンツを提供し、あなたの好奇心を探求し、新しい自分を発見する旅を応援します。",
        "start_mbti": "MBTI テスト開始",
        "start_iq": "IQ テスト開始",
        "mbti_section_title": "MBTI 性格タイプテスト",
        "mbti_section_description": "あなたはどんなタイプの人ですか？興味深い質問を通してあなたの性格の好みを調べてください。",
        "iq_section_title": "IQ テスト",
        "iq_section_description": "あなたの知能指数を確認してください！論理的思考力、推論力、問題解決能力を評価するためのさまざまな問題が用意されています。",
        "about_section_title": "私たちについて",
        "about_paragraph1": "私たちのMBTI＆IQテストウェブサイトは、ユーザーが自分自身をよりよく理解し、個人の成長を促進するのを助けるために作成されました。私たちは、MBTI性格タイプとIQスコアを簡単でアクセスしやすい方法で提供することにより、自己発見の旅の仲間となることを目指しています。",
        "about_paragraph2": "すべてのテストは無料で提供されており、楽しく教育的な体験を提供するために努力しています。皆様からのフィードバックはいつでも歓迎しており、より良いサービスのために継続的に発展していきます。",
        "about_contact_prompt": "ご質問がございましたら、以下のフォームよりお問い合わせください。",
        "form_name_label": "名前：",
        "form_email_label": "メール：",
        "form_message_label": "メッセージ：",
        "form_submit_button": "お問い合わせ",
        "footer_copyright": "&copy; 2026 MBTI & IQテスト. 無断転載を禁じます。",
        "footer_privacy": "プライバシーポリシー",
        "footer_terms": "利用規約",
        "alert_not_implemented": "ページに移動します。(まだ実装されていません)",
        // MBTI Descriptions (Google Translated)
        "ISTJ_desc": "ISTJ（管理者）：実用的で事実に基づいた個人で、信頼性は疑う余地がありません。彼らは静かで真面目で、徹底的で信頼できることで成功を収め、伝統と忠誠心を重んじます。",
        "ISFJ_desc": "ISFJ（擁護者）：非常に献身的で温かい保護者で、常に愛する人を守る準備ができています。彼らは静かで友好的で責任感が強く誠実で、義務を果たすことに献身的で着実です。",
        "INFJ_desc": "INFJ（提唱者）：静かで神秘的ですが、非常に感動的で疲れを知らない理想主義者です。彼らはアイデア、人間関係、物質的所持品に意味とつながりを求め、人々を動機づけるものを理解しようとし、他者について洞察力があります。",
        "INTJ_desc": "INTJ（建築家）：想像力豊かで戦略的な思想家で、あらゆることの計画を持っています。彼らは独創的な思考を持ち、アイデアを実行し目標を達成するという強い意欲を持っています。外部の出来事のパターンを素早く見抜き、長期的な説明的視点を開発します。",
        "ISTP_desc": "ISTP（巨匠）：大胆で実践的な実験者で、あらゆる種類の道具の達人です。彼らは寛容で柔軟で、問題が発生するまでは静かな観察者ですが、問題が現れると迅速に実行可能な解決策を見つけ出します。",
        "ISFP_desc": "ISFP（冒険家）：柔軟で魅力的な芸術家で、常に何か新しいことを探求し体験する準備ができています。彼らは静かで友好的で敏感で親切で、現在の瞬間と周囲で起こっていることを楽しんでいます。",
        "INFP_desc": "INFP（仲介者）：詩的で親切で利他的な人々で、常に良い目的を助けることに熱心です。彼らは理想主義的で、自分の価値観と大切な人々に忠実で、自分の価値観に合致する生活を送りたいと願っています。",
        "INTP_desc": "INTP（論理学者）：知識への飽くなき渇望を持つ革新的な発明家です。彼らは興味のあるすべてのことについて論理的な説明を開発しようとし、理論的で抽象的で、社会的な交流よりもアイデアに関心があります。",
        "ESTP_desc": "ESTP（起業家）：賢く、エネルギッシュで、非常に洞察力のある人々で、まさに危険を冒すことを楽しんでいます。彼らは柔軟で寛容で、即座の結果に焦点を当てた実用的なアプローチを取ります。",
        "ESFP_desc": "ESFP（エンターテイナー）：自発的でエネルギッシュで熱心な人々で、彼らの周りでは決して退屈しません。彼らは社交的で友好的で受け入れやすく、人生、人々、物質的な快適さを熱烈に愛しています。",
        "ENFP_desc": "ENFP（広報運動家）：熱心で創造的で社交的な自由な精神で、常に笑顔になる理由を見つけます。彼らは暖かく熱心で想像力豊かで、人生を可能性に満ちたものと見なし、出来事と情報のつながりを非常に素早く見出します。",
        "ENTP_desc": "ENTP（討論者）：賢く好奇心旺盛な思想家で、知的な挑戦を拒むことができません。彼らは素早く、巧妙で、刺激的で、率直で、新しく困難な問題解決に長けています。",
        "ESTJ_desc": "ESTJ（幹部）：物事や人を管理するのに優れた管理者です。彼らは実践的で現実的で実際的で、決断力があり、迅速に決定を実行します。",
        "ESFJ_desc": "ESFJ（領事）：非常に思いやりがあり、社交的で人気のある人々で、常に助けることを熱望しています。彼らは温厚で良心的で協力的で、環境の調和を望み、それを確立するために決意を持って働きます。",
        "ENFJ_desc": "ENFJ（主人公）：カリスマ的で感動的なリーダーで、聴衆を魅了することができます。彼らは温かく共感的で、応答性が高く責任感があり、他者の感情、ニーズ、動機に非常に敏感です。",
        "ENTJ_desc": "ENTJ（司令官）：大胆で想像力豊かで意志の強いリーダーで、常に道を見つけるか、道を作ります。彼らは率直で断固としており、容易にリーダーシップを発揮し、非論理的で非効率的な手順を迅速に特定して、包括的な解決策を開発し実行します。",
        // MBTI Questions (Google Translated)
        "mbti_q1": "新しい人との交流を楽しんでいますか？", "mbti_q1_opt1": "はい、楽しんでいます。", "mbti_q1_opt2": "いいえ、静かに過ごすことを好みます。",
        "mbti_q2": "パーティーや社交的な集まりの後、エネルギーが消耗したと感じますか？", "mbti_q2_opt1": "はい、そうです。", "mbti_q2_opt2": "いいえ、むしろエネルギーを得ます。",
        "mbti_q3": "現実的で具体的な事実に焦点を当てますか？", "mbti_q3_opt1": "はい、現実的なことを重視します。", "mbti_q3_opt2": "いいえ、未来の可能性や抽象的なアイデアにもっと興味があります。",
        "mbti_q4": "新しいアイデアを探求する方が好きですか、それとも実証済みの方法にこだわる方が好きですか？", "mbti_q4_opt1": "新しいアイデアを探求します。", "mbti_q4_opt2": "実証済みの方法を好みます。",
        "mbti_q5": "意思決定をする際、論理と客観的な分析を優先しますか？", "mbti_q5_opt1": "はい、論理的な判断を好みます。", "mbti_q5_opt2": "いいえ、他人の感情や状況を考慮します。",
        "mbti_q6": "他人の気持ちに共感し、理解するのは簡単ですか？", "mbti_q6_opt1": "はい、簡単に共感します。", "mbti_q6_opt2": "いいえ、客観的に状況を見ます。",
        "mbti_q7": "計画を立てて体系的にタスクを処理するのが好きですか？", "mbti_q7_opt1": "はい、計画を立てるのが好きです。", "mbti_q7_opt2": "いいえ、柔軟で即興的なものを好みます。",
        "mbti_q8": "締め切りが近づくと集中力が高まる方ですか？", "mbti_q8_opt1": "はい、そうです。", "mbti_q8_opt2": "いいえ、事前に計画してタスクを完了します。",
        "mbti_result_title": "あなたのMBTIタイプは...",
        "mbti_result_disclaimer": "詳細については、専門のMBTIウェブサイトをご覧ください！",
        // IQ Questions (Google Translated)
        "iq_q1": "次の数列の次の数字は何ですか？ 1, 3, 6, 10, 15, ?", "iq_q1_opt1": "20", "iq_q1_opt2": "21", "iq_q1_opt3": "22", "iq_q1_opt4": "23",
        "iq_q2": "鋼鉄が鋳鉄より強い場合、鋳鉄は紙と比較してどうですか？", "iq_q2_opt1": "強い", "iq_q2_opt2": "弱い", "iq_q2_opt3": "同じ", "iq_q2_opt4": "関係ない",
        "iq_q3": "残りの3つと異なるものはどれですか？（オブジェクトに基づく）", "iq_q3_opt1": "リンゴ", "iq_q3_opt2": "バナナ", "iq_q3_opt3": "ジャガイモ", "iq_q3_opt4": "オレンジ",
        "iq_q4": "28日ある月もあれば、30日ある月もあります。すべての月は何日ありますか？", "iq_q4_opt1": "28日", "iq_q4_opt2": "29日", "iq_q4_opt3": "30日", "iq_q4_opt4": "31日",
        "iq_q5": "意味に基づいて、他の単語とは無関係な単語はどれですか？", "iq_q5_opt1": "幸福", "iq_q5_opt2": "喜び", "iq_q5_opt3": "悲しみ", "iq_q5_opt4": "楽しみ",
        "iq_q6": "次の空白に入る数字は何ですか？ 2, 4, 8, 16, ?", "iq_q6_opt1": "24", "iq_q6_opt2": "32", "iq_q6_opt3": "48", "iq_q6_opt4": "64",
        "iq_result_title": "推定IQは...",
        "iq_result_disclaimer": "これは簡単なテスト結果です。正確なIQ測定については専門家にご相談ください。",
        "retake_button": "再テスト"
    },
    "zh": {
        "site_title": "MBTI & IQ 测试",
        "nav_home": "主页",
        "nav_mbti": "MBTI 测试",
        "nav_iq": "IQ 测试",
        "nav_about": "关于我们",
        "home_title": "了解自己的时间：MBTI & IQ 测试",
        "home_subtitle": "了解自己，发现潜力！",
        "home_paragraph1": "本网站旨在让您免费探索自己的性格类型和智商。MBTI（Myers-Briggs Type Indicator）根据个人偏好将16种性格类型进行分类，帮助您更好地了解自己，而IQ（智商）测试则通过测量认知能力和解决问题的能力来识别智力优势。",
        "home_paragraph2": "我们的测试设计简单有趣，将帮助您更深入地了解自己，并为个人成长提供见解。我们为韩国人和外国人提供有价值的内容，支持您探索好奇心并发现新自我的旅程。",
        "start_mbti": "开始 MBTI 测试",
        "start_iq": "开始 IQ 测试",
        "mbti_section_title": "MBTI 性格类型测试",
        "mbti_section_description": "你是什么样的人？通过有趣的问题找出你的性格偏好。",
        "iq_section_title": "IQ 测试",
        "iq_section_description": "检查你的智商！准备了各种旨在评估你的逻辑、推理和解决问题能力的问题。",
        "about_section_title": "关于我们",
        "about_paragraph1": "我们的MBTI＆IQ测试网站旨在帮助用户更好地了解自己并促进个人成长。我们旨在通过提供简单易懂的MBTI性格类型和IQ分数，成为您自我发现之旅的伙伴。",
        "about_paragraph2": "所有测试均免费提供，我们努力提供有趣和教育性的体验。我们随时欢迎您的反馈，并将不断发展以提供更好的服务。",
        "about_contact_prompt": "如果您有任何问题，请通过以下表格联系我们。",
        "form_name_label": "姓名：",
        "form_email_label": "电子邮件：",
        "form_message_label": "消息：",
        "form_submit_button": "发送查询",
        "footer_copyright": "&copy; 2026 MBTI & IQ测试. 保留所有权利。",
        "footer_privacy": "隐私政策",
        "footer_terms": "服务条款",
        "alert_not_implemented": "页面（尚未实现）",
        // MBTI Descriptions (Google Translated - Simplified Chinese)
        "ISTJ_desc": "ISTJ（物流师）：实际、注重事实的个体，其可靠性毋庸置疑。他们安静、认真，通过细致和可靠获得成功，重视传统和忠诚。",
        "ISFJ_desc": "ISFJ（守护者）：非常敬业、温暖的保护者，随时准备好保护他们所爱的人。他们安静、友善、负责任、认真，忠实而坚定地履行自己的义务。",
        "INFJ_desc": "INFJ（倡导者）：安静而神秘，却又极具启发性和不懈的理想主义者。他们寻求思想、人际关系和物质财产中的意义和联系，希望了解人们的动机，并对他人有深刻的洞察力。",
        "INTJ_desc": "INTJ（建筑师）：富有想象力、战略性的思想家，对一切都有计划。他们拥有独创的思维，并具有实施其想法和实现其目标的强大动力。他们能迅速发现外部事件中的模式，并发展出长期的解释性视角。",
        "ISTP_desc": "ISTP（鉴赏家）：大胆而实用的实验者，各种工具的掌握者。他们宽容而灵活，在问题出现之前是安静的观察者，然后迅速采取行动寻找可行的解决方案。",
        "ISFP_desc": "ISFP（冒险家）：灵活而迷人的艺术家，随时准备探索和体验新事物。他们安静、友善、敏感、善良，享受当下和周围发生的一切。",
        "INFP_desc": "INFP（调停者）：诗意、善良、利他主义者，总是渴望帮助崇高的事业。他们是理想主义者，忠于自己的价值观和对自己重要的人，希望过上与自己的价值观一致的生活。",
        "INTP_desc": "INTP（逻辑学家）：具有永不满足的求知欲的创新发明家。他们试图为自己感兴趣的一切事物发展出逻辑解释，他们是理论化和抽象的，对思想的兴趣超过了社交互动。",
        "ESTP_desc": "ESTP（创业家）：聪明、精力充沛、洞察力极强的人，真正享受生活在边缘。他们灵活、宽容，采取务实的方法，专注于即时结果。",
        "ESFP_desc": "ESFP（表演者）：自发、充满活力、热情洋溢的人——与他们在一起永远不会无聊。他们外向、友善、乐于接受，是生活、人和物质享受的热爱者。",
        "ENFP_desc": "ENFP（竞选者）：热情、富有创造力、善于社交的自由精神，总能找到微笑的理由。他们热情洋溢、富有想象力，将生活视为充满可能，并能迅速将事件和信息联系起来。",
        "ENTP_desc": "ENTP（辩论家）：聪明、好奇的思想家，无法抗拒智力挑战。他们反应迅速、机智、富有启发性、直言不讳，擅长解决新颖和具有挑战性的问题。",
        "ESTJ_desc": "ESTJ（高管）：杰出的管理者，在管理事务或人员方面无人能及。他们务实、现实、实事求是、果断，并迅速实施决策。",
        "ESFJ_desc": "ESFJ（执政官）：异常关心、善于社交、受欢迎的人，总是渴望帮助。他们热情、认真、合作，希望环境和谐，并决心为之努力。",
        "ENFJ_desc": "ENFJ（主人公）：魅力非凡、鼓舞人心的领导者，能够迷住听众。他们热情、富有同情心、反应迅速、负责任，对他人情感、需求和动机非常敏感。",
        "ENTJ_desc": "ENTJ（指挥官）：大胆、富有想象力、意志坚强的领导者，总能找到出路或创造出路。他们坦率、果断，乐于承担领导责任，能迅速识别不合逻辑和低效的程序，并开发和实施全面的解决方案。",
        // MBTI Questions (Google Translated - Simplified Chinese)
        "mbti_q1": "你喜欢与新朋友交往吗？", "mbti_q1_opt1": "是的，我喜欢。", "mbti_q1_opt2": "不，我更喜欢安静地度过。",
        "mbti_q2": "派对或社交聚会后，你是否感到精力耗尽？", "mbti_q2_opt1": "是的，我感到耗尽。", "mbti_q2_opt2": "不，我反而从中获得能量。",
        "mbti_q3": "你关注现实和具体的事实吗？", "mbti_q3_opt1": "是的，我重视现实。", "mbti_q3_opt2": "不，我对未来的可能性和抽象概念更感兴趣。",
        "mbti_q4": "你喜欢探索新想法还是坚持久经考验的方法？", "mbti_q4_opt1": "我探索新想法。", "mbti_q4_opt2": "我更喜欢久经考验的方法。",
        "mbti_q5": "在做决定时，你是否优先考虑逻辑和客观分析？", "mbti_q5_opt1": "是的，我倾向于逻辑判断。", "mbti_q5_opt2": "不，我考虑他人的感受和情况。",
        "mbti_q6": "你是否容易与他人的感受产生共鸣和理解？", "mbti_q6_opt1": "是的，我很容易产生共鸣。", "mbti_q6_opt2": "不，我客观地看待情况。",
        "mbti_q7": "你喜欢有计划、有条理地处理任务吗？", "mbti_q7_opt1": "是的，我喜欢计划。", "mbti_q7_opt2": "不，我更喜欢灵活和即兴。",
        "mbti_q8": "当截止日期临近时，你是否更容易集中注意力？", "mbti_q8_opt1": "是的，我更容易集中。", "mbti_q8_opt2": "不，我提前计划并完成任务。",
        "mbti_result_title": "你的MBTI类型是...",
        "mbti_result_disclaimer": "请在专业的MBTI网站上查找更详细的信息！",
        // IQ Questions (Google Translated - Simplified Chinese)
        "iq_q1": "数列中的下一个数字是什么？ 1, 3, 6, 10, 15, ?", "iq_q1_opt1": "20", "iq_q1_opt2": "21", "iq_q1_opt3": "22", "iq_q1_opt4": "23",
        "iq_q2": "如果钢比铸铁坚固，那么铸铁与纸相比如何？", "iq_q2_opt1": "更坚固", "iq_q2_opt2": "更弱", "iq_q2_opt3": "相同", "iq_q2_opt4": "无关",
        "iq_q3": "以下哪个与其他三个不同？（基于对象）", "iq_q3_opt1": "苹果", "iq_q3_opt2": "香蕉", "iq_q3_opt3": "土豆", "iq_q3_opt4": "橙子",
        "iq_q4": "有些月份有28天，有些有30天。所有月份都有多少天？", "iq_q4_opt1": "28天", "iq_q4_opt2": "29天", "iq_q4_opt3": "30天", "iq_q4_opt4": "31天",
        "iq_q5": "根据含义，以下哪个词与其他的无关？", "iq_q5_opt1": "幸福", "iq_q5_opt2": "喜悦", "iq_q5_opt3": "悲伤", "iq_q5_opt4": "乐趣",
        "iq_q6": "空白处的下一个数字是什么？ 2, 4, 8, 16, ?", "iq_q6_opt1": "24", "iq_q6_opt2": "32", "iq_q6_opt3": "48", "iq_q6_opt4": "64",
        "iq_result_title": "你的估计智商是...",
        "iq_result_disclaimer": "这是一个简单的测试结果；请咨询专家以获取准确的智商测量。",
        "retake_button": "重新测试"
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
        alert(translations[currentLang].footer_privacy + translations[currentLang].alert_not_implemented);
        console.log('Navigate to Privacy Policy');
    });
    footerTermsLink.addEventListener('click', (e) => {
        e.preventDefault();
        alert(translations[currentLang].footer_terms + translations[currentLang].alert_not_implemented);
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