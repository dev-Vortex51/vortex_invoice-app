import { MdChevronLeft } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(-1)}
      className="flex items-center gap-[20px] mb-[31px] cursor-pointer flex-[1_1_100%]"
    >
      <p className="text-02">
        <MdChevronLeft />
      </p>
      <p className="font-bold text-[15px] leading-[15px] tracking-[-.25px] text-04 dark:text-white transform translate-y-[0.09rem]">
        Go back
      </p>
    </button>
  );
};

export default BackButton;
