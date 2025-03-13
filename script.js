window.addEventListener("wheel", (event) => {


    if (event.deltaY > 0) {
        gsap.to('.mourgue', {
            transform: "translateX(-200%)",
            duration: 4,
            repeat: -1,
            ease: "none"
        })

        gsap.to('.mourgue img', {
            rotate: 180
        })
    }
    else {
        gsap.to('.mourgue', {
            transform: "translateX(0%)",
            duration: 4,
            repeat: -1,
            ease: "none"

        })
        gsap.to('.mourgue img', {
            rotate: 0
        })
    }

})