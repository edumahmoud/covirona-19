/*

    // يحدث هذا الكود تأثيرات على الموقع أثناء الهبوط الى اسفل الصفحه او الصعود لأعلاها

*/


// بعض المتغيرات لإستدعاء العناصر المطلوبة من صفحة Html
let header      = document.querySelector('.header'),
    headerr     = document.querySelector('.headerr'),
    logo        = document.querySelector('.logo'),
    listItem    = document.querySelectorAll('.list ul li'),
    totopBtn    = document.querySelector('.totop'),
    floatImg = document.getElementById('floatImg'),
    cAll = document.getElementById('c-all'),
    scroll      = 30,
    secHiehgt   = 600;

// تنفيذ بعض الخواص اثناء تحرك الصفحه طولياً
window.onscroll = function() {

    // Scroll header Change style
    if (window.scrollY >= scroll) {
        header.style.backgroundColor = '#1f7dca';
        header.style.height = '100px';
        header.style.boxShadow = '0 0 4px 1px #000';
        logo.style.top = '-50px'
    }
    else {
        header.style.backgroundColor = 'transparent';
        header.style.height = '200px';
        header.style.boxShadow = 'none';
        logo.style.top = '0'
    }

    // View Corona virus from the left side
    // المقالات
    if (window.scrollY >= 598 && window.scrollY < 1197) {
        floatImg.style.left = "50px";
        floatImg.style.transform = "rotate(0deg)";
    }
    // الصور
    else if (window.scrollY >= 1197 && window.scrollY < 1796) {
        floatImg.style.left = "1220px";
        floatImg.style.transform = "rotate(0deg)";
    }
    // الفيديوهات
    else if (window.scrollY >= 1796 && window.scrollY < 2395) {
        floatImg.style.left = "50px";
        floatImg.style.transform = "rotate(0deg)";
    }
    // الاحصائيات
    else if (window.scrollY >= 2395 && window.scrollY < 2959) {
        floatImg.style.left = "1220px";
        floatImg.style.transform = "rotate(0deg)";
    }
    // المصممون
    else if (window.scrollY >= 2959) {
        
        floatImg.style.left = "50px";
        floatImg.style.transform = "rotate(0deg)";
    }
    // الرئيسية
    else {
        floatImg.style.left = "-250px";
        floatImg.style.transform = "rotate(0deg)";
    }


    // View and hide creators
    if (window.scrollY >= 2959) {
        cAll.style.opacity = "1";
    }
    else {            
        cAll.style.opacity = "0";
    }

    // Scroll To-Top Button [Show / Hide]
    if (window.scrollY >= secHiehgt) {
        totopBtn.style.display = 'block';
    } else {
        totopBtn.style.display = 'none';
    }

    // Scroll To-Top Button [Scroll to top smoothly by click]
    totopBtn.addEventListener('click', function (){
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

};
// END SCROLLING PART