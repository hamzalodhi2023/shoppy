import Cards from "./layout/ui/Cards";

function NewArrivals() {
  return (
    <div className="w-full px-4 py-16 dark:bg-[#383838]">
      <div className="mx-auto max-w-[1240px]">
        <h2 className="mb-8 text-center text-3xl font-bold text-[#383838] dark:text-white md:text-4xl">
          NEW ARRIVALS
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* cards Start */}
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          {/* cards End */}
        </div>
      </div>
    </div>
  );
}

export default NewArrivals;
