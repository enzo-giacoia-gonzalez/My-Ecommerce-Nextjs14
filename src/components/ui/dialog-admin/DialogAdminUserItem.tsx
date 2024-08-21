

import { updateUserRole } from "@/actions"
import banUser from "@/actions/user/ban-user"
import unbanUser from "@/actions/user/unban-user"
import { PropsUserClerkClient } from "@/interface"
import { Table } from "@radix-ui/themes"

export const DialogAdminUserItem = ({ user }: PropsUserClerkClient) => {
    return (
        <Table.Body>
            <Table.Row>
                <Table.RowHeaderCell>{user.firstName} {user.lastName}</Table.RowHeaderCell>
                <Table.Cell>{user.emailAddresses.find((email) => email.id === user.primaryEmailAddressId)?.emailAddress}</Table.Cell>
                <Table.Cell>{user.publicMetadata!.role as string}</Table.Cell>
                {user.publicMetadata!.role as string === "admin" ? <Table.RowHeaderCell>
                    <form action={updateUserRole}>
                        <input type="hidden" value={user.id} name="id" />
                        <input type="hidden" value="user" name="role" />
                        <button className="hover:underline text-start" type="submit">Make user</button>
                    </form>
                </Table.RowHeaderCell> : <Table.RowHeaderCell>
                    <form action={updateUserRole}>
                        <input type="hidden" value={user.id} name="id" />
                        <input type="hidden" value="admin" name="role" />
                        <button className="hover:underline text-start" type="submit">Make admin</button>
                    </form>
                </Table.RowHeaderCell>
                }
                <Table.Cell>{user.banned.valueOf() as boolean === true ? "Banned" : "Active"}</Table.Cell>
                {user.banned.valueOf() as boolean === false ? <Table.Cell>
                    <form action={banUser}>
                        <input type="hidden" value={user.id} name="id" />
                        <button className="hover:underline text-start" type="submit">Ban user</button>
                    </form>
                </Table.Cell> :
                    <Table.Cell>
                        <form action={unbanUser}>
                            <input type="hidden" value={user.id} name="id" />
                            <input type="hidden" value="admin" name="role" />
                            <button className="hover:underline text-start" type="submit">Make admin</button>
                        </form>
                    </Table.Cell>}
            </Table.Row>
        </Table.Body>
    )
}
