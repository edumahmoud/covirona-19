/*

    // يقوم هذا الكود بإضافة التأثير عند الضغط على أحد عناصر قائمة أقسام الموقع

*/
let listItems = document.querySelectorAll('.listItem');

    listItems.forEach(item => {
        item.addEventListener('click', function(){
            // إزالة اسم الكلاس "active" من جميع العناصر في القائمة
            listItems.forEach(listItem => {
            listItem.classList.remove('active');
            });

            // إضافة اسم الكلاس "active" إلى العنصر الحالي
            this.classList.add('active');
        });
    });
