// js/i18n.js

const translations = {
    en: {
        title_main: "InsightHub - Your Source for In-depth Analysis",
        meta_description_main: "InsightHub provides in-depth analysis and articles on Bitcoin, big tech, robotics, and their societal impact. Stay informed with our expert insights.",
        meta_keywords_main: "Bitcoin, big tech, robotics, AI, technology, investment, future trends, societal impact, analysis, articles",
        og_title_main: "InsightHub - Your Source for In-depth Analysis",
        og_image_main: "https://via.placeholder.com/1200x630.png?text=InsightHub", // Placeholder, consider replacing with actual image
        twitter_title_main: "InsightHub - Your Source for In-depth Analysis",
        twitter_description_main: "InsightHub provides in-depth analysis and articles on Bitcoin, big tech, robotics, and their societal impact. Stay informed with our expert insights.",
        twitter_image_main: "https://via.placeholder.com/1200x630.png?text=InsightHub", // Placeholder, consider replacing with actual image

        nav_home: "Home",
        nav_blog: "Blog",
        nav_about: "About Us",
        nav_contact: "Contact",

        hero_title: "Explore the Future, Understand the Impact",
        hero_subtitle1: "Dive into in-depth analyses of Bitcoin, big tech, and robotics.",
        hero_subtitle2: "Stay ahead with expert insights and future trends.",
        hero_button: "Read Our Latest Posts",

        latest_posts_title: "Latest Posts",
        post_mental_wellness_title: "Mental Wellness in the Digital Age: Strategies for a Balanced Life",
        post_mental_wellness_excerpt: "The digital age presents unique challenges to mental well-being. Discover strategies to navigate constant notifications, social media pressures, and cultivate a balanced life in our hyper-connected world.",
        post_crypto_blockchain_title: "Understanding Cryptocurrency and Blockchain: Beyond the Hype",
        post_crypto_blockchain_excerpt: "Delve into the foundational technology behind cryptocurrencies. Learn about blockchain as a distributed ledger and its potential to reshape finance, logistics, and more, moving past speculative headlines.",
        post_5g_impact_title: "The Impact of 5G Technology on Our Daily Lives",
        post_5g_impact_excerpt: "Explore how 5G's blazing speeds and ultra-low latency are transforming industries from smart cities to healthcare. Understand its role in unleashing the full potential of the Internet of Things (IoT).",
        read_more_button: "Read More",

        footer_privacy: "Privacy Policy",
        footer_terms: "Terms of Service",
        footer_contact: "Contact Us",
        footer_about: "About Us",
        footer_copyright: "&copy; 2026 InsightHub. All rights reserved.",

        blog_index_title: "InsightHub Blog",
        blog_index_heading: "Our Blog",
        blog_bitcoin_trends_title: "Bitcoin Investment Trends: Price Volatility and Institutional Investment",
        blog_big_tech_trends_title: "Future Trends of Big Tech Companies: AI, Connectivity, Metaverse",
        blog_robotics_trends_title: "Future Trends in Robotics: AI, Collaboration, Sustainability",
        blog_big_tech_impact_title: "The Impact of Big Tech on Society: Positive Aspects and Challenges",

        post_bitcoin_investment_trends_title: "Bitcoin Investment Trends: Price Volatility and Institutional Investment",
        post_bitcoin_investment_trends_heading: "Bitcoin Investment Trends: Price Volatility and Institutional Investment",
        post_bitcoin_investment_trends_subheading: "Key Trends in the Recent Bitcoin Market",
        post_bitcoin_investment_trends_p1: "Recently, Bitcoin has shown significant volatility, fluctuating between $88,000 and $92,000. These movements are influenced by geopolitical tensions, US inflation data, and regulatory uncertainties.",
        post_bitcoin_investment_trends_p2: "Some analysts view this sideways movement as healthy consolidation, maintaining long-term optimism for Bitcoin to reach six figures by year-end. However, investor sentiment remains cautious due to political and regulatory uncertainties.",
        post_bitcoin_investment_trends_h3_1: "Continued Increase in Institutional Investment",
        post_bitcoin_investment_trends_p3: "Despite recent volatility, institutional investment continues to be a major driver in the Bitcoin market. Wall Street banks are launching new Bitcoin financial products, and large institutional investors are increasing their allocations to Bitcoin. Major Bitcoin holding companies like MicroStrategy are continuously buying large amounts of Bitcoin.",
        post_bitcoin_investment_trends_p4: "VanEck predicts Bitcoin could potentially reach $53 million by 2050 in its most optimistic scenario, citing 'hyper-Bitcoinization' as a key driver. Changpeng Zhao, co-founder of Binance, also expressed confidence that Bitcoin will reach $200,000 due to evolving market structures, regulatory changes, and increased institutional participation.",
        post_bitcoin_investment_trends_p5: "The White House is reportedly promoting a pro-crypto, pro-Bitcoin agenda, with plans to buy new Bitcoin for the Strategic Bitcoin Reserve and new legislation to make it easier for banks to hold Bitcoin.",
        post_bitcoin_investment_trends_h3_2: "Other Notable News",
        post_bitcoin_investment_trends_li_1: "A dormant Bitcoin whale sold half of its 5,000 BTC stash after 12 years, realizing a 31,250% profit.",
        post_bitcoin_investment_trends_li_2: "Jefferies strategist Chris Wood is selling Bitcoin and shifting to physical gold, citing quantum computing risks to Bitcoin's cryptography.",
        post_bitcoin_investment_trends_li_3: "Ledger is targeting a $4 billion US IPO as crypto listings grow.",
        post_bitcoin_investment_trends_li_4: "Crypto firm BitGo raised $212.8 million in its US IPO.",
        post_bitcoin_investment_trends_li_5: "India's digital asset ecosystem is thriving under strict regulatory oversight, with FIU-registered crypto exchanges being a legal necessity for investors.",
        post_bitcoin_investment_trends_source: "Sources: newsnow.co.uk, indiatimes.com, fool.com, bitcoin.com",
        blog_return_to_list: "Return to Blog List",

        post_big_tech_future_trends_title: "Future Trends of Big Tech Companies: AI, Connectivity, Metaverse",
        post_big_tech_future_trends_heading: "Future Trends of Big Tech Companies: AI, Connectivity, Metaverse",
        post_big_tech_future_trends_h2_1: "Dominant Role of Artificial Intelligence (AI)",
        post_big_tech_future_trends_p1: "The future of big tech companies will be largely driven by Artificial Intelligence (AI). AI is moving beyond simple applications to become a core component of business operations. This includes a 'small-model explosion' of highly capable, domain-specific AI models requiring less computing power, and a shift towards multi-modal AI capabilities. Companies are restructuring to become 'AI-native,' focusing on modular architectures and embedded governance.",
        post_big_tech_future_trends_h3_1: "Rise of Agentic AI",
        post_big_tech_future_trends_p2: "Agentic AI refers to systems capable of independently planning and executing complex, multi-step tasks, acting as 'virtual coworkers' that communicate and adapt autonomously. This signifies a major leap in AI development.",
        post_big_tech_future_trends_h3_2: "Convergence of AI and Robotics",
        post_big_tech_future_trends_p3: "The integration of AI with robotics is expected to be a major trend, leading to physical AI applications.",
        post_big_tech_future_trends_h2_2: "Advanced Connectivity and Cloud Computing",
        post_big_tech_future_trends_p4: "Technologies such as 5G, the upcoming 6G, private networks, and edge computing are crucial for enabling digital transformation by providing high-speed, low-latency connections necessary for AI and other advanced applications. Cloud and hybrid cloud strategies will continue to accelerate digital transformation for businesses.",
        post_big_tech_future_trends_h2_3: "Metaverse and VR Technologies",
        post_big_tech_future_trends_p5: "These technologies have the potential to revolutionize daily life and work environments by enabling new forms of collaboration and interaction.",
        post_big_tech_future_trends_h2_4: "Security and Privacy",
        post_big_tech_future_trends_p6: "Security and privacy remain critical issues that companies will continuously strive to address amidst technological advancements.",
        post_big_tech_future_trends_p7: "These trends indicate a future where technology companies will focus on deeper AI integration, enhanced connectivity, and immersive digital experiences, all while navigating complex security and privacy challenges.",
        post_big_tech_future_trends_source: "Sources: deloitte.com, teraflow.ai, samsungsds.com",

        post_robotics_future_trends_title: "Future Trends in Robotics: AI, Collaboration, Sustainability",
        post_robotics_future_trends_heading: "Future Trends in Robotics: AI, Collaboration, Sustainability",
        post_robotics_future_trends_h2_1: "Deepening Integration of Artificial Intelligence (AI)",
        post_robotics_future_trends_p1: "The field of robotics is rapidly evolving with advancements in Artificial Intelligence (AI), machine learning, and sensor technologies. Analytical AI allows robots to process and analyze large datasets from their sensors, optimizing operations and managing unpredictable environments. Physical AI enables robots to train in virtual environments and learn from experience, while generative AI aims to create more intuitive control interfaces, potentially allowing natural language interaction instead of coding.",
        post_robotics_future_trends_h3_1: "Rise of Humanoid Robots",
        post_robotics_future_trends_p2: "Humanoid robots are gaining attention as potential general-purpose tools capable of performing diverse tasks, from household chores to assembly line work. While startups are developing these versatile humanoids, industrial manufacturers are currently focusing on humanoids for single-purpose tasks, particularly in the automotive and warehousing sectors.",
        post_robotics_future_trends_h2_2: "Sustainability and Energy Efficiency",
        post_robotics_future_trends_p3: "Robotics plays a crucial role in achieving environmental sustainability goals. Robots enhance precision, reducing material waste and improving manufacturing efficiency. They are also vital in producing green energy technologies. Furthermore, robot technology itself is becoming more energy-efficient through lightweight construction and advanced gripper designs.",
        post_robotics_future_trends_h2_3: "New Business Areas",
        post_robotics_future_trends_p4: "Business models like 'Robot-as-a-Service' (RaaS) are emerging, allowing small and medium-sized enterprises (SMEs) to utilize robotic automation without high initial investments. Low-cost robotics is also addressing new market segments with less stringent requirements for precision and payload, including construction, laboratory automation, and warehousing.",
        post_robotics_future_trends_h2_4: "Addressing Labor Shortages",
        post_robotics_future_trends_p5: "Robotics is increasingly being deployed to mitigate global labor shortages, particularly in the manufacturing sector, which is affected by demographic changes. By automating 'dirty, dull, dangerous, or delicate' tasks, robots allow human workers to focus on higher-value activities. Innovations like collaborative robots (cobots) and mobile manipulators are helping to fill labor gaps.",
        post_robotics_future_trends_h2_5: "Collaborative Robotics (Cobots)",
        post_robotics_future_trends_p6: "Collaborative robots are designed to work safely alongside humans, enhancing human-robot interaction and improving efficiency. These cobots are becoming more affordable and are expanding from factories into everyday environments, assisting in tasks like serving food, cleaning, and elder care.",
        post_robotics_future_trends_h2_6: "Advanced Robotics Integration",
        post_robotics_future_trends_p7: "The future of robotics involves deeper integration with other advanced technologies such as machine learning, the Internet of Things (IoT), and smart sensors. This integration leads to improved automation, predictive maintenance, and real-time decision-making capabilities for robots.",
        post_robotics_future_trends_p8: "These trends are set to transform industries such as manufacturing, healthcare (e.g., robotic surgery, assistive robots, telemedicine), and logistics (e.g., autonomous vehicles, drone deliveries). The overall direction points towards more autonomous, intelligent, and versatile robots that collaborate with humans to create more efficient, safe, and sustainable operations.",
        post_robotics_future_trends_source: "Sources: ifr.org, niryo.com, marketsandmarkets.com, youtube.com, geeksforgeeks.org",

        post_impact_of_big_tech_title: "The Impact of Big Tech on Society: Positive Aspects and Challenges",
        post_impact_of_big_tech_heading: "The Impact of Big Tech on Society: Positive Aspects and Challenges",
        post_impact_of_big_tech_h2_1: "Positive Impact of Big Tech",
        post_impact_of_big_tech_p1: "Big tech companies profoundly and multifacetedly impact society, bringing both significant benefits and considerable challenges. Their influence extends across communication, economy, healthcare, education, and even political discourse.",
        post_impact_of_big_tech_p2: "On the positive side, big tech has revolutionized communication, enabling global connectivity through platforms for social media, instant messaging, and video conferencing. In healthcare, AI-driven diagnostics, telemedicine, and big data analytics are leading to advancements that improve patient outcomes and accessibility. Education has also been democratized through online courses, digital learning platforms, and personalized AI-powered learning experiences. Economically, the tech sector has been a major driver of growth, creating new industries and job opportunities, while automation has boosted productivity. Furthermore, technology can enhance public services and plays a crucial role in addressing global challenges like climate change.",
        post_impact_of_big_tech_h2_2: "Challenges and Concerns of Big Tech",
        post_impact_of_big_tech_p3: "However, the pervasive influence of big tech also presents several concerns. These include the potential for manipulation and misinformation, as platforms can control information and influence public attention and political narratives. There are also growing concerns about mental health crises linked to excessive screen time and social media use, leading to feelings of loneliness, anxiety, and depression. Privacy violations are a significant issue due to the extensive collection and analysis of personal data. Other negative impacts include environmental damage, algorithmic bias that can exacerbate societal inequalities, and the concentration of power in a few large corporations. The digital divide, which refers to the gap between those with and without access to technology, can also worsen existing inequalities in education and employment. Lastly, automation, while efficient, raises concerns about job displacement in various sectors.",
        post_impact_of_big_tech_source: "Sources: issvalue.com, un.org, medium.com, oup.com, pwc.com.au"
    },
    ko: {
        title_main: "인사이트허브 - 심층 분석을 위한 정보원",
        meta_description_main: "인사이트허브는 비트코인, 빅테크, 로봇 공학 및 사회적 영향에 대한 심층 분석 및 기사를 제공합니다. 전문가 통찰력으로 최신 정보를 얻으십시오.",
        meta_keywords_main: "비트코인, 빅테크, 로봇 공학, AI, 기술, 투자, 미래 동향, 사회적 영향, 분석, 기사",
        og_title_main: "인사이트허브 - 심층 분석을 위한 정보원",
        og_image_main: "https://via.placeholder.com/1200x630.png?text=인사이트허브",
        twitter_title_main: "인사이트허브 - 심층 분석을 위한 정보원",
        twitter_description_main: "인사이트허브는 비트코인, 빅테크, 로봇 공학 및 사회적 영향에 대한 심층 분석 및 기사를 제공합니다. 전문가 통찰력으로 최신 정보를 얻으십시오.",
        twitter_image_main: "https://via.placeholder.com/1200x630.png?text=인사이트허브",

        nav_home: "홈",
        nav_blog: "블로그",
        nav_about: "회사 소개",
        nav_contact: "연락처",

        hero_title: "미래를 탐구하고 영향을 이해하세요",
        hero_subtitle1: "비트코인, 빅테크 및 로봇 공학에 대한 심층 분석에 참여하세요.",
        hero_subtitle2: "전문가 통찰력과 미래 동향으로 앞서 나가세요.",
        hero_button: "최신 게시물 읽기",

        latest_posts_title: "최신 게시물",
        post_mental_wellness_title: "디지털 시대의 정신 건강: 균형 잡힌 삶을 위한 전략",
        post_mental_wellness_excerpt: "디지털 시대는 정신 건강에 독특한 도전을 제시합니다. 끊임없는 알림, 소셜 미디어 압력을 헤쳐나가고 초연결 시대에 균형 잡힌 삶을 가꾸기 위한 전략을 발견하십시오.",
        post_crypto_blockchain_title: "암호화폐 및 블록체인 이해: 과대 광고를 넘어",
        post_crypto_blockchain_excerpt: "암호화폐의 기반 기술을 탐구하십시오. 분산 원장으로서 블록체인과 금융, 물류 등을 재편할 잠재력에 대해 알아보세요. 투기성 헤드라인을 넘어섭니다.",
        post_5g_impact_title: "5G 기술이 우리 일상에 미치는 영향",
        post_5g_impact_excerpt: "5G의 놀라운 속도와 초저지연이 스마트 도시에서 의료에 이르는 산업을 어떻게 변화시키고 있는지 살펴보십시오. 사물 인터넷(IoT)의 잠재력을 최대한 발휘하는 데 있어 5G의 역할을 이해하십시오.",
        read_more_button: "더 읽기",

        footer_privacy: "개인정보처리방침",
        footer_terms: "서비스 약관",
        footer_contact: "문의하기",
        footer_about: "회사 소개",
        footer_copyright: "&copy; 2026 인사이트허브. 모든 권리 보유.",

        blog_index_title: "인사이트허브 블로그",
        blog_index_heading: "저희 블로그",
        blog_bitcoin_trends_title: "비트코인 투자 동향: 가격 변동과 기관 투자",
        blog_big_tech_trends_title: "빅테크 기업의 미래 동향: AI, 연결성, 메타버스",
        blog_robotics_trends_title: "로봇 공학의 미래 동향: AI, 협업, 지속 가능성",
        blog_big_tech_impact_title: "빅테크가 사회에 미치는 영향: 긍정적 측면과 도전 과제",

        post_bitcoin_investment_trends_title: "비트코인 투자 동향: 가격 변동과 기관 투자",
        post_bitcoin_investment_trends_heading: "비트코인 투자 동향: 가격 변동과 기관 투자",
        post_bitcoin_investment_trends_subheading: "최근 비트코인 시장의 주요 동향",
        post_bitcoin_investment_trends_p1: "최근 비트코인은 88,000달러에서 92,000달러 사이를 오르내리며 상당한 변동성을 보였습니다. 이러한 움직임은 지정학적 긴장, 미국의 인플레이션 데이터, 그리고 규제 불확실성 등 여러 요인에 의해 영향을 받고 있습니다.",
        post_bitcoin_investment_trends_p2: "일부 분석가들은 이러한 횡보 움직임을 건전한 통합 과정으로 보고 있으며, 연말까지 비트코인이 6자리 숫자에 도달할 것이라는 장기적인 낙관론을 유지하고 있습니다. 그러나 정치적, 규제적 불확실성으로 인해 투자 심리는 여전히 조심스러운 상황입니다.",
        post_bitcoin_investment_trends_h3_1: "기관 투자의 지속적인 증가",
        post_bitcoin_investment_trends_p3: "최근의 변동성에도 불구하고 기관 투자는 비트코인 시장의 주요 동력으로 작용하고 있습니다. 월스트리트 은행들은 새로운 비트코인 금융 상품을 출시하고 있으며, 대형 기관 투자자들은 비트코인에 대한 할당량을 늘리고 있습니다. 마이크로스트레티지와 같은 주요 비트코인 보유 기업들은 지속적으로 비트코인을 대량 매수하고 있습니다.",
        post_bitcoin_investment_trends_p4: "VanEck은 가장 낙관적인 시나리오에서 비트코인이 2050년까지 5천3백만 달러에 도달하여 금을 넘어설 수 있다고 예측하며, '하이퍼 비트코인화'를 주요 동력으로 꼽았습니다. 바이낸스의 공동 설립자 창펑 자오 또한 시장 구조의 진화, 규제 변화, 기관 참여 증가로 인해 비트코인이 20만 달러에 도달할 것이라고 확신했습니다.",
        post_bitcoin_investment_trends_p5: "미국 백악관은 친(親)암호화폐, 친(親)비트코인 정책을 추진하고 있으며, 전략적 비트코인 비축량을 위한 새로운 비트코인 매입 계획과 은행이 비트코인을 더 쉽게 보유할 수 있도록 하는 새로운 법안을 추진 중인 것으로 알려졌습니다.",
        post_bitcoin_investment_trends_h3_2: "기타 주목할 만한 소식",
        post_bitcoin_investment_trends_li_1: "12년 만에 휴면 상태였던 비트코인 고래가 보유량의 절반을 매각하여 31,250%의 수익을 실현했습니다.",
        post_bitcoin_investment_trends_li_2: "Jefferies의 전략가 크리스 우드는 양자 컴퓨팅이 비트코인 암호화에 미칠 위험을 언급하며 비트코인을 매각하고 실물 금으로 전환하고 있습니다.",
        post_bitcoin_investment_trends_li_3: "Ledger는 암호화폐 상장이 증가함에 따라 40억 달러 규모의 미국 IPO를 목표로 하고 있습니다.",
        post_bitcoin_investment_trends_li_4: "암호화폐 기업 BitGo는 미국 IPO에서 2억 1,280만 달러를 모금했습니다.",
        post_bitcoin_investment_trends_li_5: "인도의 디지털 자산 생태계는 엄격한 규제 감독 하에 번성하고 있으며, FIU 등록 암호화폐 거래소는 투자자들에게 법적 필수 요소입니다.",
        post_bitcoin_investment_trends_source: "출처: newsnow.co.uk, indiatimes.com, fool.com, bitcoin.com",
        blog_return_to_list: "블로그 목록으로 돌아가기",

        post_big_tech_future_trends_title: "빅테크 기업의 미래 동향: AI, 연결성, 메타버스",
        post_big_tech_future_trends_heading: "빅테크 기업의 미래 동향: AI, 연결성, 메타버스",
        post_big_tech_future_trends_h2_1: "인공지능(AI)의 지배적 역할",
        post_big_tech_future_trends_p1: "빅테크 기업들의 미래는 인공지능(AI)에 의해 크게 좌우될 것입니다. AI는 단순한 애플리케이션을 넘어 비즈니스 운영의 핵심 구성 요소가 되고 있습니다. 이는 컴퓨팅 파워를 덜 필요로 하는 고도로 유능한 도메인별 AI 모델의 '소형 모델 폭발'과 다중 모드 AI 기능으로의 전환을 포함합니다. 기업들은 모듈형 아키텍처와 임베디드 거버넌스에 중점을 두어 'AI-네이티브'로 재편되고 있습니다.",
        post_big_tech_future_trends_h3_1: "에이전트 AI의 부상",
        post_big_tech_future_trends_p2: "에이전트 AI는 스스로 복잡한 다단계 작업을 계획하고 실행할 수 있는 시스템으로, 자율적으로 소통하고 적응하는 '가상 동료' 역할을 합니다. 이는 AI 발전의 중요한 도약을 의미합니다.",
        post_big_tech_future_trends_h3_2: "AI와 로봇 공학의 융합",
        post_big_tech_future_trends_p3: "AI와 로봇 공학의 통합은 물리적 AI 애플리케이션으로 이어지는 주요 트렌드가 될 것으로 예상됩니다.",
        post_big_tech_future_trends_h2_2: "고급 연결성 및 클라우드 컴퓨팅",
        post_big_tech_future_trends_p4: "5G, 다가오는 6G, 사설 네트워크, 엣지 컴퓨팅과 같은 기술은 AI 및 기타 고급 애플리케이션에 필요한 고속, 저지연 연결을 제공하여 디지털 전환을 가능하게 하는 데 중요합니다. 클라우드 및 하이브리드 클라우드 전략은 기업의 디지털 전환을 계속 가속화할 것입니다.",
        post_big_tech_future_trends_h2_3: "메타버스 및 VR 기술",
        post_big_tech_future_trends_p5: "이러한 기술은 새로운 형태의 협업 및 상호 작용을 가능하게 하여 일상 생활과 작업 환경에 혁명을 일으킬 잠재력을 가지고 있습니다.",
        post_big_tech_future_trends_h2_4: "보안 및 개인 정보 보호",
        post_big_tech_future_trends_p6: "보안 및 개인 정보 보호는 기술 발전 속에서도 기업들이 지속적으로 해결해야 할 중요한 문제입니다.",
        post_big_tech_future_trends_p7: "이러한 트렌드는 기술 기업들이 더 깊은 AI 통합, 향상된 연결성, 몰입형 디지털 경험에 집중하고 동시에 복잡한 보안 및 개인 정보 보호 문제를 해결해야 하는 미래를 나타냅니다.",
        post_big_tech_future_trends_source: "출처: deloitte.com, teraflow.ai, samsungsds.com",

        post_robotics_future_trends_title: "로봇 공학의 미래 동향: AI, 협업, 지속 가능성",
        post_robotics_future_trends_heading: "로봇 공학의 미래 동향: AI, 협업, 지속 가능성",
        post_robotics_future_trends_h2_1: "인공지능(AI) 통합의 심화",
        post_robotics_future_trends_p1: "로봇 공학 분야는 인공지능(AI), 머신러닝, 센서 기술의 발전으로 빠르게 진화하고 있습니다. 분석 AI는 로봇이 센서로부터 대량의 데이터를 처리하고 분석하여 예측 불가능한 환경에서도 작업을 최적화하고 관리할 수 있도록 합니다. 물리 AI는 로봇이 가상 환경에서 훈련하고 경험을 통해 학습할 수 있게 하며, 생성 AI는 코딩 대신 자연어 상호작용을 통해 보다 직관적인 제어 인터페이스를 만드는 것을 목표로 합니다.",
        post_robotics_future_trends_h3_1: "휴머노이드 로봇의 부상",
        post_robotics_future_trends_p2: "휴머노이드 로봇은 가사 작업부터 조립 라인 작업에 이르기까지 다양한 작업을 수행할 수 있는 잠재적인 범용 도구로 주목받고 있습니다. 스타트업들이 이러한 다목적 휴머노이드를 개발하고 있지만, 산업 제조업체들은 현재 특히 자동차 및 창고 부문에서 단일 목적 작업을 위한 휴머노이드에 중점을 두고 있습니다.",
        post_robotics_future_trends_h2_2: "지속 가능성 및 에너지 효율성",
        post_robotics_future_trends_p3: "로봇 공학은 환경 지속 가능성 목표 달성에 중요한 역할을 합니다. 로봇은 정밀도를 향상시켜 재료 낭비를 줄이고 제조 효율성을 높입니다. 또한 녹색 에너지 기술 생산에도 필수적입니다. 로봇 기술 자체도 경량 구조와 고급 그리퍼 설계를 통해 에너지 효율성을 높이고 있습니다.",
        post_robotics_future_trends_h2_3: "새로운 비즈니스 분야",
        post_robotics_future_trends_p4: "'서비스형 로봇(RaaS)'과 같은 비즈니스 모델이 등장하여 중소기업(SME)이 높은 초기 투자 없이 로봇 자동화를 활용할 수 있도록 합니다. 저비용 로봇 공학은 건설, 실험실 자동화, 창고 등 덜 엄격한 정밀도 및 페이로드 요구 사항을 가진 새로운 시장 부문을 공략하고 있습니다.",
        post_robotics_future_trends_h2_4: "노동력 부족 문제 해결",
        post_robotics_future_trends_p5: "로봇 공학은 특히 인구 통계학적 변화의 영향을 받는 제조 부문의 전 세계적인 노동력 부족 문제를 해결하기 위해 점점 더 많이 배치되고 있습니다. 로봇은 '더럽고, 지루하고, 위험하거나, 섬세한' 작업을 자동화하여 인간 작업자가 고부가가치 활동에 집중할 수 있도록 합니다. 협업 로봇(코봇) 및 모바일 조작기와 같은 혁신은 노동력 격차를 해소하는 데 도움이 됩니다.",
        post_robotics_future_trends_h2_5: "협업 로봇 공학 (코봇)",
        post_robotics_future_trends_p6: "협업 로봇은 인간과 안전하게 함께 작업하도록 설계되어 인간-로봇 상호 작용을 강화하고 효율성을 향상시킵니다. 이러한 코봇은 점점 더 저렴해지고 있으며 공장에서 벗어나 일상 환경으로 확장되어 음식 서빙, 청소, 노인 돌봄과 같은 작업을 지원하고 있습니다.",
        post_robotics_future_trends_h2_6: "고급 로봇 공학 통합",
        post_robotics_future_trends_p7: "로봇 공학의 미래는 머신러닝, 사물 인터넷(IoT), 스마트 센서와 같은 다른 고급 기술과의 심층적인 통합을 포함합니다. 이러한 통합은 로봇의 자동화, 예측 유지 보수 및 실시간 의사 결정 기능을 향상시킵니다.",
        post_robotics_future_trends_p8: "이러한 트렌드는 제조, 의료(예: 로봇 수술, 보조 로봇, 원격 의료) 및 물류(예: 자율 주행 차량, 드론 배달)와 같은 산업을 변화시킬 것입니다. 전반적인 방향은 인간과 협력하여 보다 효율적이고 안전하며 지속 가능한 운영을 만드는 보다 자율적이고 지능적이며 다목적 로봇을 향하고 있습니다.",
        post_robotics_future_trends_source: "출처: ifr.org, niryo.com, marketsandmarkets.com, youtube.com, geeksforgeeks.org",

        post_impact_of_big_tech_title: "빅테크가 사회에 미치는 영향: 긍정적 측면과 도전 과제",
        post_impact_of_big_tech_heading: "빅테크가 사회에 미치는 영향: 긍정적 측면과 도전 과제",
        post_impact_of_big_tech_h2_1: "빅테크의 긍정적인 영향",
        post_impact_of_big_tech_p1: "빅테크 기업들은 사회에 지대한 영향을 미치며, 상당한 이점과 함께 많은 도전을 야기합니다. 그들의 영향력은 통신, 경제, 의료, 교육, 심지어 정치 담론에까지 확장됩니다.",
        post_impact_of_big_tech_p2: "긍정적인 측면에서 빅테크는 소셜 미디어, 인스턴트 메시징, 화상 회의 플랫폼을 통해 글로벌 연결성을 가능하게 하여 통신을 혁신했습니다. 의료 분야에서는 AI 기반 진단, 원격 의료 및 빅데이터 분석이 환자 결과를 개선하고 접근성을 높이는 발전을 이끌고 있습니다. 교육 또한 온라인 강좌, 디지털 학습 플랫폼 및 개인화된 AI 기반 학습 경험을 통해 민주화되었습니다. 경제적으로 기술 부문은 새로운 산업과 일자리 창출의 주요 동력이었으며, 자동화는 생산성을 높였습니다. 또한 기술은 공공 서비스를 향상시키고 기후 변화와 같은 글로벌 과제를 해결하는 데 중요한 역할을 합니다.",
        post_impact_of_big_tech_h2_2: "빅테크의 도전 과제 및 우려 사항",
        post_impact_of_big_tech_p3: "그러나 빅테크의 광범위한 영향력은 여러 가지 우려를 낳습니다. 여기에는 플랫폼이 정보를 통제하고 대중의 관심과 정치적 내러티브에 영향을 미칠 수 있으므로 조작 및 잘못된 정보의 가능성이 포함됩니다. 과도한 스크린 시간과 소셜 미디어 사용과 관련된 정신 건강 위기에 대한 우려도 커지고 있으며, 이는 외로움, 불안 및 우울감으로 이어집니다. 개인 데이터의 광범위한 수집 및 분석으로 인해 개인 정보 침해가 중요한 문제입니다. 기타 부정적인 영향으로는 환경 피해, 사회적 불평등을 악화시킬 수 있는 알고리즘 편향, 소수의 대기업에 권력이 집중되는 현상이 있습니다. 기술 접근 유무에 따른 격차를 의미하는 디지털 격차는 교육 및 고용의 기존 불평등을 심화시킬 수 있습니다. 마지막으로 자동화는 효율적이지만, 다양한 부문에서 일자리 대체에 대한 우려를 제기합니다.",
        post_impact_of_big_tech_source: "출처: issvalue.com, un.org, medium.com, oup.com, pwc.com.au"
    }
};

let currentLang = localStorage.getItem('lang') || 'ko'; // Default to Korean

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    applyTranslations();
}

function applyTranslations() {
    const elements = document.querySelectorAll('[data-key]');
    elements.forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[currentLang] && translations[currentLang][key]) {
            // Special handling for content vs attributes
            if (element.tagName === 'META') {
                if (element.getAttribute('name') === 'description') {
                    element.setAttribute('content', translations[currentLang][key]);
                } else if (element.getAttribute('property') && element.getAttribute('property').startsWith('og:')) {
                    element.setAttribute('content', translations[currentLang][key]);
                } else if (element.getAttribute('property') && element.getAttribute('property').startsWith('twitter:')) {
                    element.setAttribute('content', translations[currentLang][key]);
                }
            } else if (element.tagName === 'TITLE') {
                element.textContent = translations[currentLang][key];
            } else {
                element.textContent = translations[currentLang][key];
            }
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // Language buttons
    const langEnButton = document.getElementById('lang-en');
    const langKoButton = document.getElementById('lang-ko');

    if (langEnButton) {
        langEnButton.addEventListener('click', () => setLanguage('en'));
    }
    if (langKoButton) {
        langKoButton.addEventListener('click', () => setLanguage('ko'));
    }

    applyTranslations();
});

// Export setLanguage for external use if needed
export { setLanguage, applyTranslations, currentLang };
