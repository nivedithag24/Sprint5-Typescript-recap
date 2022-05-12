// Toast is nothing but it is a message notification can be recieved with the help of it.
// Toast notification can pop up in various positions on the screen,top-left,top-right,bottom left,bottom center and so on.
// in this ex position is ntng but a prop
// position prop can be one of: 'left-center' |"left-top" | "left-bottom"|"center"|"center-top"|center-bottom|
// "right-center"|"right-top"|"right-bottom"

type HorizontalPosition='left'|'center'|'right'
type VerticalPosition='top'|'center'|'bottom'

type ToastProps={
    position: | Exclude<`${HorizontalPosition} - ${VerticalPosition}`,'center-center'>|'center'

}
export const Toast = ({position}:ToastProps) =>{
    return <div>Toast Notification Position - {position}</div>
}



















