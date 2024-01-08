
import Ionicons from '@expo/vector-icons/Ionicons';

type customIconProps = {
    name: any,
    size: number,
    color: string
}

export const CloseIcon = (props: customIconProps) => (
    <Ionicons name={props?.name} size={props?.size} color={props?.color}/>
)

{/* <Ionicons name="close-circle-outline" size={24} color="black" /> */}