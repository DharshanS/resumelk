class ScrollManager {
    constructor($header) {
        this._$header = $header;
        this.$window = $(window);
        this.$trigger = $("[data-scroll-to]");
        this.$trigger.click(this.scroll);
    }

    scroll = e => {
        e.preventDefault();
        const $this = $(e.currentTarget);
        const target = $this.attr("data-scroll-to");
        const $target = $(`[data-scroll-target="${target}"]`);
        let offset = 0;
        if (this.$window.width() < 768) {
            offset = $(".header__content-controls").innerHeight() + 60;
            this._$header.toggleNav();
        } else {
            offset = $(".header").innerHeight();
        }
        $.scrollTo($target, 500, {
            offset: {
                top: -offset
            }
        });
    }
}