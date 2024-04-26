document.addEventListener("DOMContentLoaded", function () {
    SmoothScroll(
        {
            // Scrolling Core
            animationTime: 800, // [ms]
            stepSize: 80, // [px]

            // Acceleration
            accelerationDelta: 50,  // 50
            accelerationMax: 3,   // 3

            // Keyboard Settings
            keyboardSupport: true,  // option
            arrowScroll: 50,    // [px]

            // Pulse (less tweakable)
            // ratio of "tail" to "acceleration"
            pulseAlgorithm: true,
            pulseScale: 4,
            pulseNormalize: 1,

            // Other
            touchpadSupport: true, // ignore touchpad by default
            fixedBackground: true,
            excluded: ''
        }
    )

    // анимации 

    gsap.from('.main_screen__sticky_block_img', {
        x: '15%', // Начальное положение элементов снизу
        duration: 2, // Длительность анимации
        delay: 0.5,
        ease: 'power3.out', // Эффект анимации (можно изменить на другой)
    });

    gsap.from('.main_screen__socials a svg', {
        y: '110%', // Начальное положение элементов снизу
        duration: 1, // Длительность анимации
        delay: 0.5,
        ease: 'power3.out', // Эффект анимации (можно изменить на другой)
        stagger: '0.1'
    });

    gsap.from('.main_screen__sticky_block_video', {
        opacity: 0, // Начальное положение элементов снизу
        duration: 5, // Длительность анимации
        delay: 0.5,
        ease: 'power3.out', // Эффект анимации (можно изменить на другой)
    });

    // gsap.set(".main_screen__text_block", { y: '-100%' });

    gsap.from('.we_are_first', {
        x: '-10%',
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.we_are',
            start: 'top bottom',
            end: 'center top',
            scrub: true,
            // markers: true,
        },
    });
    gsap.from('.we_are_second', {
        x: '10%',
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.we_are',
            start: 'top bottom',
            end: 'center top',
            scrub: true,
            // markers: true,
        },
    });
    gsap.to('.we_are_third', {
        x: '-90%',
        scrollTrigger: {
            trigger: '.we_are',
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
            // markers: true,
        },
    });

    gsap.from('.we_are_fourth', {
        x: '-50%',
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.we_are',
            start: 'top bottom',
            end: 'center top',
            scrub: true,
            // markers: true,
        },
    });



    // gsap.from('.main_teams__container_item_text', {
    //     y: '-100%',
    //     ease: 'power3.inout',
    //     scrollTrigger: {
    //         trigger: '.main_teams__container_item',
    //         start: 'top center',
    //         end: '20% center',
    //         scrub: true,
    //         // markers: true,
    //     },
    // });

    // gsap.set('.main_teams__container_item_text', { y: '0', });

    // gsap.to('.main_teams__container_item_text', {
    //     y: '100%',
    //     ease: 'power3.inout',
    //     scrollTrigger: {
    //         trigger: '.main_teams__container_item',
    //         start: 'bottom 80%',
    //         end: 'bottom center',
    //         scrub: true,
    //         markers: true,
    //     },
    // });

    // gsap.from('.main_teams__container_item_text_wrap', {
    //     y: '100%',
    //     ease: 'power3.inout',
    //     scrollTrigger: {
    //         trigger: '.main_teams__container_item',
    //         start: 'top center',
    //         end: '20% center',
    //         scrub: true,
    //         // markers: true,
    //     },
    // });

    // gsap.set('.main_teams__container_item_text_wrap', { y: '0', });

    // gsap.to('.main_teams__container_item_text_wrap', {
    //     y: '-100%',
    //     ease: 'power3.inout',
    //     scrollTrigger: {
    //         trigger: '.main_teams__container_item',
    //         start: 'bottom 80%',
    //         end: 'bottom center',
    //         scrub: true,
    //         // markers: true,
    //     },
    // });
    // Получаем все элементы .main_teams__container_item
    const items = document.querySelectorAll('.main_teams__container_item');

    // Проходим по каждому элементу .main_teams__container_item
    // items.forEach((item) => {
    //     // Получаем элементы .main_teams__container_item_text и .main_teams__container_item_text_wrap внутри текущего элемента
    //     const textElement = item.querySelector('.main_teams__container_item_text');
    //     const textWrapElement = item.querySelector('.main_teams__container_item_text_wrap');

    //     gsap.set(textElement, { y: '-100%' });
    //     gsap.set(textWrapElement, { y: '100%' });

    //     // Анимация для .main_teams__container_item_text
    //     gsap.to(textElement, {
    //         y: '0',
    //         ease: 'power3.inOut',
    //         scrollTrigger: {
    //             trigger: item,
    //             start: 'top center',
    //             end: '40% center',
    //             scrub: true,
    //             // markers: true,
    //         },
    //     });

    //     gsap.set(textElement, { y: '0' });

    //     gsap.to(textElement, {
    //         y: '100%',
    //         ease: 'power3.inOut',
    //         scrollTrigger: {
    //             trigger: item,
    //             start: 'bottom 80%',
    //             end: 'bottom center',
    //             scrub: true,
    //             // markers: true,
    //         },
    //     });

    //     // Анимация для .main_teams__container_item_text_wrap
    //     gsap.to(textWrapElement, {
    //         y: '0',
    //         ease: 'power3.inOut',
    //         scrollTrigger: {
    //             trigger: item,
    //             start: 'top center',
    //             end: '40% center',
    //             scrub: true,
    //             // markers: true,
    //         },
    //     });

    //     gsap.set(textWrapElement, { y: '0' });

    //     gsap.to(textWrapElement, {
    //         y: '-100%',
    //         ease: 'power3.inOut',
    //         scrollTrigger: {
    //             trigger: item,
    //             start: 'bottom 80%',
    //             end: 'bottom center',
    //             scrub: true,
    //             // markers: true,
    //         },
    //     });
    // });


    // Получаем список всех элементов <path>
    const lettersStvols = document.querySelectorAll(".main_screen__stvols path");

    // Создаем анимацию для каждой буквы
    lettersStvols.forEach((letter1) => {
        gsap.from(letter1, {
            opacity: 0, // Устанавливаем начальную прозрачность 0
            repeat: 4, // Повторять анимацию бесконечно
            yoyo: true, // Обратная анимация
            duration: Math.random() * 0.2, // Случайная продолжительность анимации от 0.5 до 1 секунды
            delay: Math.random() * 0.5 + 0.5, // Случайная задержка перед началом анимации
            // ease: "power1.inOut", // Устанавливаем эффект плавности анимации
        });
    });

    // Получаем список всех элементов <path>
    const lettersZaryad = document.querySelectorAll(".main_screen__zaryad path");

    // Создаем анимацию для каждой буквы
    lettersZaryad.forEach((letter2) => {
        gsap.from(letter2, {
            opacity: 0, // Устанавливаем начальную прозрачность 0
            repeat: 4, // Повторять анимацию бесконечно
            yoyo: true, // Обратная анимация
            duration: Math.random() * 0.2, // Случайная продолжительность анимации от 0.5 до 1 секунды
            delay: Math.random() * 0.5 + 0.5, // Случайная задержка перед началом анимации
            // ease: "power1.inOut", // Устанавливаем эффект плавности анимации
        });
    });

    const paragraph = document.querySelector(".main_about_text");
    const text = paragraph.textContent.trim();
    paragraph.textContent = "";
    const words = text.split(/\s+/);
    words.forEach((word) => {
        const wordSpan = document.createElement("span");
        wordSpan.textContent = word + " ";
        if (word.toLowerCase() === "gun5") {
            wordSpan.classList.add("main_color");
        }
        paragraph.appendChild(wordSpan);

        gsap.from(wordSpan, {
            opacity: 0,
            repeat: 4,
            yoyo: true,
            duration: Math.random() * 0.2,
            delay: Math.random() * 0.5,
            scrollTrigger: {
                trigger: '.main_about',
                start: 'center 80%',
                // markers: true,
                // scrub: true,
            },
        });
    });


    // слайдер

    // Получаем кнопки переключения слайдов
    const prevButton = document.querySelector('.main_faces_content_btns_item_prev');
    const nextButton = document.querySelector('.main_faces_content_btns_item_next');

    // Получаем все слайды
    const slides = document.querySelectorAll('.main_faces_content_slider_item');

    // Инициализация: устанавливаем первый слайд как активный
    let currentIndex = 0;
    slides[currentIndex].classList.add('active');

    // Функция для анимации символов заголовка на текущем или новом слайде
    function animateTitleCharacters(titleElement, reverse = false, onComplete) {
        // Разбиваем текст заголовка на отдельные символы
        const characters = titleElement.textContent.trim().split('');

        // Очищаем содержимое заголовка
        titleElement.textContent = '';

        // Создаем элементы <span> для каждого символа и добавляем их в заголовок
        characters.forEach((char) => {
            const charSpan = document.createElement('span');
            charSpan.textContent = char;
            titleElement.appendChild(charSpan);
        });

        // Применяем анимацию к каждому символу отдельно
        const spans = titleElement.querySelectorAll('span');
        spans.forEach((span) => {
            const config = {
                opacity: 0,
                repeat: 2, // Повторять анимацию бесконечно
                yoyo: true, // Обратная анимация
                duration: Math.random() * 0.2, // Случайная продолжительность анимации от 0.5 до 1 секунды
                delay: Math.random() * 0.5,
                // stagger: 0.05, // Интервал между анимациями символов
                onComplete,
                // Дополнительные настройки анимации можно добавить здесь, например, transform
            };

            // Применяем анимацию отдельно к каждому символу
            if (reverse) {
                gsap.to(span, config);
            } else {
                gsap.from(span, config);
            }
        });

    }


    // Функция для переключения слайдов с анимацией заголовка
    function changeSlideWithAnimation(newIndex) {
        // Получаем текущий активный слайд
        const currentSlide = slides[currentIndex];

        // Получаем новый слайд, на который мы переключаемся
        const newSlide = slides[newIndex];

        // Получаем заголовок на текущем слайде
        const currentTitle = currentSlide.querySelector('.main_faces_content_slider_body_name');

        // Получаем заголовок на новом слайде
        const newTitle = newSlide.querySelector('.main_faces_content_slider_body_name');

        // Анимация исчезновения символов заголовка на текущем слайде
        animateTitleCharacters(currentTitle, true, () => {
            // После завершения анимации исчезновения символов
            // Удаляем класс 'active' у текущего слайда
            currentSlide.classList.remove('active');

            // Добавляем класс 'active' к новому слайду
            newSlide.classList.add('active');

            // Анимация появления символов заголовка на новом слайде
            animateTitleCharacters(newTitle);
        });

        // Обновляем текущий индекс
        currentIndex = newIndex;
    }

    // Обработка события клика на кнопку 'prev' для переключения на предыдущий слайд с анимацией
    prevButton.addEventListener('click', () => {
        // Вычисляем индекс предыдущего слайда
        const newIndex = (currentIndex - 1 + slides.length) % slides.length;

        // Переключаемся на предыдущий слайд с анимацией
        changeSlideWithAnimation(newIndex);
    });

    // Обработка события клика на кнопку 'next' для переключения на следующий слайд с анимацией
    nextButton.addEventListener('click', () => {
        // Вычисляем индекс следующего слайда
        const newIndex = (currentIndex + 1) % slides.length;

        // Переключаемся на следующий слайд с анимацией
        changeSlideWithAnimation(newIndex);
    });


});

