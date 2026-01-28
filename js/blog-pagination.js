// js/blog-pagination.js

const blogPostsData = [
    {
        filename: '2026-01-28-top-searched-companies.html',
        title: '2026년 1월 28일 주식 시장: 주목받는 3대 기업과 투자 전망',
        excerpt: '오늘 주식 시장에서는 인공지능(AI), 전기차 배터리, 재생에너지와 같은 미래 핵심 산업을 이끄는 세 기업이 투자자들의 뜨거운 관심을 받으며 검색량 상위권을 기록했습니다. 각 기업의 현재 이슈와 함께 심층 분석 및 투자 의견을 제시합니다.'
    },
    {
        filename: '2026-01-28-top-stocks.html',
        title: '1월 28일 급등주 분석: 국내외 시장 동향 및 전망',
        excerpt: '2026년 1월 28일 국내외 주식 시장은 혼조세를 보였습니다. 미국 뉴욕증시의 다우존스30산업평균지수는 하락했지만, S&P 500지수와 나스닥종합지수는 주요 빅테크 기업들의 4분기 실적 발표에 대한 기대감으로 상승했습니다. 국내 코스피 지수는 5,084.85로 상승했으며, 코스닥 지수 또한 1,082.59로 상승하며 긍정적인 흐름을 보였습니다.'
    },
    {
        filename: 'hyundai-motor-outlook.html',
        title: '현대차, 2026년 미래 모빌리티 혁신 주도 전망',
        excerpt: '현대자동차그룹은 2026년을 미래 산업 전환의 흐름을 주도하고 지속 성장하기 위한 전략적으로 중요한 해로 인식하고 있습니다. AI, SDV(소프트웨어 중심 자동차), 로보틱스 등 미래 모빌리티 핵심 기술 개발 및 생태계 구축에 대한 강력한 의지를 표명하며, 이 분야에서의 선도적 위치를 확보하려 노력하고 있습니다.'
    },
    {
        filename: 'semiconductor-industry-outlook.html',
        title: '2026년 반도체 산업 전망: AI가 이끄는 슈퍼사이클',
        excerpt: '2026년 반도체 산업은 인공지능(AI)의 확산에 힘입어 강력한 성장세를 보이며 '슈퍼사이클'을 이어갈 것으로 전망됩니다. 글로벌 반도체 시장은 2026년에 1조 달러 규모를 넘어설 것으로 예상되며, 특히 AI 추론 시장의 본격화와 에이전틱 AI의 부상이 이러한 성장을 견인할 주요 동력이 될 것입니다.'
    },
    {
        filename: 'power-shortage-analysis.html',
        title: '2026년 전력 부족 문제: 심화되는 위기와 해결책',
        excerpt: '2026년에는 인공지능(AI) 데이터센터, 반도체 클러스터, 전기차 보급 확대 등 전력 수요가 폭발적으로 증가하면서 전력 부족 문제가 심화될 것으로 전망됩니다. 이러한 수요 증가는 전 세계 전력 수요를 전년 대비 약 3.7% 증가시켜 전체 에너지 수요 증가율보다 6배 빠른 속도를 보일 것으로 예상되며, 이는 '풍요 속의 빈곤'이라는 모순된 상황을 초래할 수 있습니다.'
    },
    {
        filename: 'necessity-of-nuclear-power.html',
        title: '원자력 발전의 재평가: 에너지 위기와 탄소 중립 시대의 필수 요소',
        excerpt: '2026년 현재, 원자력 발전은 전례 없는 전력 수요 증가와 탄소 중립 목표 달성을 위한 핵심 에너지원으로 재평가받고 있으며 그 필요성이 더욱 강조되고 있습니다. 데이터 센터와 산업화로 인한 전력 수요 폭증에 직면하면서, 재생에너지, 가스, 원자력 등 모든 가용한 발전원을 동원하는 '에너지 믹스' 전략이 유일한 생존법으로 제시되고 있습니다.'
    }
];

const postsPerPage = 5;
let currentPage = 1;

function renderBlogPosts() {
    const blogPostsContainer = document.getElementById('blog-posts');
    const paginationContainer = document.getElementById('blog-pagination');

    if (!blogPostsContainer || !paginationContainer) return;

    // Clear existing content
    blogPostsContainer.innerHTML = '';
    paginationContainer.innerHTML = '';

    const startIndex = (currentPage - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    const paginatedPosts = blogPostsData.slice(startIndex, endIndex);

    paginatedPosts.forEach(post => {
        const article = document.createElement('article');
        article.classList.add('blog-post-card');
        article.innerHTML = `
            <h3><a href="${post.filename}">${post.title}</a></h3>
            <p class="post-date">2026년 1월 28일 게시됨</p>
            <p>${post.excerpt}</p>
            <a href="${post.filename}" class="read-more">더 읽기</a>
        `;
        blogPostsContainer.appendChild(article);
    });

    renderPaginationControls();
}

function renderPaginationControls() {
    const paginationContainer = document.getElementById('blog-pagination');
    if (!paginationContainer) return;

    const totalPages = Math.ceil(blogPostsData.length / postsPerPage);

    const prevButton = document.createElement('button');
    prevButton.textContent = '이전';
    prevButton.disabled = currentPage === 1;
    prevButton.addEventListener('click', () => {
        currentPage--;
        renderBlogPosts();
        window.scrollTo(0, 0); // Scroll to top on page change
    });
    paginationContainer.appendChild(prevButton);

    for (let i = 1; i <= totalPages; i++) {
        const pageButton = document.createElement('button');
        pageButton.textContent = i;
        pageButton.classList.toggle('active', i === currentPage);
        pageButton.addEventListener('click', () => {
            currentPage = i;
            renderBlogPosts();
            window.scrollTo(0, 0);
        });
        paginationContainer.appendChild(pageButton);
    }

    const nextButton = document.createElement('button');
    nextButton.textContent = '다음';
    nextButton.disabled = currentPage === totalPages;
    nextButton.addEventListener('click', () => {
        currentPage++;
        renderBlogPosts();
        window.scrollTo(0, 0);
    });
    paginationContainer.appendChild(nextButton);
}

document.addEventListener('DOMContentLoaded', () => {
    // Check if on the blog index page
    if (window.location.pathname.includes('blog/index.html') || window.location.pathname.endsWith('/blog/') || window.location.pathname.endsWith('/blog')) {
        // Parse page number from URL if available
        const urlParams = new URLSearchParams(window.location.search);
        const pageParam = urlParams.get('page');
        if (pageParam && !isNaN(parseInt(pageParam))) {
            currentPage = parseInt(pageParam);
        }
        renderBlogPosts();
    }
});

