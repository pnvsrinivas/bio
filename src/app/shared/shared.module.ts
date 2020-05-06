import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { FileViewerComponent } from './widgets/file-viewer/file-viewer.component';
import { Error500Component } from './components/error500/error500.component';
import { Error404Component } from './components/error404/error404.component';
import { PageUnderConstructionComponent } from './components/page-under-construction/page-under-construction.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent, 
    SidebarComponent, 
    FileViewerComponent, 
    Error500Component, 
    Error404Component, PageUnderConstructionComponent,
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatButtonModule,
    FlexLayoutModule,
    MatMenuModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    RouterModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent, 
    SidebarComponent,
    FileViewerComponent,
    Error500Component,
    Error404Component
  ]
})
export class SharedModule { }
