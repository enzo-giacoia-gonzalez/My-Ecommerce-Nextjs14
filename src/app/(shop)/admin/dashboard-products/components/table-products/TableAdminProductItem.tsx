'use client'

import { TrashIcon } from '@radix-ui/react-icons'


import { Category, Product } from '@/interface'
import { Button, Table, Flex } from '@radix-ui/themes';
import { deleteProduct } from '@/app/(shop)/admin/dashboard-products/actions';
import { DialogAdminProduct } from '../ui';



interface Props {
    product: Product;
    category: Category;
    categories: Category[];
}


export const TableAdminProductItem = ({ product, category, categories }: Props) => {



    return (
        <Table.Body>
            <Table.Row>
                <Table.RowHeaderCell>{product?.title}</Table.RowHeaderCell>
                <Table.Cell className=''>
                    <DialogAdminProduct category={category} categories={categories} dialogTitle='Edit product' dialogDescription='Make changes to your product' product={product} titleButton="Edit product" />
                </Table.Cell>
                <Table.Cell className=''>
                    <Button onClick={() => deleteProduct(product.id)} className="hover:opacity-90" style={{ padding: "21px", backgroundColor: 'black', color: "white", borderRadius: "8px", cursor: "pointer" }}><TrashIcon /></Button>
                </Table.Cell>
            </Table.Row>
        </Table.Body>
    )
}
