$(document).ready(function() {

    $('body').on('focus', '.form-input input, .form-input textarea', function() {
        $(this).parent().addClass('focus');
    });

    $('body').on('blur', '.form-input input, .form-input textarea', function() {
        $(this).parent().removeClass('focus');
        if ($(this).val() != '') {
            $(this).parent().addClass('full');
        } else {
            $(this).parent().removeClass('full');
        }
    });

    $('form').each(function() {
        initForm($(this));
    });

    $('.header-search-link').click(function(e) {
        $('html').addClass('search-open');
        $('.search-window-form-input input').focus();
        e.preventDefault();
    });

    $('.search-window-close').click(function(e) {
        $('html').removeClass('search-open');
        e.preventDefault();
    });

    $('body').on('keyup', function(e) {
        if (e.keyCode == 27) {
            $('html').removeClass('search-open');
        }
    });

    $('.menu-mobile-link').click(function(e) {
        if ($('html').hasClass('menu-mobile-open')) {
            $('html').removeClass('menu-mobile-open');
            $('meta[name="viewport"]').attr('content', 'width=device-width');
            $(window).scrollTop($('html').data('scrollTop'));
        } else {
            var curWidth = $(window).width();
            if (curWidth < 375) {
                curWidth = 375;
            }
            var curScroll = $(window).scrollTop();
            $('html').addClass('menu-mobile-open');
            $('meta[name="viewport"]').attr('content', 'width=' + curWidth);
            $('html').data('scrollTop', curScroll);
        }
        e.preventDefault();
    });

    $('.slider').each(function() {
        var curSlider = $(this);
        const swiper = new Swiper(curSlider[0], {
            loop: true,
            effect: 'fade',
            touchAngle: 30,
            autoplay: {
                delay: 5000,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            }
        });
    });

    $('.main-play-bubble-center-list a').click(function(e) {
        var curLink = $(this);
        if (curLink.hasClass('active')) {
            curLink.removeClass('active');
            $('.main-play-bubble.active').removeClass('active');
        } else {
            $('.main-play-bubble-center-list a.active').removeClass('active');
            curLink.addClass('active');
            var curID = curLink.attr('data-id');
            $('.main-play-bubble.active').removeClass('active');
            $('.main-play-bubble[data-id="' + curID + '"]').addClass('active');
        }
        e.preventDefault();
    });

    $('.main-play-bubble-center-list a').on('mouseenter', function(e) {
        var curLink = $(this);
        var curID = curLink.attr('data-id');
        $('.main-play-bubble[data-id="' + curID + '"]').addClass('hover');
    });

    $('.main-play-bubble-center-list a').on('mouseleave', function(e) {
        $('.main-play-bubble.hover').removeClass('hover');
    });

    $('.main-play-bubble').click(function(e) {
        var curBubble = $(this);
        if (curBubble.hasClass('active')) {
            curBubble.removeClass('active');
            $('.main-play-bubble-center-list a.active').removeClass('active');
        } else {
            $('.main-play-bubble.active').removeClass('active');
            curBubble.addClass('active');
            var curID = curBubble.attr('data-id');
            $('.main-play-bubble-center-list a.active').removeClass('active');
            $('.main-play-bubble-center-list a[data-id="' + curID + '"]').addClass('active');
        }
    });

    $('.main-play-bubble').on('mouseenter', function(e) {
        var curBubble = $(this);
        var curID = curBubble.attr('data-id');
        $('.main-play-bubble-center-list a[data-id="' + curID + '"]').addClass('hover');
    });

    $('.main-play-bubble').on('mouseleave', function(e) {
        $('.main-play-bubble-center-list a.hover').removeClass('hover');
    });

    $('.quiz').each(function() {
        updateQuiz();
    });

    function updateQuiz() {
        $('.quiz').each(function() {
            var curQuiz = $(this);
            curQuiz.addClass('loading');
            var curData = null;
            if (curQuiz.find('form').length == 1) {
                curData = curQuiz.find('form').serialize();
            }
            $.ajax({
                type: 'POST',
                url: $('.quiz').attr('data-url'),
                dataType: 'json',
                data: curData,
                cache: false,
                timeout: 30000
            }).fail(function(jqXHR, textStatus, errorThrown) {
                curQuiz.find('.quiz-error').remove();
                curQuiz.append('<div class="quiz-error">Сервис временно недоступен, попробуйте позже.</div>')
                curQuiz.removeClass('loading');
            }).done(function(data) {
                curQuiz.find('.quiz-error').remove();
                var newHTML = '';
                if (data.status == 'step') {
                    newHTML +=  '<div class="quiz-header"><h1>' + data.title + '</h1></div>' +
                                '<form action="#" method="post">';
                    if (typeof(data.hiddens) != 'undefined') {
                        for (var i = 0; i < data.hiddens.length; i++) {
                            newHTML +=  '<input type="hidden" name="' + data.hiddens[i].name + '" value="' + data.hiddens[i].value + '">';
                        }
                    }
                    newHTML +=      '<input type="hidden" name="step" value="' + data.step + '">' +
                                    '<div class="quiz-step">' +
                                        '<h5>' + data.number + '</h5>' +
                                        '<h4>' + data.question + '</h4>' +
                                        '<div class="quiz-step-answers">';
                    for (var i = 0; i < data.answers.length; i++) {
                        newHTML +=          '<div class="quiz-step-answer"><div class="form-radio"><label><input type="radio" name="answer" value="' + data.answers[i].value + '"><span>' + data.answers[i].text + '</span></label></div></div>';
                    }
                    newHTML +=          '</div>' +
                                    '</div>' +
                                '</form>';
                } else {
                    newHTML +=  '<div class="quiz-results">' +
                                    '<div class="quiz-header">' +
                                        '<div class="quiz-header-title">' + data.subtitle + '</div>' +
                                        '<div class="quiz-header-text">' + data.title + '</div>' +
                                    '</div>' +
                                    '<div class="quiz-results-img"><img src="' + data.img + '" alt=""></div>' +
                                    '<h4>' + data.product + '</h4>' +
                                    '<div class="quiz-results-text">' + data.descr + '</div>' +
                                    '<div class="quiz-results-links">' +
                                        '<a href="' + data.detail + '" class="btn"><span>Подробнее</span></a>' +
                                        '<a href="#" class="btn btn-border quiz-results-back"><span>Пройти еще раз</span></a>' +
                                    '</div>' +
                                '</div>';
                }
                curQuiz.html(newHTML);
                curQuiz.removeClass('loading');
            });
        });
    }

    $('body').on('change', '.quiz-step-answers input', function(e) {
        updateQuiz();
    });

    $('body').on('click', '.quiz-results-back', function(e) {
        $('.quiz form').remove();
        updateQuiz();
        e.preventDefault();
    });

    $('.catalogue-header-filter-current').click(function() {
        $(this).parent().toggleClass('open');
    });

    $(document).click(function(e) {
        if ($(e.target).parents().filter('.catalogue-header-filter').length == 0) {
            $('.catalogue-header-filter').removeClass('open');
        }
    });

    $('.catalogue-header-filter-list a').click(function(e) {
        var curItem = $(this);
        if (curItem.hasClass('active')) {
            $('.catalogue-header-filter').removeClass('open');
        } else {
            $('.catalogue-header-filter-list a.active').removeClass('active');
            curItem.addClass('active');
            $('.catalogue-header-filter-value').html(curItem.html());
            $('.catalogue-header-filter').removeClass('open');
            var curType = curItem.attr('data-value');
            $('.catalogue-item').each(function() {
                var curTypes = $(this).attr('data-types').split(',');
                if(curType == '' || curTypes.includes(curType)) {
                    $(this).removeClass('hidden');
                } else {
                    $(this).addClass('hidden');
                }
            });
        }
        e.preventDefault();
    });

    $('.catalogue-item-count-size').click(function() {
        var curCount = $(this);
        var curItem = curCount.parents().filter('.catalogue-item');
        if (!curCount.hasClass('active')) {
            curItem.find('.catalogue-item-count-size').removeClass('active');
            curCount.addClass('active');
            var curIndex = curItem.find('.catalogue-item-count-size').index(curCount);
            curItem.find('.catalogue-item-photos-image.active').removeClass('active');
            curItem.find('.catalogue-item-photos-image').eq(curIndex).addClass('active');

        }
        return false;
    });

    $('.detail-count a').click(function(e) {
        var curItem = $(this);
        if (!curItem.hasClass('active')) {
            $('.detail-count a.active').removeClass('active');
            curItem.addClass('active');
            var curIndex = $('.detail-count a').index(curItem);
            $('.detail-photos-image.active').removeClass('active');
            $('.detail-photos-image').eq(curIndex).addClass('active');

        }
        e.preventDefault();
    });

    $('.buy-places-filter').each(function() {
        buyPlacesUpdate();
    });

    $('.buy-places-filter-item').click(function() {
        var curItem = $(this);
        if (!curItem.hasClass('active')) {
            $('.buy-places-filter-item.active').removeClass('active');
            curItem.addClass('active');
            buyPlacesUpdate();
        }
    });

    function buyPlacesUpdate(isAll) {
        var curMax = 12;
        if (typeof(isAll) != 'undefined' && isAll) {
            curMax = Infinity;
        }
        var curType = $('.buy-places-filter-item.active').attr('data-value');
        $('.buy-places-list').stop(true, true).fadeOut(function() {
            $('.buy-places-item.visible').removeClass('visible');
            var countType = 0;
            if (curType == '') {
                $('.buy-places-item:lt(' + curMax + ')').addClass('visible');
                countType = $('.buy-places-item').length;
            } else {
                $('.buy-places-item').each(function() {
                    if ($(this).attr('data-type') == curType) {
                        countType++;
                        if (countType <= curMax) {
                            $(this).addClass('visible');
                        }
                    }
                });
            }
            if (isFinite(curMax)) {
                $('.buy-places-more').removeClass('open');
                if ($('.buy-places-item.visible').length < countType) {
                    $('.buy-places-more').addClass('visible');
                } else {
                    $('.buy-places-more').removeClass('visible');
                }
            }
            $('.buy-places-list').fadeIn();
        });
    }

    $('.buy-places-more a').click(function(e) {
        $('.buy-places-more').toggleClass('open');
        if ($('.buy-places-more').hasClass('open')) {
            buyPlacesUpdate(true);
        } else {
            buyPlacesUpdate();
        }
        e.preventDefault();
    });

    $('.faq-item.open').each(function() {
        $(this).find('.faq-item-text').show();
    });

    $('.faq-item h4').click(function() {
        var curItem = $(this).parent();
        curItem.toggleClass('open');
        curItem.find('.faq-item-text').slideToggle();
    });

    $('.window-age').each(function() {
        var curRemember = false;
        if (typeof $.cookie('window-age') != 'undefined' && $.cookie('window-age') == 'false') {
            window.location = $('.window-age-no').attr('href');
        }
        if (typeof $.cookie('window-age') != 'undefined' && $.cookie('window-age') == 'true') {
            curRemember = true;
        }
        if (!curRemember) {
            var curPadding = $('.wrapper').width();
            var curScroll = $(window).scrollTop();
            $('html').addClass('window-open');
            curPadding = $('.wrapper').width() - curPadding;
            $('body').css({'margin-right': curPadding + 'px'});
        }
    });

    $('body').on('click', '.window-age-yes', function(e) {
        if ($('.form-checkbox input').prop('checked')) {
            $.cookie('window-age', 'true', {expires: 365});
        }
        $('html').removeClass('window-open');
        $('body').css({'margin-right': 0});
        e.preventDefault();
    });

    $('body').on('click', '.window-age-no', function(e) {
        if ($('.form-checkbox input').prop('checked')) {
            $.cookie('window-age', 'false', {expires: 365});
        }
    });

});

function initForm(curForm) {
	curForm.find('.form-input input, .form-input textarea').each(function() {
		if ($(this).val() != '') {
			$(this).parent().addClass('full');
		} else {
			$(this).parent().removeClass('full');
		}
	});

    curForm.find('.form-input input:focus, .form-input textarea:focus').each(function() {
        $(this).trigger('focus');
    });

    curForm.find('.form-input textarea').each(function() {
        $(this).css({'height': this.scrollHeight, 'overflow-y': 'hidden'});
        $(this).on('input', function() {
            this.style.height = 'auto';
            this.style.height = (this.scrollHeight) + 'px';
        });
    });

    curForm.find('.captcha-container').each(function() {
        if ($('script#smartCaptchaScript').length == 0) {
            $('body').append('<script src="https://captcha-api.yandex.ru/captcha.js?render=onload&onload=smartCaptchaLoad" defer id="smartCaptchaScript"></script>');
        } else {
            if (window.smartCaptcha) {
                var curID = window.smartCaptcha.render(this, {
                    sitekey: smartCaptchaKey,
                    callback: smartCaptchaCallback,
                    invisible: true,
                    hideShield: true,
                    hl: 'ru'
                });
                $(this).attr('data-smartid', curID);
            }
        }
    });

    curForm.validate({
        ignore: '',
        submitHandler: function(form) {
            var curForm = $(form);

            var smartCaptchaWaiting = false;
            curForm.find('.captcha-container').each(function() {
                if (curForm.attr('form-smartcaptchawaiting') != 'true') {
                    var curBlock = $(this);
                    var curInput = curBlock.find('input[name="smart-token"]');
                    curInput.removeAttr('value');
                    smartCaptchaWaiting = true;
                    $('form[form-smartcaptchawaiting]').removeAttr('form-smartcaptchawaiting');
                    curForm.attr('form-smartcaptchawaiting', 'false');

                    if (!window.smartCaptcha) {
                        alert('Сервис временно недоступен, попробуйте позже.');
                        return;
                    }
                    var curID = $(this).attr('data-smartid');
                    window.smartCaptcha.execute(curID);
                } else {
                    curForm.removeAttr('form-smartcaptchawaiting');
                }
            });

            if (!smartCaptchaWaiting) {

                if (curForm.hasClass('ajax-form')) {
                    curForm.addClass('loading');
                    var formData = new FormData(form);

                    $.ajax({
                        type: 'POST',
                        url: curForm.attr('action'),
                        processData: false,
                        contentType: false,
                        dataType: 'json',
                        data: formData,
                        cache: false
                    }).fail(function(jqXHR, textStatus, errorThrown) {
                        curForm.find('.message').remove();
                        curForm.append('<div class="message message-error">Сервис временно недоступен, попробуйте позже.</div>')
                        curForm.removeClass('loading');
                    }).done(function(data) {
                        curForm.find('.message').remove();
                        if (data.status) {
                            curForm.html('<div class="message message-success">' + data.message + '</div>')
                        } else {
                            curForm.prepend('<div class="message message-error">' + data.message + '</div>')
                        }
                        curForm.removeClass('loading');
                    });
                } else {
                    form.submit();
                }
            }
        }
    });
}

var smartCaptchaKey = 'uahGSHTKJqjaJ0ezlhjrbOYH4OxS6zzL9CZ47OgY';

function smartCaptchaLoad() {
    $('.captcha-container').each(function() {
        if (!window.smartCaptcha) {
            return;
        }
        var curID = window.smartCaptcha.render(this, {
            sitekey: smartCaptchaKey,
            callback: smartCaptchaCallback,
            invisible: true,
            hideShield: true
        });
        $(this).attr('data-smartid', curID);
    });
}

function smartCaptchaCallback(token) {
    $('form[form-smartcaptchawaiting]').attr('form-smartcaptchawaiting', 'true');
    $('form[form-smartcaptchawaiting] [type="submit"]').trigger('click');
}

$(window).on('load', function() {
    $('.page-header-bubble').addClass('animated');

    $('.page-header').on('mousemove', function(e) {
        var x = e.clientX / window.innerWidth;
        var y = e.clientY / window.innerHeight;
        $('.page-header-bubble').eq(0).each(function() {
            $(this).css({'transform': 'translate(-' + x * 100 + 'px, -' + y * 100 + 'px)'});
        });
        $('.page-header-bubble').eq(1).each(function() {
            $(this).css({'transform': 'translate(' + x * 100 + 'px, ' + y * 100 + 'px)'});
        });
    });

    $('.slider').on('mousemove', function(e) {
        var x = e.clientX / window.innerWidth;
        var y = e.clientY / window.innerHeight;
        $('.slider-5-bubble').each(function() {
            $(this).css({'transform': 'translate(-' + x * 25 + 'px, -' + y * 25 + 'px)'});
        });
        $('.slider-5-bubble').each(function() {
            $(this).css({'transform': 'translate(' + x * 25 + 'px, ' + y * 25 + 'px)'});
        });
    });
});

$(window).on('load resize scroll', function() {
    var windowScroll = $(window).scrollTop();

    $('body').append('<div id="body-test-height" style="position:fixed; left:0; top:0; right:0; bottom:0; z-index:-1"></div>');
    var windowHeight = $('#body-test-height').height();
    $('#body-test-height').remove();

    $('.about-pref-content').eq(0).each(function() {
        var curBlock = $(this);
        if (windowScroll + windowHeight - 100 > curBlock.offset().top) {
            $('.about-prefs').addClass('animated-1');
        } else {
            $('.about-prefs').removeClass('animated-1');
        }
    });

    $('.about-pref-photo').eq(0).each(function() {
        var curBlock = $(this);
        if (windowScroll + windowHeight - 100 > curBlock.offset().top) {
            $('.about-prefs').addClass('animated-2');
        } else {
            $('.about-prefs').removeClass('animated-2');
        }
    });

    $('.main-prefs-item').each(function() {
        var curBlock = $(this);
        if (windowScroll + windowHeight - 100 > curBlock.offset().top) {
            curBlock.addClass('animated');
        } else {
            curBlock.removeClass('animated');
        }
    });

});