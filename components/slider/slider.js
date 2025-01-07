"use client"

import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import {
    NextButton,
    PrevButton,
    usePrevNextButtons
} from './sliderButtons'

import classes from '../../styles/slider/slider.module.css'

const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
    }).format(date); // This will format as '25 Dec 2024'
};

const Slider = (props) => {
    const { slides, options } = props
    const [emblaRef, emblaApi] = useEmblaCarousel(options)
    const [scrollProgress, setScrollProgress] = useState(0)

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi)

    const onScroll = useCallback((emblaApi) => {
        const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()))
        setScrollProgress(progress * 100)
    }, [])

    useEffect(() => {
        if (!emblaApi) return

        onScroll(emblaApi)
        emblaApi
            .on('reInit', onScroll)
            .on('scroll', onScroll)
            .on('slideFocus', onScroll)
    }, [emblaApi, onScroll])

    return (
        <div className={classes.embla}>
            <div className={classes.embla__viewport} ref={emblaRef}>
                <div className={classes.embla__container}>
                    {slides.map((slide, index) => (
                        <div className={classes.embla__slide} key={slide.event_id || index}>
                            <div className={classes.embla__slide__number}>
                                <p className={classes.date}>{formatDate(slide.date)}</p>
                                <img src={slide.img} alt='event image' className={classes.img} />
                                <h2 className={classes.title}>{slide.name}</h2>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className={classes.embla__controls}>
                <div className={classes.embla__buttons}>
                    <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                    <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
                </div>

                <div className={classes.embla__progress}>
                    <div
                        className={classes.embla__progress__bar}
                        style={{ transform: `translate3d(${scrollProgress}%,0px,0px)` }}
                    />
                </div>
            </div>
        </div>
    )
}

export default Slider
