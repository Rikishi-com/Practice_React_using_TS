import { Card, Link, VStack } from '@chakra-ui/react'


export type ResultCardProps = {
    title: string
    subtitle: string
    result: string
    description: string
    skill: string
    siteTitle?: string
    site?: string
    slideTitle: string
    slide?: string
    githubTitle?: string
    github?: string 
    period?: string
}

export default function ResultCard({ title, subtitle, result, description, skill, siteTitle, site, slideTitle, slide, githubTitle, github, period }: ResultCardProps){
    return(
        <Card.Root variant="elevated" h={500} w={500}>
            <Card.Header>
                <Card.Title>{title}</Card.Title>
                <Card.Description>
                    {subtitle}
                    <br />
                    {result}
                </Card.Description>
            </Card.Header>

            <Card.Body>
                {description}
                <br />
                <br />
                私の使用技術：{skill}
            </Card.Body>

            <Card.Footer justifyContent="center">
                <VStack>
                    <Link href={site} color="blue.500">
                    {siteTitle}
                    </Link>
                    <Link href={slide} color="blue.500">
                    {slideTitle}
                    </Link>
                    <Link href={github} color="blue.500">
                    {githubTitle}
                    </Link>
                    <Card.Description>
                        開発期間：{period}
                    </Card.Description>
                </VStack>
            </Card.Footer>

        </Card.Root>
    )
}