class EditorEducation {
    constructor() {
        this.listModel = [];
        this.dataModel = [];

        this.selectors = {
            btnNewEducation: "[data-education-side-btn]",
            list: "[data-education-list]",
            listItem: "[data-education-list-item]",
            listDelete: "[data-education-delete]",
            form: "[data-education-form]",
            wysiwyg: "[data-education-wysiwyg]"
        }

        this.$DOM = {
            btnNewEducation: $(this.selectors.btnNewEducation),
            list: $(this.selectors.list),
            listItem: $(this.selectors.listItem),
            listDelete: $(this.selectors.listDelete),
            form: $(this.selectors.form),
            wysiwyg: $(this.selectors.wysiwyg)
        }

        this.listModel.push(this.$DOM.listItem);
        this.$DOM.btnNewEducation.click(this.createListItem);
        this.$DOM.listDelete.click(this.deleteListItem);
        this.$DOM.listItem.click(this.changeFocus);
    }

    changeFocus = e => {
        const $this = $(e.currentTarget);
        $this.addClass("editor__group-item--active").siblings().removeClass("editor__group-item--active");
        this.loadData(this.dataModel[$this.index()]);
    }

    loadData = data => {
        if (data != undefined) {
            const $check = this.$DOM.form.find("input[type='checkbox']");
            this.$DOM.form.find("[data-education-institution]").val(data[0]);
            this.$DOM.form.find("[data-education-field]").val(data[1]);
            this.$DOM.form.find("[data-education-city]").val(data[2]);
            this.$DOM.form.find("[data-education-country]").val(data[3]);
            this.$DOM.form.find("[data-education-start-month]").val(data[4]);
            this.$DOM.form.find("[data-education-start-year]").val(data[5]);
            this.$DOM.form.find("[data-education-end-month]").val(data[6]);
            this.$DOM.form.find("[data-education-end-year]").val(data[7]);
            if (data[8] === "on") {
                $check.prop("checked", true);
            } else {
                $check.prop("checked", false);
            }
            this.$DOM.wysiwyg.trumbowyg("html", data[9]);
        } else {
            this.clearForm();
        }
    }

    deleteListItem = e => {
        const $currentItems = $("[data-education-list-item]");
        if ($currentItems.length > 1) {
            const $this = $(e.currentTarget);
            const $item = $this.parents("[data-education-list-item]");
            this.changeFocus({ currentTarget: $item.prev()[0] });
            this.listModel.splice($this.index(), 1);
            this.dataModel.splice($this.index(), 1);
            $currentItems.each(function(i) {
                const $this = $(this);
                $this.find("p").text(`Education #${$this.index() + 1}`);
            });
            $item.remove();
        }
    }

    createListItem = e => {
        const $newListItem = this.$DOM.listItem.clone(true, true);
        $newListItem.removeClass("editor__group-item--active").appendTo(this.$DOM.list);
        const newData = this.getFormData();
        this.listModel.push($newListItem);
        $newListItem.find("p").text(`Education #${this.listModel.length}`);
        $newListItem.addClass("editor__group-item--active").prev().removeClass("editor__group-item--active");
        this.dataModel.push(newData);
        this.clearForm();
    }

    clearForm = () => {
        const $inputs = this.$DOM.form.find("input, select");
        const $check = $inputs.find("input[type='checkbox']");
        $check.prop("checked", false);
        $inputs.each(function(i) {
            const $this = $(this);
            $this.val("");
        });
        this.$DOM.wysiwyg.trumbowyg("empty");
    }

    getFormData = () => {
        let data = [];

        const $inputs = this.$DOM.form.find("input, select");
        $inputs.each(function(i) {
            const $this = $(this);
            data.push($this.val());
        });
        const wysiwygContent = this.$DOM.wysiwyg.trumbowyg("html");
        data.push(wysiwygContent);
        
        return data;
    }
}