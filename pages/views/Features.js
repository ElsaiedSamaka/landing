import Image from "next/image";

const Features = () => {
  return (
    <>
      <div className="grid grid-cols-2  w-2/3 p-8 m-5">
        <div>
          <h1>Features</h1>
          <p>lorem ipsum dolar submit</p>
        </div>
        <div>
          <h1>Features</h1>
          <p>lorem ipsum dolar submit</p>
        </div>
      </div>
      <div className="flex gap-2 w-2/3 p-8 m-5 justify-between">
        <div className="flex flex-col gap-2">
          <Image src="" alt="" />
          <h1 className="font-semibold">Features</h1>
          <p>lorem ipsum dolar submit</p>
        </div>
        <div className="flex flex-col gap-2">
          <Image src="" alt="" />
          <h1 className="font-semibold">Features</h1>
          <p>lorem ipsum dolar submit</p>
        </div>
        <div className="flex flex-col gap-2">
          <Image src="" alt="" />
          <h1 className="font-semibold">Features</h1>
          <p>lorem ipsum dolar submit</p>
        </div>
      </div>
    </>
  );
};
export default Features;
