import { Container, Text, VStack, Heading, Box, Button, IconButton, Image } from "@chakra-ui/react";
import { FaChalkboardTeacher, FaBook, FaLaptop, FaUserGraduate } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center">
          Welcome to Online Schooling
        </Heading>
        <Image src="https://images.unsplash.com/photo-1610484826967-09c5720778c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBlZHVjYXRpb258ZW58MHx8fHwxNzE2OTg2Nzg0fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Online Schooling" borderRadius="md" />
        <Text fontSize="lg" textAlign="center">
          Learn from the comfort of your home with our comprehensive online courses.
        </Text>
        <Box display="flex" justifyContent="space-around" width="100%">
          <VStack spacing={4}>
            <IconButton aria-label="Courses" icon={<FaBook />} size="lg" />
            <Text>Courses</Text>
          </VStack>
          <VStack spacing={4}>
            <IconButton aria-label="Teachers" icon={<FaChalkboardTeacher />} size="lg" />
            <Text>Teachers</Text>
          </VStack>
          <VStack spacing={4}>
            <IconButton aria-label="Technology" icon={<FaLaptop />} size="lg" />
            <Text>Technology</Text>
          </VStack>
          <VStack spacing={4}>
            <IconButton aria-label="Students" icon={<FaUserGraduate />} size="lg" />
            <Text>Students</Text>
          </VStack>
        </Box>
        <Button colorScheme="teal" size="lg">
          Get Started
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;
