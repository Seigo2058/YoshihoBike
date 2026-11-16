const swiper = new Swiper(".swiper", {
    // swiperの設定
    loop: true, // スライドが最後まで行ったら最初に戻る
    followFinger: false, // スライド中に指で操作できないようにする
    speed: 1000, // スライドを切り替える時間
    effect: 'fade',
    fadeEffect: {
        crossFade: true,
    },

    autoplay: { // 自動再生させる
        delay: 6000, // 次のスライドに切り替わるまでの時間（ミリ秒）
        disableOnInteraction: false, // ユーザーが操作しても自動再生を止めない
        waitForTransition: false, // アニメーションの間も自動再生を止めない（最初のスライドの表示時間を揃えたいときに）
    },

    grabCursor: true, // PCでマウスカーソルを「掴む」マークにする

    // スクロールバーの設定
    scrollbar: {
        el: '.swiper-scrollbar',
        //ドラッグ操作を有効にする
        draggable: true,
    },
});