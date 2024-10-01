'use client'

import { Table } from "@radix-ui/themes";
import { Category, Product} from "@/interface";
import { TableAdminProductItem } from "./TableAdminProductItem";



export interface TableAdminProductProps {
    products: Product[];
    categories: Category[];
}



export const TableAdminProduct = ({ products, categories }: TableAdminProductProps) => {
    return (
        <Table.Root className="mx-4 lg:block" variant="surface">
            <Table.Header>
                <Table.Row>
                    <Table.ColumnHeaderCell>Name product</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>Editar</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>Eliminar</Table.ColumnHeaderCell>
                </Table.Row>
            </Table.Header>

            {products.map((product) => {
                const category = categories.find((category) => category.id === product.categoryId);
                if (!category) return null
                return (
                    <TableAdminProductItem categories={categories} category={category} product={product} key={product.id} />
                );
            })}
        </Table.Root>
    )
}
