import HeroAnimation from "./hero-animation";

const Hero = () => {
  return (
    <section className="min-h-screen w-full flex flex-col relative ">
      <div className="z-50 w-full mx-auto flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
          This site is currently under construction, please come back soon.
        </p>
        <p
          className="hero_tag text-white bg-gradient-to-r
            from-sky-300
            to-sky-600
            bg-[length:200%_200%]
            bg-clip-text
            text-transparent
            animate-gradient-x
            drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)]
            ease-in-out"
        >
          Software Engineering & Web Development
        </p>
      </div>
      <div className=" pt-20 w-full h-full absolute inset-0 z-1">
        <HeroAnimation />
      </div>
    </section>
  );
};

export default Hero;
