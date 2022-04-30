import React, { useEffect, useState } from 'react';
import "./MyCarousel.css";

export const MyCarouselItem = ({children, width}) => (
    <div className="myCarousel__Item" style={{width}} >{children}</div>
);

const MyCarousel = ({children}) => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        setTimeout(updateIndex, 2000)
    }, [activeIndex])
    const updateIndex = () => {
        setActiveIndex(oldIndex => {
            return activeIndex<children.length-1 ? oldIndex+1 : 0
        })
    }

    return (
        <div className='myCarousel'>
            <div className="myCarousel__inner" style={{transform: `translateX(-${activeIndex * 100}%)`, height:'400px'}} >
                {
                    React.Children.map(children, (child, index) => {
                        return React.cloneElement(child, {width: '100%'})
                    })
                }
            </div>
            
        </div>
    )
}

export default MyCarousel;