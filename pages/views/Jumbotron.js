const Jumbotron = () => {
  return (
    <div className="jumbotron">
      <section
        class="bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("../../assets/images/jumbtron_cleanup.png")',
          width: 100 + "%",
          height: 100 + "%",
        }}
      >
        {/* <Image src={jumbotronPath} alt="" className="absolute z-0" /> */}
        <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56 grid grid-cols-2 w-full">
          <span className="flex flex-col items-start gap-5">
            <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-left md:text-5xl lg:text-6xl">
              We invest in the world’s potential to create a better future.
            </h1>
            <p className="text-left">lorem ipsum dolar submit</p>
            <button className="bg-red-300 border rounded-md px-2 py-3">
              Request a Demo
            </button>
          </span>
        </div>
      </section>
    </div>
  );
};
export default Jumbotron;
