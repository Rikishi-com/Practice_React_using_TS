import { HStack, Image, Text, Box } from "@chakra-ui/react"
import { motion } from "framer-motion"

export type HeaderProps = {
    imageSrc?: string
    imageAlt?: string
    title: string
    fontSize: string
    fontFamily?: string
}

const MotionBox = motion(Box)

export default function Header({imageSrc, imageAlt, fontSize, title, fontFamily}: HeaderProps){
    return(
        <MotionBox
            initial={{ opacity: 0, y:-100}}
            animate={{ opacity: 1, y:0}}
            transition={{ duration: 1.3, ease: "easeOut"}} 
            >
            <HStack>
            <Image
            src = {imageSrc}
            alt = {imageAlt}
            style={{width: "50%", height: "50%"}
                }
            />
            <Text
                fontSize={fontSize}
                fontFamily={fontFamily}
                lineHeight="1.2"
            >
                {title}
            </Text>
            </HStack>
        </MotionBox>
    )
}