import { MaterialCommunityIcons } from '@expo/vector-icons';

type customIconProps = {
    name: any,
    size: number,
    color: string
}

export const DateIcon = (props: customIconProps) => (
    <MaterialCommunityIcons name={props?.name} size={props?.size} color={props?.color} />
)
