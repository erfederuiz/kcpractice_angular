import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Post } from './../post';
import {Router} from "@angular/router";

@Component({
  selector: 'posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostsListComponent {

  @Input() posts: Post[];

  /*------------------------------------------------------------------------------------------------------------------|
   | ~~~ Red Path ~~~                                                                                                 |
   |------------------------------------------------------------------------------------------------------------------|
   | Maneja el evento del componente PostPreviewComponent que indica la selección del autor de un post y navega a la  |
   | dirección correspondiente. Recuerda que para hacer esto necesitas inyectar como dependencia el Router de la app. |
   | La ruta a navegar es '/posts/users', pasando como parámetro el identificador del autor.                          |
   |------------------------------------------------------------------------------------------------------------------*/
  onClickByAuthor(post: Post) {
    this.router.navigate(['posts', 'users', post.author.id]);
  }

  /*-----------------------------------------------------------------------------------------------------------------|
   | ~~~ Green Path ~~~                                                                                              |
   |-----------------------------------------------------------------------------------------------------------------|
   | Maneja el evento del componente PostPreviewComponent que indica la selección de un post y navega a la dirección |
   | correspondiente. Recuerda que para hacer esto necesitas inyectar como dependencia el Router de la app.  La ruta |
   | a navegar es '/posts', pasando como parámetro el identificador del post.                                        |
   |-----------------------------------------------------------------------------------------------------------------*/

  constructor(private router: Router) {
  }

  onClickPreview(post: Post) {
    this.router.navigate(["posts", post.id]);
  }
}
