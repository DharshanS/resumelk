import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { trigger, transition, style, animate } from "@angular/animations";
import { EditorService } from "../editor.service";
import { DynamicComponentsService } from "../dynamic-components.service";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"],
  animations: [
    trigger("fade", [
      transition("void =>*", [style({ opacity: 0 }), animate(1000)]),
      transition("* =>void", [style({ opacity: 0 }), animate(2000)])
    ])
  ]
})
export class ListComponent implements OnInit {
  moreIcon = "far fa-plus-square sidebar__menu-icon";
  moreIconShow = false;
  removeIcon = "icon-remove";

  @Input() customelist: any;

  @Output()
  change: EventEmitter<any> = new EventEmitter<any>();

  selectedEductionPos = 0;

  constructor(
    private editor: EditorService,
    private cus: DynamicComponentsService
  ) {}

  ngOnInit() {}
  moreDeatails(event) {
    // $("#effect").toggle('blind', {}, 500);

    if (this.moreIconShow) {
      this.moreIconShow = false;
      this.moreIcon = "far fa-plus-square sidebar__menu-icon";
      this.moreIconShow = false;
    } else {
      this.moreIconShow = true;
      this.moreIcon = "far fa-minus-square sidebar__menu-icon";
      this.moreIconShow = true;
    }
  }

  removeFromDisplayBucket(index) {
    if (index != 0) this.editor.moreSections[index].flag = false;
  }

  addToDisplayBucket(index) {
    this.editor.moreSections[index].flag = true;
  }

  scroll(el, i) {
    if (i == 11) {
      this.addCustomComponent();
    }
    this.addToDisplayBucket(i);
    let els = document.getElementById(el);
    els.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });
  }
//Add dynamic component
  addCustomComponent() {
    let comp = this.cus.createComponent();
    this.change.emit(comp);
  }
}
