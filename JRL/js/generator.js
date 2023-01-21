function linkGenarator() {
    var baseLink = "https://ssl.1901040.kbu.kr/JRL?j=";
    // ↓서버에서 가져온 JRLCODE를 입력해줌..
    var getJRLCode = "JRL2023TEST";
    var date = new Date();
    var dateCode = date.getFullYear + date.getMonth + date.getDay;
    console.log(dateCode);
    document.getElementById("link").value = baseLink + getJRLCode;
}