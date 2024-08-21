
import { DialogAdminProduct } from '@/components/ui/dialog-admin/DialogAdminProduct'
import { Product } from '@/interface'
import { Button, Table } from '@radix-ui/themes'


export const TableAdminProductItem = ({ product }: Product) => {

    return (
        <Table.Body>
            <Table.Row>
                <Table.RowHeaderCell>{product.title}</Table.RowHeaderCell>
                <Table.Cell>
                    <DialogAdminProduct dialogTitle='Edit product' dialogDescription='Make changes to your product' product={product} titleButton="Edit product" />
                </Table.Cell>

                <Table.Cell><Button>Eliminar</Button></Table.Cell>

            </Table.Row>
        </Table.Body>
    )
}
