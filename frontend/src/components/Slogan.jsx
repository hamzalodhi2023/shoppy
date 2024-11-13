import { Button1 } from "../components/layout/ui/Button";
import { NavLink } from "react-router-dom";
import Typewriter from "typewriter-effect";

function Slogan() {
  return (
    <section
      className="flex h-[540px] dark:bg-[#383838] w-full flex-col items-start justify-center bg-cover bg-[70%] md:bg-center px-8 py-16"
      style={{ backgroundImage: "url('/images/slogan-section.png')" }}
    >
      <div className="z-10 max-w-3xl">
        <h1 className="mb-2 text-3xl font-bold text-[#e97730] md:text-4xl lg:text-5xl">
          <Typewriter
            options={{
              strings: ["FROM ESSENTIALS TO EXTRAS, SHOPPY HAS ITS ALL."],
              loop: true,
              autoStart: true,
              cursor: "_",
            }}
          />
        </h1>
        <p className="max-w-2xl mb-8 text-justify text-white md:text-lg">
          <span className="text-2xl font-semibold text-[#e97730]">Shoppy</span>{" "}
          is here to make every shopping journey unique, with a diverse
          selection of items that cover both the basics and those special extras
          that add a touch of style and convenience to your life.
        </p>
        <NavLink to={"/shop"}>
          <Button1 text={"Shop Now"} />
        </NavLink>
      </div>
    </section>
  );
}

export default Slogan;
