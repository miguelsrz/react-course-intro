import './SidebarMenu.css'

function SidebarMenu(props)
{
    return(
        <div className="sidebarMenu">
            {props.children}
        </div>
    )
}

export { SidebarMenu }