import Button from "../Component/button";

const subscribe = () => {
  return (
    <section
      className="max-container flex justify-between 
    items-center max-lg:flex-col gap-10"
      id="contact-us"
    >
      <h3
        className=" justify-center items-center text-4xl leading-[68px] 
    font-palanquin font-bold"
      >
        Sign Up for <span className="text-coral-red"> Updates </span> &
        Newsletter
      </h3>
      <div
        className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col
        sm:border-slate-gray rounded-full sm:border"
      >
        <input
          type="text"
          placeholder="Enter Email Address Here "
          className="input"
        />
        <div
          className="flex max-sm:justify-end items-center
        gap-5 p-2.5 max-sm:w-full"
        >
          <Button label="Sign Up" fullWidth />
        </div>
      </div>
    </section>
  );
};

export default subscribe;
