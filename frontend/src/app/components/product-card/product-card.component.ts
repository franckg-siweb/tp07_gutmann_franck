import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Product } from '../../models/product';
import { RouterModule } from '@angular/router';
import { MoneyComponent } from '../money/money.component';
import { ProductPreviewComponent } from '../product-preview/product-preview.component';
import { TuiButtonModule, TuiHintModule } from '@taiga-ui/core';
import { ProductAuthorComponent } from '../product-author/product-author.component';
import { ProductStatsComponent } from '../product-stats/product-stats.component';
import { TimeAgoPipe } from '../../pipes/time-ago.pipe';

@Component({
    selector: 'app-product-card',
    standalone: true,
    imports: [
        CommonModule,
        MoneyComponent,
        RouterModule,
        ProductPreviewComponent,
        TuiButtonModule,
        TuiHintModule,
        ProductAuthorComponent,
        ProductStatsComponent,
        TimeAgoPipe
    ],
    templateUrl: './product-card.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent {

    @Input()
    product!: Product;

}
