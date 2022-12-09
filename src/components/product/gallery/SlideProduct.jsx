import { useState } from "react"
import PrevIcon from "@/components/icons/PrevIcon"
import NextIcon from "@/components/icons/NextIcon"
import { useEffect, useRef } from "react"

const SlideProduct = ({
    ARRAY_IMGS = [],
     ARRAY_IMG_SMALL=[], 
     isOpenModal = false,
     handleCloseModal= null,
     handleOpenModal= ()=>{}, 
     ...props
    }) => {

    const btnSlider = useRef(null)
    const [imgIndex, setImgIndex] = useState(0)

    useEffect(() => {
        
        isOpenModal && btnSlider.current.classList.remove('md:hidden')
        
    },[isOpenModal])

    const handleClickNext = () => {
        
        (imgIndex === ARRAY_IMGS.length -1) ? setImgIndex(0) : setImgIndex(imgIndex + 1)
    }
    const handleClickPrev = () => {
        (imgIndex === 0) ? setImgIndex(ARRAY_IMGS.length-1) : setImgIndex(imgIndex-1)
    }



    return (
        <section className=" xl:max-w-[500px]" {...props}>
        {
            isOpenModal && (
                <button onClick={handleCloseModal} className="md:col-span-4 text-right">X</button>
        )}
            <div className=" relative col-span-4">
                <img src={ARRAY_IMGS[imgIndex]} 
                alt="" 
                className=" content-center aspect-auto w-full object-cover md:cursor-pointer md:rounded-md 2xl:max-h-[500px] 2xl:max-w-[500px]" onClick={handleOpenModal} />

                <div ref={btnSlider} className="absolute top-1/2 left-0 flex w-full -translate-y-1/2 justify-between px-4 md:hidden">

                    <button className=" grid place-items-center h-10 w-10 rounded-full bg-white " onClick={handleClickPrev}>
                        <PrevIcon />
                    </button> 

                    <button className=" grid place-items-center h-10 w-10 rounded-full bg-white " onClick={handleClickNext}>
                        <NextIcon />
                    </button>
                </div>
            </div>
            {
                ARRAY_IMG_SMALL.map((smallImg, i) =>(
                    <div 
                        key={i}
                        onClick={() => {
                            setImgIndex(i)
                            }} 
                        className="relative cursor-pointer rounded-md overflow-hidden ">

                        <img 
                            
                            src={smallImg} 
                            alt="" 
                            className="hidden  md:block md:rounded-md " 
                        />
                        <span className={` absolute top-0 h-full w-full hover:bg-[rgba(255,255,255,0.5)] ${i === imgIndex && 'bg-[rgba(255,255,255,0.5)]'}`}></span>
                    </div>
                ))
            }
            

        </section>
    )
}

export default SlideProduct