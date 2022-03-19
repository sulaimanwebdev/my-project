import {NavLink} from 'react-router-dom'

const Header = () => {

  return (
    <>
    <div className="w-full bg-white py-4">
         <div className="mx-auto max-w-[1500px] px-5 flex items-center justify-between">
                 <div className="text-4xl font-bold">LOGO</div>
                 <nav className='flex gap-10'>
                    <NavLink activeClassName="active" to="/hem" className='font-[600]'>HEM</NavLink>
                    <NavLink exact activeClassName="active" to="/" className='font-[600]'>OM OSS</NavLink>
                    <NavLink activeClassName="active" to="/projekt" className='font-[600]'>PROJEKT</NavLink>
                    <NavLink activeClassName="active" to="/kontakt" className='font-[600]'>KONTAKT</NavLink>
                 </nav>
         </div>    
     </div>    
    </>
  )
}

export default Header