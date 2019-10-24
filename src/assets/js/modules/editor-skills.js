class EditorSkills {
    constructor() {
        this.listModel = [];
        this.dataModel = [];

        this.selectors = {
            btnNewCategory: "[data-skills-side-btn]",
            btnNewSkill: "[data-skills-inner-btn]",
            list: "[data-skills-list]",
            listItem: "[data-skills-list-item]",
            listDelete: "[data-skills-delete]",
            form: "[data-skills-form]",
            skillsItem: "[data-skills-item]",
            skillsList: "[data-skills-form-items]",
            skillsDelete: "[data-skills-form-delete]"
        }

        this.$DOM = {
            btnNewCategory: $(this.selectors.btnNewCategory),
            btnNewSkill: $(this.selectors.btnNewSkill),
            list: $(this.selectors.list),
            listItem: $(this.selectors.listItem),
            listDelete: $(this.selectors.listDelete),
            form: $(this.selectors.form),
            skillsItem: $(this.selectors.skillsItem),
            skillsList: $(this.selectors.skillsList),
            skillsDelete: $(this.selectors.skillsDelete)
        }

        this.listModel.push(this.$DOM.listItem);
        
        this.$DOM.btnNewCategory.click(this.createListItem);
        this.$DOM.btnNewSkill.click(this.createSkillsItem);

        this.$DOM.listDelete.click(this.deleteListItem);
        this.$DOM.skillsDelete.click(this.deleteSkillsItem);

        this.$DOM.listItem.click(this.changeFocus);
    }

    changeFocus = e => {
        const $this = $(e.currentTarget);
        $this.addClass("editor__group-item--active").siblings().removeClass("editor__group-item--active");
        this.loadData(this.dataModel[$this.index()]);
    }

    loadData = data => {
        if (data != undefined) {
            this.$DOM.form.find("[data-skills-category]").val(data.category);
            this.$DOM.form.find("[data-skills-name]").val(data.skills[0][0]);
            this.$DOM.form.find("[data-skills-level]").val(data.skills[0][1]);
            const numberOfSkills = data.skills.length;
            if (numberOfSkills > 1) {
                for (let i = 1; i < numberOfSkills; i++) {
                    const $newSkill = this.$DOM.skillsItem.clone(true, true).attr("data-skills-form-item-cloned", "true");
                    $newSkill.find("[data-skills-name]").val(data.skills[i][0]);
                    $newSkill.find("[data-skills-level]").val(data.skills[i][1]);
                    $newSkill.appendTo(this.$DOM.skillsList);
                }
            }
        } else {
            this.clearForm();
        }
    }

    deleteListItem = e => {
        const $currentItems = $("[data-skills-list-item]");
        if ($currentItems.length > 1) {
            const $this = $(e.currentTarget);
            const $item = $this.parents("[data-skills-list-item]");
            this.changeFocus({ currentTarget: $item.prev()[0] });
            this.listModel.splice($this.index(), 1);
            this.dataModel.splice($this.index(), 1);
            $currentItems.each(function(i) {
                const $this = $(this);
                $this.find("p").text(`Skill #${$this.index() + 1}`);
            });
            $item.remove();
        }
    }

    deleteSkillsItem = e => {
        if ($("[data-skills-item]").length > 1) {
            const $this = $(e.currentTarget);
            const $item = $this.parents("[data-skills-item]");
            const dataModel = this.dataModel[$item.index()-2];
            if (dataModel != undefined) {
                dataModel.skills.splice($item.index()-1, 1);
            }
            $item.remove();
        }
    }

    createSkillsItem = () => {
        const $newSkill = this.$DOM.skillsItem.clone(true, true).attr("data-skills-form-item-cloned", "true");
        $newSkill.appendTo(this.$DOM.skillsList);
    }

    createListItem = e => {
        const $newListItem = this.$DOM.listItem.clone(true, true);
        $newListItem.removeClass("editor__group-item--active").appendTo(this.$DOM.list);
        const newData = this.getFormData();
        this.listModel.push($newListItem);
        $newListItem.find("p").text(`Skill #${this.listModel.length}`);
        $newListItem.addClass("editor__group-item--active").prev().removeClass("editor__group-item--active");
        this.dataModel.push(newData);
        this.clearForm();
    }

    clearForm = () => {
        const $inputs = this.$DOM.form.find("input, select");
        this.$DOM.form.find("[data-skills-form-item-cloned]").remove();
        $inputs.each(function(i) {
            const $this = $(this);
            $this.val("");
        });
    }

    getFormData = () => {
        let data = [];

        const $inputs = this.$DOM.form.find("input, select");
        $inputs.each(function(i) {
            const $this = $(this);
            data.push($this.val());
        });

        const skills = data.slice(1);
        const skillsArray = skills.reduce((result, value, index, array) => {
            if (index % 2 === 0) {
                result.push(array.slice(index, index + 2));
            }
            return result;
        }, []);

        const formattedData = {
            category: data[0],
            skills: skillsArray
        }

        return formattedData;
    }
}