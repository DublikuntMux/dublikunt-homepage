import React, { useState } from 'react'
import Head from 'next/head'
import { Heading, Flex, Stack, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import Container from '../components/Container'
import { getAllFilesFrontMatter } from '../lib/mdx'
import BlogPost from '../components/BlogPost'

import { RiSearchEyeLine } from 'react-icons/ri'

export default function Blog({ posts }) {
    const [searchValue, setSearchValue] = useState('')

    const filteredBlogPosts = posts
        .sort(
            (a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
        )
        .filter((frontMatter) =>
            frontMatter.title.toLowerCase().includes(searchValue.toLowerCase()))

    return (
        <>
            <Head>
                <title>Blog - DublikuntMax</title>
            </Head>
            <Container>
                <Stack as="main" justifyContent="center" alignItems="flex-start" m="0 auto 4rem auto" maxWidth="700px" >
                    <Flex flexDirection="column" justifyContent="flex-start" alignItems="flex-start" maxWidth="700px" >
                        <Heading letterSpacing="tight" mb={4} as="h1" size="2xl">
                            Найдено ({posts.length} постов)
                        </Heading>
                        <InputGroup mb={4} mr={4} w="100%">
                            <Input aria-label="Search by title" placeholder="Поиск по имени" 
                            onChange={(e) => setSearchValue(e.target.value)} />
                            <InputRightElement>
                                <RiSearchEyeLine color="gray.300" />
                            </InputRightElement>
                        </InputGroup>
                        {!filteredBlogPosts.length && 'Ничего не найдено :('}
                        {filteredBlogPosts.map((frontMatter) => <BlogPost key={frontMatter.title} {...frontMatter} />)}
                    </Flex>
                </Stack>
            </Container>
        </>
    )
}

export async function getStaticProps() {
    const posts = await getAllFilesFrontMatter('blog')

    return { props: { posts } }
}
