import { heroBg } from "../../../assets"

const Hero = () => {
  return (
    <div className="flex h-full">
      <div className="w-1/2 bg-lightBrown place-content-center">
      <div className="mx-auto w-fit flex flex-col items-start gap-y-2">
        <div className="text-[41px] flex flex-col">
        <span className="font-thin">Discover</span>
        <span className="font-bold">Inspiring Art</span>
        </div>
       
       <p className="w-90 text-xs text-wrap text-zinc-800">Immerse yourself in a world of creativity and beauty with our curated collection of artwork and photography.</p>
       <button className="bg-white px-6 py-2 rounded-full text-darkBrown drop-shadow-lg uppercase font-semibold">Explore</button>
       
      </div>
      </div>
      

      <div className="w-1/2">
        <img src={heroBg} alt="Hero background" className="object-cover w-full h-full" />
      </div>
    </div>
  )
}

export default Hero