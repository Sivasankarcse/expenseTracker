import { MaterialIcons } from '@expo/vector-icons';

type customIconProps = {
    name: any,
    size: number,
    color: string
}

export const AccountsIcon = (props: customIconProps) => (
    <MaterialIcons name={props?.name} size={props?.size} color={props?.color} />
)
