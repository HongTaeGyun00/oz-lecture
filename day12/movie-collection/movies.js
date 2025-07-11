// 1. 변수와 배열: let movies = [];로 영화 객체를 저장하는 배열 선언
let movies = [];

// 2. 변수 선언: var, let, const를 각각 최소 1회 사용
const DEFAULT_STRING_VALUE = "알 수 없음"; // const 사용: 빈 문자열 속성의 기본값
let currentMovieIndex = 0; // let 사용: 현재 처리 중인 영화의 인덱스 (루프 내에서 사용 가능)
var totalMoviesDisplayed = 0; // var 사용: 출력된 총 영화 개수 (예시)

// 3. 객체: 각 영화 객체는 title, director, year, genre 속성 포함.
let movie1 = {
  title: "케이팝 데몬 헌터스",
  director: "매기 강",
  year: 2025,
  genre: "애니메이션",
};
movies.push(movie1);

let movie2 = {
  title: "소주전쟁",
  director: "최윤진",
  year: 2025,
  genre: "드라마",
};
movies.push(movie2);

let movie3 = {
  title: "야당",
  director: "황병국",
  year: 2025,
  genre: "범죄,액션",
};
movies.push(movie3);

// 영화 4: 장르가 빈 문자열인 경우
let movie4 = {
  title: "기생충",
  director: "봉준호",
  year: 2019,
  genre: "", // 장르가 비어있음
};
movies.push(movie4);

// 영화 5: 감독 정보가 없는 경우
let movie5 = {
  title: "어벤져스: 엔드게임",
  // director 속성 누락
  year: 2019,
  genre: "액션",
};
movies.push(movie5);

// 영화 6: 제목이 빈 문자열이고, 연도가 숫자가 아닌 경우
let movie6 = {
  title: "", // 제목이 비어있음
  director: "쿠엔틴 타란티노",
  year: "개봉년도 미정",
  genre: "범죄",
};
movies.push(movie6);

// 매개변수 기본값: 빈 문자열 속성에 기본값 설정
function printMovies(movieList) {
  console.log("--- 영화 목록 ---");

  // 5. 반복문: for를 사용하여 영화 목록 출력
  for (
    currentMovieIndex = 0;
    currentMovieIndex < movieList.length;
    currentMovieIndex++
  ) {
    let movie = movieList[currentMovieIndex]; // 현재 영화 객체

    // 6. 조건문과 연산자: 빈 속성 확인 후 기본값 설정

    // 제목 속성 확인
    if (!movie.title || movie.title.trim() === "") {
      movie.title = DEFAULT_STRING_VALUE;
    }

    // 감독 속성 확인
    if (!movie.director || movie.director.trim() === "") {
      movie.director = DEFAULT_STRING_VALUE;
    }

    // 개봉년도 속성 확인 (숫자가 아니거나 0인 경우)
    if (
      typeof movie.year !== "number" ||
      isNaN(Number(movie.year)) ||
      Number(movie.year) === 0
    ) {
      movie.year = 0; // 숫자가 아니거나 0이면 0으로 설정
    }

    // 장르 속성 확인
    if (!movie.genre || movie.genre.trim() === "") {
      movie.genre = DEFAULT_STRING_VALUE;
    }

    // 영화 정보 출력
    console.log(
      `${currentMovieIndex + 1}. 제목: ${movie.title}, 감독: ${
        movie.director
      }, 개봉년도: ${movie.year}, 장르: ${movie.genre}`
    );

    totalMoviesDisplayed++; // 출력된 영화 개수 증가
  }
  console.log("-----------------");
  console.log(`총 ${totalMoviesDisplayed}개의 영화가 출력되었습니다.`);
}
printMovies(movies);
