class Header {
    constructor() {
        this.selectors = {
            window: window,
            header: "header",
            btn: "header__btn",
            nav: "header__nav"
        }

        this.$DOM = {
            window: $(this.selectors.window),
            header: $("." + this.selectors.header),
            btn: $("." + this.selectors.btn),
            nav: $("." + this.selectors.nav)
        }

        this.$DOM.window.scroll(this.scrollHandler);
        this.$DOM.btn.click(this.toggleNav);
    }

    scrollHandler = () => {
        const scroll = this.$DOM.window.scrollTop();
        if (scroll >= 50) {
            this.$DOM.header.addClass(this.selectors.header + "--scrolled");
        } else {
            this.$DOM.header.removeClass(this.selectors.header + "--scrolled");
        }
    }

    toggleNav = () => {
        this.$DOM.btn.toggleClass(this.selectors.btn + "--active");
        this.$DOM.header.toggleClass(this.selectors.header + "--active");
        this.$DOM.nav.stop().slideToggle("fast");
    }
}