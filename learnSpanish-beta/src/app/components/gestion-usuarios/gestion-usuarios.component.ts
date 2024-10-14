import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-gestion-usuarios',
    standalone: true,
    imports: [
        CommonModule,
    ],
    template: `<p>gestion-usuarios works!</p>`,
    styleUrl: './gestion-usuarios.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GestionUsuariosComponent { }
