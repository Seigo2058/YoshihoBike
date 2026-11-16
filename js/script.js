// リロードを検知したとき
document.addEventListener("DOMContentLoaded", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // ゆっくりスクロール
    });
});

// ファーストビューのテキストのアニメーション
const firstViewText = document.querySelectorAll('.firstViewText');

window.addEventListener('load', () => {
    firstViewText.forEach(el => {
        el.classList.add('is-active');
    });
});

// 見出しのアニメーション
const options = {
    root: null, // ビューポート
    rootMargin: "0px 0px -20% 0px", // 下から20%余裕を持たせる
    threshold: 0, // かすったら発火
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("is-active");
            observer.unobserve(entry.target); // 1回だけ発火
        }
    });
}, options);

document.querySelectorAll(".title").forEach(title => {
    observer.observe(title);
});

// スクロールバー
const getScrollPercent = () => {
    const scrolled = window.scrollY;
    const pageHeight = document.documentElement.scrollHeight;
    const viewHeight = document.documentElement.clientHeight;
    const percentage = scrolled / (pageHeight - viewHeight) * 100;
    document.querySelector('#bar').style.width = `${percentage}%`;
}

window.addEventListener('scroll', getScrollPercent);