import { MaterialCommunityIcons } from '@expo/vector-icons';

type tabBarIconProps = {
    name: any,
    size: number,
    color: string
}

export const DateIcon = (props: tabBarIconProps) => (
    <MaterialCommunityIcons name={props?.name} size={props?.size} color={props?.color} />
)
