import './navbar.scss'
import { useMediaQuery } from 'react-responsive'
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';


const Navbar = ({setOpen}) => {
    const isMobile = useMediaQuery ({
        query:'(width < 500px)'
    })
    const clickHandler = () => {
        setOpen(prev => !prev)
    }
  return (
    <div className='navbar'>
      <div className='wrapper'>
        {
        isMobile ?
        <IconButton className='icon-wrapper' onClick={clickHandler}>
            <MenuIcon className='icon'/>
        </IconButton> : null
        }
      </div>

    </div>
  )
}

export default Navbar
