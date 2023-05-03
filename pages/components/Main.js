import Features from "../views/Features";
import Jumbotron from "../views/Jumbotron";

const Main = () => {
  return (
    <section className="main mt-14 flex flex-col items-center">
      <Jumbotron />
      <Features />
    </section>
  );
};
export default Main;
