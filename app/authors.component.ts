import {Component} from 'angular2/core'
import {AuthorService} from './author.service'

@Component({
	selector: 'authors',
	template: `
			<h2 style="color:#456">My Authors</h2>
			{{ title}}
			<ul>
				<li *ngFor="#author of authors">
					{{author}}
				</li>
			</ul>
		`,
	providers: [AuthorService]

})

export class AuthorsComponent{
	title = 'Your Authors';
	authors;

	constructor(authorService: AuthorService){
		this.authors = authorService.getAuthors();
	}
}