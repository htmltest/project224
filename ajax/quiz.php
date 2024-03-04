<?php
    if (!isset($_POST['step'])) {
        echo '{
                "status"    : "step",
                "step"      : "1",
                "title"     : "Твой Ganzo",
                "number"    : "Вопрос <span>1/3</span>",
                "question"  : "Вселенная секса поистине бесконечна! Но&nbsp;чтобы твоё путешествие было максимально приятным и&nbsp;безопасным, нужно определить цель. Куда полетим?",
                "answers"   : [
                    {
                        "value" : "1",
                        "text"  : "Млечный Путь: там много красивых и&nbsp;ярких звёзд"
                    },
                    {
                        "value" : "2",
                        "text"  : "К&nbsp;самой большой, красивой и&nbsp;яркой звезде"
                    },
                    {
                        "value" : "3",
                        "text"  : "Хочется найти чёрную дыру и&nbsp;хоть одним глазком заглянуть за&nbsp;горизонт событий"
                    },
                    {
                        "value" : "4",
                        "text"  : "Не&nbsp;важно, куда. Главное&nbsp;&mdash; лететь прямо сейчас!"
                    }
                ]
            }';
    } elseif ($_POST['step'] == '1') {
        if ($_POST['answer'] == '1') {
            echo '{
                    "status"    : "step",
                    "step"      : "2",
                    "title"     : "Твой Ganzo",
                    "number"    : "Вопрос <span>2/3</span>",
                    "question"  : "Отлично! Лететь хотя&nbsp;бы не&nbsp;так далеко :) Уточним маршрут:",
                    "hiddens"   : [
                        {
                            "name"  : "answer1",
                            "value" : "' . $_POST['answer'] . '"
                        }
                    ],
                    "answers"   : [
                        {
                            "value" : "1",
                            "text"  : "Сириус! Он&nbsp;же самый яркий!"
                        },
                        {
                            "value" : "2",
                            "text"  : "Солнце: красиво, близко, безопасно"
                        },
                        {
                            "value" : "3",
                            "text"  : "К&nbsp;VY&nbsp;Большого Пса&nbsp;&mdash; она&nbsp;же самая большая, вроде?"
                        },
                        {
                            "value" : "4",
                            "text"  : "На&nbsp;месте разберёмся, у&nbsp;нас в&nbsp;Млечном Пути все звёзды клёвые!"
                        }
                    ]
                }';
        } else if ($_POST['answer'] == '2') {
            echo '{
                    "status"    : "step",
                    "step"      : "2",
                    "title"     : "Твой Ganzo",
                    "number"    : "Вопрос <span>2/3</span>",
                    "question"  : "А&nbsp;если поточнее? Звёзд-то много!",
                    "hiddens"   : [
                        {
                            "name"  : "answer1",
                            "value" : "' . $_POST['answer'] . '"
                        }
                    ],
                    "answers"   : [
                        {
                            "value" : "1",
                            "text"  : "Много. И&nbsp;все будут моими!"
                        },
                        {
                            "value" : "2",
                            "text"  : "Сириус! Он&nbsp;же самый яркий!"
                        },
                        {
                            "value" : "3",
                            "text"  : "Сориентируюсь на&nbsp;месте: не&nbsp;так важна цель, как само путешествие"
                        },
                        {
                            "value" : "4",
                            "text"  : "Чего тут думать? Вон она на&nbsp;небе самая большая прямо сейчас горит!"
                        }
                    ]
                }';
        } else if ($_POST['answer'] == '3') {
            echo '{
                    "status"    : "step",
                    "step"      : "2",
                    "title"     : "Твой Ganzo",
                    "number"    : "Вопрос <span>2/3</span>",
                    "question"  : "А&nbsp;чем тебя так манят чёрные дыры?",
                    "hiddens"   : [
                        {
                            "name"  : "answer1",
                            "value" : "' . $_POST['answer'] . '"
                        }
                    ],
                    "answers"   : [
                        {
                            "value" : "1",
                            "text"  : "Они массивные, а&nbsp;я&nbsp;люблю всё большое!"
                        },
                        {
                            "value" : "2",
                            "text"  : "У&nbsp;них такое сильное притяжение, что устоять невозможно. Прямо как у&nbsp;меня!"
                        },
                        {
                            "value" : "3",
                            "text"  : "Хочу постичь тайны вселенной и&nbsp;испытать новые ощущения!"
                        },
                        {
                            "value" : "4",
                            "text"  : "Все эти причины одинаково важны для науки. Моей науки!"
                        }
                    ]
                }';
        } else {
            echo '{
                    "status"    : "step",
                    "step"      : "2",
                    "title"     : "Твой Ganzo",
                    "number"    : "Вопрос <span>2/3</span>",
                    "question"  : "Ок, ты&nbsp;уже на&nbsp;космодроме. Какую музыку будешь слушать в&nbsp;полёте?",
                    "hiddens"   : [
                        {
                            "name"  : "answer1",
                            "value" : "' . $_POST['answer'] . '"
                        }
                    ],
                    "answers"   : [
                        {
                            "value" : "1",
                            "text"  : "Земля в&nbsp;иллюминаторе, земля в&nbsp;иллюминаторе..."
                        },
                        {
                            "value" : "2",
                            "text"  : "Техно. Или транс!"
                        },
                        {
                            "value" : "3",
                            "text"  : "Инстасамка, Клава Кока и&nbsp;Jony"
                        },
                        {
                            "value" : "4",
                            "text"  : "Без разницы. Полетели уже скорее!"
                        }
                    ]
                }';
        }
    } elseif ($_POST['step'] == '2') {
        echo '{
                "status"    : "step",
                "step"      : "3",
                "title"     : "Твой Ganzo",
                "number"    : "Вопрос <span>3/3</span>",
                "question"  : "И&nbsp;последний вопрос: к&nbsp;какой группе относится твой знак зодиака?",
                "hiddens"   : [
                    {
                        "name"  : "answer1",
                        "value" : "' . $_POST['answer1'] . '"
                    },
                    {
                        "name"  : "answer2",
                        "value" : "' . $_POST['answer'] . '"
                    }
                ],
                "answers"   : [
                    {
                        "value" : "1",
                        "text"  : "Весенние символы: Рыбы, Овен, Телец"
                    },
                    {
                        "value" : "2",
                        "text"  : "Летние: Близнецы, Рак, Лев"
                    },
                    {
                        "value" : "3",
                        "text"  : "Осенние: Дева, Весы, Скорпион"
                    },
                    {
                        "value" : "4",
                        "text"  : "Зимние: Стрелец, Козерог, Водолей"
                    },
                    {
                        "value" : "5",
                        "text"  : "Я&nbsp;не&nbsp;верю в&nbsp;гороскопы"
                    }
                ]
            }';
    } else {
        if ($_POST['answer1'] == '1' && $_POST['answer2'] == '1') {
            echo '{
                    "status"    : "result",
                    "title"     : "Чем ярче звёзды&nbsp;&mdash; тем ярче ощущения!",
                    "subtitle"  : "Твой выбор",
                    "img"       : "files/catalogue-item-extase-3.png",
                    "product"   : "Extase",
                    "descr"     : "Точечно-ребристые презервативы анатомической формы",
                    "detail"    : "ganzo-05-card-extase.html"
                }';
        } else if ($_POST['answer1'] == '1' && $_POST['answer2'] == '2') {
            echo '{
                    "status"    : "result",
                    "title"     : "Классика&nbsp;&mdash; гарантированное удовольствие!",
                    "subtitle"  : "Твой выбор",
                    "img"       : "files/catalogue-item-classic-3.png",
                    "product"   : "Classic",
                    "descr"     : "Классические презервативы",
                    "detail"    : "ganzo-05-card-classic.html"
                }';
        } else if ($_POST['answer1'] == '1' && $_POST['answer2'] == '3') {
            echo '{
                    "status"    : "result",
                    "title"     : "Большой Maxus&nbsp;&mdash; большое удовольствие!",
                    "subtitle"  : "Твой выбор",
                    "img"       : "files/catalogue-item-xxl-3.png",
                    "product"   : "XXL",
                    "descr"     : "Презервативы увеличенные",
                    "detail"    : "ganzo-05-card-xxl.html"
                }';
        } else if ($_POST['answer1'] == '1' && $_POST['answer2'] == '4') {
            echo '{
                    "status"    : "result",
                    "title"     : "Когда хочется всё и&nbsp;сразу&nbsp;&mdash; не&nbsp;надо себе отказывать!",
                    "subtitle"  : "Твой выбор",
                    "img"       : "files/catalogue-item-mixed-30.png",
                    "product"   : "Mixed",
                    "descr"     : "Микс разных презервативов (ультратонкие, классические, точечно-ребристые)",
                    "detail"    : "ganzo-05-mixed.html"
                }';
        } else if ($_POST['answer1'] == '2' && $_POST['answer2'] == '1') {
            echo '{
                    "status"    : "result",
                    "title"     : "Звёзды всех цветов&nbsp;&mdash; ты&nbsp;этого достоин!",
                    "subtitle"  : "Твой выбор",
                    "img"       : "files/catalogue-item-juice-3.png",
                    "product"   : "Juice",
                    "descr"     : "Презервативы ароматизированные цветные",
                    "detail"    : "ganzo-05-card-juice.html"
                }';
        } else if ($_POST['answer1'] == '2' && $_POST['answer2'] == '2') {
            echo '{
                    "status"    : "result",
                    "title"     : "Ярким астронавтам&nbsp;&mdash; яркие ощущения!",
                    "subtitle"  : "Твой выбор",
                    "img"       : "files/catalogue-item-extase-3.png",
                    "product"   : "Extase",
                    "descr"     : "Точечно-ребристые презервативы анатомической формы",
                    "detail"    : "ganzo-05-card-extase.html"
                }';
        } else if ($_POST['answer1'] == '2' && $_POST['answer2'] == '3') {
            echo '{
                    "status"    : "result",
                    "title"     : "Классика&nbsp;&mdash; гарантированное удовольствие!",
                    "subtitle"  : "Твой выбор",
                    "img"       : "files/catalogue-item-classic-3.png",
                    "product"   : "Classic",
                    "descr"     : "Классические презервативы",
                    "detail"    : "ganzo-05-card-classic.html"
                }';
        } else if ($_POST['answer1'] == '2' && $_POST['answer2'] == '4') {
            echo '{
                    "status"    : "result",
                    "title"     : "Большие звёзды&nbsp;&mdash; большие удовольствия!",
                    "subtitle"  : "Твой выбор",
                    "img"       : "files/catalogue-item-xxl-3.png",
                    "product"   : "XXL",
                    "descr"     : "Презервативы увеличенные",
                    "detail"    : "ganzo-05-card-xxl.html"
                }';
        } else if ($_POST['answer1'] == '3' && $_POST['answer2'] == '1') {
            echo '{
                    "status"    : "result",
                    "title"     : "Большому человеку&nbsp;&mdash; большой Maxus!",
                    "subtitle"  : "Твой выбор",
                    "img"       : "files/catalogue-item-xxl-3.png",
                    "product"   : "XXL",
                    "descr"     : "Презервативы увеличенные",
                    "detail"    : "ganzo-05-card-xxl.html"
                }';
        } else if ($_POST['answer1'] == '3' && $_POST['answer2'] == '2') {
            echo '{
                    "status"    : "result",
                    "title"     : "Сильнее притяжение&nbsp;&mdash; сильнее близость.",
                    "subtitle"  : "Твой выбор",
                    "img"       : "files/catalogue-item-thin-3.png",
                    "product"   : "Ultra Thin",
                    "descr"     : "Ультратонкие презервативы",
                    "detail"    : "ganzo-05-card-thin.html"
                }';
        } else if ($_POST['answer1'] == '3' && $_POST['answer2'] == '3') {
            echo '{
                    "status"    : "result",
                    "title"     : "Идеальный вариант для любителей ярких новых ощущений!",
                    "subtitle"  : "Твой выбор",
                    "img"       : "files/catalogue-item-juice-3.png",
                    "product"   : "Juice",
                    "descr"     : "Презервативы ароматизированные цветные",
                    "detail"    : "ganzo-05-card-juice.html"
                }';
        } else if ($_POST['answer1'] == '3' && $_POST['answer2'] == '4') {
            echo '{
                    "status"    : "result",
                    "title"     : "Разнообразие&nbsp;&mdash; наше всё!",
                    "subtitle"  : "Твой выбор",
                    "img"       : "files/catalogue-item-mixed-30.png",
                    "product"   : "Mixed",
                    "descr"     : "Микс разных презервативов (ультратонкие, классические, точечно-ребристые)",
                    "detail"    : "ganzo-05-mixed.html"
                }';
        } else if ($_POST['answer1'] == '4' && $_POST['answer2'] == '1') {
            echo '{
                    "status"    : "result",
                    "title"     : "Удовольствие&nbsp;&mdash; в&nbsp;классике!",
                    "subtitle"  : "Твой выбор",
                    "img"       : "files/catalogue-item-classic-3.png",
                    "product"   : "Classic",
                    "descr"     : "Классические презервативы",
                    "detail"    : "ganzo-05-card-classic.html"
                }';
        } else if ($_POST['answer1'] == '4' && $_POST['answer2'] == '2') {
            echo '{
                    "status"    : "result",
                    "title"     : "О, ты&nbsp;любишь острые ощущения!",
                    "subtitle"  : "Твой выбор",
                    "img"       : "files/catalogue-item-extase-3.png",
                    "product"   : "Extase",
                    "descr"     : "Точечно-ребристые презервативы анатомической формы",
                    "detail"    : "ganzo-05-card-extase.html"
                }';
        } else if ($_POST['answer1'] == '4' && $_POST['answer2'] == '3') {
            echo '{
                    "status"    : "result",
                    "title"     : "Любишь всё яркое? Тогда",
                    "subtitle"  : "Твой выбор",
                    "img"       : "files/catalogue-item-juice-3.png",
                    "product"   : "Juice",
                    "descr"     : "Презервативы ароматизированные цветные",
                    "detail"    : "ganzo-05-card-juice.html"
                }';
        } else {
            echo '{
                    "status"    : "result",
                    "title"     : "Не&nbsp;трать время на&nbsp;выбор. Удовольствий столько много!",
                    "subtitle"  : "Твой выбор",
                    "img"       : "files/catalogue-item-mixed-30.png",
                    "product"   : "Mixed",
                    "descr"     : "Микс разных презервативов (ультратонкие, классические, точечно-ребристые)",
                    "detail"    : "ganzo-05-mixed.html"
                }';
        }
    }
?>