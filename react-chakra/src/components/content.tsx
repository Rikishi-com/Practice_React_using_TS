import { Card, Heading, Text } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { motion } from "framer-motion"

const MotionCard = motion(Card.Root)

export type ContentProps = {
    title: string
    description: string
    link?: string
}

export default function Content({title, description, link}:ContentProps){
    return(
    <MotionCard
        initial={{ opacity: 0, y:-100}}
        animate={{ opacity: 1, y:0}}
        transition={{ duration: 1.3, ease: "easeOut", transform: "0.3s", boxShadow: "0.3s"}} //後ろ２つのパラメータ無効
        variant='elevated'
        h={300} //絶対的な大きさだから画面サイズに依存しないのが良くない
        w={500}
        // transition = "transform 0.3s ease, box-shadow 0.3s ease"
        transformOrigin="center"
        backgroundColor={'darkgray'} 
        cursor="pointer" 
        _hover={{
            transform: "scale(1.03)",
            boxShadow: "lg"
        }}

    >
    <Heading 
      as="h1"
      >
      {title}
    </Heading>
    <Text
    whiteSpace={'pre-line'}
    >{description}</Text>
    <RouterLink to="./ResultCard.tsx" style={{color:"blue", fontWeight: "bold"}}>
        View More
    </RouterLink>
    </MotionCard>
    )
}