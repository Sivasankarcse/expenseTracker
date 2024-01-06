import { Ionicons } from '@expo/vector-icons';

type tabBarIconProps = {
    name: any,
    size: number,
    color: string
}

export const StatsIcon = (props: tabBarIconProps) => (
    <Ionicons name={props?.name} size={props?.size} color={props?.color} />
)
