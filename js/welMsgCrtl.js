/*
    
    // يتحكم هذا الكود في اخفاء رسالة الترحيب

*/


// بعض المتغيرات لإستدعاء العناصر المطلوبة من صفحة Html
let closeWel  = document.getElementById('wel-close'),
    welSquare = document.getElementById('wel'),
    screenCov = document.getElementById('screen-cover');

// تنفيذ اخفاء رسالة الترحيب بالضغط على الزر المرفق
closeWel.addEventListener('click', function () {
    welSquare.style.top = '-1000px';
    screenCov.style.opacity = '0';
    setInterval(function(){
        screenCov.style.display = 'none';
    },1000)
})