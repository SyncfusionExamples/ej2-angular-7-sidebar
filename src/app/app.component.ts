import { Component, ViewChild} from '@angular/core';
import { SidebarComponent } from '@syncfusion/ej2-angular-navigations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
    @ViewChild('sidebar') sidebar: SidebarComponent;
    public showBackdrop: boolean = true;
    public closeOnDocumentClick: boolean = true;

    closeClick(): void {
        this.sidebar.hide();
    };

    toggleClick():void{
      this.sidebar.show();
    }
}
