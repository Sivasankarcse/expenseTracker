import Ionicons from '@expo/vector-icons/Ionicons';

type customIconProps = {
    name: any,
    size: number,
    color: string
}

export const CameraIcon = (props: customIconProps) => (
    <Ionicons name={props?.name} size={props?.size} color={props?.color}/>
)
