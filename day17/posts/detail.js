// detail.js (포스트 상세 화면용 JavaScript)
const apiUrl = "https://jsonplaceholder.typicode.com";

// 캐시 유효 기간 설정
const CACHE_DURATION = 5 * 60 * 1000;

// 포스트 상세 정보 표시
async function displayPostDetail() {
  // URL에서 postId 가져오기
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get("postId");
    if (!postId) {
      throw new Error("No post ID provided");
    }
    const cacheKey = `post_${postId}`;
    let post = null;
    let dataLoadedFromCache = false;

    // 2. localStorage에서 캐시된 데이터 확인
    const cachedData = localStorage.getItem(cacheKey);

    if (cachedData) {
      const { data, timestamp } = JSON.parse(cachedData);
      const currentTime = Date.now();
      if (currentTime - timestamp < CACHE_DURATION) {
        post = data;
        dataLoadedFromCache = true;
        console.log("Post loaded from localStorage");
      } else {
        console.log("Cache expired, fetching new data.");
        localStorage.removeItem(cacheKey);
      }
    }

    // 3. 캐시 데이터가 없거나 캐시가 만료된 경우 API에서 데이터 가져오기
    if (!post) {
      const response = await fetch(`${apiUrl}/posts/${postId}`);

      if (!response.ok) {
        throw new Error(`Failed to fetch post with ID: ${postId}`);
      }

      post = await response.json();
      console.log("Post fetched from API");
      localStorage.setItem(
        cacheKey,
        JSON.stringify({ data: post, timestamp: Date.now() })
      );
    }
    renderPost(post);
  } catch (error) {
    console.error("Error:", error.message);
    document.getElementById("post-detail").innerHTML =
      "<p>Error loading post details</p>";
  }
}

// 포스트 렌더링 함수
function renderPost(post) {
  const postDetail = document.getElementById("post-detail");
  postDetail.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
    `;
}

// 페이지 로드 시 포스트 상세 정보 표시
displayPostDetail();
