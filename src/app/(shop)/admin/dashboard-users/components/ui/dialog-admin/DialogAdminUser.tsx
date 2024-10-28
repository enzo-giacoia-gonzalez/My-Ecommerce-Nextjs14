




import { Button, Dialog, Flex, Inset, Table } from "@radix-ui/themes"
import { DialogAdminUserItem } from "./DialogAdminUserItem"

import { PropsUsersClerkClient } from "@/interface"
import { SearchUsers } from "@/app/(shop)/admin/components"




export const DialogAdminUser = ({ users }: PropsUsersClerkClient) => {
    return (

        <Dialog.Root>
            <Dialog.Trigger className="h-[45px] w-[130px]">
                <button type="submit" className='lg:hidden text-white bg-black p-[8px] ml-8 rounded-full font-medium hover:opacity-80'>Modify user</button>
            </Dialog.Trigger>
            <Dialog.Content className="w-full">
                <Dialog.Title>Users</Dialog.Title>
                <Dialog.Description>
                    The following users have access to this project.

                </Dialog.Description>
                <SearchUsers />



                <Inset side="x" my="7" className="">
                    <Table.Root className="grid grid-cols-1">
                        <Table.Header>
                            <Table.Row>
                                <Table.ColumnHeaderCell>Full name</Table.ColumnHeaderCell>
                                <Table.ColumnHeaderCell>Email</Table.ColumnHeaderCell>
                                <Table.ColumnHeaderCell>Role</Table.ColumnHeaderCell>
                                <Table.ColumnHeaderCell>Make role</Table.ColumnHeaderCell>
                                <Table.ColumnHeaderCell>State user</Table.ColumnHeaderCell>
                                <Table.ColumnHeaderCell>Ban user</Table.ColumnHeaderCell>
                            </Table.Row>
                        </Table.Header>


                        {users.map((user) => {
                            return (
                                <DialogAdminUserItem user={user} key={user.id}
                                />
                            );
                        })}

                    </Table.Root>
                </Inset>

                <Flex gap="3" justify="start">
                    <Dialog.Close>
                        <Button variant="soft" color="gray" className="">
                            Close
                        </Button>
                    </Dialog.Close>
                </Flex>
            </Dialog.Content>
        </Dialog.Root>
    )
}
