/*
    index.html 에서 참조하는 스크립트
*/
function login(username) {
    if(username){
        console.log("로그인")
    }else {
        console.log('username을 입력하세요!!')
    }
}

function logout() {
    console.log("로그아웃")
}