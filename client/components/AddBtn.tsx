import PlusImg from "./PlusImg";

const AddBtn = () => {
  return (
    <>
      <button className="hidden md:ml-1 justify-center items-center group-hover:flex w-[0.7rem] h-[0.7rem] md:w-[1.15rem] md:h-[1.15rem] rounded-[0.1rem] md:rounded lg:w-5 lg:h-5 bg-coral">
        <PlusImg />
      </button>
    </>
  );
};

export default AddBtn;
