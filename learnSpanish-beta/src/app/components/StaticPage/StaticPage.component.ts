import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-static-page',
    standalone: true,
   
    templateUrl: './static-page.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StaticPageComponent { }
