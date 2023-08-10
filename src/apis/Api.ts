// 기본 url
const HOST = process.env.REACT_APP_API_URL + "/api/";

// 세부 url
const AUTH = "auth/";

interface apiInterface {
  auth: {
    login: () => string; // 로그인
    logout: () => string; //로그아웃
    googleLogin: () => string; // 카카오 로그인
    join: () => string; // 회원가입
    duplicatedCheck: () => string; // 이메일 중복확인
    token: () => string; // 토큰 확인
  };
}

const api: apiInterface = {
  auth: {
    login: () => HOST + AUTH + "login",
    logout: () => HOST + AUTH + "logout",
    googleLogin: () => HOST + AUTH + "kakao",
    join: () => HOST + AUTH + "join",
    duplicatedCheck: () => HOST + AUTH + "email",
    token: () => HOST + AUTH + "token",
  },
};

export default api;
