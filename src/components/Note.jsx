import TrashIcon from "../img/trash.svg";

const Note = () => {
  return (
    <div className="font-poppins bg-note-turquoise mx-12 mb-6 rounded-2xl min-h-[15rem] grid grid-cols-note grid-rows-note gap-2">
      <textarea className="text-note-brown bg-note-turquoise ml-3 mt-2 pl-2 pt-2 text-xl font-medium focus:outline-none resize-none leading-5" />

      <img
        src={TrashIcon}
        alt="trash-icon"
        className="w-9 mt-4 hover:cursor-pointer"
      />
      <textarea className="text-note-brown bg-note-turquoise col-start-1 col-end-3 m-3 mt-0 pl-2  pr-2 font-medium focus:outline-none resize-none leading-5 " />
    </div>

    // <div className="font-poppins bg-note-turquoise mx-12 mb-6 rounded-2xl min-h-[15rem] flex ">
    //   <div className="max-w-[14.5rem] pl-4 pt-4 flex flex-col">
    //     <input
    //       className=" text-xl font-medium mb-3 mr-4 focus:outline-none"
    //       value="testasdsdads"
    //     />
    //     <textarea
    //       className=" mb-4 h-full focus:outline-none resize-none "
    //       value="djkashjdksajhkdsajkhsadhjkasdjkhasdkjhsakjhsadjkhsdkhjsdhkjsdajkhsda"
    //     />
    //   </div>

    //   <button type="submit" className="flex justify-items-start mt-3 ">
    //     <img src={TrashIcon} alt="icono-gasto" className="w-9"></img>
    //   </button>
    // </div>
  );
};

export default Note;
