import TrashIcon from "../img/trash.svg";

const Nav = () => {
  return (
    <nav className="w-full bg-note-turquoise h-20 font-poppins flex justify-between">
      <div className="text-4xl sm:text-5xl font-bold flex flex-col justify-center ml-5">
        <p className="text-note-brown">Note It</p>
      </div>
      <div className="text-4xl flex flex-col justify-center hover:cursor-pointer">
        <img src={TrashIcon} alt="icono-gasto" className="w-12 h-12 mr-3" />
      </div>
    </nav>
  );
};

export default Nav;
