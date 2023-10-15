const Navigation = () => {
  return (
    <nav className="flex justify-evenly items-center h-13.7">
      {/* <div className="flex bg-teal-200"> */}
      <div className='logo'>
        <img src='images/brand_logo.png' alt='asdfghj'></img>
      </div>
      <ul className="flex" >
        <li className="p-4" >Menu</li>
        <li className="p-4" >Location</li>
        <li className="p-4" >About</li>
        <li className="p-4" >Contact</li>
      </ul>
      <button className=" px-2.5 py-1 bg-cyan-200 text-black-600 
      rounded-md border-2 font-bold border-black 
      hover:bg-white hover:text-cyan-400 hover:border-cyan-400">
        <a href="https://www.nike.com/in/" target="blank">LOGIN</a></button>
      {/* </div> */}
    </nav>
  );
};
export default Navigation;