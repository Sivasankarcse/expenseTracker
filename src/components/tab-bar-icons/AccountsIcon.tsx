import { MaterialIcons } from '@expo/vector-icons';

type tabBarIconProps = {
    name: any,
    size: number,
    color: string
}

export const AccountsIcon = (props: tabBarIconProps) => (
    <MaterialIcons name={props?.name} size={props?.size} color={props?.color} />
)
