'use client'

import { CaretDownIcon } from "@radix-ui/react-icons"
import { DropdownMenu } from "@radix-ui/themes"

interface Props {
    title1: string,
    title2: string,
    title3: string,
    title4: string,
    title5: string,
    title6: string,
}

export const DropDown = ({ title1, title2, title3, title4, title5, title6 }: Props) => {
    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger className="flex flex-row">
                <button className="pl-4 py-2.5 font-medium text-[.875rem] leading-5 hover:bg-gray-50 hover:rounded-md flex flex-row items-center justify-end">
                    menu
                    <CaretDownIcon />
                </button>


            </DropdownMenu.Trigger >
            <DropdownMenu.Content className="" color="gray" variant="soft" highContrast>
                <DropdownMenu.Item shortcut="⌘ E">{title1}</DropdownMenu.Item>
                <DropdownMenu.Item shortcut="⌘ D">{title2}</DropdownMenu.Item>
                <DropdownMenu.Item shortcut="⌘ E">{title3}</DropdownMenu.Item>
                <DropdownMenu.Separator />
                <DropdownMenu.Item shortcut="⌘ N">{title4}</DropdownMenu.Item>
                <DropdownMenu.Item shortcut="⌘ N">{title5}</DropdownMenu.Item>
                <DropdownMenu.Item shortcut="⌘ D">{title6}</DropdownMenu.Item>
            </DropdownMenu.Content>
        </DropdownMenu.Root>
    )
}
