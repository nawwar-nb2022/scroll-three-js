import { Scroll, useScroll } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useState } from "react"

import styles from "../assets/style/text.module.css"

export const  Section = ({children , opacity})=>{
    return(
        <div className={styles.container}>   
            <div className={styles.subContainer}
            style={{opacity : opacity}}
            >
                {children}
            </div>
        </div>
    )
}



const Text = () => {
    const [firstOpacity , setFOpacity] = useState(1)
    const [SecondOpacity , setSOpacity] = useState(1)
    const [ThirdOpacity , setTOpacity] = useState(1)

    const scroll = useScroll()
    console.log(scroll);
        useFrame(()=>{
            setFOpacity(1 - scroll.range(0,1/3));
            setSOpacity(scroll.curve(1/3,1/3))
            setTOpacity(scroll.range(2/3,1/3))
        })

    return (
        <Scroll html>
            <Section opacity={firstOpacity}>
                    section 1
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat quibusdam hic qui magnam dolores omnis voluptas laborum ratione architecto aliquam.</p>
            </Section>
            <Section opacity={SecondOpacity}>
                    section 2
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat quibusdam hic qui magnam dolores omnis voluptas laborum ratione architecto aliquam.</p>
            </Section>
            <Section opacity={ThirdOpacity}>
                    section 3
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat quibusdam hic qui magnam dolores omnis voluptas laborum ratione architecto aliquam.</p>
            </Section>
        </Scroll>
    )
}

export default Text
