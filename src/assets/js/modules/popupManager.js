class PopupManager {
    constructor() {
        this.selectors = {
            body: "body",
            popup: "popup",
            trigger: "[data-popup-trigger]",
            content: "popup__content",
            inner: "popup__inner"
        }

        this.$DOM = {
            body: $(this.selectors.body),
            popup: $("." + this.selectors.popup),
            trigger: $(this.selectors.trigger),
            content: $("." + this.selectors.content),
            inner: $("." + this.selectors.inner)
        }

        this.$DOM.trigger.click(this.openPopup);
        this.$DOM.content.click(this.closePopup);
        this.$DOM.inner.click(e => { e.stopPropagation(); });
    }

    closePopup = () => {
        this.$DOM.body.removeClass("u-no-scroll");
        this.$DOM.popup.removeClass("popup--active");
    }

    openPopup = e => {
        this.$DOM.body.addClass("u-no-scroll");
        const $this = $(e.currentTarget);
        const target = $this.attr("data-popup-trigger");
        const $target = $(`[data-popup-target="${target}"]`);
        $target.toggleClass("popup--active");
    }
}