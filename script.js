if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
                navigator.serviceWorker.register('sw.js')
                .then(registration => {
                    console.log('Service Worker registered with scope:', registration.scope);
                })
                .catch(error => {
                    console.error('Service Worker registration failed:', error);
                });
            });
        }
        // Данные знаков зодиака
        const zodiacSigns = [
            {
                id: 1,
                name: "Овен",
                dates: "21 марта - 19 апреля",
                element: "Огонь",
                planet: "Марс",
                stone: "Алмаз, рубин",
                description: "Первый знак зодиака, символизирующий начало и жизненную энергию.",
                strengths: "Энергичность, решительность",
                weaknesses: "Импульсивность",
                image: "images/aries.png"
            },
            {
                id: 2,
                name: "Телец",
                dates: "20 апреля - 20 мая",
                element: "Земля",
                planet: "Венера",
                stone: "Изумруд, сапфир",
                description: "Знак стабильности и надежности. Ценит комфорт и материальные блага.",
                strengths: "Надежность, терпение",
                weaknesses: "Упрямство",
                image: "images/taurus.png"
            },
            {
                id: 3,
                name: "Близнецы",
                dates: "21 мая - 20 июня",
                element: "Воздух",
                planet: "Меркурий",
                stone: "Агат, хризопраз",
                description: "Знак общения и интеллекта. Любопытны и легко адаптируются.",
                strengths: "Коммуникабельность, любознательность",
                weaknesses: "Непостоянство",
                image: "images/gemini.png"
            },
            {
                id: 4,
                name: "Рак",
                dates: "21 июня - 22 июля",
                element: "Вода",
                planet: "Луна",
                stone: "Жемчуг, лунный камень",
                description: "Знак эмоций и семьи. Чувствительны и интуитивны.",
                strengths: "Эмпатия, преданность",
                weaknesses: "Ранимость",
                image: "images/cancer.png"
            },
            {
                id: 5,
                name: "Лев",
                dates: "23 июля - 22 августа",
                element: "Огонь",
                planet: "Солнце",
                stone: "Рубин, янтарь",
                description: "Знак творчества и лидерства. Уверены в себе и щедры.",
                strengths: "Харизма, щедрость",
                weaknesses: "Тщеславие",
                image: "images/leo.png"
            },
            {
                id: 6,
                name: "Дева",
                dates: "23 августа - 22 сентября",
                element: "Земля",
                planet: "Меркурий",
                stone: "Сердолик, нефрит",
                description: "Знак анализа и практичности. Внимательны к деталям.",
                strengths: "Аналитический ум, практичность",
                weaknesses: "Перфекционизм",
                image: "images/virgo.png"
            },
            {
                id: 7,
                name: "Весы",
                dates: "23 сентября - 22 октября",
                element: "Воздух",
                planet: "Венера",
                stone: "Опал, лазурит",
                description: "Знак гармонии и партнерства. Дипломатичны и обаятельны.",
                strengths: "Дипломатичность, обаяние",
                weaknesses: "Нерешительность",
                image: "images/libra.png"
            },
            {
                id: 8,
                name: "Скорпион",
                dates: "23 октября - 21 ноября",
                element: "Вода",
                planet: "Плутон, Марс",
                stone: "Гранат, малахит",
                description: "Знак трансформации и страсти. Интенсивны и проницательны.",
                strengths: "Решительность, проницательность",
                weaknesses: "Ревность",
                image: "images/scorpio.png"
            },
            {
                id: 9,
                name: "Стрелец",
                dates: "22 ноября - 21 декабря",
                element: "Огонь",
                planet: "Юпитер",
                stone: "Бирюза, сапфир",
                description: "Знак приключений и философии. Оптимистичны и прямолинейны.",
                strengths: "Оптимизм, честность",
                weaknesses: "Нетактичность",
                image: "images/sagittarius.png"
            },
            {
                id: 10,
                name: "Козерог",
                dates: "22 декабря - 19 января",
                element: "Земля",
                planet: "Сатурн",
                stone: "Оникс, рубин",
                description: "Знак амбиций и дисциплины. Целеустремленны и терпеливы.",
                strengths: "Ответственность, дисциплина",
                weaknesses: "Пессимизм",
                image: "images/capricorn.png"
            },
            {
                id: 11,
                name: "Водолей",
                dates: "20 января - 18 февраля",
                element: "Воздух",
                planet: "Уран, Сатурн",
                stone: "Аметист, аквамарин",
                description: "Знак оригинальности и гуманизма. Независимы и изобретательны.",
                strengths: "Оригинальность, дружелюбие",
                weaknesses: "Непредсказуемость",
                image: "images/aquarius.png"
            },
            {
                id: 12,
                name: "Рыбы",
                dates: "19 февраля - 20 марта",
                element: "Вода",
                planet: "Нептун, Юпитер",
                stone: "Аквамарин, лунный камень",
                description: "Знак интуиции и сострадания. Чувствительны и мечтательны.",
                strengths: "Сострадание, интуиция",
                weaknesses: "Склонность к иллюзиям",
                image: "images/pisces.png"
            }
        ];

        // Матрица совместимости
        const compatibilityMatrix = [
            // Овен
            { sign1: 1, sign2: 1, percent: 85, desc: "Отличная совместимость!" },
            { sign1: 1, sign2: 2, percent: 65, desc: "Хорошая совместимость" },
            { sign1: 1, sign2: 3, percent: 80, desc: "Очень хорошая совместимость" },
            { sign1: 1, sign2: 4, percent: 45, desc: "Низкая совместимость" },
            { sign1: 1, sign2: 5, percent: 90, desc: "Превосходная совместимость!" },
            { sign1: 1, sign2: 6, percent: 60, desc: "Средняя совместимость" },
            { sign1: 1, sign2: 7, percent: 70, desc: "Хорошая совместимость" },
            { sign1: 1, sign2: 8, percent: 50, desc: "Сложная совместимость" },
            { sign1: 1, sign2: 9, percent: 85, desc: "Отличная совместимость!" },
            { sign1: 1, sign2: 10, percent: 55, desc: "Низкая совместимость" },
            { sign1: 1, sign2: 11, percent: 75, desc: "Хорошая совместимость" },
            { sign1: 1, sign2: 12, percent: 58, desc: "Средняя совместимость" },
            
            // Телец
            { sign1: 2, sign2: 1, percent: 65, desc: "Хорошая совместимость" },
            { sign1: 2, sign2: 2, percent: 87, desc: "Отличная совместимость!" },
            { sign1: 2, sign2: 3, percent: 62, desc: "Средняя совместимость" },
            { sign1: 2, sign2: 4, percent: 78, desc: "Хорошая совместимость" },
            { sign1: 2, sign2: 5, percent: 55, desc: "Средняя совместимость" },
            { sign1: 2, sign2: 6, percent: 82, desc: "Очень хорошая совместимость" },
            { sign1: 2, sign2: 7, percent: 70, desc: "Хорошая совместимость" },
            { sign1: 2, sign2: 8, percent: 60, desc: "Средняя совместимость" },
            { sign1: 2, sign2: 9, percent: 45, desc: "Низкая совместимость" },
            { sign1: 2, sign2: 10, percent: 88, desc: "Отличная совместимость!" },
            { sign1: 2, sign2: 11, percent: 52, desc: "Средняя совместимость" },
            { sign1: 2, sign2: 12, percent: 75, desc: "Хорошая совместимость" },
            
            // Близнецы
            { sign1: 3, sign2: 1, percent: 80, desc: "Очень хорошая совместимость" },
            { sign1: 3, sign2: 2, percent: 62, desc: "Средняя совместимость" },
            { sign1: 3, sign2: 3, percent: 83, desc: "Отличная совместимость!" },
            { sign1: 3, sign2: 4, percent: 50, desc: "Средняя совместимость" },
            { sign1: 3, sign2: 5, percent: 70, desc: "Хорошая совместимость" },
            { sign1: 3, sign2: 6, percent: 65, desc: "Хорошая совместимость" },
            { sign1: 3, sign2: 7, percent: 85, desc: "Отличная совместимость!" },
            { sign1: 3, sign2: 8, percent: 45, desc: "Низкая совместимость" },
            { sign1: 3, sign2: 9, percent: 75, desc: "Хорошая совместимость" },
            { sign1: 3, sign2: 10, percent: 55, desc: "Средняя совместимость" },
            { sign1: 3, sign2: 11, percent: 90, desc: "Превосходная совместимость!" },
            { sign1: 3, sign2: 12, percent: 60, desc: "Средняя совместимость" },
            
            // Рак
            { sign1: 4, sign2: 1, percent: 45, desc: "Низкая совместимость" },
            { sign1: 4, sign2: 2, percent: 78, desc: "Хорошая совместимость" },
            { sign1: 4, sign2: 3, percent: 50, desc: "Средняя совместимость" },
            { sign1: 4, sign2: 4, percent: 86, desc: "Отличная совместимость!" },
            { sign1: 4, sign2: 5, percent: 60, desc: "Средняя совместимость" },
            { sign1: 4, sign2: 6, percent: 72, desc: "Хорошая совместимость" },
            { sign1: 4, sign2: 7, percent: 55, desc: "Средняя совместимость" },
            { sign1: 4, sign2: 8, percent: 80, desc: "Очень хорошая совместимость" },
            { sign1: 4, sign2: 9, percent: 40, desc: "Низкая совместимость" },
            { sign1: 4, sign2: 10, percent: 65, desc: "Хорошая совместимость" },
            { sign1: 4, sign2: 11, percent: 50, desc: "Средняя совместимость" },
            { sign1: 4, sign2: 12, percent: 88, desc: "Отличная совместимость!" },
            
            // Лев
            { sign1: 5, sign2: 1, percent: 90, desc: "Превосходная совместимость!" },
            { sign1: 5, sign2: 2, percent: 55, desc: "Средняя совместимость" },
            { sign1: 5, sign2: 3, percent: 70, desc: "Хорошая совместимость" },
            { sign1: 5, sign2: 4, percent: 60, desc: "Средняя совместимость" },
            { sign1: 5, sign2: 5, percent: 85, desc: "Отличная совместимость!" },
            { sign1: 5, sign2: 6, percent: 50, desc: "Средняя совместимость" },
            { sign1: 5, sign2: 7, percent: 75, desc: "Хорошая совместимость" },
            { sign1: 5, sign2: 8, percent: 65, desc: "Хорошая совместимость" },
            { sign1: 5, sign2: 9, percent: 80, desc: "Очень хорошая совместимость" },
            { sign1: 5, sign2: 10, percent: 45, desc: "Низкая совместимость" },
            { sign1: 5, sign2: 11, percent: 60, desc: "Средняя совместимость" },
            { sign1: 5, sign2: 12, percent: 70, desc: "Хорошая совместимость" },
            
            // Дева
            { sign1: 6, sign2: 1, percent: 60, desc: "Средняя совместимость" },
            { sign1: 6, sign2: 2, percent: 82, desc: "Очень хорошая совместимость" },
            { sign1: 6, sign2: 3, percent: 65, desc: "Хорошая совместимость" },
            { sign1: 6, sign2: 4, percent: 72, desc: "Хорошая совместимость" },
            { sign1: 6, sign2: 5, percent: 50, desc: "Средняя совместимость" },
            { sign1: 6, sign2: 6, percent: 84, desc: "Отличная совместимость!" },
            { sign1: 6, sign2: 7, percent: 65, desc: "Хорошая совместимость" },
            { sign1: 6, sign2: 8, percent: 70, desc: "Хорошая совместимость" },
            { sign1: 6, sign2: 9, percent: 55, desc: "Средняя совместимость" },
            { sign1: 6, sign2: 10, percent: 87, desc: "Отличная совместимость!" },
            { sign1: 6, sign2: 11, percent: 60, desc: "Средняя совместимость" },
            { sign1: 6, sign2: 12, percent: 75, desc: "Хорошая совместимость" },
            
            // Весы
            { sign1: 7, sign2: 1, percent: 70, desc: "Хорошая совместимость" },
            { sign1: 7, sign2: 2, percent: 70, desc: "Хорошая совместимость" },
            { sign1: 7, sign2: 3, percent: 85, desc: "Отличная совместимость!" },
            { sign1: 7, sign2: 4, percent: 55, desc: "Средняя совместимость" },
            { sign1: 7, sign2: 5, percent: 75, desc: "Хорошая совместимость" },
            { sign1: 7, sign2: 6, percent: 65, desc: "Хорошая совместимость" },
            { sign1: 7, sign2: 7, percent: 83, desc: "Отличная совместимость!" },
            { sign1: 7, sign2: 8, percent: 50, desc: "Средняя совместимость" },
            { sign1: 7, sign2: 9, percent: 80, desc: "Очень хорошая совместимость" },
            { sign1: 7, sign2: 10, percent: 60, desc: "Средняя совместимость" },
            { sign1: 7, sign2: 11, percent: 78, desc: "Хорошая совместимость" },
            { sign1: 7, sign2: 12, percent: 65, desc: "Хорошая совместимость" },
            
            // Скорпион
            { sign1: 8, sign2: 1, percent: 50, desc: "Сложная совместимость" },
            { sign1: 8, sign2: 2, percent: 60, desc: "Средняя совместимость" },
            { sign1: 8, sign2: 3, percent: 45, desc: "Низкая совместимость" },
            { sign1: 8, sign2: 4, percent: 80, desc: "Очень хорошая совместимость" },
            { sign1: 8, sign2: 5, percent: 65, desc: "Хорошая совместимость" },
            { sign1: 8, sign2: 6, percent: 70, desc: "Хорошая совместимость" },
            { sign1: 8, sign2: 7, percent: 50, desc: "Средняя совместимость" },
            { sign1: 8, sign2: 8, percent: 90, desc: "Превосходная совместимость!" },
            { sign1: 8, sign2: 9, percent: 40, desc: "Низкая совместимость" },
            { sign1: 8, sign2: 10, percent: 75, desc: "Хорошая совместимость" },
            { sign1: 8, sign2: 11, percent: 55, desc: "Средняя совместимость" },
            { sign1: 8, sign2: 12, percent: 85, desc: "Отличная совместимость!" },
            
            // Стрелец
            { sign1: 9, sign2: 1, percent: 85, desc: "Отличная совместимость!" },
            { sign1: 9, sign2: 2, percent: 45, desc: "Низкая совместимость" },
            { sign1: 9, sign2: 3, percent: 75, desc: "Хорошая совместимость" },
            { sign1: 9, sign2: 4, percent: 40, desc: "Низкая совместимость" },
            { sign1: 9, sign2: 5, percent: 80, desc: "Очень хорошая совместимость" },
            { sign1: 9, sign2: 6, percent: 55, desc: "Средняя совместимость" },
            { sign1: 9, sign2: 7, percent: 80, desc: "Очень хорошая совместимость" },
            { sign1: 9, sign2: 8, percent: 40, desc: "Низкая совместимость" },
            { sign1: 9, sign2: 9, percent: 88, desc: "Отличная совместимость!" },
            { sign1: 9, sign2: 10, percent: 50, desc: "Средняя совместимость" },
            { sign1: 9, sign2: 11, percent: 82, desc: "Очень хорошая совместимость" },
            { sign1: 9, sign2: 12, percent: 60, desc: "Средняя совместимость" },
            
            // Козерог
            { sign1: 10, sign2: 1, percent: 55, desc: "Низкая совместимость" },
            { sign1: 10, sign2: 2, percent: 88, desc: "Отличная совместимость!" },
            { sign1: 10, sign2: 3, percent: 55, desc: "Средняя совместимость" },
            { sign1: 10, sign2: 4, percent: 65, desc: "Хорошая совместимость" },
            { sign1: 10, sign2: 5, percent: 45, desc: "Низкая совместимость" },
            { sign1: 10, sign2: 6, percent: 87, desc: "Отличная совместимость!" },
            { sign1: 10, sign2: 7, percent: 60, desc: "Средняя совместимость" },
            { sign1: 10, sign2: 8, percent: 75, desc: "Хорошая совместимость" },
            { sign1: 10, sign2: 9, percent: 50, desc: "Средняя совместимость" },
            { sign1: 10, sign2: 10, percent: 85, desc: "Отличная совместимость!" },
            { sign1: 10, sign2: 11, percent: 52, desc: "Средняя совместимость" },
            { sign1: 10, sign2: 12, percent: 70, desc: "Хорошая совместимость" },
            
            // Водолей
            { sign1: 11, sign2: 1, percent: 75, desc: "Хорошая совместимость" },
            { sign1: 11, sign2: 2, percent: 52, desc: "Средняя совместимость" },
            { sign1: 11, sign2: 3, percent: 90, desc: "Превосходная совместимость!" },
            { sign1: 11, sign2: 4, percent: 50, desc: "Средняя совместимость" },
            { sign1: 11, sign2: 5, percent: 60, desc: "Средняя совместимость" },
            { sign1: 11, sign2: 6, percent: 60, desc: "Средняя совместимость" },
            { sign1: 11, sign2: 7, percent: 78, desc: "Хорошая совместимость" },
            { sign1: 11, sign2: 8, percent: 55, desc: "Средняя совместимость" },
            { sign1: 11, sign2: 9, percent: 82, desc: "Очень хорошая совместимость" },
            { sign1: 11, sign2: 10, percent: 52, desc: "Средняя совместимость" },
            { sign1: 11, sign2: 11, percent: 84, desc: "Отличная совместимость!" },
            { sign1: 11, sign2: 12, percent: 65, desc: "Хорошая совместимость" },
            
            // Рыбы
            { sign1: 12, sign2: 1, percent: 58, desc: "Средняя совместимость" },
            { sign1: 12, sign2: 2, percent: 75, desc: "Хорошая совместимость" },
            { sign1: 12, sign2: 3, percent: 60, desc: "Средняя совместимость" },
            { sign1: 12, sign2: 4, percent: 88, desc: "Отличная совместимость!" },
            { sign1: 12, sign2: 5, percent: 70, desc: "Хорошая совместимость" },
            { sign1: 12, sign2: 6, percent: 75, desc: "Хорошая совместимость" },
            { sign1: 12, sign2: 7, percent: 65, desc: "Хорошая совместимость" },
            { sign1: 12, sign2: 8, percent: 85, desc: "Отличная совместимость!" },
            { sign1: 12, sign2: 9, percent: 60, desc: "Средняя совместимость" },
            { sign1: 12, sign2: 10, percent: 70, desc: "Хорошая совместимость" },
            { sign1: 12, sign2: 11, percent: 65, desc: "Хорошая совместимость" },
            { sign1: 12, sign2: 12, percent: 89, desc: "Отличная совместимость!" }
        ];

        // Основные функции
        function initApp() {
            setupNavigation();
            renderZodiacSigns();
            setupCompatibility();
            setupContactForm();
            setupPWA();
            showPage('home');
        }

        function setupNavigation() {
            // Обработчики для меню
            document.querySelectorAll('nav a').forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    showPage(this.dataset.page);
                });
            });

            // Обработчик для логотипа
            document.getElementById('homeLink').addEventListener('click', function(e) {
                e.preventDefault();
                showPage('home');
            });
        }

        function renderZodiacSigns() {
            const grid = document.getElementById('zodiacGrid');
            const detailsContainer = document.getElementById('zodiacDetailsContainer');

            zodiacSigns.forEach(sign => {
                // Карточка знака
                const card = document.createElement('div');
                card.className = 'zodiac-card';
                card.innerHTML = `
                    <img src="${sign.image}" alt="${sign.name}" onerror="this.src='https://via.placeholder.com/100?text=${sign.name}'">
                    <h3>${sign.name}</h3>
                    <p>${sign.dates}</p>
                    <p>${sign.element} знак</p>
                `;
                card.addEventListener('click', () => showZodiacDetails(sign.id));
                grid.appendChild(card);

                // Детали знака
                const details = document.createElement('div');
                details.className = 'zodiac-details';
                details.id = `details-${sign.id}`;
                details.innerHTML = `
                    <div class="zodiac-details-header">
                        <img src="${sign.image}" alt="${sign.name}" onerror="this.src='https://via.placeholder.com/120?text=${sign.name}'">
                        <div class="zodiac-details-info">
                            <h2>${sign.name}</h2>
                            <p><strong>Даты:</strong> ${sign.dates}</p>
                            <p><strong>Стихия:</strong> ${sign.element}</p>
                            <p><strong>Планета:</strong> ${sign.planet}</p>
                            <p><strong>Камень:</strong> ${sign.stone}</p>
                        </div>
                    </div>
                    <p>${sign.description}</p>
                    <p><strong>Сильные стороны:</strong> ${sign.strengths}</p>
                    <p><strong>Слабые стороны:</strong> ${sign.weaknesses}</p>
                    <button class="back-button">Назад</button>
                `;
                detailsContainer.appendChild(details);

                // Кнопка "Назад"
                details.querySelector('.back-button').addEventListener('click', () => {
                    document.querySelectorAll('.zodiac-details').forEach(d => d.classList.remove('active'));
                    grid.style.display = 'grid';
                });
            });

            // Заполняем таблицу совместимости
            const tableBody = document.querySelector('.compatibility-table tbody');
            zodiacSigns.forEach(sign1 => {
                const row = document.createElement('tr');
                row.innerHTML = `<td><strong>${sign1.name}</strong></td>`;
                
                zodiacSigns.forEach(sign2 => {
                    const compat = findCompatibility(sign1.id, sign2.id);
                    let className = '';
                    if (compat.percent >= 75) className = 'high';
                    else if (compat.percent >= 60) className = 'medium';
                    else className = 'low';
                    
                    row.innerHTML += `<td><span class="compatibility-percentage ${className}">${compat.percent}%</span></td>`;
                });
                
                tableBody.appendChild(row);
            });
        }

        function findCompatibility(sign1Id, sign2Id) {
            const result = compatibilityMatrix.find(item => 
                (item.sign1 === sign1Id && item.sign2 === sign2Id) || 
                (item.sign1 === sign2Id && item.sign2 === sign1Id));
            
            return result || { percent: 50, desc: "Средняя совместимость" };
        }

        function showZodiacDetails(signId) {
            document.getElementById('zodiacGrid').style.display = 'none';
            document.getElementById(`details-${signId}`).classList.add('active');
        }

        function setupCompatibility() {
            const sign1Select = document.getElementById('sign1');
            const sign2Select = document.getElementById('sign2');
            
            // Заполняем select-ы
            zodiacSigns.forEach(sign => {
                const option = new Option(sign.name, sign.id);
                sign1Select.add(option);
                sign2Select.add(new Option(sign.name, sign.id));
            });

            // Обработчик проверки
            document.getElementById('checkCompatBtn').addEventListener('click', checkCompatibility);
        }

        function checkCompatibility() {
            const sign1Id = parseInt(document.getElementById('sign1').value);
            const sign2Id = parseInt(document.getElementById('sign2').value);
            
            if (!sign1Id || !sign2Id) {
                alert("Выберите оба знака!");
                return;
            }

            const result = findCompatibility(sign1Id, sign2Id);
            
            document.getElementById('compatTitle').textContent = 
                `${getSignName(sign1Id)} + ${getSignName(sign2Id)}`;
            
            const percentageElement = document.getElementById('compatPercentage');
            percentageElement.textContent = `${result.percent}%`;
            
            // Очищаем предыдущие классы
            percentageElement.className = '';
            
            // Добавляем класс в зависимости от процента
            if (result.percent >= 75) {
                percentageElement.classList.add('high');
            } else if (result.percent >= 60) {
                percentageElement.classList.add('medium');
            } else {
                percentageElement.classList.add('low');
            }
            
            document.getElementById('compatDescription').textContent = result.desc;
            document.getElementById('compatibilityResult').style.display = 'block';
        }

        function getSignName(id) {
            const sign = zodiacSigns.find(s => s.id === id);
            return sign ? sign.name : '';
        }

        function setupContactForm() {
            const select = document.getElementById('userZodiac');
            
            zodiacSigns.forEach(sign => {
                select.add(new Option(sign.name, sign.id));
            });

            document.getElementById('contactForm').addEventListener('submit', function(e) {
                e.preventDefault();
                alert('Сообщение отправлено!');
                this.reset();
            });
        }

        function setupPWA() {
            let deferredPrompt;
            const installBtn = document.getElementById('installButton');

            window.addEventListener('beforeinstallprompt', (e) => {
                e.preventDefault();
                deferredPrompt = e;
                installBtn.style.display = 'block';
            });

            installBtn.addEventListener('click', async () => {
                if (deferredPrompt) {
                    deferredPrompt.prompt();
                    const { outcome } = await deferredPrompt.userChoice;
                    if (outcome === 'accepted') {
                        installBtn.style.display = 'none';
                    }
                }
            });

            window.addEventListener('appinstalled', () => {
                installBtn.style.display = 'none';
            });

            // Проверяем, установлено ли приложение
            if (window.matchMedia('(display-mode: standalone)').matches) {
                installBtn.style.display = 'none';
            }
        }

        function showPage(pageId) {
            // Скрыть все страницы
            document.querySelectorAll('.page').forEach(page => {
                page.classList.remove('active');
            });
            
            // Показать выбранную
            document.getElementById(pageId)?.classList.add('active');
            
            // Обновить активную ссылку
            document.querySelectorAll('nav a').forEach(link => {
                link.classList.toggle('active', link.dataset.page === pageId);
            });
        }
        // Запуск приложения
        document.addEventListener('DOMContentLoaded', initApp);