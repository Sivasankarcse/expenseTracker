import { Ionicons } from '@expo/vector-icons';

type customIconProps = {
    name: any,
    size: number,
    color: string
}

export const SettingsIcon = (props: customIconProps) => (
    <Ionicons name={props?.name} size={props?.size} color={props?.color} />
)
