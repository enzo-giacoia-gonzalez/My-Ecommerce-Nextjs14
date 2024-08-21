'use client'

import { Table } from "@radix-ui/themes";

import { Products } from "@/interface";
import { TableAdminProductItem } from "./TableAdminProductItem";





export const TableAdminProduct = ({ products }: Products) => {
    return (
        <Table.Root className="mx-4 hidden lg:block" variant="surface">
            <Table.Header>
                <Table.Row>
                    <Table.ColumnHeaderCell>Name product</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>Editar</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>Eliminar</Table.ColumnHeaderCell>
                </Table.Row>
            </Table.Header>

            {products.map((product) => {
                return (
                    <TableAdminProductItem product={product} key={product.id}
                    />
                );
            })}
        </Table.Root>
    )
}
