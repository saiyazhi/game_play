let googleAdsID = "5357643623";
let titleData = {
    CN: "肥猪满圈", //中文
    CHT: "肥豬滿圈", //繁体
    EN: "Fat Pigs", //英文
    KOR: "미친 농장", //韩文
    JP: "肥えた豚", //日文
    TH: "หมูอ้วน" //泰语
}
window.titleData = titleData;

let loadProgre; //假的游戏加载进度
let loadText; //加载load 文本
let loadImg; //loading gif 图片
let bgColor; //背景图片
var adBreak; //谷歌广告对象
initWeSane();
/** 初始化相关内容 */
function initWeSane() {
    languageTitle();

    loadText = document.getElementById('loadingText');
    loadImg = document.getElementById('loadingImg');
    // bgColor = document.getElementById('bgColorImg');

    loadProgre = 0;
    updateLoadText(0.02);
    initGooleAds();

    /** 隐藏 cocos自带的Logo 和 进度条 */
    var splash = document.getElementById('splash');
    var progressBar = splash.querySelector('.progress-bar span');
    splash.style.display = "block"
    progressBar.style.display = "block"
}
/** 修改标题 */
function languageTitle() {
    if (window.navigator.language == "zh-CN" || window.navigator.language == "zh-cn") {
        document.title = titleData.CN;
    } else if (window.navigator.language == "zh-TW" || window.navigator.language == "zh-HK") {
        document.title = titleData.CHT;
    } else if (window.navigator.language == "ko-KR") {
        document.title = titleData.KOR
    } else if (window.navigator.language == "ja-JP") {
        document.title = titleData.JP;
    } else if (window.navigator.language == "th-TH") {
        document.title = titleData.TH;
    } else {
        document.title = titleData.EN;
    }
}
/** 进入场景 */
function loadInScene() {
    loadImg.remove();
    // bgColor.remove();
    loadText.remove();
};
/** 初始化 谷歌广告 */
function initGooleAds() {
    var googleJs = document.createElement("script");
    googleJs.setAttribute("async", "");
    googleJs.src = "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
    document.body.appendChild(googleJs);

    var googleAds = document.createElement("script");
    googleAds.setAttribute("async", "");
    googleJs.setAttribute("data-ad-client", "ca-pub-3932234672445376");
    googleJs.setAttribute("data-ad-channel", googleAdsID);
    googleJs.setAttribute("data-ad-frequency-hint", "15s");
    document.body.appendChild(googleAds);

    window.adsbygoogle = window.adsbygoogle || [];
    adBreak = adConfig = function(o) {
        adsbygoogle.push(o);
    }

    adBreak({
        preloadAdBreaks: 'on',
        onReady: () => {
            console.log('onReady');
        },
    });
}
/** 刷新加载进度条  假的  t:多长时间进度+1 */
function updateLoadText(t) {
    setTimeout(() => {
        loadProgre++;
        loadText.innerHTML = 'loading......' + parseInt(loadProgre) + '%';
        if (loadProgre >= 100) {
            return;
        }
        switch (loadProgre) {
            case 20:
                updateLoadText(0.05);
                break;
            case 40:
                updateLoadText(0.1);
                break;
            case 60:
                updateLoadText(0.2);
                break;
            case 80:
                updateLoadText(0.5);
                break;
            case 96:
                updateLoadText(5);
                break;
            case 98:
                updateLoadText(10);
                break;
            case 99:
                updateLoadText(1000);
                break;
            default:
                updateLoadText(t);
                break;
        }
    }, t * 1000);
}

/** 新建一个html  文本 */
function newHtmlText(id = "", style = "") {
    var loadingText = document.createElement("div");
    loadingText.style = style;
    loadingText.id = id;
    loadingText.type = "text";
    document.body.appendChild(loadingText);
    return loadingText;
}
/** 新建一个html 图像 */
function newHtmlImg(id = "", style = "", url = "", width = 100, height = 100) {
    var imgdiv = document.createElement("div");
    imgdiv.style = style;
    imgdiv.id = id;

    var img = document.createElement("img");
    img.src = url
    img.height = height;
    img.width = width;

    imgdiv.appendChild(img);
    document.body.appendChild(imgdiv);
    return imgdiv;
}