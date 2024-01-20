import { Avatar, Box, Flex, Link, Text, VStack } from "@chakra-ui/react"
import { BsInstagram } from "react-icons/bs";
import { CgMoreO } from "react-icons/cg";

const UserHeader = () => {
return <VStack gap={4} alignItems={"start"}>

<Flex justifyContent={"space-between"} w={"full"}>
<Box>
<Text fontSize = {"2xl"} fontWeight={"bold"}>
Mark Zuckerberg
</Text>
<Flex gap={2} alignItems={"center"}>
    <Text fontSize={"sm"}>markzuckerberg</Text>
    <Text fontSize={"xs"} bg={"gray.dark"} colors={"gray.light"} p={1} borderRadius={"full"}>threads.net</Text>
</Flex>

</Box>
<Box>
    <Avatar name="Mark Zuckerberg"
        src="/zuck-avatar.webp"
        size={"xl"}
    />


</Box>


</Flex>
<Text>Co-founder, executive chairman and ceo of meta platforms</Text>
<Flex w={"full"} justifyContent={"space-between"}>
    <Flex alignItems={"center"} gap={2}>
        <Text color={"gray.light"}>3.2k folllowers</Text>
        <Box w={1} h={1} borderRadius={"full"} bg={"gray.light"}></Box>
        <Link color={"gray.light"}>instagram.com</Link>
    </Flex>
    <Flex>
        <Box className="icon-container">
            <BsInstagram size={24} cursor={"pointer"}/>
        </Box>
         <Box className="icon-container">
            <CgMoreO size={24} cursor={"pointer"}/>
        </Box>
    </Flex>
</Flex>

</VStack>
}

export default UserHeader