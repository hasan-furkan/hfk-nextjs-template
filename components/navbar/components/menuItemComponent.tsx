import Image from 'next/image';

interface MenuItemComponentProps {
    onClick: () => void;
    icon: string;
    label: string;
}

function MenuItemComponent({ onClick, icon, label }: MenuItemComponentProps) {
    return (
        <li role="presentation" className="flex gap-2 m-2 hover:bg-grey-200 p-1 cursor-pointer" onClick={onClick}>
            <Image src={icon} className="inline-block h-5 w-5" alt="sdafdas" width={24} height={24} />
            {label}
    </li>
);
}

export default MenuItemComponent;
