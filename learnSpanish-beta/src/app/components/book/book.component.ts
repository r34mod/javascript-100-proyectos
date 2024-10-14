import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-book',
    standalone: true,
    imports: [
        CommonModule,
    ],
    template: `<p>book works!</p>`,
    styleUrl: './book.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookComponent { }
