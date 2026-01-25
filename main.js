// main.js

// --- Translation Data ---
const translations = {
    "ko": {
        "seo_title": "2026 무료 MBTI 테스트 및 정확한 IQ 지능 검사 - 내 성격 유형 알아보기",
        "seo_description": "가장 정확한 무료 MBTI 테스트와 IQ 테스트를 경험해보세요. 16가지 성격 유형 분석과 인지 능력 측정을 통해 나를 더 깊이 이해할 수 있습니다.",
        "site_title": "MBTI & IQ 테스트",
        "nav_home": "홈",
        "nav_mbti": "MBTI 테스트",
        "nav_iq": "IQ 테스트",
        "nav_about": "사이트 소개",
        "home_title": "나를 알아가는 시간: MBTI & IQ 테스트",
        "home_subtitle": "자신을 이해하고 잠재력을 발견하세요!",
        "home_paragraph1_seo": "MBTI (Myers-Briggs Type Indicator)와 IQ (Intelligence Quotient) 테스트는 자기 이해와 인지 능력 향상을 위한 강력한 도구입니다. 이 웹사이트에서는 최신 심리 측정 이론을 바탕으로 설계된 무료 MBTI 성격 유형 테스트와 정확한 IQ 지능 검사를 제공합니다. 당신의 성격 유형을 파악하고, 논리력, 추론력, 문제 해결 능력을 측정하여 당신의 숨겨진 잠재력을 발견하세요. 직업 선택, 대인 관계 개선, 학습 전략 수립 등 다양한 분야에서 유용한 통찰력을 얻을 수 있습니다.",
        "home_paragraph2_seo": "MBTI 16가지 성격 유형은 개인의 선호도를 명확히 보여주며, 각 유형별 특징과 강점, 약점을 이해하는 데 도움을 줍니다. INFJ, ENFP, INTJ, ISTP 등 다양한 유형의 심층 분석을 통해 당신과 타인의 차이점을 존중하고 효과적으로 소통하는 방법을 배울 수 있습니다. 또한, IQ 테스트는 단순한 점수를 넘어선 인지 능력의 다양한 측면을 평가하며, 당신의 지적 강점과 개선이 필요한 영역을 제시합니다. 모든 테스트는 최적의 신뢰도와 타당도를 확보하기 위해 지속적으로 검토 및 보완됩니다。",
        "home_paragraph3_seo": "저희 사이트는 한국인뿐만 아니라 전 세계 사용자들이 자신의 심리적 특성과 지적 능력을 탐색할 수 있도록 다국어 지원을 제공합니다. 지금 바로 무료 테스트를 시작하고, 나 자신을 더 깊이 이해하는 여정을 시작해보세요!",
        "start_mbti": "MBTI 테스트 시작",
        "start_iq": "IQ 테스트 시작",
        "mbti_info_title": "MBTI 성격 유형, 왜 중요할까요?",
        "mbti_info_content1": "MBTI는 개인이 세상을 인식하고 결정을 내리는 방식에 대한 선호도를 보여주는 지표입니다. 외향-내향(E-I), 감각-직관(S-N), 사고-감정(T-F), 판단-인식(J-P)의 네 가지 이분법을 통해 총 16가지 성격 유형으로 분류됩니다. 각 유형은 고유한 특성과 강점, 그리고 발전이 필요한 영역을 가지고 있습니다. MBTI를 이해하는 것은 자기 이해를 돕고, 타인과의 관계에서 발생할 수 있는 오해를 줄이며, 팀워크와 리더십 능력을 향상시키는 데 기여합니다. 특히 직업 선택이나 학업 경로를 결정할 때 자신의 강점과 흥미를 고려하는 데 유용한 가이드가 될 수 있습니다.",
        "mbti_info_content2": "예를 들어, INTJ 유형은 전략적 사고와 독립적인 경향이 강하며, ENFP 유형은 열정적이고 창의적인 아이디어를 선호합니다. 자신의 유형을 파악하면 어떤 환경에서 가장 큰 만족감과 성과를 얻을 수 있는지, 어떤 유형의 사람들과 잘 어울리는지 등에 대한 통찰을 얻을 수 있습니다. 하지만 MBTI는 성격을 규정하는 절대적인 척도가 아니라 자기 이해를 위한 도구 중 하나임을 기억하는 것이 중요합니다.",
        "iq_info_title": "IQ 테스트, 지능 지수의 의미",
        "iq_info_content1": "IQ (Intelligence Quotient) 테스트는 인간의 인지 능력을 측정하는 표준화된 도구입니다. 이는 주로 논리적 추론, 문제 해결 능력, 기억력, 언어 능력, 공간 지각 능력 등 다양한 지적 요소를 평가합니다. IQ 점수는 단순히 숫자에 불과한 것이 아니라, 개인이 정보를 얼마나 효율적으로 처리하고 새로운 상황에 얼마나 잘 적응하는지를 나타내는 지표로 활용될 수 있습니다.",
        "iq_info_content2": "하지만 IQ 점수는 지능의 모든 측면을 측정하지 못하며, 후천적인 교육과 환경, 심지어 검사 당일의 컨디션이나 집중도에 따라서도 달라질 수 있습니다. 교육은 IQ 점수를 일정 기간마다 상승시키거나 최소한 IQ 테스트 수행 능력을 향상시킨다는 연구 결과도 있습니다. 따라서 IQ 검사는 절대적인 선천적 지능을 측정하는 것이 아니며, 지능 지수는 평균치인 100에서 멀어질수록 신뢰도가 떨어진다는 비판도 존재합니다。",
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
        "mbti_type_not_found": "MBTI 유형을 찾을 수 없습니다.",
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
        "ENTJ_desc": "대담한 통솔자 (The Commander): 대담하고 상상력이 풍부하며 강한 의지를 가진 리더로, 항상 길을 찾거나 만듭니다. 솔직하고 단호하며 쉽게 리더십을 발휘하고, 비논리적이고 비효율적인 절차를 신속하게 식별하여 포괄적인 해결책을 개발하고 실행합니다。",
        // MBTI Questions
        "mbti_q1": "새로운 사람들과 어울리는 것을 즐기시나요?", "mbti_q1_opt1": "네, 즐깁니다.", "mbti_q1_opt2": "아니요, 조용히 보내는 것을 선호합니다.",
        "mbti_q2": "파티나 모임이 끝나면 에너지가 고갈되는 느낌인가요?", "mbti_q2_opt1": "네, 그렇습니다.", "mbti_q2_opt2": "아니요, 오히려 에너지를 얻습니다.",
        "mbti_q3": "현실적이고 구체적인 사실에 집중하나요?", "mbti_q3_opt1": "네, 현실적인 것을 중요하게 생각합니다.", "mbti_q3_opt2": "아니요, 미래 가능성과 추상적인 아이디어에 관심이 많습니다.",
        "mbti_q4": "새로운 아이디어를 탐색하는 것을 좋아하나요, 아니면 검증된 방법에 머무는 것을 선호하나요?", "mbti_q4_opt1": "새로운 아이디어를 탐색합니다.", "mbti_q4_opt2": "검증된 방법을 선호합니다.",
        "mbti_q5": "결정을 내릴 때 논리와 객관적인 분석을 중요하게 생각하나요?", "mbti_q5_opt1": "네, 논리적인 판단을 선호합니다.", "mbti_q5_opt2": "아니요, 다른 사람들의 감정과 상황을 고려합니다.",
        "mbti_q6": "다른 사람의 감정을 공감하고 이해하는 것이 쉬운가요?", "mbti_q6_opt1": "네, 쉽게 공감합니다.", "mbti_q6_opt2": "아니요, 객관적으로 상황을 봅니다.",
        "mbti_q7": "계획을 세우고 체계적으로 일을 처리하는 것을 좋아하나요?", "mbti_q7_opt1": "네, 계획적인 것을 좋아합니다.", "mbti_q7_opt2": "아니요, 유연하고 즉흥적인 것을 선호합니다.",
        "mbti_q8": "마감 기한이 임박했을 때 집중력이 높아지는 편인가요?", "mbti_q8_opt1": "네, 그렇습니다.", "mbti_q8_opt2": "아니요, 미리 계획하고 완수합니다.",
        "mbti_q9": "새로운 환경에 적응하는 것을 즐기나요?", "mbti_q9_opt1": "네, 즐깁니다.", "mbti_q9_opt2": "아니요, 익숙한 것을 선호합니다.",
        "mbti_q10": "단체 활동보다는 혼자 하는 작업을 선호하나요?", "mbti_q10_opt1": "네, 선호합니다.", "mbti_q10_opt2": "아니요, 함께 하는 것을 좋아합니다.",
        "mbti_q11": "미래의 가능성과 아이디어에 더 집중하나요?", "mbti_q11_opt1": "네, 그렇습니다.", "mbti_q11_opt2": "아니요, 현재의 사실에 집중합니다.",
        "mbti_q12": "현실적인 문제 해결에 더 흥미를 느끼나요?", "mbti_q12_opt1": "네, 흥미를 느낍니다.", "mbti_q12_opt2": "아니요, 이론적인 것에 관심이 많습니다.",
        "mbti_q13": "결정을 내릴 때 개인적인 가치와 조화를 중요하게 생각하나요?", "mbti_q13_opt1": "네, 중요하게 생각합니다.", "mbti_q13_opt2": "아니요, 객관적인 기준을 따릅니다.",
        "mbti_q14": "다른 사람의 입장에서 생각하는 것이 쉬운가요?", "mbti_q14_opt1": "네, 쉽습니다.", "mbti_q14_opt2": "아니요, 어려운 편입니다.",
        "mbti_q15": "일정을 미리 세우고 그에 따라 움직이는 것을 좋아하나요?", "mbti_q15_opt1": "네, 좋아합니다.", "mbti_q15_opt2": "아니요, 상황에 맞춰 유연하게 대처합니다.",
        "mbti_q16": "새로운 정보를 얻으면 바로 행동하기보다 충분히 생각하고 결정하나요?", "mbti_q16_opt1": "네, 그렇습니다.", "mbti_q16_opt2": "아니요, 즉각적인 행동을 선호합니다.",
        "mbti_q17": "갈등 상황에서 해결책을 찾기 위해 객관적인 분석을 먼저 시도하나요?", "mbti_q17_opt1": "네, 그렇습니다.", "mbti_q17_opt2": "아니요, 관계 개선을 우선합니다.",
        "mbti_q18": "다수의 의견보다는 소수의 의견이라도 설득력 있다면 따르는 편인가요?", "mbti_q18_opt1": "네, 따릅니다.", "mbti_q18_opt2": "아니요, 다수의 의견을 따릅니다.",
        "mbti_q19": "복잡한 문제에 직면했을 때, 큰 그림을 먼저 보려고 노력하나요?", "mbti_q19_opt1": "네, 노력합니다.", "mbti_q19_opt2": "아니요, 세부 사항부터 살핍니다.",
        "mbti_q20": "일상생활에서 새로운 경험을 추구하는 편인가요?", "mbti_q20_opt1": "네, 그렇습니다.", "mbti_q20_opt2": "아니요, 안정적인 것을 선호합니다.",
        "mbti_q21": "새로운 아이디어를 내는 것을 즐기시나요?", "mbti_q21_opt1": "네, 즐깁니다.", "mbti_q21_opt2": "아니요, 기존 아이디어를 발전시키는 것을 선호합니다。",
        "mbti_q22": "다른 사람의 감정을 헤아리는 데 능숙한 편인가요?", "mbti_q22_opt1": "네, 능숙합니다.", "mbti_q22_opt2": "아니요, 객관적인 판단에 더 집중합니다。",
        "mbti_q23": "일정을 미리 정해두는 것이 마음 편한가요?", "mbti_q23_opt1": "네, 그렇습니다.", "mbti_q23_opt2": "아니요, 유동적인 것이 좋습니다。",
        "mbti_q24": "문제 해결 시 논리적인 접근 방식을 주로 사용하나요?", "mbti_q24_opt1": "네, 주로 사용합니다.", "mbti_q24_opt2": "아니요, 직관이나 경험을 더 믿습니다。",
        "mbti_q25": "자신의 감정을 쉽게 표현하는 편인가요?", "mbti_q25_opt1": "네, 그렇습니다.", "mbti_q25_opt2": "아니요, 감정을 잘 드러내지 않습니다。",
        "mbti_q26": "새로운 사람들과의 만남에서 에너지를 얻는 편인가요?", "mbti_q26_opt1": "네, 얻습니다.", "mbti_q26_opt2": "아니요, 피곤함을 느낍니다。",
        "mbti_q27": "일을 시작하기 전에 완벽하게 계획을 세워야 마음이 놓이나요?", "mbti_q27_opt1": "네, 그렇습니다.", "mbti_q27_opt2": "아니요, 유연하게 시작합니다。",
        "mbti_q28": "복잡한 정보보다 구체적이고 사실적인 정보에 더 끌리나요?", "mbti_q28_opt1": "네, 끌립니다.", "mbti_q28_opt2": "아니요, 추상적인 정보에 더 흥미를 느낍니다。",
        "mbti_q29": "다른 사람들의 필요와 감정을 자신의 것보다 우선시하는 경향이 있나요?", "mbti_q29_opt1": "네, 그렇습니다.", "mbti_q29_opt2": "아니요, 자신의 필요를 우선합니다。",
        "mbti_q30": "결정을 내릴 때, 모든 가능성을 열어두고 마지막까지 탐색하는 편인가요?", "mbti_q30_opt1": "네, 그렇습니다.", "mbti_q30_opt2": "아니요, 빨리 결정을 내리는 편입니다。",

        "mbti_result_title": "당신의 MBTI 유형은...",
        "mbti_result_disclaimer": "더 자세한 정보는 MBTI 전문 사이트에서 확인해보세요!",

        // IQ Questions
        "iq_q1": "다음 숫자 배열의 다음 숫자는 무엇일까요? 1, 3, 6, 10, 15, ?", "iq_q1_opt1": "20", "iq_q1_opt2": "21", "iq_q1_opt3": "22", "iq_q1_opt4": "23",
        "iq_q2": "강철이 무쇠보다 강하다면, 무쇠는 종이보다 어떤가요?", "iq_q2_opt1": "강하다", "iq_q2_opt2": "약하다", "iq_q2_opt3": "같다", "iq_q2_opt4": "관련 없다",
        "iq_q3": "다음 중 나머지 셋과 다른 하나는? (사물 기준)", "iq_q3_opt1": "사과", "iq_q3_opt2": "바나나", "iq_q3_opt3": "감자", "iq_q3_opt4": "오렌지",
        "iq_q4": "어떤 달은 28일까지 있고, 또 어떤 달은 30일까지 있습니다. 모든 달은 며칠까지 있나요?", "iq_q4_opt1": "28일", "iq_q4_opt2": "29일", "iq_q4_opt3": "30일", "iq_q4_opt4": "31일",
        "iq_q5": "다음 단어들 중 관련 없는 하나는? (의미 기준)", "iq_q5_opt1": "행복", "iq_q5_opt2": "기쁨", "iq_q5_opt3": "슬픔", "iq_q5_opt4": "즐거움",
        "iq_q6": "다음 빈칸에 들어갈 숫자는? 2, 4, 8, 16, ?", "iq_q6_opt1": "24", "iq_q6_opt2": "32", "iq_q6_opt3": "48", "iq_q6_opt4": "64",
        "iq_q7": "A는 B보다 키가 크고, C는 A보다 키가 작습니다. B와 C 중 누가 더 큰가요?", "iq_q7_opt1": "B", "iq_q7_opt2": "C", "iq_q7_opt3": "같다", "iq_q7_opt4": "알 수 없다",
        "iq_q8": "빨간색과 파란색을 섞으면 어떤 색이 되나요?", "iq_q8_opt1": "초록색", "iq_q8_opt2": "보라색", "iq_q8_opt3": "주황색", "iq_q8_opt4": "검은색",
        "iq_q9": "고양이가 '야옹'하고 짖고, 개가 '멍멍'하고 짖습니다. 새는 어떻게 짖을까요?", "iq_q9_opt1": "깍깍", "iq_q9_opt2": "짹짹", "iq_q9_opt3": "음메", "iq_q9_opt4": "찍찍",
        "iq_q10": "거울을 보며 머리를 빗고 있습니다. 거울 속 당신은 오른손으로 빗고 있습니다. 실제로는 어떤 손으로 빗고 있나요?", "iq_q10_opt1": "왼손", "iq_q10_opt2": "오른손", "iq_q10_opt3": "양손", "iq_q10_opt4": "알 수 없다",
        "iq_q11": "어떤 수가 5로 나누어 떨어지고 3으로 나누어 떨어집니다. 이 수는 다음 중 무엇일까요?", "iq_q11_opt1": "10", "iq_q11_opt2": "12", "iq_q11_opt3": "15", "iq_q11_opt4": "20",
        "iq_q12": "모든 새는 날 수 있습니다. 참새는 새입니다. 그러므로 참새는 날 수 있습니다. 이 추론은 무엇인가요?", "iq_q12_opt1": "연역법", "iq_q12_opt2": "귀납법", "iq_q12_opt3": "유추", "iq_q12_opt4": "오류",
        "iq_q13": "어떤 그림에 3개의 삼각형과 2개의 사각형이 있습니다. 총 몇 개의 도형이 있나요?", "iq_q13_opt1": "2", "iq_q13_opt2": "3", "iq_q13_opt3": "5", "iq_q13_opt4": "6",
        "iq_q14": "만약 어제는 내일의 어제였다면, 오늘은 무슨 요일일까요?", "iq_q14_opt1": "월요일", "iq_q14_opt2": "화요일", "iq_q14_opt3": "수요일", "iq_q14_opt4": "목요일",
        "iq_q15": "물고기는 물속에서 삽니다. 다음 중 물고기가 아닌 것은 무엇일까요?", "iq_q15_opt1": "고래", "iq_q15_opt2": "상어", "iq_q15_opt3": "문어", "iq_q15_opt4": "개구리",
        "iq_q16": "어떤 건물에 100개의 방이 있습니다. 각 방에는 10개의 문이 있습니다. 총 몇 개의 문이 있을까요?", "iq_q16_opt1": "10", "iq_q16_opt2": "100", "iq_q16_opt3": "1000", "iq_q16_opt4": "10000",
        "iq_q17": "항상 당신 앞에 있지만 볼 수 없는 것은 무엇일까요?", "iq_q17_opt1": "과거", "iq_q17_opt2": "미래", "iq_q17_opt3": "어둠", "iq_q17_opt4": "꿈",
        "iq_q18": "다음 중 가장 작은 것은 무엇일까요?", "iq_q18_opt1": "행성", "iq_q18_opt2": "달", "iq_q18_opt3": "별", "iq_q18_opt4": "은하",
        "iq_q19": "어떤 집에 4개의 벽이 있고, 각 벽은 남쪽을 향하고 있습니다. 곰이 이 집으로 들어오면 곰의 색깔은 무엇일까요?", "iq_q19_opt1": "갈색", "iq_q19_opt2": "흰색", "iq_q19_opt3": "검은색", "iq_q19_opt4": "회색",
        "iq_q20": "나는 항상 배고프고, 나를 먹여 살리는 것은 무엇이든 나를 약하게 만듭니다. 나는 무엇일까요?", "iq_q20_opt1": "불", "iq_q20_opt2": "물", "iq_q20_opt3": "흙", "iq_q20_opt4": "공기",
        "iq_q21": "하나의 바구니에 사과 5개가 있습니다. 당신은 3개를 가져갔습니다. 당신에게 남은 사과는 몇 개인가요?", "iq_q21_opt1": "2개", "iq_q21_opt2": "3개", "iq_q21_opt3": "5개", "iq_q21_opt4": "8개",
        "iq_q22": "나는 말은 할 수 있지만 입은 없고, 귀는 있지만 듣지 못합니다. 나는 무엇일까요?", "iq_q22_opt1": "책", "iq_q22_opt2": "전화", "iq_q22_opt3": "강", "iq_q22_opt4": "바람",
        "iq_q23": "나를 만들면 나를 파괴하고 싶어 합니다. 나는 무엇일까요?", "iq_q23_opt1": "다리", "iq_q23_opt2": "비밀", "iq_q23_opt3": "문제", "iq_q23_opt4": "거짓말",
        "iq_q24": "나는 항상 높이 올라가지만 절대 움직이지 않습니다. 나는 무엇일까요?", "iq_q24_opt1": "구름", "iq_q24_opt2": "나무", "iq_q24_opt3": "산", "iq_q24_opt4": "탑",
        "iq_q25": "나는 앞과 뒤가 있지만, 위나 아래는 없습니다. 나는 무엇일까요?", "iq_q25_opt1": "책", "iq_q25_opt2": "카드", "iq_q25_opt3": "동전", "iq_q25_opt4": "강",
        "iq_q26": "나는 태어나자마자 죽지만, 곧 다시 살아납니다. 나는 무엇일까요?", "iq_q26_opt1": "눈", "iq_q26_opt2": "불꽃", "iq_q26_opt3": "하루", "iq_q26_opt4": "파도",
        "iq_q27": "나는 먹지 않고 살지만, 마시면 죽습니다. 나는 무엇일까요?", "iq_q27_opt1": "불", "iq_q27_opt2": "모래", "iq_q27_opt3": "돌", "iq_q27_opt4": "구름",
        "iq_q28": "밤에 나타나지만 낮에는 사라지는 것은 무엇일까요?", "iq_q28_opt1": "달", "iq_q28_opt2": "별", "iq_q28_opt3": "어둠", "iq_q28_opt4": "꿈",
        "iq_q29": "나는 항상 움직이지만 항상 같은 곳에 머뭅니다. 나는 무엇일까요?", "iq_q29_opt1": "시계", "iq_q29_opt2": "강", "iq_q29_opt3": "바퀴", "iq_q29_opt4": "시간",
        "iq_q30": "나는 많은 것을 가지고 있지만 아무것도 소유하지 않습니다. 나는 무엇일까요?", "iq_q30_opt1": "은행", "iq_q30_opt2": "도서관", "iq_q30_opt3": "창고", "iq_q30_opt4": "지도",

        "iq_result_title": "당신의 예상 IQ는...",
        "iq_result_disclaimer": "이것은 간단한 테스트 결과이며, 정확한 IQ 측정은 전문가에게 문의하십시오.",
        "retake_button": "다시 테스트하기"
    },
    "en": {
        "seo_title": "2026 Free MBTI Test & Accurate IQ Intelligence Test - Discover Your Personality Type",
        "seo_description": "Experience the most accurate free MBTI test and IQ test. Understand yourself more deeply through 16 personality type analyses and cognitive ability measurements.",
        "site_title": "MBTI & IQ Test",
        "nav_home": "Home",
        "nav_mbti": "MBTI Test",
        "nav_iq": "IQ Test",
        "nav_about": "About Us",
        "home_title": "Time to Know Yourself: MBTI & IQ Test",
        "home_subtitle": "Understand yourself and discover your potential!",
        "home_paragraph1_seo": "MBTI (Myers-Briggs Type Indicator) and IQ (Intelligence Quotient) tests are powerful tools for self-understanding and enhancing cognitive abilities. This website offers free MBTI personality type tests and accurate IQ intelligence tests designed based on the latest psychometric theories. Discover your personality type, measure your logical reasoning, inferential skills, and problem-solving abilities to uncover your hidden potential. Gain valuable insights for career choices, improving interpersonal relationships, and developing learning strategies.",
        "home_paragraph2_seo": "The 16 MBTI personality types clearly show individual preferences, helping you understand the characteristics, strengths, and weaknesses of each type. Through in-depth analysis of various types like INFJ, ENFP, INTJ, and ISTP, you can learn to respect differences between yourself and others and communicate effectively. Furthermore, IQ tests assess various aspects of cognitive ability beyond a mere score, suggesting your intellectual strengths and areas for improvement. All tests are continuously reviewed and supplemented to ensure optimal reliability and validity.",
        "home_paragraph3_seo": "Our site provides multilingual support, allowing users worldwide, not just Koreans, to explore their psychological characteristics and intellectual abilities. Start your free test now and embark on a journey to understand yourself more deeply!",
        "start_mbti": "Start MBTI Test",
        "start_iq": "Start IQ Test",
        "mbti_info_title": "Why is MBTI Personality Type Important?",
        "mbti_info_content1": "MBTI is an indicator that shows an individual's preference in perceiving the world and making decisions. It classifies 16 personality types through four dichotomous preference indicators: Extraversion-Introversion (E-I), Sensing-Intuition (S-N), Thinking-Feeling (T-F), and Judging-Perceiving (J-P). Each type has unique characteristics, strengths, and areas for development. Understanding MBTI helps with self-understanding, reduces misunderstandings in relationships with others, and contributes to improving teamwork and leadership skills. It can serve as a useful guide when choosing a career or academic path, considering one's strengths and interests.",
        "mbti_info_content2": "For example, INTJ types tend to be strong in strategic thinking and independence, while ENFP types prefer passionate and creative ideas. Identifying your type can provide insights into what environments offer the greatest satisfaction and performance, and what types of people you get along with best. However, it's important to remember that MBTI is one tool for self-understanding, not an absolute measure that defines personality.",
        "iq_info_title": "IQ Test: The Meaning of the Intelligence Quotient",
        "iq_info_content1": "The IQ (Intelligence Quotient) test is a standardized tool designed to measure a part of human intelligence. It primarily assesses various intellectual elements such as logical reasoning, problem-solving ability, memory, language skills, and spatial perception. An IQ score is not merely a number but can be used as an indicator of how efficiently an individual processes information and how well they adapt to new situations.",
        "iq_info_content2": "However, IQ tests do not measure all aspects of intelligence (e.g., emotional intelligence, creative intelligence), and an IQ score is not the sole determinant of an individual's success or happiness. Our site's IQ test offers a fun and challenging opportunity to gauge your current cognitive abilities. Through the test results, you can understand your strengths and be motivated to improve your thinking and problem-solving skills.",
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
        "mbti_q9": "Do you enjoy adapting to new environments?", "mbti_q9_opt1": "Yes, I enjoy it.", "mbti_q9_opt2": "No, I prefer familiar things.",
        "mbti_q10": "Do you prefer working alone over group activities?", "mbti_q10_opt1": "Yes, I prefer it.", "mbti_q10_opt2": "No, I like working with others.",
        "mbti_q11": "Do you focus more on future possibilities and ideas?", "mbti_q11_opt1": "Yes, I do.", "mbti_q11_opt2": "No, I focus on present facts.",
        "mbti_q12": "Are you more interested in practical problem-solving?", "mbti_q12_opt1": "Yes, I am.", "mbti_q12_opt2": "No, I'm more interested in theoretical matters.",
        "mbti_q13": "When making decisions, do you prioritize personal values and harmony?", "mbti_q13_opt1": "Yes, I do.", "mbti_q13_opt2": "No, I follow objective criteria.",
        "mbti_q14": "Is it easy for you to put yourself in others' shoes?", "mbti_q14_opt1": "Yes, it is easy.", "mbti_q14_opt2": "No, it's difficult.",
        "mbti_q15": "Do you like to set a schedule in advance and stick to it?", "mbti_q15_opt1": "Yes, I do.", "mbti_q15_opt2": "No, I adapt flexibly to situations.",
        "mbti_q16": "When you get new information, do you think thoroughly before acting?", "mbti_q16_opt1": "Yes, I do.", "mbti_q16_opt2": "No, I prefer immediate action.",
        "mbti_q17": "In conflict situations, do you first try objective analysis to find a solution?", "mbti_q17_opt1": "Yes, I do.", "mbti_q17_opt2": "No, I prioritize improving relationships.",
        "mbti_q18": "Do you tend to follow a minority opinion if it's convincing, rather than the majority?", "mbti_q18_opt1": "Yes, I do.", "mbti_q18_opt2": "No, I follow the majority opinion.",
        "mbti_q19": "When faced with a complex problem, do you try to see the big picture first?", "mbti_q19_opt1": "Yes, I do.", "mbti_q19_opt2": "No, I examine the details first.",
        "mbti_q20": "Do you seek new experiences in daily life?", "mbti_q20_opt1": "Yes, I do.", "mbti_q20_opt2": "No, I prefer stability.",
        "mbti_q21": "Do you enjoy coming up with new ideas?", "mbti_q21_opt1": "Yes, I enjoy it.", "mbti_q21_opt2": "No, I prefer developing existing ideas.",
        "mbti_q22": "Are you skilled at understanding other people's emotions?", "mbti_q22_opt1": "Yes, I am skilled.", "mbti_q22_opt2": "No, I focus more on objective judgment.",
        "mbti_q23": "Does it make you comfortable to set schedules in advance?", "mbti_q23_opt1": "Yes, it does.", "mbti_q23_opt2": "No, I prefer flexibility.",
        "mbti_q24": "Do you primarily use a logical approach when solving problems?", "mbti_q24_opt1": "Yes, I primarily use it.", "mbti_q24_opt2": "No, I trust intuition or experience more.",
        "mbti_q25": "Are you apt to express your emotions easily?", "mbti_q25_opt1": "Yes, I am.", "mbti_q25_opt2": "No, I don't easily reveal my emotions.",
        "mbti_q26": "Do you gain energy from meeting new people?", "mbti_q26_opt1": "Yes, I do.", "mbti_q26_opt2": "No, I feel tired.",
        "mbti_q27": "Do you feel relieved only after making a perfect plan before starting work?", "mbti_q27_opt1": "Yes, I do.", "mbti_q27_opt2": "No, I start flexibly.",
        "mbti_q28": "Are you more attracted to concrete and factual information than complex information?", "mbti_q28_opt1": "Yes, I am.", "mbti_q28_opt2": "No, I'm more interested in abstract information.",
        "mbti_q29": "Do you tend to prioritize others' needs and feelings over your own?", "mbti_q29_opt1": "Yes, I do.", "mbti_q29_opt2": "No, I prioritize my own needs.",
        "mbti_q30": "When making decisions, do you keep all possibilities open and explore until the end?", "mbti_q30_opt1": "Yes, I do.", "mbti_q30_opt2": "No, I tend to make decisions quickly.",

        "mbti_result_title": "Your MBTI Type is...",
        "mbti_result_disclaimer": "Find more detailed information on a professional MBTI website!",

        // IQ Questions
        "iq_q1": "What is the next number in the sequence? 1, 3, 6, 10, 15, ?", "iq_q1_opt1": "20", "iq_q1_opt2": "21", "iq_q1_opt3": "22", "iq_q1_opt4": "23",
        "iq_q2": "If steel is stronger than cast iron, how is cast iron compared to paper?", "iq_q2_opt1": "Stronger", "iq_q2_opt2": "Weaker", "iq_q2_opt3": "Same", "iq_q2_opt4": "Irrelevant",
        "iq_q3": "Which one is different from the rest? (Based on objects)", "iq_q3_opt1": "Apple", "iq_q3_opt2": "Banana", "iq_q3_opt3": "Potato", "iq_q3_opt4": "Orange",
        "iq_q4": "Some months have 28 days, and some have 30. How many days do all months have?", "iq_q4_opt1": "28 days", "iq_q4_opt2": "29 days", "iq_q4_opt3": "30 days", "iq_q4_opt4": "31 days",
        "iq_q5": "Which word is unrelated to the others? (Based on meaning)", "iq_q5_opt1": "Happiness", "iq_q5_opt2": "Joy", "iq_q5_opt3": "Sadness", "iq_q5_opt4": "Pleasure",
        "iq_q6": "What is the next number in the blank? 2, 4, 8, 16, ?", "iq_q6_opt1": "24", "iq_q6_opt2": "32", "iq_q6_opt3": "48", "iq_q6_opt4": "64",
        "iq_q7": "A is taller than B, and C is shorter than A. Who is taller between B and C?", "iq_q7_opt1": "B", "iq_q7_opt2": "C", "iq_q7_opt3": "Same", "iq_q7_opt4": "Cannot be determined",
        "iq_q8": "What color do you get when you mix red and blue?", "iq_q8_opt1": "Green", "iq_q8_opt2": "Purple", "iq_q8_opt3": "Orange", "iq_q8_opt4": "Black",
        "iq_q9": "Cats meow and dogs bark. What sound do birds make?", "iq_q9_opt1": "Caw", "iq_q9_opt2": "Chirp", "iq_q9_opt3": "Moo", "iq_q9_opt4": "Squeak",
        "iq_q10": "You are brushing your hair while looking in a mirror. In the mirror, you are brushing with your right hand. What hand are you actually brushing with?", "iq_q10_opt1": "Left hand", "iq_q10_opt2": "Right hand", "iq_q10_opt3": "Both hands", "iq_q10_opt4": "Cannot be determined",
        "iq_q11": "A number is divisible by 5 and also by 3. Which of the following could be that number?", "iq_q11_opt1": "10", "iq_q11_opt2": "12", "iq_q11_opt3": "15", "iq_q11_opt4": "20",
        "iq_q12": "All birds can fly. A sparrow is a bird. Therefore, a sparrow can fly. What kind of reasoning is this?", "iq_q12_opt1": "Deductive", "iq_q12_opt2": "Inductive", "iq_q12_opt3": "Analogical", "iq_q12_opt4": "Fallacy",
        "iq_q13": "A picture has 3 triangles and 2 squares. How many shapes are there in total?", "iq_q13_opt1": "2", "iq_q13_opt2": "3", "iq_q13_opt3": "5", "iq_q13_opt4": "6",
        "iq_q14": "If yesterday was tomorrow's yesterday, what day is today?", "iq_q14_opt1": "Monday", "iq_q14_opt2": "Tuesday", "iq_q14_opt3": "Wednesday", "iq_q14_opt4": "Thursday",
        "iq_q15": "Fish live in water. Which of the following is NOT a fish?", "iq_q15_opt1": "Whale", "iq_q15_opt2": "Shark", "iq_q15_opt3": "Octopus", "iq_q15_opt4": "Frog",
        "iq_q16": "A building has 100 rooms. Each room has 10 doors. How many doors are there in total?", "iq_q16_opt1": "10", "iq_q16_opt2": "100", "iq_q16_opt3": "1000", "iq_q16_opt4": "10000",
        "iq_q17": "What is always in front of you but cannot be seen?", "iq_q17_opt1": "Past", "iq_q17_opt2": "Future", "iq_q17_opt3": "Darkness", "iq_q17_opt4": "Dream",
        "iq_q18": "Which of the following is the smallest?", "iq_q18_opt1": "Planet", "iq_q18_opt2": "Moon", "iq_q18_opt3": "Star", "iq_q18_opt4": "Galaxy",
        "iq_q19": "A house has 4 walls, and each wall faces south. If a bear enters the house, what color is the bear?", "iq_q19_opt1": "Brown", "iq_q19_opt2": "White", "iq_q19_opt3": "Black", "iq_q19_opt4": "Gray",
        "iq_q20": "I am always hungry, and whatever I feed on makes me weak. What am I?", "iq_q20_opt1": "Fire", "iq_q20_opt2": "Water", "iq_q20_opt3": "Earth", "iq_q20_opt4": "Air",
        "iq_q21": "There are 5 apples in a basket. You take 3. How many apples do you have?", "iq_q21_opt1": "2", "iq_q21_opt2": "3", "iq_q21_opt3": "5", "iq_q21_opt4": "8",
        "iq_q22": "I can talk but have no mouth, hear but have no ears. What am I?", "iq_q22_opt1": "Book", "iq_q22_opt2": "Phone", "iq_q22_opt3": "River", "iq_q22_opt4": "Wind",
        "iq_q23": "The more you make of me, the more you leave behind. What am I?", "iq_q23_opt1": "Bridge", "iq_q23_opt2": "Secret", "iq_q23_opt3": "Problem", "iq_q23_opt4": "Footsteps",
        "iq_q24": "I am always ascending, yet never move. What am I?", "iq_q24_opt1": "Cloud", "iq_q24_opt2": "Tree", "iq_q24_opt3": "Mountain", "iq_q24_opt4": "Stairs",
        "iq_q25": "I have cities, but no houses; forests, but no trees; and water, but no fish. What am I?", "iq_q25_opt1": "Map", "iq_q25_opt2": "Globe", "iq_q25_opt3": "Book", "iq_q25_opt4": "Painting",
        "iq_q26": "What has an eye, but cannot see?", "iq_q26_opt1": "Needle", "iq_q26_opt2": "Storm", "iq_q26_opt3": "Potato", "iq_q26_opt4": "Key",
        "iq_q27": "What is full of holes but still holds water?", "iq_q27_opt1": "Sponge", "iq_q27_opt2": "Cup", "iq_q27_opt3": "Bottle", "iq_q27_opt4": "Bucket",
        "iq_q28": "What gets wet while drying?", "iq_q28_opt1": "Towel", "iq_q28_opt2": "Clothes", "iq_q28_opt3": "Hair", "iq_q28_opt4": "Socks",
        "iq_q29": "What has to be broken before you can use it?", "iq_q29_opt1": "Egg", "iq_q29_opt2": "Glass", "iq_q29_opt3": "Plate", "iq_q29_opt4": "Mirror",
        "iq_q30": "What is always coming, but never arrives?", "iq_q30_opt1": "Tomorrow", "iq_q30_opt2": "Today", "iq_q30_opt3": "Yesterday", "iq_q30_opt4": "Future",

        "iq_result_title": "Your Estimated IQ is...",
        "iq_result_disclaimer": "This is a simple test result; please consult an expert for accurate IQ measurement.",
        "retake_button": "Retake Test"
    },
    "ja": {
        "seo_title": "2026年無料MBTI診断＆正確なIQ知能テスト - あなたの性格タイプを見つけよう",
        "seo_description": "最も正確な無料MBTI診断とIQテストを体験してください。16種類の性格タイプ分析と認知能力測定を通して、あなた自身をより深く理解することができます。",
        "site_title": "MBTI & IQ テスト",
        "nav_home": "ホーム",
        "nav_mbti": "MBTI テスト",
        "nav_iq": "IQ テスト",
        "nav_about": "サイト紹介",
        "home_title": "自分を知る時間: MBTI & IQ テスト",
        "home_subtitle": "自分を理解し、可能性を発見しましょう！",
        "home_paragraph1_seo": "MBTI（Myers-Briggs Type Indicator）とIQ（Intelligence Quotient）テストは、自己理解と認知能力向上に役立つ強力なツールです。このウェブサイトでは、最新の心理測定理論に基づいて設計された無料のMBTI性格タイプテストと正確なIQ知能テストを提供しています。あなたの性格タイプを把握し、論理的思考力、推論力、問題解決能力を測定して、隠れた潜在能力を発見しましょう。職業選択、対人関係の改善、学習戦略の構築など、様々な分野で役立つ洞察を得ることができます。",
        "home_paragraph2_seo": "MBTIの16種類の性格タイプは、個人の好みを明確に示し、各タイプの特性、強み、弱みを理解するのに役立ちます。INFJ、ENFP、INTJ、ISTPなど、様々なタイプの詳細な分析を通じて、自分と他者の違いを尊重し、効果的にコミュニケーションする方法を学ぶことができます。また、IQテストは単なるスコアだけでなく、認知能力の様々な側面を評価し、あなたの知的な強みと改善が必要な領域を提示します。すべてのテストは、最適な信頼性と妥当性を確保するために継続的に見直し、補完されています。",
        "home_paragraph3_seo": "当サイトは、日本人だけでなく世界中のユーザーが自身の心理的特性と知的能力を探求できるよう、多言語サポートを提供しています。今すぐ無料テストを開始し、自分自身をより深く理解する旅を始めましょう！",
        "start_mbti": "MBTI テスト開始",
        "start_iq": "IQ テスト開始",
        "mbti_info_title": "MBTI性格タイプ、なぜ重要なのでしょうか？",
        "mbti_info_content1": "MBTIは、個人が世界を認識し、意思決定を行う方法に関する選好度を示す指標です。外向-内向（E-I）、感覚-直観（S-N）、思考-感情（T-F）、判断-知覚（J-P）の4つの二分法を通じて、合計16種類の性格タイプに分類されます。各タイプには、固有の特性、強み、そして開発が必要な領域があります。MBTIを理解することは、自己理解を助け、他人との関係で発生しうる誤解を減らし、チームワークとリーダーシップ能力を向上させることに貢献します。特に、職業選択や学業経路を決定する際に、自分の強みと興味を考慮するのに有用なガイドとなる可能性があります。",
        "mbti_info_content2": "例えば、INTJタイプは戦略的思考と独立心が強く、ENFPタイプは情熱的で創造的なアイデアを好みます。自分のタイプを把握することで、どのような環境で最大の満足感と成果を得られるか、どのようなタイプの人々と相性が良いかなどについての洞察を得ることができます。しかし、MBTIは性格を規定する絶対的な尺度ではなく、自己理解のためのツールの一つであることを覚えておくことが重要です。",
        "iq_info_title": "IQテスト、知能指数の意味",
        "iq_info_content1": "IQ（Intelligence Quotient）テストは、人間の認知能力の一部を測定するために考案された標準化されたツールです。これは主に、論理的推論、問題解決能力、記憶力、言語能力、空間知覚能力など、様々な知的要素を評価します。IQスコアは単なる数字ではなく、個人が情報をどれだけ効率的に処理し、新しい状況にどれだけうまく適応するかを示す指標として活用することができます。",
        "iq_info_content2": "しかし、IQテストは知能のすべての側面（例：感情知能、創造的知能）を測定するものではなく、個人の成功や幸福を決定する唯一の要素ではありません。当サイトのIQテストは、あなたの現在の認知能力を測るための楽しく挑戦的な機会を提供します。テスト結果を通じて自分の強みを理解し、さらには思考力と問題解決能力を向上させるための動機付けを得ることができます。",
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
        "ENFJ_desc": "ENFJ（主人公）：カリスマ的で感動的なリーダーで、聴衆を魅了することができます。彼らは温かく共感하며 반응적이고 책임감이 강하며, 타인의 감정, 필요, 동기에 매우 잘 공감합니다.",
        "ENTJ_desc": "ENTJ（司令官）：大胆で想像力豊かで意志の強いリーダーで、常に道を見つけるか、道を作ります。彼らは率直で断固としており、容易にリーダーシップを発揮し、非論理的で非効率적인 절차를 신속하게 식별하여 포괄적인 해결책을 개발하고 실행합니다.",
        // MBTI Questions (Google Translated)
        "mbti_q1": "新しい人との交流を楽しんでいますか？", "mbti_q1_opt1": "はい、楽しんでいます。", "mbti_q1_opt2": "いいえ、静かに過ごすことを好みます。",
        "mbti_q2": "パーティーや社交的な集まりの後、エネルギーが消耗したと感じますか？", "mbti_q2_opt1": "はい、そうです。", "mbti_q2_opt2": "いいえ、むしろエネルギーを得ます。",
        "mbti_q3": "現実的で具体的な事実に焦点を当てますか？", "mbti_q3_opt1": "はい、現実的なことを重視します。", "mbti_q3_opt2": "いいえ、未来の可能性や抽象的なアイデアにもっと興味があります。",
        "mbti_q4": "新しいアイデアを探求する方が好きですか、それとも実証済みの方法にこだわる方が好きですか？", "mbti_q4_opt1": "新しいアイデアを探求します。", "mbti_q4_opt2": "実証済みの方法を好みます。",
        "mbti_q5": "意思決定をする際、論理と客観的な分析を優先しますか？", "mbti_q5_opt1": "はい、論理的な判断を好みます。", "mbti_q5_opt2": "いいえ、他人の感情や状況を考慮します。",
        "mbti_q6": "他人の気持ちに共感し、理解するのは簡単ですか？", "mbti_q6_opt1": "はい、簡単に共感します。", "mbti_q6_opt2": "いいえ、客観的に状況を見ます。",
        "mbti_q7": "計画を立てて体系的にタスクを処理するのが好きですか？", "mbti_q7_opt1": "はい、計画を立てるのが好きです。", "mbti_q7_opt2": "いいえ、柔軟で即興的なものを好みます。",
        "mbti_q8": "締め切りが近づくと集中力が高まる方ですか？", "mbti_q8_opt1": "はい、そうです。", "mbti_q8_opt2": "いいえ、事前に計画してタスクを完了します。",
        "mbti_q9": "新しい環境に順応することを楽しんでいますか？", "mbti_q9_opt1": "はい、楽しんでいます。", "mbti_q9_opt2": "いいえ、慣れ親しんだものを好みます。",
        "mbti_q10": "グループ活動よりも一人での作業を好みますか？", "mbti_q10_opt1": "はい、好みます。", "mbti_q10_opt2": "いいえ、他の人と一緒に作業するのが好きです。",
        "mbti_q11": "将来の可能性やアイデアに重点を置いていますか？", "mbti_q11_opt1": "はい、そうです。", "mbti_q11_opt2": "いいえ、現在の事実に焦点を当てています。",
        "mbti_q12": "実用的な問題解決にもっと興味がありますか？", "mbti_q12_opt1": "はい、あります。", "mbti_q12_opt2": "いいえ、理論的な事柄にもっと興味があります。",
        "mbti_q13": "意思決定をする際、個人的な価値観と調和を優先しますか？", "mbti_q13_opt1": "はい、優先します。", "mbti_q13_opt2": "いいえ、客観的な基準に従います。",
        "mbti_q14": "他人の立場になって考えるのは簡単ですか？", "mbti_q14_opt1": "はい、簡単です。", "mbti_q14_opt2": "いいえ、難しいです。",
        "mbti_q15": "事前にスケジュールを設定し、それに従うのが好きですか？", "mbti_q15_opt1": "はい、好きです。", "mbti_q15_opt2": "いいえ、状況に応じて柔軟に対応します。",
        "mbti_q16": "新しい情報を得たとき、すぐに行動する前にじっくり考えますか？", "mbti_q16_opt1": "はい、考えます。", "mbti_q16_opt2": "いいえ、すぐに行動する方を好みます。",
        "mbti_q17": "紛争状況で解決策を見つけるために、まず客観적인 분석을 시도하나요?", "mbti_q17_opt1": "はい、試みます。", "mbti_q17_opt2": "いいえ、関係改善を優先します。",
        "mbti_q18": "説得力があれば、多数派의 의견보다도 소수파의 의견이라도 설득력 있다면 따르는 편인가요?", "mbti_q18_opt1": "はい、従います。", "mbti_q18_opt2": "いいえ、多数派の意見に従います。",
        "mbti_q19": "복잡한 문제에 직면했을 때, 큰 그림을 먼저 보려고 노력하나요?", "mbti_q19_opt1": "はい、努力します。", "mbti_q19_opt2": "いいえ、まず詳細を調べます。",
        "mbti_q20": "日常生活で新しい経験を求めていますか？", "mbti_q20_opt1": "はい、そうです。", "mbti_q20_opt2": "いいえ、安定を好みます。",
        "mbti_q21": "새로운 아이디어를 내는 것을 즐기시나요?", "mbti_q21_opt1": "네, 즐깁니다.", "mbti_q21_opt2": "아니요, 기존 아이디어를 발전시키는 것을 선호합니다。",
        "mbti_q22": "다른 사람의 감정을 헤아리는 데 능숙한 편인가요?", "mbti_q22_opt1": "네, 능숙합니다.", "mbti_q22_opt2": "아니요, 객관적인 판단에 더 집중합니다。",
        "mbti_q23": "일정을 미리 정해두는 것이 마음 편한가요?", "mbti_q23_opt1": "네, 그렇습니다.", "mbti_q23_opt2": "아니요, 유동적인 것이 좋습니다。",
        "mbti_q24": "問題解決 시 논리적인 접근 방식을 주로 사용하나요?", "mbti_q24_opt1": "네, 주로 사용합니다.", "mbti_q24_opt2": "아니요, 직관이나 경험을 더 믿습니다。",
        "mbti_q25": "자신의 감정을 쉽게 표현하는 편인가요?", "mbti_q25_opt1": "네, 그렇습니다.", "mbti_q25_opt2": "아니요, 감정을 잘 드러내지 않습니다。",
        "mbti_q26": "새로운 사람들과의 만남에서 에너지를 얻는 편인가요?", "mbti_q26_opt1": "네, 얻습니다.", "mbti_q26_opt2": "아니요, 피곤함을 느낍니다。",
        "mbti_q27": "일을 시작하기 전에 완벽하게 계획을 세워야 마음이 놓이나요?", "mbti_q27_opt1": "네, 그렇습니다.", "mbti_q27_opt2": "아니요, 유연하게 시작합니다。",
        "mbti_q28": "복잡한 정보보다 구체적이고 사실적인 정보에 더 끌리나요?", "mbti_q28_opt1": "네, 끌립니다.", "mbti_q28_opt2": "아니요, 추상적인 정보에 더 흥미를 느낍니다。",
        "mbti_q29": "다른 사람들의 필요와 감정을 자신의 것보다 우선시하는 경향이 있나요?", "mbti_q29_opt1": "네, 그렇습니다.", "mbti_q29_opt2": "아니요, 자신의 필요를 우선합니다。",
        "mbti_q30": "결정을 내릴 때, 모든 가능성을 열어두고 마지막까지 탐색하는 편인가요?", "mbti_q30_opt1": "네, 그렇습니다.", "mbti_q30_opt2": "아니요, 빨리 결정을 내리는 편입니다。",

        "mbti_result_title": "당신의 MBTI 유형은...",
        "mbti_result_disclaimer": "더 자세한 정보는 MBTI 전문 사이트에서 확인해보세요!",

        // IQ Questions
        "iq_q1": "다음 숫자 배열의 다음 숫자는 무엇일까요? 1, 3, 6, 10, 15, ?", "iq_q1_opt1": "20", "iq_q1_opt2": "21", "iq_q1_opt3": "22", "iq_q1_opt4": "23",
        "iq_q2": "강철이 무쇠보다 강하다면, 무쇠는 종이보다 어떤가요?", "iq_q2_opt1": "강하다", "iq_q2_opt2": "약하다", "iq_q2_opt3": "같다", "iq_q2_opt4": "관련 없다",
        "iq_q3": "다음 중 나머지 셋과 다른 하나는? (사물 기준)", "iq_q3_opt1": "사과", "iq_q3_opt2": "바나나", "iq_q3_opt3": "감자", "iq_q3_opt4": "오렌지",
        "iq_q4": "어떤 달은 28일까지 있고, 또 어떤 달은 30일까지 있습니다. 모든 달은 며칠까지 있나요?", "iq_q4_opt1": "28일", "iq_q4_opt2": "29일", "iq_q4_opt3": "30일", "iq_q4_opt4": "31일",
        "iq_q5": "다음 단어들 중 관련 없는 하나는? (의미 기준)", "iq_q5_opt1": "행복", "iq_q5_opt2": "기쁨", "iq_q5_opt3": "슬픔", "iq_q5_opt4": "즐거움",
        "iq_q6": "다음 빈칸에 들어갈 숫자는? 2, 4, 8, 16, ?", "iq_q6_opt1": "24", "iq_q6_opt2": "32", "iq_q6_opt3": "48", "iq_q6_opt4": "64",
        "iq_q7": "A는 B보다 키가 크고, C는 A보다 키가 작습니다. B와 C 중 누가 더 큰가요?", "iq_q7_opt1": "B", "iq_q7_opt2": "C", "iq_q7_opt3": "같다", "iq_q7_opt4": "알 수 없다",
        "iq_q8": "빨간색과 파란색을 섞으면 어떤 색이 되나요?", "iq_q8_opt1": "초록색", "iq_q8_opt2": "보라색", "iq_q8_opt3": "주황색", "iq_q8_opt4": "검은색",
        "iq_q9": "고양이가 '야옹'하고 짖고, 개가 '멍멍'하고 짖습니다. 새는 어떻게 짖을까요?", "iq_q9_opt1": "깍깍", "iq_q9_opt2": "짹짹", "iq_q9_opt3": "음메", "iq_q9_opt4": "찍찍",
        "iq_q10": "거울을 보며 머리를 빗고 있습니다. 거울 속 당신은 오른손으로 빗고 있습니다. 실제로는 어떤 손으로 빗고 있나요?", "iq_q10_opt1": "왼손", "iq_q10_opt2": "오른손", "iq_q10_opt3": "양손", "iq_q10_opt4": "알 수 없다",
        "iq_q11": "어떤 수가 5로 나누어 떨어지고 3으로 나누어 떨어집니다. 이 수는 다음 중 무엇일까요?", "iq_q11_opt1": "10", "iq_q11_opt2": "12", "iq_q11_opt3": "15", "iq_q11_opt4": "20",
        "iq_q12": "모든 새는 날 수 있습니다. 참새는 새입니다. 그러므로 참새는 날 수 있습니다. 이 추론은 무엇인가요?", "iq_q12_opt1": "연역법", "iq_q12_opt2": "귀납법", "iq_q12_opt3": "유추", "iq_q12_opt4": "오류",
        "iq_q13": "어떤 그림에 3개의 삼각형과 2개의 사각형이 있습니다. 총 몇 개의 도형이 있나요?", "iq_q13_opt1": "2", "iq_q13_opt2": "3", "iq_q13_opt3": "5", "iq_q13_opt4": "6",
        "iq_q14": "만약 어제는 내일의 어제였다면, 오늘은 무슨 요일일까요?", "iq_q14_opt1": "월요일", "iq_q14_opt2": "화요일", "iq_q14_opt3": "수요일", "iq_q14_opt4": "목요일",
        "iq_q15": "물고기는 물속에서 삽니다. 다음 중 물고기가 아닌 것은 무엇일까요?", "iq_q15_opt1": "고래", "iq_q15_opt2": "상어", "iq_q15_opt3": "문어", "iq_q15_opt4": "개구리",
        "iq_q16": "어떤 건물에 100개의 방이 있습니다. 각 방에는 10개의 문이 있습니다. 총 몇 개의 문이 있을까요?", "iq_q16_opt1": "10", "iq_q16_opt2": "100", "iq_q16_opt3": "1000", "iq_q16_opt4": "10000",
        "iq_q17": "항상 당신 앞에 있지만 볼 수 없는 것은 무엇일까요?", "iq_q17_opt1": "과거", "iq_q17_opt2": "미래", "iq_q17_opt3": "어둠", "iq_q17_opt4": "꿈",
        "iq_q18": "다음 중 가장 작은 것은 무엇일까요?", "iq_q18_opt1": "행성", "iq_q18_opt2": "달", "iq_q18_opt3": "별", "iq_q18_opt4": "은하",
        "iq_q19": "어떤 집에 4개의 벽이 있고, 각 벽은 남쪽을 향하고 있습니다. 곰이 이 집으로 들어오면 곰의 색깔은 무엇일까요?", "iq_q19_opt1": "갈색", "iq_q19_opt2": "흰색", "iq_q19_opt3": "검은색", "iq_q19_opt4": "회색",
        "iq_q20": "나는 항상 배고프고, 나를 먹여 살리는 것은 무엇이든 나를 약하게 만듭니다. 나는 무엇일까요?", "iq_q20_opt1": "불", "iq_q20_opt2": "물", "iq_q20_opt3": "흙", "iq_q20_opt4": "공기",
        "iq_q21": "하나의 바구니에 사과 5개가 있습니다. 당신은 3개를 가져갔습니다. 당신에게 남은 사과는 몇 개인가요?", "iq_q21_opt1": "2개", "iq_q21_opt2": "3개", "iq_q21_opt3": "5개", "iq_q21_opt4": "8개",
        "iq_q22": "나는 말은 할 수 있지만 입은 없고, 귀는 있지만 듣지 못합니다. 나는 무엇일까요?", "iq_q22_opt1": "책", "iq_q22_opt2": "전화", "iq_q22_opt3": "강", "iq_q22_opt4": "바람",
        "iq_q23": "나를 만들면 나를 파괴하고 싶어 합니다. 나는 무엇일까요?", "iq_q23_opt1": "다리", "iq_q23_opt2": "비밀", "iq_q23_opt3": "문제", "iq_q23_opt4": "거짓말",
        "iq_q24": "나는 항상 높이 올라가지만 절대 움직이지 않습니다. 나는 무엇일까요?", "iq_q24_opt1": "구름", "iq_q24_opt2": "나무", "iq_q24_opt3": "산", "iq_q24_opt4": "탑",
        "iq_q25": "나는 앞과 뒤가 있지만, 위나 아래는 없습니다. 나는 무엇일까요?", "iq_q25_opt1": "책", "iq_q25_opt2": "카드", "iq_q25_opt3": "동전", "iq_q25_opt4": "강",
        "iq_q26": "나는 태어나자마자 죽지만, 곧 다시 살아납니다. 나는 무엇일까요?", "iq_q26_opt1": "눈", "iq_q26_opt2": "불꽃", "iq_q26_opt3": "하루", "iq_q26_opt4": "파도",
        "iq_q27": "나는 먹지 않고 살지만, 마시면 죽습니다. 나는 무엇일까요?", "iq_q27_opt1": "불", "iq_q27_opt2": "모래", "iq_q27_opt3": "돌", "iq_q27_opt4": "구름",
        "iq_q28": "밤에 나타나지만 낮에는 사라지는 것은 무엇일까요?", "iq_q28_opt1": "달", "iq_q28_opt2": "별", "iq_q28_opt3": "어둠", "iq_q28_opt4": "꿈",
        "iq_q29": "나는 항상 움직이지만 항상 같은 곳에 머뭅니다. 나는 무엇일까요?", "iq_q29_opt1": "시계", "iq_q29_opt2": "강", "iq_q29_opt3": "바퀴", "iq_q29_opt4": "시간",
        "iq_q30": "나는 많은 것을 가지고 있지만 아무것도 소유하지 않습니다. 나는 무엇일까요?", "iq_q30_opt1": "은행", "iq_q30_opt2": "도서관", "iq_q30_opt3": "창고", "iq_q30_opt4": "지도",

        "iq_result_title": "당신의 예상 IQ는...",
        "iq_result_disclaimer": "이것은 간단한 테스트 결과이며, 정확한 IQ 측정은 전문가에게 문의하십시오.",
        "retake_button": "다시 테스트하기"
    },
    "en": {
        "seo_title": "2026 Free MBTI Test & Accurate IQ Intelligence Test - Discover Your Personality Type",
        "seo_description": "Experience the most accurate free MBTI test and IQ test. Understand yourself more deeply through 16 personality type analyses and cognitive ability measurements.",
        "site_title": "MBTI & IQ Test",
        "nav_home": "Home",
        "nav_mbti": "MBTI Test",
        "nav_iq": "IQ Test",
        "nav_about": "About Us",
        "home_title": "Time to Know Yourself: MBTI & IQ Test",
        "home_subtitle": "Understand yourself and discover your potential!",
        "home_paragraph1_seo": "MBTI (Myers-Briggs Type Indicator) and IQ (Intelligence Quotient) tests are powerful tools for self-understanding and enhancing cognitive abilities. This website offers free MBTI personality type tests and accurate IQ intelligence tests designed based on the latest psychometric theories. Discover your personality type, measure your logical reasoning, inferential skills, and problem-solving abilities to uncover your hidden potential. Gain valuable insights for career choices, improving interpersonal relationships, and developing learning strategies.",
        "home_paragraph2_seo": "The 16 MBTI personality types clearly show individual preferences, helping you understand the characteristics, strengths, and weaknesses of each type. Through in-depth analysis of various types like INFJ, ENFP, INTJ, and ISTP, you can learn to respect differences between yourself and others and communicate effectively. Furthermore, IQ tests assess various aspects of cognitive ability beyond a mere score, suggesting your intellectual strengths and areas for improvement. All tests are continuously reviewed and supplemented to ensure optimal reliability and validity.",
        "home_paragraph3_seo": "Our site provides multilingual support, allowing users worldwide, not just Koreans, to explore their psychological characteristics and intellectual abilities. Start your free test now and embark on a journey to understand yourself more deeply!",
        "start_mbti": "Start MBTI Test",
        "start_iq": "Start IQ Test",
        "mbti_info_title": "Why is MBTI Personality Type Important?",
        "mbti_info_content1": "MBTI is an indicator that shows an individual's preference in perceiving the world and making decisions. It classifies 16 personality types through four dichotomous preference indicators: Extraversion-Introversion (E-I), Sensing-Intuition (S-N), Thinking-Feeling (T-F), and Judging-Perceiving (J-P). Each type has unique characteristics, strengths, and areas for development. Understanding MBTI helps with self-understanding, reduces misunderstandings in relationships with others, and contributes to improving teamwork and leadership skills. It can serve as a useful guide when choosing a career or academic path, considering one's strengths and interests.",
        "mbti_info_content2": "For example, INTJ types tend to be strong in strategic thinking and independence, while ENFP types prefer passionate and creative ideas. Identifying your type can provide insights into what environments offer the greatest satisfaction and performance, and what types of people you get along with best. However, it's important to remember that MBTI is one tool for self-understanding, not an absolute measure that defines personality.",
        "iq_info_title": "IQ Test: The Meaning of the Intelligence Quotient",
        "iq_info_content1": "The IQ (Intelligence Quotient) test is a standardized tool designed to measure a part of human intelligence. It primarily assesses various intellectual elements such as logical reasoning, problem-solving ability, memory, language skills, and spatial perception. An IQ score is not merely a number but can be used as an indicator of how efficiently an individual processes information and how well they adapt to new situations.",
        "iq_info_content2": "However, IQ tests do not measure all aspects of intelligence (e.g., emotional intelligence, creative intelligence), and an IQ score is not the sole determinant of an individual's success or happiness. Our site's IQ test offers a fun and challenging opportunity to gauge your current cognitive abilities. Through the test results, you can understand your strengths and be motivated to improve your thinking and problem-solving skills.",
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
        "mbti_q9": "Do you enjoy adapting to new environments?", "mbti_q9_opt1": "Yes, I enjoy it.", "mbti_q9_opt2": "No, I prefer familiar things.",
        "mbti_q10": "Do you prefer working alone over group activities?", "mbti_q10_opt1": "Yes, I prefer it.", "mbti_q10_opt2": "No, I like working with others.",
        "mbti_q11": "Do you focus more on future possibilities and ideas?", "mbti_q11_opt1": "Yes, I do.", "mbti_q11_opt2": "No, I focus on present facts.",
        "mbti_q12": "Are you more interested in practical problem-solving?", "mbti_q12_opt1": "Yes, I am.", "mbti_q12_opt2": "No, I'm more interested in theoretical matters.",
        "mbti_q13": "When making decisions, do you prioritize personal values and harmony?", "mbti_q13_opt1": "Yes, I do.", "mbti_q13_opt2": "No, I follow objective criteria.",
        "mbti_q14": "Is it easy for you to put yourself in others' shoes?", "mbti_q14_opt1": "Yes, it is easy.", "mbti_q14_opt2": "No, it's difficult.",
        "mbti_q15": "Do you like to set a schedule in advance and stick to it?", "mbti_q15_opt1": "Yes, I do.", "mbti_q15_opt2": "No, I adapt flexibly to situations.",
        "mbti_q16": "When you get new information, do you think thoroughly before acting?", "mbti_q16_opt1": "Yes, I do.", "mbti_q16_opt2": "No, I prefer immediate action.",
        "mbti_q17": "In conflict situations, do you first try objective analysis to find a solution?", "mbti_q17_opt1": "Yes, I do.", "mbti_q17_opt2": "No, I prioritize improving relationships.",
        "mbti_q18": "Do you tend to follow a minority opinion if it's convincing, rather than the majority?", "mbti_q18_opt1": "Yes, I do.", "mbti_q18_opt2": "No, I follow the majority opinion.",
        "mbti_q19": "When faced with a complex problem, do you try to see the big picture first?", "mbti_q19_opt1": "Yes, I do.", "mbti_q19_opt2": "No, I examine the details first.",
        "mbti_q20": "Do you seek new experiences in daily life?", "mbti_q20_opt1": "Yes, I do.", "mbti_q20_opt2": "No, I prefer stability.",
        "mbti_q21": "Do you enjoy coming up with new ideas?", "mbti_q21_opt1": "Yes, I enjoy it.", "mbti_q21_opt2": "No, I prefer developing existing ideas.",
        "mbti_q22": "Are you skilled at understanding other people's emotions?", "mbti_q22_opt1": "Yes, I am skilled.", "mbti_q22_opt2": "No, I focus more on objective judgment.",
        "mbti_q23": "Does it make you comfortable to set schedules in advance?", "mbti_q23_opt1": "Yes, it does.", "mbti_q23_opt2": "No, I prefer flexibility.",
        "mbti_q24": "Do you primarily use a logical approach when solving problems?", "mbti_q24_opt1": "Yes, I primarily use it.", "mbti_q24_opt2": "No, I trust intuition or experience more.",
        "mbti_q25": "Are you apt to express your emotions easily?", "mbti_q25_opt1": "Yes, I am.", "mbti_q25_opt2": "No, I don't easily reveal my emotions.",
        "mbti_q26": "Do you gain energy from meeting new people?", "mbti_q26_opt1": "Yes, I do.", "mbti_q26_opt2": "No, I feel tired.",
        "mbti_q27": "Do you feel relieved only after making a perfect plan before starting work?", "mbti_q27_opt1": "Yes, I do.", "mbti_q27_opt2": "No, I start flexibly.",
        "mbti_q28": "Are you more attracted to concrete and factual information than complex information?", "mbti_q28_opt1": "Yes, I am.", "mbti_q28_opt2": "No, I'm more interested in abstract information.",
        "mbti_q29": "Do you tend to prioritize others' needs and feelings over your own?", "mbti_q29_opt1": "Yes, I do.", "mbti_q29_opt2": "No, I prioritize my own needs.",
        "mbti_q30": "When making decisions, do you keep all possibilities open and explore until the end?", "mbti_q30_opt1": "Yes, I do.", "mbti_q30_opt2": "No, I tend to make decisions quickly.",

        "mbti_result_title": "Your MBTI Type is...",
        "mbti_result_disclaimer": "Find more detailed information on a professional MBTI website!",

        // IQ Questions
        "iq_q1": "What is the next number in the sequence? 1, 3, 6, 10, 15, ?", "iq_q1_opt1": "20", "iq_q1_opt2": "21", "iq_q1_opt3": "22", "iq_q1_opt4": "23",
        "iq_q2": "If steel is stronger than cast iron, how is cast iron compared to paper?", "iq_q2_opt1": "Stronger", "iq_q2_opt2": "Weaker", "iq_q2_opt3": "Same", "iq_q2_opt4": "Irrelevant",
        "iq_q3": "Which one is different from the rest? (Based on objects)", "iq_q3_opt1": "Apple", "iq_q3_opt2": "Banana", "iq_q3_opt3": "Potato", "iq_q3_opt4": "Orange",
        "iq_q4": "Some months have 28 days, and some have 30. How many days do all months have?", "iq_q4_opt1": "28 days", "iq_q4_opt2": "29 days", "iq_q4_opt3": "30 days", "iq_q4_opt4": "31 days",
        "iq_q5": "Which word is unrelated to the others? (Based on meaning)", "iq_q5_opt1": "Happiness", "iq_q5_opt2": "Joy", "iq_q5_opt3": "Sadness", "iq_q5_opt4": "Pleasure",
        "iq_q6": "What is the next number in the blank? 2, 4, 8, 16, ?", "iq_q6_opt1": "24", "iq_q6_opt2": "32", "iq_q6_opt3": "48", "iq_q6_opt4": "64",
        "iq_q7": "A is taller than B, and C is shorter than A. Who is taller between B and C?", "iq_q7_opt1": "B", "iq_q7_opt2": "C", "iq_q7_opt3": "Same", "iq_q7_opt4": "Cannot be determined",
        "iq_q8": "What color do you get when you mix red and blue?", "iq_q8_opt1": "Green", "iq_q8_opt2": "Purple", "iq_q8_opt3": "Orange", "iq_q8_opt4": "Black",
        "iq_q9": "Cats meow and dogs bark. What sound do birds make?", "iq_q9_opt1": "Caw", "iq_q9_opt2": "Chirp", "iq_q9_opt3": "Moo", "iq_q9_opt4": "Squeak",
        "iq_q10": "You are brushing your hair while looking in a mirror. In the mirror, you are brushing with your right hand. What hand are you actually brushing with?", "iq_q10_opt1": "Left hand", "iq_q10_opt2": "Right hand", "iq_q10_opt3": "Both hands", "iq_q10_opt4": "Cannot be determined",
        "iq_q11": "A number is divisible by 5 and also by 3. Which of the following could be that number?", "iq_q11_opt1": "10", "iq_q11_opt2": "12", "iq_q11_opt3": "15", "iq_q11_opt4": "20",
        "iq_q12": "All birds can fly. A sparrow is a bird. Therefore, a sparrow can fly. What kind of reasoning is this?", "iq_q12_opt1": "Deductive", "iq_q12_opt2": "Inductive", "iq_q12_opt3": "Analogical", "iq_q12_opt4": "Fallacy",
        "iq_q13": "A picture has 3 triangles and 2 squares. How many shapes are there in total?", "iq_q13_opt1": "2", "iq_q13_opt2": "3", "iq_q13_opt3": "5", "iq_q13_opt4": "6",
        "iq_q14": "If yesterday was tomorrow's yesterday, what day is today?", "iq_q14_opt1": "Monday", "iq_q14_opt2": "Tuesday", "iq_q14_opt3": "Wednesday", "iq_q14_opt4": "Thursday",
        "iq_q15": "Fish live in water. Which of the following is NOT a fish?", "iq_q15_opt1": "Whale", "iq_q15_opt2": "Shark", "iq_q15_opt3": "Octopus", "iq_q15_opt4": "Frog",
        "iq_q16": "A building has 100 rooms. Each room has 10 doors. How many doors are there in total?", "iq_q16_opt1": "10", "iq_q16_opt2": "100", "iq_q16_opt3": "1000", "iq_q16_opt4": "10000",
        "iq_q17": "What is always in front of you but cannot be seen?", "iq_q17_opt1": "Past", "iq_q17_opt2": "Future", "iq_q17_opt3": "Darkness", "iq_q17_opt4": "Dream",
        "iq_q18": "Which of the following is the smallest?", "iq_q18_opt1": "Planet", "iq_q18_opt2": "Moon", "iq_q18_opt3": "Star", "iq_q18_opt4": "Galaxy",
        "iq_q19": "A house has 4 walls, and each wall faces south. If a bear enters the house, what color is the bear?", "iq_q19_opt1": "Brown", "iq_q19_opt2": "White", "iq_q19_opt3": "Black", "iq_q19_opt4": "Gray",
        "iq_q20": "I am always hungry, and whatever I feed on makes me weak. What am I?", "iq_q20_opt1": "Fire", "iq_q20_opt2": "Water", "iq_q20_opt3": "Earth", "iq_q20_opt4": "Air",
        "iq_q21": "There are 5 apples in a basket. You take 3. How many apples do you have?", "iq_q21_opt1": "2", "iq_q21_opt2": "3", "iq_q21_opt3": "5", "iq_q21_opt4": "8",
        "iq_q22": "I can talk but have no mouth, hear but have no ears. What am I?", "iq_q22_opt1": "Book", "iq_q22_opt2": "Phone", "iq_q22_opt3": "River", "iq_q22_opt4": "Wind",
        "iq_q23": "The more you make of me, the more you leave behind. What am I?", "iq_q23_opt1": "Bridge", "iq_q23_opt2": "Secret", "iq_q23_opt3": "Problem", "iq_q23_opt4": "Footsteps",
        "iq_q24": "I am always ascending, yet never move. What am I?", "iq_q24_opt1": "Cloud", "iq_q24_opt2": "Tree", "iq_q24_opt3": "Mountain", "iq_q24_opt4": "Stairs",
        "iq_q25": "I have cities, but no houses; forests, but no trees; and water, but no fish. What am I?", "iq_q25_opt1": "Map", "iq_q25_opt2": "Globe", "iq_q25_opt3": "Book", "iq_q25_opt4": "Painting",
        "iq_q26": "What has an eye, but cannot see?", "iq_q26_opt1": "Needle", "iq_q26_opt2": "Storm", "iq_q26_opt3": "Potato", "iq_q26_opt4": "Key",
        "iq_q27": "What is full of holes but still holds water?", "iq_q27_opt1": "Sponge", "iq_q27_opt2": "Cup", "iq_q27_opt3": "Bottle", "iq_q27_opt4": "Bucket",
        "iq_q28": "What gets wet while drying?", "iq_q28_opt1": "Towel", "iq_q28_opt2": "Clothes", "iq_q28_opt3": "Hair", "iq_q28_opt4": "Socks",
        "iq_q29": "What has to be broken before you can use it?", "iq_q29_opt1": "Egg", "iq_q29_opt2": "Glass", "iq_q29_opt3": "Plate", "iq_q29_opt4": "Mirror",
        "iq_q30": "What is always coming, but never arrives?", "iq_q30_opt1": "Tomorrow", "iq_q30_opt2": "Today", "iq_q30_opt3": "Yesterday", "iq_q30_opt4": "Future",

        "iq_result_title": "Your Estimated IQ is...",
        "iq_result_disclaimer": "This is a simple test result; please consult an expert for accurate IQ measurement.",
        "retake_button": "Retake Test"
    },
    "zh": {
        "seo_title": "2026年免费MBTI测试与准确智商测试 - 探索你的性格类型",
        "seo_description": "体验最准确的免费MBTI测试和智商测试。通过16种性格类型分析和认知能力测量，更深入地了解自己。",
        "site_title": "MBTI & IQ 测试",
        "nav_home": "主页",
        "nav_mbti": "MBTI 测试",
        "nav_iq": "IQ 测试",
        "nav_about": "关于我们",
        "home_title": "了解自己的时间：MBTI & IQ 测试",
        "home_subtitle": "了解自己，发现潜力！",
        "home_paragraph1_seo": "MBTI（Myers-Briggs Type Indicator）和IQ（智商）测试是自我理解和提升认知能力的强大工具。本网站提供基于最新心理测量理论设计的免费MBTI性格类型测试和准确的智商测试。发现你的性格类型，测量你的逻辑推理、推断能力和解决问题的能力，以发掘你的潜能。获得职业选择、改善人际关系和制定学习策略等各个领域的宝贵见解。",
        "home_paragraph2_seo": "MBTI的16种性格类型清晰地展现了个人偏好，帮助你了解每种类型的特点、优势和劣势。通过对INFJ、ENFP、INTJ、ISTP等各种类型的深入分析，你可以学会尊重自己和他人的差异，并有效沟通。此外，智商测试不仅仅是一个分数，它还评估了认知能力的各个方面，提示你的智力优势和需要改进的领域。所有测试都经过持续审查和补充，以确保最佳的信度和效度。",
        "home_paragraph3_seo": "我们的网站提供多语言支持，允许全球用户，而不仅仅是韩国人，探索他们的心理特征和智力。立即开始你的免费测试，踏上更深入了解自己的旅程！",
        "start_mbti": "开始 MBTI 测试",
        "start_iq": "开始 IQ 测试",
        "mbti_info_title": "MBTI性格类型，为何重要？",
        "mbti_info_content1": "MBTI是衡量个体感知世界和做出决策偏好的指标。它通过外向-内向（E-I）、感觉-直觉（S-N）、思考-情感（T-F）、判断-知觉（J-P）四个二分法，将性格分为16种类型。每种类型都有其独特的特点、优势和需要发展的领域。了解MBTI有助于自我认识，减少人际关系中的误解，并有助于提高团队合作和领导能力。在选择职业或学业道路时，它能作为一个有用的指南，帮助考虑自己的优势和兴趣。",
        "mbti_info_content2": "例如，INTJ类型在战略思维和独立性方面较强，而ENFP类型则偏爱充满激情和创造性的想法。识别自己的类型可以深入了解哪些环境能带来最大的满足感和表现，以及自己与哪种类型的人最合得来。然而，重要的是要记住，MBTI是自我理解的工具之一，而不是定义性格的绝对衡量标准。",
        "iq_info_title": "IQ测试：智商的含义",
        "iq_info_content1": "IQ（智商）测试是衡量人类智能的一部分的标准化工具。它主要评估逻辑推理、解决问题的能力、记忆力、语言能力和空间感知能力等各种智力要素。智商分数不仅仅是一个数字，它还可以作为衡量个体处理信息效率和适应新情况能力的指标。",
        "iq_info_content2": "然而，智商测试不能衡量智力的所有方面（例如，情商、创造性智力），智商分数也不是决定个人成功或幸福的唯一因素。我们网站的智商测试提供了一个有趣且具有挑战性的机会，以衡量您当前的认知能力。通过测试结果，您可以了解自己的优势，并获得提高思维和解决问题能力的动力。",
        "mbti_section_title": "MBTI 性格类型测试",
        "mbti_section_description": "你是什么样的人？通过有趣的问题找出你的性格偏好。",
        "iq_section_title": "IQ 测试",
        "iq_section_description": "检查你的智商！准备了各种旨在评估你的逻辑、推理和解决问题能力的问题。",
        "about_section_title": "关于我们",
        "about_paragraph1": "我们的MBTI＆IQ测试网站旨在帮助用户更好地了解自己并促进个人成长。我们旨在通过提供简单易懂的MBTI性格类型和IQ分数，成为您自我发现之旅的伙伴。",
        "about_paragraph2": "所有测试均免费提供，我们努力提供有趣和教育性的体验。皆様からのフィードバック是常に歓迎しており、より良いサービスのために継続的に発展していきます。",
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
        "mbti_q9": "你喜欢适应新环境吗？", "mbti_q9_opt1": "是的，我喜欢。", "mbti_q9_opt2": "不，我更喜欢熟悉的事物。",
        "mbti_q10": "你喜欢独自工作胜过集体活动吗？", "mbti_q10_opt1": "是的，我喜欢。", "mbti_q10_opt2": "不，我喜欢与他人合作。",
        "mbti_q11": "你更关注未来的可能性和想法吗？", "mbti_q11_opt1": "是的，我更关注。", "mbti_q11_opt2": "不，我关注当前的事实。",
        "mbti_q12": "你对实际解决问题更感兴趣吗？", "mbti_q12_opt1": "是的，我感兴趣。", "mbti_q12_opt2": "不，我对理论问题更感兴趣。",
        "mbti_q13": "在做决定时，你是否优先考虑个人价值观和和谐？", "mbti_q13_opt1": "是的，我优先考虑。", "mbti_q13_opt2": "不，我遵循客观标准。",
        "mbti_q14": "你是否容易设身处地为他人着想？", "mbti_q14_opt1": "是的，很容易。", "mbti_q14_opt2": "不，这很困难。",
        "mbti_q15": "你喜欢提前制定计划并严格遵守吗？", "mbti_q15_opt1": "是的，我喜欢。", "mbti_q15_opt2": "不，我喜欢灵活应对情况。",
        "mbti_q16": "当你获得新信息时，你会彻底思考后再行动吗？", "mbti_q16_opt1": "是的，我会。", "mbti_q16_opt2": "不，我更喜欢立即行动。",
        "mbti_q17": "在冲突情况下，你会首先尝试客观分析以寻找解决方案吗？", "mbti_q17_opt1": "是的，我会。", "mbti_q17_opt2": "不，我优先考虑改善关系。",
        "mbti_q18": "如果少数人的意见有说服力，你是否倾向于采纳，而不是多数人的意见？", "mbti_q18_opt1": "是的，我采纳。", "mbti_q18_opt2": "不，我采纳多数人的意见。",
        "mbti_q19": "当遇到复杂问题时，你会先尝试看清全局吗？", "mbti_q19_opt1": "是的，我会。", "mbti_q19_opt2": "不，我先检查细节。",
        "mbti_q20": "你会在日常生活中寻求新体验吗？", "mbti_q20_opt1": "是的，我会。", "mbti_q20_opt2": "不，我更喜欢稳定。",
        "mbti_q21": "你喜欢提出新想法吗？", "mbti_q21_opt1": "是的，我喜欢。", "mbti_q21_opt2": "不，我更喜欢发展现有想法。",
        "mbti_q22": "你擅长理解他人的情绪吗？", "mbti_q22_opt1": "是的，我擅长。", "mbti_q22_opt2": "不，我更注重客观判断。",
        "mbti_q23": "提前制定计划会让你感到舒服吗？", "mbti_q23_opt1": "是的，会。", "mbti_q23_opt2": "不，我更喜欢灵活性。",
        "mbti_q24": "解决问题时，你主要采用逻辑方法吗？", "mbti_q24_opt1": "是的，我主要采用。", "mbti_q24_opt2": "不，我更相信直觉或经验。",
        "mbti_q25": "你是否容易表达自己的情绪？", "mbti_q25_opt1": "是的，我容易。", "mbti_q25_opt2": "不，我不太容易表露情绪。",
        "mbti_q26": "你是否从与新朋友的会面中获得能量？", "mbti_q26_opt1": "是的，我获得。", "mbti_q26_opt2": "不，我感到疲倦。",
        "mbti_q27": "开始工作前，是否需要制定完美的计划才能安心？", "mbti_q27_opt1": "是的，需要。", "mbti_q27_opt2": "不，我喜欢灵活开始。",
        "mbti_q28": "你是否更喜欢具体和事实性信息，而不是复杂信息？", "mbti_q28_opt1": "是的，我喜欢。", "mbti_q28_opt2": "不，我对抽象信息更感兴趣。",
        "mbti_q29": "你是否倾向于优先考虑他人的需求和感受，而不是自己的？", "mbti_q29_opt1": "是的，我倾向于。", "mbti_q29_opt2": "不，我优先考虑自己的需求。",
        "mbti_q30": "在做决定时，你是否保持所有可能性开放并探索到最后？", "mbti_q30_opt1": "是的，我保持。", "mbti_q30_opt2": "不，我倾向于快速做决定。",

        "mbti_result_title": "你的MBTI类型是...",
        "mbti_result_disclaimer": "请在专业的MBTI网站上查找更详细的信息！",

        // IQ Questions
        "iq_q1": "数列中的下一个数字是什么？ 1, 3, 6, 10, 15, ?", "iq_q1_opt1": "20", "iq_q1_opt2": "21", "iq_q1_opt3": "22", "iq_q1_opt4": "23",
        "iq_q2": "如果钢比铸铁坚固，那么铸铁与纸相比如何？", "iq_q2_opt1": "更坚固", "iq_q2_opt2": "更弱", "iq_q2_opt3": "相同", "iq_q2_opt4": "无关",
        "iq_q3": "以下哪个与其他三个不同？（基于对象）", "iq_q3_opt1": "苹果", "iq_q3_opt2": "香蕉", "iq_q3_opt3": "土豆", "iq_q3_opt4": "橙子",
        "iq_q4": "有些月份有28天，有些有30天。所有月份都有多少天？", "iq_q4_opt1": "28天", "iq_q4_opt2": "29天", "iq_q4_opt3": "30天", "iq_q4_opt4": "31天",
        "iq_q5": "根据含义，以下哪个词与其他的无关？", "iq_q5_opt1": "幸福", "iq_q5_opt2": "喜悦", "iq_q5_opt3": "悲伤", "iq_q5_opt4": "乐趣",
        "iq_q6": "空白处的下一个数字是什么？ 2, 4, 8, 16, ?", "iq_q6_opt1": "24", "iq_q6_opt2": "32", "iq_q6_opt3": "48", "iq_q6_opt4": "64",
        "iq_q7": "A比B高，C比A矮。B和C中谁更高？", "iq_q7_opt1": "B", "iq_q7_opt2": "C", "iq_q7_opt3": "相同", "iq_q7_opt4": "无法确定",
        "iq_q8": "红色和蓝色混合会变成什么颜色？", "iq_q8_opt1": "绿色", "iq_q8_opt2": "紫色", "iq_q8_opt3": "橙色", "iq_q8_opt4": "黑色",
        "iq_q9": "猫叫“喵喵”，狗叫“汪汪”。鸟怎么叫？", "iq_q9_opt1": "呱呱", "iq_q9_opt2": "吱吱", "iq_q9_opt3": "哞哞", "iq_q9_opt4": "唧唧",
        "iq_q10": "你照镜子梳头。镜子里的你用右手梳头。你实际用哪只手梳头？", "iq_q10_opt1": "左手", "iq_q10_opt2": "右手", "iq_q10_opt3": "双手", "iq_q10_opt4": "无法确定",
        "iq_q11": "某个数可以被5整除，也可以被3整除。这个数可能是以下哪个？", "iq_q11_opt1": "10", "iq_q11_opt2": "12", "iq_q11_opt3": "15", "iq_q11_opt4": "20",
        "iq_q12": "所有的鸟都会飞。麻雀是鸟。所以麻雀会飞。这是哪种推理？", "iq_q12_opt1": "演绎法", "iq_q12_opt2": "归纳法", "iq_q12_opt3": "类比", "iq_q12_opt4": "谬误",
        "iq_q13": "一幅画中有3个三角形和2个四边形。总共有多少个图形？", "iq_q13_opt1": "2", "iq_q13_opt2": "3", "iq_q13_opt3": "5", "iq_q13_opt4": "6",
        "iq_q14": "如果昨天是明天的昨天，那么今天是星期几？", "iq_q14_opt1": "星期一", "iq_q14_opt2": "星期二", "iq_q14_opt3": "星期三", "iq_q14_opt4": "星期四",
        "iq_q15": "鱼生活在水中。以下哪个不是鱼？", "iq_q15_opt1": "鲸鱼", "iq_q15_opt2": "鲨鱼", "iq_q15_opt3": "章鱼", "iq_q15_opt4": "青蛙",
        "iq_q16": "一座建筑物有100个房间。每个房间有10扇门。总共有多少扇门？", "iq_q16_opt1": "10", "iq_q16_opt2": "100", "iq_q16_opt3": "1000", "iq_q16_opt4": "10000",
        "iq_q17": "什么总是摆在你面前，却看不见？", "iq_q17_opt1": "过去", "iq_q17_opt2": "未来", "iq_q17_opt3": "黑暗", "iq_q17_opt4": "梦想",
        "iq_q18": "以下哪个最小？", "iq_q18_opt1": "行星", "iq_q18_opt2": "月亮", "iq_q18_opt3": "恒星", "iq_q18_opt4": "星系",
        "iq_q19": "一所房子有4堵墙，每堵墙都朝南。如果一只熊走进房子，那只熊是什么颜色？", "iq_q19_opt1": "棕色", "iq_q19_opt2": "白色", "iq_q19_opt3": "黑色", "iq_q19_opt4": "灰色",
        "iq_q20": "我总是饥饿，任何喂给我的东西都会使我虚弱。我是什么？", "iq_q20_opt1": "火", "iq_q20_opt2": "水", "iq_q20_opt3": "土", "iq_q20_opt4": "空气",
        "iq_q21": "一个篮子里有5个苹果。你拿了3个。你还剩下多少个苹果？", "iq_q21_opt1": "2个", "iq_q21_opt2": "3个", "iq_q21_opt3": "5个", "iq_q21_opt4": "8个",
        "iq_q22": "我能说话却没有嘴，有耳朵却听不见。我是什么？", "iq_q22_opt1": "书", "iq_q22_opt2": "电话", "iq_q22_opt3": "河流", "iq_q22_opt4": "風",
        "iq_q23": "你越制造我，就越想摧毁我。我是什么？", "iq_q23_opt1": "桥", "iq_q23_opt2": "秘密", "iq_q23_opt3": "问题", "iq_q23_opt4": "谎言",
        "iq_q24": "我总是在上升，却从不动。我是什么？", "iq_q24_opt1": "云", "iq_q24_opt2": "树", "iq_q24_opt3": "山", "iq_q24_opt4": "楼梯",
        "iq_q25": "我มีเมือง แต่ไม่มีบ้าน; มีป่า แต่ไม่มีต้นไม้; มีน้ำ แต่ไม่มีปลา ฉันคืออะไร?", "iq_q25_opt1": "แผนที่", "iq_q25_opt2": "ลูกโลก", "iq_q25_opt3": "หนังสือ", "iq_q25_opt4": "ภาพวาด",
        "iq_q26": "อะไรมีตา แต่มองไม่เห็น?", "iq_q26_opt1": "เข็ม", "iq_q26_opt2": "พายุ", "iq_q26_opt3": "มันฝรั่ง", "iq_q26_opt4": "กุญแจ",
        "iq_q27": "อะไรมีรูพรุน แต่ยังเก็บน้ำได้?", "iq_q27_opt1": "ฟองน้ำ", "iq_q27_opt2": "ถ้วย", "iq_q27_opt3": "ขวด", "iq_q27_opt4": "ถัง",
        "iq_q28": "อะไรที่เปียกขณะที่กำลังแห้ง?", "iq_q28_opt1": "ผ้าเช็ดตัว", "iq_q28_opt2": "เสื้อผ้า", "iq_q28_opt3": "ผม", "iq_q28_opt4": "ถุงเท้า",
        "iq_q29": "อะไรที่ต้องแตกก่อนถึงจะใช้ได้?", "iq_q29_opt1": "ไข่", "iq_q29_opt2": "แก้ว", "iq_q29_opt3": "จาน", "iq_q29_opt4": "กระจก",
        "iq_q30": "อะไรที่มาเสมอ แต่ไม่เคยมาถึง?", "iq_q30_opt1": "พรุ่งนี้", "iq_q30_opt2": "วันนี้", "iq_q30_opt3": "เมื่อวาน", "iq_q30_opt4": "อนาคต",

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
            // Special handling for <title> and <meta name="description"> and <meta name="og:title"> etc.
            if (key === "seo_title") {
                document.title = translations[currentLang][key];
                const ogTitle = document.querySelector('meta[property="og:title"]');
                if (ogTitle) ogTitle.setAttribute('content', translations[currentLang][key]);
                const twitterTitle = document.querySelector('meta[property="twitter:title"]');
                if (twitterTitle) twitterTitle.setAttribute('content', translations[currentLang][key]);
            } else if (key === "seo_description") {
                const metaDesc = document.querySelector('meta[name="description"]');
                if (metaDesc) metaDesc.setAttribute('content', translations[currentLang][key]);
                const ogDesc = document.querySelector('meta[property="og:description"]');
                if (ogDesc) ogDesc.setAttribute('content', translations[currentLang][key]);
                const twitterDesc = document.querySelector('meta[property="twitter:description"]');
                if (twitterDesc) twitterDesc.setAttribute('content', translations[currentLang][key]);
            }
        } else {
            console.error(`Translation missing for key: ${key} in language: ${currentLang}`);
            element.textContent = `[${key} - Translation Missing]`; // Fallback text for visual debugging
        }
    });

    // Update input placeholders
    const nameInput = document.getElementById('name');
    if (nameInput) nameInput.placeholder = translations[currentLang]?.form_name_label?.replace(':', '') || `[Name - Translation Missing]`;
    const emailInput = document.getElementById('email');
    if (emailInput) emailInput.placeholder = translations[currentLang]?.form_email_label?.replace(':', '') || `[Email - Translation Missing]`;
    const messageInput = document.getElementById('message');
    if (messageInput) messageInput.placeholder = translations[currentLang]?.form_message_label?.replace(':', '') || `[Message - Translation Missing]`;


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

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
}

// --- MBTI Test Web Component ---
class MbtiTest extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.allQuestions = [
            { questionKey: "mbti_q1", options: [{ textKey: "mbti_q1_opt1", value: "E" }, { textKey: "mbti_q1_opt2", value: "I" }] },
            { questionKey: "mbti_q2", options: [{ textKey: "mbti_q2_opt1", value: "I" }, { textKey: "mbti_q2_opt2", value: "E" }] },
            { questionKey: "mbti_q3", options: [{ textKey: "mbti_q3_opt1", value: "S" }, { textKey: "mbti_q3_opt2", value: "N" }] },
            { questionKey: "mbti_q4", options: [{ textKey: "mbti_q4_opt1", value: "N" }, { textKey: "mbti_q4_opt2", value: "S" }] },
            { questionKey: "mbti_q5", options: [{ textKey: "mbti_q5_opt1", value: "T" }, { textKey: "mbti_q5_opt2", value: "F" }] },
            { questionKey: "mbti_q6", options: [{ textKey: "mbti_q6_opt1", value: "F" }, { textKey: "mbti_q6_opt2", value: "T" }] },
            { questionKey: "mbti_q7", options: [{ textKey: "mbti_q7_opt1", value: "J" }, { textKey: "mbti_q7_opt2", value: "P" }] },
            { questionKey: "mbti_q8", options: [{ textKey: "mbti_q8_opt1", value: "P" }, { textKey: "mbti_q8_opt2", value: "J" }] },
            { questionKey: "mbti_q9", options: [{ textKey: "mbti_q9_opt1", value: "E" }, { textKey: "mbti_q9_opt2", value: "I" }] },
            { questionKey: "mbti_q10", options: [{ textKey: "mbti_q10_opt1", value: "I" }, { textKey: "mbti_q10_opt2", value: "E" }] },
            { questionKey: "mbti_q11", options: [{ textKey: "mbti_q11_opt1", value: "N" }, { textKey: "mbti_q11_opt2", value: "S" }] },
            { questionKey: "mbti_q12", options: [{ textKey: "mbti_q12_opt1", value: "S" }, { textKey: "mbti_q12_opt2", value: "N" }] },
            { questionKey: "mbti_q13", options: [{ textKey: "mbti_q13_opt1", value: "F" }, { textKey: "mbti_q13_opt2", value: "T" }] },
            { questionKey: "mbti_q14", options: [{ textKey: "mbti_q14_opt1", value: "F" }, { textKey: "mbti_q14_opt2", value: "T" }] },
            { questionKey: "mbti_q15", options: [{ textKey: "mbti_q15_opt1", value: "J" }, { textKey: "mbti_q15_opt2", value: "P" }] },
            { questionKey: "mbti_q16", options: [{ textKey: "mbti_q16_opt1", value: "P" }, { textKey: "mbti_q16_opt2", value: "J" }] },
            { questionKey: "mbti_q17", options: [{ textKey: "mbti_q17_opt1", value: "T" }, { textKey: "mbti_q17_opt2", value: "F" }] },
            { questionKey: "mbti_q18", options: [{ textKey: "mbti_q18_opt1", value: "N" }, { textKey: "mbti_q18_opt2", value: "S" }] },
            { questionKey: "mbti_q19", options: [{ textKey: "mbti_q19_opt1", value: "N" }, { textKey: "mbti_q19_opt2", value: "S" }] },
            { questionKey: "mbti_q20", options: [{ textKey: "mbti_q20_opt1", value: "E" }, { textKey: "mbti_q20_opt2", value: "I" }] },
            { questionKey: "mbti_q21", options: [{ textKey: "mbti_q21_opt1", value: "N" }, { textKey: "mbti_q21_opt2", value: "S" }] },
            { questionKey: "mbti_q22", options: [{ textKey: "mbti_q22_opt1", value: "F" }, { textKey: "mbti_q22_opt2", value: "T" }] },
            { questionKey: "mbti_q23", options: [{ textKey: "mbti_q23_opt1", value: "J" }, { textKey: "mbti_q23_opt2", value: "P" }] },
            { questionKey: "mbti_q24", options: [{ textKey: "mbti_q24_opt1", value: "T" }, { textKey: "mbti_q24_opt2", value: "F" }] },
            { questionKey: "mbti_q25", options: [{ textKey: "mbti_q25_opt1", value: "F" }, { textKey: "mbti_q25_opt2", value: "T" }] },
            { questionKey: "mbti_q26", options: [{ textKey: "mbti_q26_opt1", value: "E" }, { textKey: "mbti_q26_opt2", value: "I" }] },
            { questionKey: "mbti_q27", options: [{ textKey: "mbti_q27_opt1", value: "J" }, { textKey: "mbti_q27_opt2", value: "P" }] },
            { questionKey: "mbti_q28", options: [{ textKey: "mbti_q28_opt1", value: "S" }, { textKey: "mbti_q28_opt2", value: "N" }] },
            { questionKey: "mbti_q29", options: [{ textKey: "mbti_q29_opt1", value: "F" }, { textKey: "mbti_q29_opt2", value: "T" }] },
            { questionKey: "mbti_q30", options: [{ textKey: "mbti_q30_opt1", value: "P" }, { textKey: "mbti_q30_opt2", value: "J" }] },
        ];
        this.selectedQuestions = []; // Will hold 10 randomly selected questions
        this.language = currentLang; // Initialize language
        this.resetTest();
    }

    resetTest() {
        this.answers = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
        this.currentQuestionIndex = 0;
        // Randomly select 10 questions
        this.selectedQuestions = shuffleArray([...this.allQuestions]).slice(0, 10);
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
        if (this.currentQuestionIndex < this.selectedQuestions.length) {
            const q = this.selectedQuestions[this.currentQuestionIndex];
            const questionText = translations[this.language][q.questionKey];
            if (!questionText) {
                console.error(`MBTI Question translation missing for key: ${q.questionKey} in language: ${this.language}`);
            }

            // Use translation for question text and options
            testContent.innerHTML = `
                <div class="question-container">
                    <p class="question-text">${questionText || `[${q.questionKey} - Translation Missing]`}</p>
                    ${q.options.map((option, index) => {
                        const optionText = translations[this.language][option.textKey];
                        if (!optionText) {
                            console.error(`MBTI Option translation missing for key: ${option.textKey} in language: ${this.language}`);
                        }
                        return `
                            <button class="option-button" data-value="${option.value}">${optionText || `[${option.textKey} - Translation Missing]`}</button>
                        `;
                    }).join('')}
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
        const descKey = `${mbtiType}_desc`;
        const description = translations[this.language][descKey];
        if (!description) {
            console.error(`MBTI Description translation missing for key: ${descKey} in language: ${this.language}`);
        }
        return description || translations[this.language][`mbti_type_not_found`] || `[${descKey} - Translation Missing]`;
    }

    showResults() {
        const testContent = this.shadowRoot.getElementById('test-content');
        const mbtiType = this.calculateMbti();
        const description = this.getMbtiDescription(mbtiType); // This already handles missing translation
        const resultTitle = translations[this.language].mbti_result_title;
        const resultDisclaimer = translations[this.language].mbti_result_disclaimer;
        const retakeButtonText = translations[this.language].retake_button;

        if (!resultTitle) console.error(`MBTI Result Title translation missing in language: ${this.language}`);
        if (!resultDisclaimer) console.error(`MBTI Result Disclaimer translation missing in language: ${this.language}`);
        if (!retakeButtonText) console.error(`Retake Button translation missing in language: ${this.language}`);

        testContent.innerHTML = `
            <div class="results-container">
                <h3>${resultTitle || '[MBTI Result Title - Translation Missing]'}</h3>
                <p><strong>${mbtiType}</strong> - ${description}</p>
                <p>${resultDisclaimer || '[MBTI Result Disclaimer - Translation Missing]'}</p>
                <button class="retake-button">${retakeButtonText || '[Retake Test - Translation Missing]'}</button>
            </div>
        `;
        this.shadowRoot.querySelector('.retake-button').addEventListener('click', () => {
            this.resetTest();
            this.render();
        });
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
        this.allQuestions = [
            { questionKey: "iq_q1", optionsKeys: ["iq_q1_opt1", "iq_q1_opt2", "iq_q1_opt3", "iq_q1_opt4"], correctAnswerIndex: 1 }, // +2, +3, +4, +5, +6
            { questionKey: "iq_q2", optionsKeys: ["iq_q2_opt1", "iq_q2_opt2", "iq_q2_opt3", "iq_q2_opt4"], correctAnswerIndex: 0 },
            { questionKey: "iq_q3", optionsKeys: ["iq_q3_opt1", "iq_q3_opt2", "iq_q3_opt3", "iq_q3_opt4"], correctAnswerIndex: 2 },
            { questionKey: "iq_q4", optionsKeys: ["iq_q4_opt1", "iq_q4_opt2", "iq_q4_opt3", "iq_q4_opt4"], correctAnswerIndex: 3 },
            { questionKey: "iq_q5", optionsKeys: ["iq_q5_opt1", "iq_q5_opt2", "iq_q5_opt3", "iq_q5_opt4"], correctAnswerIndex: 2 },
            { questionKey: "iq_q6", optionsKeys: ["iq_q6_opt1", "iq_q6_opt2", "iq_q6_opt3", "iq_q6_opt4"], correctAnswerIndex: 1 },
            { questionKey: "iq_q7", optionsKeys: ["iq_q7_opt1", "iq_q7_opt2", "iq_q7_opt3", "iq_q7_opt4"], correctAnswerIndex: 3 },
            { questionKey: "iq_q8", optionsKeys: ["iq_q8_opt1", "iq_q8_opt2", "iq_q8_opt3", "iq_q8_opt4"], correctAnswerIndex: 1 },
            { questionKey: "iq_q9", optionsKeys: ["iq_q9_opt1", "iq_q9_opt2", "iq_q9_opt3", "iq_q9_opt4"], correctAnswerIndex: 1 },
            { questionKey: "iq_q10", optionsKeys: ["iq_q10_opt1", "iq_q10_opt2", "iq_q10_opt3", "iq_q10_opt4"], correctAnswerIndex: 0 },
            { questionKey: "iq_q11", optionsKeys: ["iq_q11_opt1", "iq_q11_opt2", "iq_q11_opt3", "iq_q11_opt4"], correctAnswerIndex: 2 },
            { questionKey: "iq_q12", optionsKeys: ["iq_q12_opt1", "iq_q12_opt2", "iq_q12_opt3", "iq_q12_opt4"], correctAnswerIndex: 0 },
            { questionKey: "iq_q13", optionsKeys: ["iq_q13_opt1", "iq_q13_opt2", "iq_q13_opt3", "iq_q13_opt4"], correctAnswerIndex: 2 },
            { questionKey: "iq_q14", optionsKeys: ["iq_q14_opt1", "iq_q14_opt2", "iq_q14_opt3", "iq_q14_opt4"], correctAnswerIndex: 2 },
            { questionKey: "iq_q15", optionsKeys: ["iq_q15_opt1", "iq_q15_opt2", "iq_q15_opt3", "iq_q15_opt4"], correctAnswerIndex: 3 },
            { questionKey: "iq_q16", optionsKeys: ["iq_q16_opt1", "iq_q16_opt2", "iq_q16_opt3", "iq_q16_opt4"], correctAnswerIndex: 2 },
            { questionKey: "iq_q17", optionsKeys: ["iq_q17_opt1", "iq_q17_opt2", "iq_q17_opt3", "iq_q17_opt4"], correctAnswerIndex: 1 },
            { questionKey: "iq_q18", optionsKeys: ["iq_q18_opt1", "iq_q18_opt2", "iq_q18_opt3", "iq_q18_opt4"], correctAnswerIndex: 1 },
            { questionKey: "iq_q19", optionsKeys: ["iq_q19_opt1", "iq_q19_opt2", "iq_q19_opt3", "iq_q19_opt4"], correctAnswerIndex: 1 },
            { questionKey: "iq_q20", optionsKeys: ["iq_q20_opt1", "iq_q20_opt2", "iq_q20_opt3", "iq_q20_opt4"], correctAnswerIndex: 0 },
            { questionKey: "iq_q21", optionsKeys: ["iq_q21_opt1", "iq_q21_opt2", "iq_q21_opt3", "iq_q21_opt4"], correctAnswerIndex: 1 },
            { questionKey: "iq_q22", optionsKeys: ["iq_q22_opt1", "iq_q22_opt2", "iq_q22_opt3", "iq_q22_opt4"], correctAnswerIndex: 0 },
            { questionKey: "iq_q23", optionsKeys: ["iq_q23_opt1", "iq_q23_opt2", "iq_q23_opt3", "iq_q23_opt4"], correctAnswerIndex: 3 },
            { questionKey: "iq_q24", optionsKeys: ["iq_q24_opt1", "iq_q24_opt2", "iq_q24_opt3", "iq_q24_opt4"], correctAnswerIndex: 2 },
            { questionKey: "iq_q25", optionsKeys: ["iq_q25_opt1", "iq_q25_opt2", "iq_q25_opt3", "iq_q25_opt4"], correctAnswerIndex: 0 },
            { questionKey: "iq_q26", optionsKeys: ["iq_q26_opt1", "iq_q26_opt2", "iq_q26_opt3", "iq_q26_opt4"], correctAnswerIndex: 0 },
            { questionKey: "iq_q27", optionsKeys: ["iq_q27_opt1", "iq_q27_opt2", "iq_q27_opt3", "iq_q27_opt4"], correctAnswerIndex: 0 },
            { questionKey: "iq_q28", optionsKeys: ["iq_q28_opt1", "iq_q28_opt2", "iq_q28_opt3", "iq_q28_opt4"], correctAnswerIndex: 0 },
            { questionKey: "iq_q29", optionsKeys: ["iq_q29_opt1", "iq_q29_opt2", "iq_q29_opt3", "iq_q29_opt4"], correctAnswerIndex: 1 },
            { questionKey: "iq_q30", optionsKeys: ["iq_q30_opt1", "iq_q30_opt2", "iq_q30_opt3", "iq_q30_opt4"], correctAnswerIndex: 0 },
        ];
        this.selectedQuestions = []; // Will hold 10 randomly selected questions
        this.userAnswers = Array(this.questions.length).fill(null);
        this.currentQuestionIndex = 0;
        this.language = currentLang; // Initialize language
        this.resetTest();
    }

    resetTest() {
        this.userAnswers = Array(this.selectedQuestions.length).fill(null); // Reset based on selected questions
        this.currentQuestionIndex = 0;
        this.score = 0;
        // Randomly select 10 questions
        this.selectedQuestions = shuffleArray([...this.allQuestions]).slice(0, 10);
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
        if (this.currentQuestionIndex < this.selectedQuestions.length) {
            const q = this.selectedQuestions[this.currentQuestionIndex];
            const questionText = translations[this.language][q.questionKey];
            if (!questionText) {
                console.error(`IQ Question translation missing for key: ${q.questionKey} in language: ${this.language}`);
            }

            // Use translation for question text and options
            testContent.innerHTML = `
                <div class="question-container">
                    <p class="question-text">${questionText || `[${q.questionKey} - Translation Missing]`}</p>
                    ${q.optionsKeys.map((optionKey, index) => {
                        const optionText = translations[this.language][optionKey];
                        if (!optionText) {
                            console.error(`IQ Option translation missing for key: ${optionKey} in language: ${this.language}`);
                        }
                        return `
                            <button class="option-button" data-index="${index}">${optionText || `[${optionKey} - Translation Missing]`}</button>
                        `;
                    }).join('')}
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
        this.selectedQuestions.forEach((q, index) => { // Iterate over selectedQuestions
            if (this.userAnswers[index] === q.correctAnswerIndex) {
                correctCount++;
            }
        });
        // Simplistic IQ calculation for demonstration, scaled from 80-160
        const rawScore = (correctCount / this.selectedQuestions.length);
        return Math.round(80 + (rawScore * 80)); 
    }

    showResults() {
        const testContent = this.shadowRoot.getElementById('test-content');
        this.score = this.calculateIqScore();
        const resultTitle = translations[this.language].iq_result_title;
        const resultDisclaimer = translations[this.language].iq_result_disclaimer;
        const retakeButtonText = translations[this.language].retake_button;

        if (!resultTitle) console.error(`IQ Result Title translation missing in language: ${this.language}`);
        if (!resultDisclaimer) console.error(`IQ Result Disclaimer translation missing in language: ${this.language}`);
        if (!retakeButtonText) console.error(`Retake Button translation missing in language: ${this.language}`);

        testContent.innerHTML = `
            <div class="results-container">
                <h3>${resultTitle || '[IQ Result Title - Translation Missing]'}</h3>
                <p><strong>${this.score}</strong> 입니다.</p>
                <p>${resultDisclaimer || '[IQ Result Disclaimer - Translation Missing]'}</p>
                <button class="retake-button">${retakeButtonText || '[Retake Test - Translation Missing]'}</button>
            </div>
        `;
        this.shadowRoot.querySelector('.retake-button').addEventListener('click', () => {
            this.resetTest();
            this.render();
        });
    }

    // New method to update language
    updateLanguage(lang) {
        this.language = lang;
        this.render(); // Re-render to apply new language
    }
}
customElements.define('iq-test', IqTest);