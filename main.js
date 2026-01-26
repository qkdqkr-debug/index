// main.js

const translations = {
    "en": {
        "lang_code": "en",
        "title_main": "InsightHub - Your Source for Insightful Articles and Analysis",
        "meta_description_main": "Explore insightful articles, in-depth analyses, and thought-provoking content on a wide range of topics from technology and science to lifestyle and culture.",
        "meta_keywords_main": "InsightHub, articles, analysis, blog, technology, science, lifestyle, culture, insights, content",
        "og_title_main": "InsightHub - Your Source for Insightful Articles and Analysis",
        "og_description_main": "Explore insightful articles, in-depth analyses, and thought-provoking content on a wide range of topics from technology and science to lifestyle and culture.",
        "twitter_title_main": "InsightHub - Your Source for Insightful Articles and Analysis",
        "twitter_description_main": "Explore insightful articles, in-depth analyses, and thought-provoking content on a wide range of topics from technology and science to lifestyle and culture.",
        "nav_home": "Home",
        "nav_blog": "Blog",
        "nav_about": "About",
        "nav_contact": "Contact",
        "hero_title": "Welcome to InsightHub",
        "hero_subtitle1": "Your source for insightful articles, in-depth analyses, and thought-provoking content.",
        "hero_subtitle2": "Explore a wide range of topics from technology and science to lifestyle and culture.",
        "hero_button": "Read Our Blog",
        "latest_posts_title": "Latest Posts",
        "post_ai_title": "The Future of AI: A Glimpse into Tomorrow",
        "post_ai_excerpt": "Artificial Intelligence (AI) is no longer a concept confined to science fiction; it is a rapidly evolving reality that is reshaping industries, economies, and our daily lives...",
        "post_oc_title": "Exploring the Depths of Ocean Conservation",
        "post_oc_excerpt": "Our oceans are vast, mysterious, and teeming with life, yet they face unprecedented threats from human activities. Ocean conservation is not just about protecting marine species...",
        "post_sl_title": "The Rise of Sustainable Living: A Guide to Eco-Friendly Practices",
        "post_sl_excerpt": "Sustainable living is more than just a trend; it's a conscious lifestyle choice aimed at reducing one's environmental impact and promoting the long-term health of our planet...",
        "read_more_button": "Read More",
        "footer_privacy": "Privacy Policy",
        "footer_terms": "Terms of Service",
        "footer_contact": "Contact",
        "footer_about": "About",
        "footer_copyright": "© 2026 InsightHub. All rights reserved.",
        // About Page
        "about_title": "About Us - InsightHub",
        "about_heading": "About Us",
        "about_welcome": "Welcome to InsightHub! We are dedicated to providing valuable and insightful content on a variety of topics. Our mission is to share knowledge, foster discussion, and connect with our readers.",
        "about_founded": "Founded in 2026, our platform aims to be a reliable source of information, offering well-researched articles and unique perspectives. We believe in the power of information to inspire, educate, and entertain.",
        "about_team": "Our team is composed of passionate writers and experts who are committed to delivering high-quality content. We cover everything from technology and science to lifestyle and arts, always striving to bring you fresh and engaging material.",
        "about_thankyou": "Thank you for visiting InsightHub. We hope you enjoy our content and find it useful. Feel free to explore our articles, leave comments, and connect with us through our contact page.",
        // Contact Page
        "contact_title": "Contact Us - InsightHub",
        "contact_heading": "Contact Us",
        "contact_intro": "We'd love to hear from you! Whether you have a question, feedback, or a suggestion, please don't hesitate to reach out. You can use the form below or contact us directly via email.",
        "form_name_label": "Your Name:",
        "form_email_label": "Your Email:",
        "form_subject_label": "Subject:",
        "form_message_label": "Message:",
        "form_submit_button": "Send Message",
        "contact_other_ways": "Other Ways to Connect",
        "contact_email_info": "Email:",
        "contact_address_info": "Address:",
        "contact_phone_info": "Phone:",
        "contact_address_value": "123 Insightful Ave, Knowledge City, World",
        "contact_phone_value": "+1 (555) 123-4567",
        // Privacy Policy
        "privacy_title": "Privacy Policy - InsightHub",
        "privacy_heading": "Privacy Policy",
        "privacy_purpose_heading": "1. Purpose of Personal Information Collection and Use",
        "privacy_purpose_text": "InsightHub website collects and uses personal information for the following purposes to provide better services to users.",
        "privacy_purpose_list1": "Providing test results and statistical analysis",
        "privacy_purpose_list2": "Service improvement and new service development",
        "privacy_purpose_list3": "Handling inquiries and delivering notices",
        "privacy_items_heading": "2. Collected Personal Information Items",
        "privacy_items_text": "This website may collect the minimum personal information for basic service provision.",
        "privacy_items_list1": "Email address (when inquiring)",
        "privacy_items_list2": "Usage records, access logs, cookies, access IP information (may be automatically generated and collected during service use)",
        "privacy_retention_heading": "3. Retention and Use Period of Personal Information",
        "privacy_retention_text": "In principle, user's personal information is destroyed without delay once the purpose of personal information collection and use is achieved. However, if retention is necessary according to relevant laws, personal information is stored for the period specified by the law.",
        "privacy_destruction_heading": "4. Personal Information Destruction Procedures and Methods",
        "privacy_destruction_text": "User's personal information, after the purpose is achieved, is transferred to a separate DB (separate document box for paper records) and stored for a certain period according to relevant laws before being destroyed. Personal information transferred to a separate DB is not used for any purpose other than legal requirements.",
        "privacy_provision_heading": "5. Provision of Personal Information",
        "privacy_provision_text": "In principle, this website does not provide user's personal information to external parties. However, exceptions are made in the following cases:",
        "privacy_provision_list1": "When users have consented in advance",
        "privacy_provision_list2": "When required by law, or when law enforcement agencies request it for investigation purposes according to legal procedures and methods",
        "privacy_rights_heading": "6. User Rights and Exercise Methods",
        "privacy_rights_text": "Users can view or correct their registered personal information at any time, and can also request suspension of personal information processing.",
        "privacy_auto_collection_heading": "7. Installation/Operation and Rejection of Personal Information Automatic Collection Devices",
        "privacy_auto_collection_text": "This website may install/operate devices that automatically collect personal information such as cookies. Users can refuse or delete the storage of these cookies at any time.",
        "privacy_controller_heading": "8. Personal Information Protection Officer",
        "privacy_controller_text": "This website is responsible for overall personal information processing and designates a personal information protection officer as follows for user complaint handling and damage relief related to personal information processing.",
        "privacy_controller_name": "Name: kihun bang",
        "privacy_controller_email": "Email: qkdqkr@gmail.com",
        "privacy_effective_date": "This Privacy Policy is effective from [January 25, 2026].",
        // Terms of Service
        "terms_title": "Terms of Service - InsightHub",
        "terms_heading": "Terms of Service",
        "terms_article1_heading": "Article 1 (Purpose)",
        "terms_article1_text": "This agreement aims to stipulate the terms and conditions, procedures, and other necessary matters for all services (including blog content and related functions, hereinafter \"Services\") provided by InsightHub (hereinafter \"this Site\").",
        "terms_article2_heading": "Article 2 (Effectiveness and Amendment of Terms)",
        "terms_article2_list1": "① This agreement becomes effective by being posted on the service screen or notified to users through other means.",
        "terms_article2_list2": "② This Site may amend these terms within the scope not violating relevant laws if necessary, and the amended terms become effective by being posted as in Paragraph 1.",
        "terms_article2_list3": "③ Users may discontinue using the service and withdraw if they do not agree to the amended terms. Continuous use of the service after the effective date of the amended terms is considered as agreeing to the amendments.",
        "terms_article3_heading": "Article 3 (Provision and Change of Services)",
        "terms_article3_list1": "① This Site provides users with content on various topics.",
        "terms_article3_list2": "② This Site may change the content of the provided services if technical specifications change or unavoidable circumstances arise.",
        "terms_article4_heading": "Article 4 (Restriction and Suspension of Service Use)",
        "terms_article4_list1": "① This Site may restrict or suspend all or part of the services if a national emergency such as war, civil war, natural disaster, or similar event occurs or is likely to occur, or if a telecommunications service provider under the Telecommunications Business Act suspends telecommunication services, or due to other unavoidable reasons.",
        "terms_article4_list2": "② This Site may restrict or suspend all or part of the services after prior notice if necessary for the efficient operation of the services.",
        "terms_article5_heading": "Article 5 (Management of Posts)",
        "terms_article5_text": "This Site may delete without prior notice any content (including inter-user communication) posted or transmitted by users within the service if it is deemed to fall under any of the following subparagraphs, and this Site bears no responsibility for such deletion:",
        "terms_article5_list1": "When the content slanders or defames this Site, other users, or third parties.",
        "terms_article5_list2": "When the content violates public order and morals.",
        "terms_article5_list3": "When the content is deemed to be involved in criminal acts.",
        "terms_article5_list4": "When the content infringes upon the copyright of this Site, the copyright of third parties, or other rights.",
        "terms_article5_list5": "When the content is deemed to violate other relevant laws.",
        "terms_article6_heading": "Article 6 (Attribution of Copyright and Restriction of Use)",
        "terms_article6_list1": "① Copyright and other intellectual property rights for works created by this Site belong to this Site.",
        "terms_article6_list2": "② Users may not use information obtained through the service for commercial purposes or allow third parties to use it by reproduction, transmission, publication, distribution, broadcasting, or other methods without prior consent from this Site.",
        "terms_article7_heading": "Article 7 (Disclaimer and Limitation of Liability)",
        "terms_article7_list1": "① Services provided by this Site are provided \"as is.\" This Site makes no express or implied warranties of any kind regarding the fitness for a particular purpose, accuracy, reliability, non-infringement, etc., of the service.",
        "terms_article7_list2": "② This Site is not responsible for any damages (including direct, indirect, incidental, punitive damages, etc.) arising from the use of the service. However, this does not apply to damages caused by the willful misconduct or gross negligence of this Site.",
        "terms_article7_list3": "③ This Site is not responsible for any content, advertisements, products, or services provided by other websites through external links.",
        "terms_article8_heading": "Article 8 (Dispute Resolution)",
        "terms_article8_text": "In the event of a lawsuit between this Site and a user regarding a dispute arising from service use, the court having jurisdiction over the location of this Site's headquarters shall be the exclusive competent court.",
        "terms_effective_date": "This agreement is effective from [January 25, 2026].",
        // Blog Index Page
        "blog_index_title": "Blog - InsightHub",
        "blog_index_heading": "Our Latest Insights",
    },
    "ko": {
        "lang_code": "ko",
        "title_main": "InsightHub - 심층적인 기사와 분석을 위한 당신의 출처",
        "meta_description_main": "기술과 과학부터 라이프스타일과 문화에 이르기까지 광범위한 주제에 대한 심층적인 기사, 분석 및 생각을 자극하는 콘텐츠를 탐색하십시오.",
        "meta_keywords_main": "InsightHub, 기사, 분석, 블로그, 기술, 과학, 라이프스타일, 문화, 통찰력, 콘텐츠",
        "og_title_main": "InsightHub - 심층적인 기사와 분석을 위한 당신의 출처",
        "og_description_main": "기술과 과학부터 라이프스타일과 문화에 이르기까지 광범위한 주제에 대한 심층적인 기사, 분석 및 생각을 자극하는 콘텐츠를 탐색하십시오.",
        "twitter_title_main": "InsightHub - 심층적인 기사와 분석을 위한 당신의 출처",
        "twitter_description_main": "기술과 과학부터 라이프스타일과 문화에 이르기까지 광범위한 주제에 대한 심층적인 기사, 분석 및 생각을 자극하는 콘텐츠를 탐색하십시오.",
        "nav_home": "홈",
        "nav_blog": "블로그",
        "nav_about": "소개",
        "nav_contact": "문의",
        "hero_title": "InsightHub에 오신 것을 환영합니다",
        "hero_subtitle1": "통찰력 있는 기사, 심층 분석 및 생각을 자극하는 콘텐츠의 출처입니다.",
        "hero_subtitle2": "기술과 과학부터 라이프스타일과 문화에 이르기까지 광범위한 주제를 탐색하십시오.",
        "hero_button": "블로그 읽기",
        "latest_posts_title": "최신 글",
        "post_ai_title": "AI의 미래: 내일을 엿보다",
        "post_ai_excerpt": "인공지능(AI)은 더 이상 공상 과학에 국한된 개념이 아닙니다. 산업, 경제, 그리고 우리의 일상을 재편하는 빠르게 진화하는 현실입니다...",
        "post_oc_title": "해양 보존의 깊이를 탐험하다",
        "post_oc_excerpt": "우리의 바다는 광대하고 신비하며 생명으로 가득 차 있지만, 인간 활동으로 인한 전례 없는 위협에 직면해 있습니다. 해양 보존은 단순히 해양 종을 보호하는 것 이상입니다...",
        "post_sl_title": "지속 가능한 삶의 부상: 친환경 실천 가이드",
        "post_sl_excerpt": "지속 가능한 삶은 단순한 유행을 넘어선 것입니다. 환경에 미치는 영향을 줄이고 지구의 장기적인 건강을 증진하기 위한 의식적인 생활 방식 선택입니다...",
        "read_more_button": "더 읽기",
        "footer_privacy": "개인정보처리방침",
        "footer_terms": "이용약관",
        "footer_contact": "문의",
        "footer_about": "소개",
        "footer_copyright": "© 2026 InsightHub. 모든 권리 보유.",
        // About Page
        "about_title": "소개 - InsightHub",
        "about_heading": "소개",
        "about_welcome": "InsightHub에 오신 것을 환영합니다! 저희는 다양한 주제에 대한 가치 있고 통찰력 있는 콘텐츠를 제공하기 위해 노력하고 있습니다. 우리의 사명은 지식을 공유하고 토론을 촉진하며 독자들과 소통하는 것입니다.",
        "about_founded": "2026년에 설립된 저희 플랫폼은 잘 연구된 기사와 독특한 관점을 제공하며 신뢰할 수 있는 정보원 역할을 목표로 합니다. 우리는 정보의 힘이 영감을 주고 교육하며 즐거움을 줄 수 있다고 믿습니다.",
        "about_team": "저희 팀은 고품질 콘텐츠를 제공하기 위해 헌신하는 열정적인 작가와 전문가로 구성되어 있습니다. 기술과 과학부터 라이프스타일과 예술에 이르기까지 모든 것을 다루며 항상 신선하고 매력적인 자료를 제공하기 위해 노력합니다.",
        "about_thankyou": "InsightHub를 방문해 주셔서 감사합니다. 저희 콘텐츠가 유용하고 즐거우셨기를 바랍니다. 언제든지 저희 기사를 탐색하고 의견을 남기고 문의 페이지를 통해 저희와 소통하십시오.",
        // Contact Page
        "contact_title": "문의 - InsightHub",
        "contact_heading": "문의",
        "contact_intro": "저희는 여러분의 의견을 듣고 싶습니다! 질문, 피드백 또는 제안 사항이 있으시면 언제든지 연락 주십시오. 아래 양식을 사용하거나 이메일을 통해 직접 문의하실 수 있습니다.",
        "form_name_label": "이름:",
        "form_email_label": "이메일:",
        "form_subject_label": "제목:",
        "form_message_label": "메시지:",
        "form_submit_button": "메시지 보내기",
        "contact_other_ways": "다른 연락 방법",
        "contact_email_info": "이메일:",
        "contact_address_info": "주소:",
        "contact_phone_info": "전화:",
        "contact_address_value": "123 통찰로, 지식시, 세계",
        "contact_phone_value": "+1 (555) 123-4567",
        // Privacy Policy
        "privacy_title": "개인정보처리방침 - InsightHub",
        "privacy_heading": "개인정보처리방침",
        "privacy_purpose_heading": "1. 개인정보 수집 및 이용 목적",
        "privacy_purpose_text": "InsightHub 웹사이트는 사용자에게 더 나은 서비스를 제공하기 위해 다음과 같은 목적으로 개인정보를 수집 및 이용합니다.",
        "privacy_purpose_list1": "콘텐츠 제공 및 통계 분석",
        "privacy_purpose_list2": "서비스 개선 및 신규 서비스 개발",
        "privacy_purpose_list3": "문의사항 처리 및 공지사항 전달",
        "privacy_items_heading": "2. 수집하는 개인정보 항목",
        "privacy_items_text": "본 웹사이트는 기본적인 서비스 제공을 위해 다음과 같은 최소한의 개인정보를 수집할 수 있습니다.",
        "privacy_items_list1": "이메일 주소 (문의 시)",
        "privacy_items_list2": "이용 기록, 접속 로그, 쿠키, 접속 IP 정보 (서비스 이용 과정에서 자동 생성 및 수집될 수 있음)",
        "privacy_retention_heading": "3. 개인정보의 보유 및 이용 기간",
        "privacy_retention_text": "원칙적으로 이용자의 개인정보는 개인정보 수집 및 이용 목적이 달성되면 지체 없이 파기합니다. 단, 관련 법령에 따라 보존할 필요가 있는 경우 해당 법령에서 정한 기간 동안 개인정보를 보관합니다.",
        "privacy_destruction_heading": "4. 개인정보의 파기 절차 및 방법",
        "privacy_destruction_text": "이용자의 개인정보는 목적이 달성된 후 별도의 DB로 옮겨져(종이의 경우 별도 서류함) 관계 법령에 따라 일정 기간 저장된 후 파기됩니다. 별도 DB로 옮겨진 개인정보는 법률에 의한 경우가 아니고서는 다른 목적으로 이용되지 않습니다.",
        "privacy_provision_heading": "5. 개인정보 제공",
        "privacy_provision_text": "원칙적으로 본 웹사이트는 이용자의 개인정보를 외부에 제공하지 않습니다. 다만, 아래의 경우에는 예외로 합니다.",
        "privacy_provision_list1": "이용자들이 사전에 동의한 경우",
        "privacy_provision_list2": "법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우",
        "privacy_rights_heading": "6. 이용자의 권리 및 행사 방법",
        "privacy_rights_text": "이용자는 언제든지 등록되어 있는 자신의 개인정보를 열람하거나 수정할 수 있으며, 개인정보 처리의 정지를 요청할 수도 있습니다.",
        "privacy_auto_collection_heading": "7. 개인정보 자동 수집 장치의 설치/운영 및 거부",
        "privacy_auto_collection_text": "본 웹사이트는 쿠키 등 개인정보를 자동으로 수집하는 장치를 설치/운영할 수 있습니다. 이용자는 언제든지 이러한 쿠키의 저장을 거부하거나 삭제할 수 있습니다.",
        "privacy_controller_heading": "8. 개인정보 보호 책임자",
        "privacy_controller_text": "본 웹사이트는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 이용자의 불만 처리 및 피해 구제 등을 위하여 아래와 같이 개인정보 보호 책임자를 지정하고 있습니다.",
        "privacy_controller_name": "이름: kihun bang",
        "privacy_controller_email": "이메일: qkdqkr@gmail.com",
        "privacy_effective_date": "본 개인정보처리방침은 [2026년 1월 25일]부터 적용됩니다.",
        // Terms of Service
        "terms_title": "이용약관 - InsightHub",
        "terms_heading": "이용약관",
        "terms_article1_heading": "제1조 (목적)",
        "terms_article1_text": "본 약관은 InsightHub (이하 \"본 사이트\")에서 제공하는 모든 서비스(블로그 콘텐츠 및 관련 기능 포함, 이하 \"서비스\")의 이용 조건 및 절차, 기타 필요한 사항을 규정함을 목적으로 합니다.",
        "terms_article2_heading": "제2조 (약관의 효력 및 변경)",
        "terms_article2_list1": "① 본 약관은 서비스 화면에 게시하거나 기타의 방법으로 이용자에게 공지함으로써 효력이 발생됩니다.",
        "terms_article2_list2": "② 본 사이트는 필요한 경우 관련 법령을 위배하지 않는 범위 내에서 본 약관을 변경할 수 있으며, 변경된 약관은 제1항과 같은 방법으로 공지함으로써 효력이 발생됩니다.",
        "terms_article2_list3": "③ 이용자는 변경된 약관에 동의하지 않을 경우 서비스 이용을 중단하고 탈퇴할 수 있습니다. 변경된 약관의 효력 발생일 이후에도 서비스를 계속 이용할 경우 약관의 변경 사항에 동의한 것으로 간주됩니다.",
        "terms_article3_heading": "제3조 (서비스의 제공 및 변경)",
        "terms_article3_list1": "① 본 사이트는 이용자에게 다양한 주제의 콘텐츠를 제공합니다.",
        "terms_article3_list2": "② 본 사이트는 기술적 사양의 변경 또는 불가피한 여건 발생 시 제공하는 서비스의 내용을 변경할 수 있습니다.",
        "terms_article4_heading": "제4조 (서비스 이용의 제한 및 중지)",
        "terms_article4_list1": "① 본 사이트는 전시, 사변, 천재지변 또는 이에 준하는 국가비상사태가 발생하거나 발생할 우려가 있는 경우와 전기통신사업법에 의한 기간통신사업자가 전기통신서비스를 중지하는 등 부득이한 사유가 있는 경우에는 서비스의 전부 또는 일부를 제한하거나 중지할 수 있습니다.",
        "terms_article4_list2": "② 본 사이트는 서비스의 효율적인 운영을 위하여 필요한 경우 서비스 내용을 미리 공지하고 전부 또는 일부를 제한하거나 중지할 수 있습니다.",
        "terms_article5_heading": "제5조 (게시물의 관리)",
        "terms_article5_text": "본 사이트는 이용자가 게시하거나 전달하는 서비스 내의 모든 내용물(이용자 간 전달 포함)이 다음 각 호의 경우에 해당한다고 판단되는 경우 사전 통보 없이 삭제할 수 있으며, 이에 대해 본 사이트는 어떠한 책임도 지지 않습니다:",
        "terms_article5_list1": "본 사이트, 다른 이용자 또는 제3자를 비방하거나 중상모략으로 명예를 손상시키는 내용인 경우",
        "terms_article5_list2": "공공질서 및 미풍양속에 위반되는 내용인 경우",
        "terms_article5_list3": "범죄적 행위에 결부된다고 인정되는 내용인 경우",
        "terms_article5_list4": "본 사이트의 저작권, 제3자의 저작권 등 기타 권리를 침해하는 내용인 경우",
        "terms_article5_list5": "기타 관계 법령에 위반된다고 판단되는 경우",
        "terms_article6_heading": "제6조 (저작권의 귀속 및 이용 제한)",
        "terms_article6_list1": "① 본 사이트가 작성한 저작물에 대한 저작권 및 기타 지적 재산권은 본 사이트에 귀속합니다.",
        "terms_article6_list2": "② 이용자는 서비스를 이용함으로써 얻은 정보를 본 사이트의 사전 승낙 없이 복제, 송신, 출판, 배포, 방송 기타 방법에 의하여 영리 목적으로 이용하거나 제3자에게 이용하게 하여서는 안 됩니다.",
        "terms_article7_heading": "제7조 (면책 조항 및 책임 제한)",
        "terms_article7_list1": "① 본 사이트에서 제공하는 서비스는 \"있는 그대로\" 제공됩니다. 본 사이트는 서비스의 특정 목적 적합성, 정확성, 신뢰성, 비침해성 등에 대해 어떠한 종류의 명시적 또는 묵시적 보증도 하지 않습니다.",
        "terms_article7_list2": "② 본 사이트는 서비스 이용과 관련하여 발생하는 어떠한 손해(직접적, 간접적, 우발적, 징벌적 손해 등 포함)에 대해서도 책임을 지지 않습니다. 다만, 본 사이트의 고의 또는 중대한 과실로 인한 손해의 경우는 그러하지 아니합니다.",
        "terms_article7_list3": "③ 본 사이트는 외부 링크를 통해 제공되는 다른 웹사이트의 콘텐츠, 광고, 제품 또는 서비스에 대해 어떠한 책임도 지지 않습니다.",
        "terms_article8_heading": "제8조 (분쟁 해결)",
        "terms_article8_text": "서비스 이용으로 발생한 분쟁에 대해 본 사이트와 이용자 간에 소송이 제기될 경우, 본 사이트의 본사 소재지를 관할하는 법원을 전속 관할 법원으로 합니다.",
        "terms_effective_date": "본 약관은 [2026년 1월 25일]부터 적용됩니다.",
        // Blog Index Page
        "blog_index_title": "블로그 - InsightHub",
        "blog_index_heading": "최신 통찰력",
    }
};

let currentLang = localStorage.getItem('lang') || 'en'; // Default to English initially

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);

    // Update html lang attribute
    document.documentElement.setAttribute('lang', translations[currentLang].lang_code);

    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.dataset.key;
        if (translations[currentLang] && translations[currentLang][key]) {
            // Special handling for form placeholders
            if (element.tagName === 'INPUT' && element.hasAttribute('placeholder')) {
                element.setAttribute('placeholder', translations[currentLang][key]);
            } else if (element.tagName === 'TEXTAREA' && element.hasAttribute('placeholder')) {
                element.setAttribute('placeholder', translations[currentLang][key]);
            } else if (element.tagName === 'META') {
                element.setAttribute('content', translations[currentLang][key]);
            } else if (element.tagName === 'TITLE') {
                element.textContent = translations[currentLang][key];
                document.title = translations[currentLang][key]; // Keep for robustness
            } else {
                element.textContent = translations[currentLang][key];
            }

        } else {
            console.warn(`Translation missing for key: ${key} in language: ${currentLang}`);
            element.textContent = `[${key} - Translation Missing]`; // Fallback
        }
    });
}

// Theme logic
let currentTheme = localStorage.getItem('theme') || 'light'; // Default to light

function setTheme(theme) {
    currentTheme = theme;
    localStorage.setItem('theme', theme);
    document.body.classList.toggle('dark-mode', theme === 'dark');
}

// Initial language and theme setting on load
document.addEventListener('DOMContentLoaded', () => {
    setLanguage(currentLang);
    setTheme(currentTheme); // Apply initial theme

    // Language button event listeners
    const langEnButton = document.getElementById('lang-en');
    const langKoButton = document.getElementById('lang-ko');

    if (langEnButton) {
        langEnButton.addEventListener('click', () => setLanguage('en'));
    }
    if (langKoButton) {
        langKoButton.addEventListener('click', () => setLanguage('ko'));
    }

    // Theme toggle button event listener
    const themeToggleButton = document.getElementById('theme-toggle');
    if (themeToggleButton) {
        themeToggleButton.addEventListener('click', () => {
            setTheme(currentTheme === 'light' ? 'dark' : 'light');
        });
    }
});
