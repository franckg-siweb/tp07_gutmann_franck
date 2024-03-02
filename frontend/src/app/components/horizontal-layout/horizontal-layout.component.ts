import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-horizontal-layout',
    standalone: true,
    imports: [
        CommonModule,
        RouterOutlet,
    ],
    templateUrl: './horizontal-layout.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HorizontalLayoutComponent { }
