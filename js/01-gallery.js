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

        {   onShow: () => document.addEventListener('keydown', onEscKeyPress),
            onClose: () => document.removeEventListener('keydown', onEscKeyPress),
        }
        );
        instance.show()

        function onEscKeyPress(event) {   
            if (event.code === "Escape") {
                instance.close();
            }
        }
 
}


// II variant

// const gallery = document.querySelector('.gallery')
// const items = []

// galleryItems.forEach(element => {
// 	const galleryItem = document.createElement('div')
// 	galleryItem.className = 'gallery__item'
// 	const galleryLink = document.createElement('a')
// 	galleryLink.className = 'gallery__link'
// 	galleryLink.href = element.original
// 	const galleryImage = document.createElement('img')
//     galleryImage.className = 'gallery__image'
//     galleryImage.src = element.preview;
//     galleryImage.setAttribute('data-source', element.original)
//     galleryImage.alt = element.description;

// 	galleryItem.append(galleryLink)
// 	galleryLink.append(galleryImage)
// 	items.push(galleryItem)
// })

// gallery.append(...items)

// gallery.addEventListener('click', e => {
//     e.preventDefault();
//     if (e.target.nodeName !== 'IMG') {
// 		return
// 	}

//     const selectedImage = e.target.getAttribute('data-source')

//     const instance = basicLightbox.create(`
//     <img src="${selectedImage}" width="800" height="600">
// `)

//     instance.show()
    
//     gallery.addEventListener('keydown', e => {
// 		if (e.key === 'Escape') {
// 			instance.close()
// 		}
// 	})
// })