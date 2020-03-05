import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  DoCheck,
  AfterViewInit,
  AfterContentChecked,
  ElementRef
} from "@angular/core";
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

export class ListComponent
  implements OnInit {
  moreIcon = "far fa-plus-square sidebar__menu-icon";
  moreIconShow = false;
  removeIcon = "icon-remove";
  @Input() customelist: any;
  @Input() listOfComponantsDisplaying: any;
  @Output()
  change: EventEmitter<any> = new EventEmitter<any>();

  //when add the component into editor this should notify to scroller function which parent has
  @Output()
  scrolleToElementNotify: EventEmitter<any> = new EventEmitter<any>();

  selectedEductionPos = 0;
  name: any;
  index: number;
  isItemAdd = false;

  constructor(
    public editor: EditorService,
    private elementRef: ElementRef,
    private cus: DynamicComponentsService
  ) { }


  ngOnInit() {
    this.listOfComponantsDisplaying = this.editor.moreSections;
  }
  moreDeatails(event) {


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

  addToDisplayBucket(index, name) {
    this.editor.moreSections[index].active = true;
    this.editor.moreSections[index].flag = true

    this.scrolleToElementNotify.emit(name);
  }

  scroll(el: HTMLElement, index) {
  }
  addCustomComponent() {
    let comp = this.cus.createComponent();
    this.change.emit(comp);
  }


}
