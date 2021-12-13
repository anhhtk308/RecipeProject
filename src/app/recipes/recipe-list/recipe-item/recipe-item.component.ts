import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: Recipe;//lấy data from outside
  //@Output() recipeSelected = new EventEmitter<void>();// can listen to this event from outside, phát ra sự kiện
  // constructor(private recipeService: RecipeService) { }
  @Input() index: number;

  ngOnInit(): void {
  }

  // onSelected(){
  //   //this.recipeSelected.emit();
  //   this.recipeService.recipeSelected.emit(this.recipe);
  // }

}
