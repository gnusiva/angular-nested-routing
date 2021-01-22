import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeadingComponent } from './heading/heading.component';
import { HtmlComponent } from './html.component';
import { ImageComponent } from './image/image.component';
import { ParagraphComponent } from './paragraph/paragraph.component';

const routes: Routes = [
  { path: '', component: HtmlComponent, children: [
    { path: 'image', component: ImageComponent },
    { path: 'paragraph', component: ParagraphComponent },
    { path: 'heading', component: HeadingComponent }
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HtmlRoutingModule { }
