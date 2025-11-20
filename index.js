const showBtn = document.querySelector('#show')    // 초디장 보기 
const nameInput = document.querySelector('#name')  // 당신의 이름
const birthInput = document.querySelector('#birthday') // 집주인 생일

showBtn.addEventListener("click", () => {
    // alert("클릭")
    // validation()
    if (!validation()) return;
    window.location.href = 'invitation.html'
})

const validation = () => {
    const youName = nameInput.value
    const myBirth = birthInput.value


    if (youName == null || youName == '' || youName == undefined) {
        alert("이름을 입력해주이소~")
        return false
    }
    if (youName.length > 4) {
        alert("이름을 다시 입력해주이소~");
        return false;
    }
    if (myBirth == null || myBirth == '' || myBirth == undefined) {
        alert("집주인 생일 입력해주이소~ 설마 모르는건 아니겠지?")
        return false
    }
    if (!isValidKoreanName(youName)) {
        alert("이름은 한글 2~4자로 입력해주이소~");
        return false;
    }
    if (myBirth !== "1999-05-08") {
        alert("생일 틀렸다... 힝구리퐁퐁");
        return false;
    }
    return true
}

function isValidKoreanName(name) {
    // 한글 이름에 대한 정규식 (2~4자)
    let koreanNameRegExp = /^[가-힣]{2,4}$/;
    // 한글 이름이 정규식에 맞는지 검증
    return koreanNameRegExp.test(name);
}