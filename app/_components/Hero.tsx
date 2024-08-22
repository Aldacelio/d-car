"use client";

import Image from "next/image";
import CustomButton from "./CustomButton";

const Hero = () => {
  const handleScroll = () => {

  };
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Encontre, reserve ou alugue um carro com rapidez e facilidade
        </h1>
        <p>
          Simplifique sua experiência de aluguel de carro com nosso processo de
          reserva fácil.
        </p>

        <CustomButton
          title="explorar carros"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={() => {handleScroll}}
        />

        <div className="hero__image-container">
            <div className="hero__image">
                <Image src="/hero.png" alt="hero" fill className="object-contain" />
                <div className="hero__image-overlay"></div>
            </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
