import { Injectable } from "@angular/core";
import { MatPaginatorIntl } from "@angular/material/paginator";

@Injectable({
    providedIn:'root'
})
export class CustomPaginator extends MatPaginatorIntl{
    override itemsPerPageLabel = 'Itens por página'
    override nextPageLabel = 'Proxima página'
    override previousPageLabel = 'Página anterior'
    override firstPageLabel = 'Primeira página'
    override lastPageLabel= 'Ultima página'
}