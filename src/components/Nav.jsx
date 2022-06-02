import TrashIcon from "../img/trash.svg";

const Nav = ({ deletedView, setDeletedView }) => {
  const handleClick = () => {
    if (deletedView) {
      setDeletedView(false);
      return;
    }

    setDeletedView(true);
  };

  return (
    <nav className="w-full bg-note-turquoise h-20 font-poppins flex justify-between">
      <div className="text-4xl sm:text-5xl font-bold flex flex-col justify-center ml-5">
        <p className="text-note-brown">Note It</p>
      </div>
      <div className="text-4xl flex flex-col justify-center hover:cursor-pointer">
        <img
          src={TrashIcon}
          alt="icono-gasto"
          className="w-12 h-12 mr-3"
          onClick={handleClick}
        />
      </div>
    </nav>
  );
};

export default Nav;
