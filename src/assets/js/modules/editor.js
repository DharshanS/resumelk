class Editor {
    constructor() {
        const _this = this;
        this.selectors = {
            statusChart: "editor__status-chart",
            sortableSelector: "[data-sortable]",
            educationEditor: "editor__education-wysiwyg",
            personalInfoEditor: "editor__personal-info-wysiwyg",
            profileImg: "editor__photo-img",
            profileImgInput: "editor__photo-input"
        }

        this.$DOM = {
            statusChart: $("." + this.selectors.statusChart),
            sortableSelector: $(this.selectors.sortableSelector),
            educationEditor: $("." + this.selectors.educationEditor),
            personalInfoEditor: $("." + this.selectors.personalInfoEditor),
            profileImg: $("." + this.selectors.profileImg),
            profileImgInput: $("." + this.selectors.profileImgInput)
        }

        this.$DOM.profileImgInput.change(function() {
            _this.readURL(this);
        });
        
        this.$DOM.statusChart.circleProgress({
            value: .65,
            size: 1000,
            fill: "#61abfd",
            emptyFill: "#ececec",
            startAngle: -Math.PI/2,
            lineCap: "round"
        });

        this.$DOM.sortableSelector.each(function(i) {
            const $this = $(this);
            const sortable = Sortable.create($this[0], {
                animation: 150,
                handle: ".fa-bars",
                forceFallback: true
            });
        });

        this.$DOM.personalInfoEditor.trumbowyg({
            resetCss: true,
            btns: [["fontfamily"], ["strong", "em", "underline", "del", "justifyLeft", "justifyCenter", "justifyRight", "justifyFull"]]
        });
        
        this.$DOM.educationEditor.trumbowyg({
            resetCss: true,
            btns: [["fontfamily"], ["strong", "em", "underline", "del", "justifyLeft", "justifyCenter", "justifyRight", "justifyFull"]]
        });
    }

    readURL = input => {
        if (input.files && input.files[0]) {
            const reader = new FileReader();
            reader.onload = e => {
                this.$DOM.profileImg.css("background-image", `url('${e.target.result}')`);
            }
            reader.readAsDataURL(input.files[0]);
        }
    }
}