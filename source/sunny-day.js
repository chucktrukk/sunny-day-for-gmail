/*
 * 2013 Josselin Auguste <jauguste@iblop.net>
 *
 */

function sunnyDay() {
    var container = null;

    function waitForDOM() {
        container = document.querySelector('.nH .BltHke .UI div:nth-child(5)');
        if (container) {
            init();
        } else {
            window.setTimeout(waitForDOM, 100);
        }
    }

    function init() {
        addDOMEventListener();
        sunnify();
    }

    function addDOMEventListener() {
        container.addEventListener("DOMSubtreeModified", sunnify, false);
    }

    function removeDOMEventListener() {
        container.removeEventListener("DOMSubtreeModified", sunnify, false);
    }

    function sunnify() {
        var no_new_mail_container = document.querySelector('.nH .BltHke .UI div:nth-child(5) .TC');
        if (no_new_mail_container) {
            removeDOMEventListener();
            var image = 'chrome-extension://' + chrome.i18n.getMessage("@@extension_id") + '/inbox-zero.png';
            no_new_mail_container.innerHTML = '';
            no_new_mail_container.innerHTML += '<p><img class="inbox-zero-image" src="' + image + '" alt="Inbox Zero man, can\'t believe it!" title="Inbox Zero man, can\'t believe it!" /></p>';
            no_new_mail_container.innerHTML += '<p class="inbox-zero-label">Ho, doesn\'t it look like an inbox zero?</p>';
            no_new_mail_container.innerHTML += '<p class="inbox-zero-label">Enjoy your day!</p>';
            addDOMEventListener();
        }
    }

    window.setTimeout(waitForDOM, 100);
}

sunnyDay();