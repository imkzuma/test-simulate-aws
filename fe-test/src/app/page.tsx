import { Button, Flex, Heading, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex
      w={'full'}
      minH={'100dvh'}
      align={'center'}
      justify={'center'}
      direction={'column'}
      gap={5}
    >
      <Heading>
        Welcome
      </Heading>
      <Text>
        This is a simple prototype using aws + ChakraUI + Next.js
      </Text>
      <Button colorScheme="blue">
        Hello World
      </Button>
    </Flex>
  )
}