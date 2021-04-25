//SOP(Same Origin Policy)
//한 origin으로부터 로드된 document 또는 script가 다른 origin의 리소스와
//상호작용 할 수 있는 방법을 제한하는 중요한 보안 매커니즘
//origin은 scheme, Host, Port를 보고서 판단한다.
/* 1. https://www.naver.com/news/page.html
 * 2. https://www.naver.com:443/news/page.html
 * 3. http://www.naver.com/news/page.html
 * 4. https://blog.naver.com/page.html
 * 5. https://blog.naver.com:8443/page.html
 * 예시 5개중 same origin을 같은 url은 1,2번이다
 */
//same-origin이 아닐경우 서로간의 document에 접근할 수 없고
//극히 제한적인 객체에만 접근가능 하다.
//XMLHttpRequest cross-origin 문제해결
/*
 * 1. JSONP
 * 모든 origin 대상으로 SOP 무력화
 * 사용을 추천하지 않음
 * 2. CORS
 * 허용할 origin만을 "Access-Control-Allow-Origin"에 추가
 * 사용을 추천함
 */




































