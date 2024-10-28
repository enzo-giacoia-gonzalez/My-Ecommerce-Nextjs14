import { Table } from "@radix-ui/themes";
import { TableAdminUserItem } from "./TableAdminUserItem";
import { PropsUsersClerkClient } from "@/interface";



export const TableAdminUser = ({ users}: PropsUsersClerkClient) => {
    return (
        <Table.Root className="mx-4 hidden lg:block" variant="surface">
            <Table.Header>
                <Table.Row>
                    <Table.ColumnHeaderCell>Full name</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>Email</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>Role</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>Change role</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>State  user</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>Ban user</Table.ColumnHeaderCell>
                </Table.Row>
            </Table.Header>

            {users.map((user) => {
                return (
                    <TableAdminUserItem user={user} key={user.id}
                    />
                );
            })}
        </Table.Root>
    )
}
