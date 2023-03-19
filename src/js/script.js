// "use strict"

// // Спойлери
// const spollersArray = document.querySelectorAll('[data-spollers]');
// if (spollersArray.length > 0) {
//     // Отримуємо прості спойлери
//     const spollersRegular = Array.from(spollersArray).filter(function (item, index, self) {
//         return !item.dataset.spollers.split(",")[0];
//     });
//     // Ініціалізація простих спойлерів
//     if (spollersRegular.length > 0) {
//         initSpollers(spollersRegular);
//     }
// }
// // Отримання спойлерів з медіа запитами
// const spollersMedia = Array.from(spollersArray).filter(function (item, index, self) {
//     return item.dataset.spollers.split(",")[0];
// });

// // Ініціалізація спойлерів з медіа запитами
// if (spollersMedia.length > 0) {
//     const breakpointsArray = [];
//     spollersMedia.forEach(item => {
//         const params = item.dataset.spollers;
//         const breakpoint = {};
//         const paramsArray = params.split(",");
//         breakpoint.value = paramsArray[0];
//         breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
//         breakpointsArray.push(breakpoint);
//     });
// }

// // Отримуємо унікальні брейкпоінти
// let mediaQuerties = breakpointsArray.map(function (item) {
//     return '(' + item.type + "-width: " + item.value + "px0," + item.value + ',' + item.type;
// });
// mediaQuerties = mediaQuerties.filter(function (item, index, self) {
//     return self.indexOf(item) === index;
// });

// // Робота з кожним брейкпоінтом
// mediaQuerties.forEach(breakpoint => {
//     const paramsArray = breakpoint.split(",");
//     const mediaBreakpoint = paramsArray[1];
//     const mediaType = paramsArray[2];
//     const matchMedia = window.matchMedia(paramsArray[0]);
// })

// // Об'єкти з подрібними умовами
// const spollersArray = breakpointsArray.filter(function (item) {
//     if (item.value === mediaBreakpoint && item.type === mediaType) {
//         return true;
//     }
// })

// // Подія
// matchMedia.addListener(function () {
//     initSpollers(spollersArray, matchMedia);
// });

// $(document).ready(function() {
//     $('.block__title').click(function(event){
//         $(this).toggleClass('active').next().slideToggle(300);
//     });
// });

