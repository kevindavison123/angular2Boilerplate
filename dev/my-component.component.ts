import {Component} from '@angular/core';
import {OnInit} from "@angular/core";
@Component({
	selector: 'my-component',
	template: `
	Hi, I'm <span [style.color]= "inputElement.value === 'yes' ? 'red' : 'blue'">{{name}}</span> <span [class.is-awesome]="inputElement.value === 'yes'">angular2 is awesome</span>
	<br>
	is it awesome?
	<input type="text" #inputElement (keyup)="0"> 
	
	<button [disabled]= "inputElement.value !=='yes'"> This button is hidden until yes </button>
	`,
	styleUrls: ['src/css/mycomponent.css']
})

export class MyComponentComponent implements OnInit{
	name: string;

	ngOnInit() : any{
	this.name = "Kevin";
	}

}


