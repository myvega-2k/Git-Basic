/*
    index.html 에서 참조하는 스크립트
*/
function login(password) {
    if(password){
        console.log("로그인")
    }else{
        console.log("password를 입력하세요")
    }
}

function logout() {
    console.log("로그아웃")
}