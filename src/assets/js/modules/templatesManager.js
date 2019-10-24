class TemplatesManager {
    constructor() {
        this.selectors = {
            previewTrigger: "[data-popup-trigger]",
            previewImg: "[data-popup-src-target]"
        }

        this.$DOM = {
            previewTrigger: $(this.selectors.previewTrigger),
            previewImg: $(this.selectors.previewImg)
        }

        this.$DOM.previewTrigger.click(this.changePopupPreview);
    }

    changePopupPreview = e => {
        const $this = $(e.currentTarget);
        const newSrc = $this.attr("data-popup-src");
        this.$DOM.previewImg.attr("src", newSrc);
    }
}