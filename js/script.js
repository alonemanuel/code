ACRONYMS = {
    'ז"ל': 'זכרונו לברכה',
    'עכת"ד': 'עד כאן תוכן דבריו',
    'דר"י': 'דרבי',
    'הרמ"א': 'הרבי משה איסרליש',
    'עיי"ש': 'עיין שם',
    'אע"פ': 'אף על פי',
    'ע"פ': 'על פי',
    'בכה"ג': 'בכהאי גונא',
    'וא"כ': 'ואחר כך',
    'עכ"פ': 'על כל פנים',
    'עכ"ד': 'עד כאן דבריו',
    'שו"ת': 'שאלות ותשובות',
    'רמב"ם': 'רבי משה בן מימון',
    'קיי"ל': 'קיימא לןד',
    'שו"ע': 'שולחן ערוך',
    'חו"מ': 'חול המועד',
    'מהדו"ק': 'מהדורה קמה',
    'סק"ג': `סעיף קטן ג'`




}

function activateTooltipster() {
    $(document).ready(function () {
        $('.tooltip').tooltipster({
            theme: 'my-custom-theme'
        });
    });

}

function customizeTheme() {
    // $('.tooltip').tooltipster({
    //     theme: 'my-custom-theme'
    // });
}



function shrinkToMinWidth() {
    var d = document.querySelectorAll('.min-width'), i, w, width, height;

    for (i = 0; i < d.length; i++) {
        width = d[i].offsetWidth;
        height = d[i].offsetHeight;

        for (w = width; w; w--) {
            d[i].style.width = w + 'px';
            if (d[i].offsetHeight !== height)
                break;
        }

        if (w < d[i].scrollWidth) {
            d[i].style.width = d[i].style.maxWidth = d[i].scrollWidth + 'px';
        } else {
            d[i].style.width = (w + 1) + 'px';
        }
    }
}

function doReplace(text) {

    let re = new RegExp(Object.keys(ACRONYMS).join("|"), "gi");


    var div = document.createElement("div");
    div.innerHTML = text.nodeValue.replace(re, function (matched) {
        return `<span class='acronym'>${matched}</span>`;
    });
    // div.innerHTML = text.nodeValue.replace(/(בריה)/g, "<span class='acronym'>$1</span>");
    var parent = text.parentNode;
    var children = div.childNodes;
    for (var i = children.length - 1; i >= 0; i--) {
        parent.insertBefore(children[i], text.nextSibling);
    }
    parent.removeChild(text);
}

function walk(root) {
    // for (const [key, value] of Object.entries(ACRONYMS)) {
    //     console.debug(`key: ${key}, val: ${value}`);
    // }

    // console.debug(`walking ${root}...`);

    if (root.nodeType == 3) // text node
    {
        doReplace(root);
        return;
    }
    var children = root.childNodes;
    for (var i = children.length - 1; i >= 0; i--) {
        walk(children[i]);
    }
}

function setDarkModeButton() {
    let darkModeButton = document.getElementById(`siteLogo`);
}

function initAcronyms() {
    let acronyms = document.getElementsByClassName(`acronym`);
    // console.debug(acronyms);
    for (let acronym of acronyms) {
        // console.debug(acronym);
        let origText = acronym.textContent;
        let mappedText = ACRONYMS[origText];
        // acronym.classList.remove('acronym');
        acronym.addEventListener(`click`, function () {
            let text = acronym.textContent;
            // acronym.style.visibility = 'hidden';
            acronym.style.opacity = 0;
            acronym.textContent = (text == origText) ? mappedText : origText;
            // acronym.style.visibility = 'visible';
            // acronym.style.opacity = 1;
        });
    }
}

function setLoadingDiv() {
    let body = document.body,
        html = document.documentElement;

    let height = Math.max(body.scrollHeight, body.offsetHeight,
        html.clientHeight, html.scrollHeight, html.offsetHeight);

    window.addEventListener('scroll', (e) => {

        let progression = window.scrollY / height;
        // console.debug(progression);
        let screenHeight = window.innerHeight;
        let divHeight = progression * screenHeight;
        document.getElementById('loadingBar').style.minHeight = `${divHeight}px`;
    });
}

const CLICK_EVENT = 'click';
function setHeadersClicks() {
    let articleHeaders = document.querySelectorAll('article h1');
    console.log(articleHeaders);
    for (let header of articleHeaders) {
        header.style.cursor = 'pointer';
        let originalPosition = header.getBoundingClientRect().top;
        console.log(`${originalPosition}`);
        header.addEventListener(CLICK_EVENT, function () {
            // header.parentNode.parentNode.scrollTop = 0;
            console.log(header.parentNode.parentNode);
            let articleDiv =header.parentNode.parentNode; 
            // .style.color = '#303030';
            window.scroll({top:articleDiv.offsetTop})
            // window.scrollTo({ top: originalPosition + window.scrollY });
            // this.scrollIntoView({ block: 'start' });
        });
    }
}

function main() {
    // activateTooltipster();
    customizeTheme();
    // wrapAcronyms();

    window.onload = function () {
        walk(document.body);
        initAcronyms();
    };
    setDarkModeButton();
    setLoadingDiv();
    setHeadersClicks();
}

main();

// להזמין מה זה הפס האדום (המתרגם);

// שהצד יהיה ניווט בין כתבות
// וגם לודבר  כמה קריאה נשארה לך
// אולי אייקונים כמו בית כנסת וקטוריים
// אולי מספרים
// יותר מעניין ממספרים
// אולי לפתוח תפריט צד, אבל בלי יותר מדי פריקשן, אם בן אדם אדם רוצה לקרוא כתבה
// אז שיקרא

// אולי בהובר נפתח ובלחיצה נכנס
// אולי טקסט שנפתח כשלוחצים ודוחף את השאר;
// להכניס כפתור שקופץ למעלה מהסוף של הכתבות