module.exports = async function lack(text){
	let task = ``
    let ans = `${smileerr}Упс... Я не знаю такой команды!`
    if(text.includes(`ан`)){
        task += `\nᅠ〰 Анекдот`
    }
    if(text.includes(`ба`)){
        task += `\nᅠ〰 Баланс`
        task += `\nᅠ〰 Банк`
        task += `\nᅠ〰 Банк [сумма]`
        task += `\nᅠ〰 Банк снять [сумма]`
    }
    if(text.includes(`бе`)){
        task += `\nᅠ〰 Беседы`
    }
    if(text.includes(`бо`)){
        task += `\nᅠ〰 Бонус`
    }
    if(text.includes(`би`)){
        task += `\nᅠ〰 Бизнес`
        task += `\nᅠ〰 Бизнес нанять [кол-во]`
    }
    if(text.includes(`бр`)){
        task += `\nᅠ〰 Браки`
        task += `\nᅠ〰 Брак [ID игрока]`
    }
    if(text.includes(`ва`)){
        task += `\nᅠ〰 Вабанк`
    }
    if(text.includes(`ве`)){
        task += `\nᅠ〰 Вертолёты`
    }
    if(text.includes(`во`)){
        task += `\nᅠ〰 Войти [id семьи]`
    }
    if(text.includes(`вы`)){
        task += `\nᅠ〰 Выйти`
    }
    if(text.includes(`ви`)){
        task += `\nᅠ〰 Вип`
    }
    if(text.includes(`ги`)){
        task += `\nᅠ〰 Гиф [запрос]`
    }
    if(text.includes(`да`)){
        task += `\nᅠ〰 Дата рег`
    }
    if(text.includes(`до`)){
        task += `\nᅠ〰 Дом`
        task += `\nᅠ〰 Доход`
        task += `\nᅠ〰 Дом улучшить`
    }
    if(text.includes(`за`)){
        task += `\nᅠ〰 Загадка`
    }
    if(text.includes(`иг`)){
        task += `\nᅠ〰 Игры`
    }
    if(text.includes(`ис`)){
        task += `\nᅠ〰 История`
    }
    if(text.includes(`иф`)){
        task += `\nᅠ〰 Ифакт`
    }
    if(text.includes(`ис`)){
        task += `\nᅠ〰 История`
    }
    if(text.includes(`ис`)){
        task += `\nᅠ〰 История`
    }
    if(text.includes(`ку`)){
        task += `\nᅠ〰 Курс`
    }
    if(text.includes(`ку`)){
        task += `\nᅠ〰 Кубик [1-6]`
        task += `\nᅠ〰 Купить [предмет]`
        task += `\nᅠ〰 Кубик [1-6]`
    }
    if(text.includes(`ка`)){
        task += `\nᅠ〰 Казино [сумма]`
    }
    if(text.includes(`кт`)){
        task += `\nᅠ〰 Когда`
        task += `\nᅠ〰 Кто [я]`
        task += `\nᅠ〰 Копилка`
        task += `\nᅠ〰 Копать [предмет]`
    }
    if(text.includes(`ка`)){
        task += `\nᅠ〰 Камни`
        task += `\nᅠ〰 Казино [сумма]`
    }
    if(text.includes(`кр`)){
        task += `\nᅠ〰 Крутить`
    }
    if(text.includes(`ки`)){
        task += `\nᅠ〰 Кит`
    }
    if(text.includes(`кв`)){
        task += `\nᅠ〰 Квесты`
    }
    if(text.includes(`кн`)){
        task += `\nᅠ〰 Книжка`
        task += `\nᅠ〰 Кнопка [название]`
    }
    if(text.includes(`ло`)){
        task += `\nᅠ〰 Лодки`
        task += `\nᅠ〰 Лотерея`
    }
    if(text.includes(`ма`)){
        task += `\nᅠ〰 Машины`
    }
    if(text.includes(`мо`)){
        task += `\nᅠ〰 Монетка удалить`
        task += `\nᅠ〰 Монетка [номер]`
        task += `\nᅠ〰 Монетка [орёл/решка] [ставка]`
    }
    if(text.includes(`ор`)){
        task += `\nᅠ〰 Оружие`
    }
    if(text.includes(`от`)){
        task += `\nᅠ〰 Отпустить`
    }
    if(text.includes(`ог`)){
        task += `\nᅠ〰 Оглушить`
    }
    if(text.includes(`об`)){
        task += `\nᅠ〰 Общий сбор`
    }
    if(text.includes(`он`)){
        task += `\nᅠ〰 Онлайн`
    }
    if(text.includes(`пр`)){
        task += `\nᅠ〰 Профиль`
        task += `\nᅠ〰 Пред`
        task += `\nᅠ〰 Правила`
        task += `\nᅠ〰 Прогулка`
        task += `\nᅠ〰 Проверка`
        task += `\nᅠ〰 Промо [промокод]`
        task += `\nᅠ〰 Продать [предмет]`
    }
    if(text.includes(`пе`)){
        task += `\nᅠ〰 Печеньки`
    }
    if(text.includes(`по`)){
        task += `\nᅠ〰 Помощь`
        task += `\nᅠ〰 Погода`
        task += `\nᅠ〰 Помочь семье`
    }
    if(text.includes(`пи`)){
        task += `\nᅠ〰 Питомцы`
    }
    if(text.includes(`пе`)){
        task += `\nᅠ〰 Переверни [фраза]`
        task += `\nᅠ〰 Передать [предмет]`
        task += `\nᅠ〰 Передать [ID] [сумма]`
        task += `\nᅠ〰 Переведи [1/2] [текст]`
    }
    if(text.includes(`ре`)){
        task += `\nᅠ〰 Реф`
        task += `\nᅠ〰 Рейтинг`
        task += `\nᅠ〰 Реши [пример]`
        task += `\nᅠ〰 Репорт [текст]`
    }
    if(text.includes(`ри`)){
        task += `\nᅠ〰 Риклы`
    }
    if(text.includes(`ра`)){
        task += `\nᅠ〰 Разные`
        task += `\nᅠ〰 Работы`
        task += `\nᅠ〰 Работать`
        task += `\nᅠ〰 Развестись`
        task += `\nᅠ〰 Развлекательные`
    }
    if(text.includes(`са`)){
        task += `\nᅠ〰 Самолёты`
    }
    if(text.includes(`се`)){
        task += `\nᅠ〰 Сейф`
        task += `\nᅠ〰 Семья`
    }
    if(text.includes(`ст`)){
        task += `\nᅠ〰 Стат`
        task += `\nᅠ〰 Стандартные`
        task += `\nᅠ〰 Стаканчик [1-4] [ставка]`
    }
    if(text.includes(`сн`)){
        task += `\nᅠ〰 Снежок`
    }
    if(text.includes(`сл`)){
        task += `\nᅠ〰 Слепить`
    }
    if(text.includes(`ск`)){
        task += `\nᅠ〰 Скажи`
    }
    if(text.includes(`сб`)){
        task += `\nᅠ〰 Сборочные [улучшить]`
    }
    if(text.includes(`со`)){
        task += `\nᅠ〰 Состав`
        task += `\nᅠ〰 Собрать перчатку`
        task += `\nᅠ〰 Сократить [ссылка]`
        task += `\nᅠ〰 Создать семью [Название]`
    }
    if(text.includes(`те`)){
        task += `\nᅠ〰 Телефоны`
    }
    if(text.includes(`та`)){
        task += `\nᅠ〰 Таблетка`
        task += `\nᅠ〰 Таблетки`

    }
    if(text.includes(`то`)){
        task += `\nᅠ〰 Топы`
    }
    if(text.includes(`ти`)){
        task += `\nᅠ〰 Тир`
    }
    if(text.includes(`тр`)){
        task += `\nᅠ〰 Трейд [вверх/вниз] [ставка]`
    }
    if(text.includes(`ув`)){
        task += `\nᅠ〰 Уволиться`
    }
    if(text.includes(`фа`)){
        task += `\nᅠ〰 Факт`
    }
    if(text.includes(`ча`)){
        task += `\nᅠ〰 Чат команды`
    }
    if(text.includes(`ша`)){
        task += `\nᅠ〰 Шар`
    }
    if(task !== ``) ans += `\n▶ Возможно вы имели ввиду:${task}`
    return ans
};