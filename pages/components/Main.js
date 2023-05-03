import Features from "../views/Features";
import Jumbotron from "../views/Jumbotron";

const Main = () => {
  return (
    <section className="main mt-14 flex flex-col items-center">
      <Jumbotron />
      <Features />
      <hr class="my-4 w-3/4 h-1 border-2 " />
    </section>
  );
};
export default Main;
