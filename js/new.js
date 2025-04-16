// 폼 제출 이벤트 핸들러
function handleFormSubmit(event) {
  event.preventDefault(); // 폼의 기본 제출 동작을 차단

  // 입력 요소 가져오기
  const userid = document.getElementById("userid");
  const userpw = document.getElementById("userpw");
  const userpw_re = document.getElementById("userpwre");
  const jumin = document.getElementById("jumin");
  const hp = document.getElementById("hp");
  const email = document.getElementById("email");

  // 정규 표현식 정의
  const expIdText = /^[A-Za-z0-9]{4,20}$/;
  const expPwText =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,20}$/;
  const expJuminText = /^\d{6}-\d{7}$/;
  const expHpText = /^\d{3}-\d{3,4}-\d{4}$/;
  const expEmailText = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  // 아이디 검증
  if (userid.value === "") {
    alert("아이디를 입력해주세요.");
    userid.focus();
    return false;
  }
  if (!expIdText.test(userid.value)) {
    alert("아이디는 4자 이상 20자 이하의 영문자 및 숫자로 입력하세요.");
    userid.focus();
    return false;
  }

  // 비밀번호 검증
  if (!expPwText.test(userpw.value)) {
    alert(
      "비밀번호는 8자 이상 20자 이하의 영문자, 숫자, 특수문자를 한 자 이상 포함해야 합니다."
    );
    userpw.focus();
    return false;
  }

  // 비밀번호 확인 검증
  if (userpw.value !== userpw_re.value) {
    alert("비밀번호가 일치하지 않습니다.");
    userpw_re.focus();
    return false;
  }

  // 주민번호 검증
  if (!expJuminText.test(jumin.value)) {
    alert("주민번호 형식이 올바르지 않습니다.\n예시: 123456-1234567");
    jumin.focus();
    return false;
  }

  // 연락처 검증
  if (!expHpText.test(hp.value)) {
    alert("휴대폰 번호 형식이 올바르지 않습니다.\n-하이픈을 꼭 입력하세요");
    hp.focus();
    return false;
  }

  // 이메일 검증
  if (!expEmailText.test(email.value)) {
    alert("이메일 형식이 올바르지 않습니다.\n예시: example@mail.com");
    email.focus();
    return false;
  }

  console.log("폼이 제출되었습니다.");
  // 검증 통과 후 추가 로직 (예: 서버로 데이터 전송) 실행 가능
  return true;
}

// 주민번호만 검증하는 함수
function validateJumin() {
  const jumin = document.getElementById("jumin");
  const expJuminText = /^\d{6}-\d{7}$/;
  if (expJuminText.test(jumin.value)) {
    alert("올바른 주민번호 형식입니다.");
  } else {
    alert("주민번호 형식이 올바르지 않습니다.\n예시: 123456-1234567");
    jumin.focus();
  }
}

// 이메일만 검증하는 함수
function validateEmail() {
  const email = document.getElementById("email");
  const expEmailText = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (expEmailText.test(email.value)) {
    alert("올바른 이메일 형식입니다.");
  } else {
    alert("이메일 형식이 올바르지 않습니다.\n예시: example@mail.com");
    email.focus();
  }
}
