import Image from "next/image"

const HeroImage = () => {
  return (
    <div className="relative w-fit ml-16 md:ml-0">
        <Image 
            src='/Hero/cranium.jpg'
            height='320'
            width='220'
            alt="cranium_img"
            className="rotate-[15deg]"
        />
        

        <Image 
            src='/Hero/lune.jpg'
            height='200'
            width='137'
            alt="lune_img"
            className="absolute top-[-50px] left-[-95px] rotate-[-5deg]"
        />
    </div>
  )
}

export default HeroImage