// Выполняй это задание в файлах 01-gallery.html и 01-gallery.js. 
// Разбей его на несколько подзадач:

// Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.
// Реализация делегирования на div.gallery и получение url большого изображения.
// Подключение скрипта и стилей библиотеки модального окна basicLightbox.
// Используй CDN сервис jsdelivr и добавь в проект ссылки на минифицированные (.min) файлы библиотеки.
// Открытие модального окна по клику на элементе галереи. Для этого ознакомься с документацией и примерами.
// Замена значения атрибута src элемента <img> в модальном окне перед открытием.
// Используй готовую разметку модального окна с изображением из примеров библиотеки basicLightbox.


import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const imagesContainer = document.querySelector('.gallery');
const imagesMarkup = createItemsGalleryMarkup(galleryItems);

imagesContainer.insertAdjacentHTML('beforeend', imagesMarkup);
imagesContainer.addEventListener('click', onImageContainerClick)

function createItemsGalleryMarkup (galleryItems) {
   
   
    return galleryItems.map(({preview, original, description}) => {
       return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
            </a>
        </div>
        `;
    })
    .join('');
   
}

function onImageContainerClick (event) {
    event.preventDefault();
    const isImageCart = event.target.classList.contains('gallery__image');
    if (!isImageCart) {
       return;
    }
    
    
    const instance = basicLightbox.create(
        `<img src="${event.target.dataset.source}" width="800" height="600">`,

        {   onShow: () => window.addEventListener('keydown', onEscKeyPress),
            onClose: () => window.removeEventListener('keydown', onEscKeyPress),
        }
        );
        instance.show()

        function onEscKeyPress(event) {   
            if (event.code === "Escape") {
                instance.close();
            }
        }
 
}


