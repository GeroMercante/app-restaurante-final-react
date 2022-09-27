import React, { useState } from 'react';
import {MdShoppingBasket, MdLogout, MdAdd} from 'react-icons/md';
import { motion } from 'framer-motion';

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from '../firebase.config';

import Logo from '../img/logo.png'
import Avatar from '../img/avatar.png';
import { Link }  from 'react-router-dom';
import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer'

const Header = () => {
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const [{user, cartShow, cartItems}, dispatch] = useStateValue(); //aca usamos un hook personalizado, porque el useState de react, al comportarse de forma optima, no nos guarda los datos que sean cambiados, solo va a cambiar cuando se le indique, este hook personalizado, nos guarda datos que queremos en el localStorage. dispatch: es una función que acepta una acción o una acción asíncrona; entonces puede o no despachar una o más acciones al store. en este caso, al firebase y tmb al localStorage.

  const [isMenu, setIsMenu] = useState(false);    

  const login = async () => {
    if(!user){
      const {
        user: {refreshToken, providerData}
        } = await signInWithPopup(firebaseAuth, provider);
        dispatch({
          type: actionType.SET_USER,
          user: providerData[0],
        });
        localStorage.setItem('user', JSON.stringify(providerData[0])); // convierte un objeto o valor de JavaScript en una cadena de texto JSON, opcionalmente reemplaza valores si se indica una función de reemplazo
    } else {
      setIsMenu(!isMenu);
    }
  };

  const logout = () => {
    setIsMenu(false)
    localStorage.clear()

    dispatch({
      type: actionType.SET_USER,
      user: null,
    });
  }

  const showCart = () => {
    dispatch({
      type: actionType.SET_CART_SHOW,
      cartShow: !cartShow,
    });
  }

  return (
    <header className='fixed z-50 w-screen p-3 px-4 md:p-6 md:px-16 bg-primary'>

      {/* escritorio y tablet */}
      <div className='hidden md:flex w-full h-full items-center justify-between'>
        <Link to={'/'} className='flex items-center gap-2'>
          <img src={Logo} className="w-8 object-cover" />
          <p className='text-headingColor text-xl font-bold'>city.</p>
        </Link>

        <div className='flex items-center gap-8'>
            <motion.ul 
            initial={{opacity: 0, x: 200}}
            animate={{opacity: 1, x: 0}}
            exit={{opacity: 0, x: 200}} 
            className='flex items-center gap-8'>
              <li className='text-base text-textColor cursor-pointer duration-100 transition-all ease-in-out'><Link to={'home'}>Inicio</Link></li>
              <li className='text-base text-textColor cursor-pointer duration-100 transition-all ease-in-out' ><a href="#menu">Menú</a></li>
              <li className='text-base text-textColor cursor-pointer duration-100 transition-all ease-in-out'>Servicios</li>
              <li className='text-base text-textColor cursor-pointer duration-100 transition-all ease-in-out'>Soporte</li>
            </motion.ul>

            <div className='relative flex items-center justify-center'
            onClick={showCart}
            >
              <MdShoppingBasket className='text-textColor text-2xl ml-8 cursor-pointer'/>
                {cartItems && cartItems.length > 0 && (
                              <div className='absolute -top-2 -right-1.5 w-4 h-4 rounded-full bg-cartNumBg flex items-center justify-center'>
                                <p className='text-xs text-white font-semibold'>{cartItems.length}</p>
                              </div>
                )}
            </div>

            <div className='relative'>
              <motion.img 
                whileTap={{ scale: 0.6}} 
                src={user ? user.photoURL : Avatar} 
                className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full" 
                onClick={login}
              />
              {
                isMenu && (
                  <motion.div 
                  initial={{opacity:0, scale: 0.6}}
                  animate={{opacity:1, scale: 1}}
                  exit={{opacity:0, scale: 0.6}}
                  className='w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col top-12 right-0 absolute'>
                  {
                    user && user.email === "geronimomercante00@gmail.com" && (
                      <Link to={'/createItem'}>
                      <p className='px-2 py-2 flex items-center gap-3 cursor-pointer
                      hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor
                      text-base'>
                      Agregar item <MdAdd /> 
                      </p></Link>
                    )
                  }
                  <p className='py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base px-2'
                  onClick={logout}>Cerrar sesión <MdLogout /></p>
                </motion.div>
                )
              }
            </div>
        </div>
      </div>



      {/* mobile */}
      <div className='flex items-center justify-between md:hidden'>

      <div 
      onClick={showCart}
      className='relative flex items-center justify-center'>
          <MdShoppingBasket className='text-textColor w-6 h-6 text-2x1 ml-4 cursor-pointer'/>
              {
                cartItems && cartItems.length > 0 && (
                  <div className='absolute -top-2 -right-1 w-4 h-4 rounded-full bg-cartNumBg flex items-center justify-center'>
                  <p className='text-xs text-white font-semibold'>{cartItems.length}</p>
                </div>
                )
              }
      </div>

        <Link to={'/'} className='flex items-center gap-2'>
          <img src={Logo} className="w-8 object-cover" />
          <p className='text-headingColor text-xl font-bold'>city.</p>
        </Link>

        <div className='relative'>
              <motion.img 
                whileTap={{ scale: 0.6}} 
                src={user ? user.photoURL : Avatar} 
                className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full" 
                onClick={login}
              />
              {
                isMenu && (
                  <motion.div 
                  initial={{opacity:0, scale: 0.6}}
                  animate={{opacity:1, scale: 1}}
                  exit={{opacity:0, scale: 0.6}}
                  className='w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col top-12 right-0 absolute '>
                  {
                    user && user.email === "geronimomercante00@gmail.com" && (
                      <Link to={'/createItem'}>
                      <p className='px-3 py-2 flex items-center cursor-pointer
                      hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor
                      text-base'
                      >
                      Agregar item <MdAdd /> 
                      </p></Link>
                    )}

                  <ul className='flex px-3 py-2  flex-col text-lg'>
                      <li className='text-base text-textColor hover:bg-slate-100 py-2 cursor-pointer duration-100 transition-all ease-in-out'onClick={() => setIsMenu(false)}>Inicio</li>
                      <li className='text-base text-textColor hover:bg-slate-100 py-2 cursor-pointer duration-100 transition-all ease-in-out'onClick={() => setIsMenu(false)}>Menu</li>
                      <li className='text-base text-textColor hover:bg-slate-100 py-2 cursor-pointer duration-100 transition-all ease-in-out'onClick={() => setIsMenu(false)}>Servicios</li>
                      <li className='text-base text-textColor hover:bg-slate-100 py-2 cursor-pointer duration-100 transition-all ease-in-out'onClick={() => setIsMenu(false)}>Soporte</li>
                  </ul>
                  <p className='m-2 p-2 rounded-md shadow-md flex items-center justify-center bg-gray-300 gap-3 cursor-pointer
                  hover:bg-slate-300 transition-all duration-100 ease-in-out 
                  text-textColor text-base'
                    onClick={logout}
                  >Cerrar sesión <MdLogout /></p>
                </motion.div>
                )
              }
            </div>
      </div>
    </header>
  )
}

export default Header;
