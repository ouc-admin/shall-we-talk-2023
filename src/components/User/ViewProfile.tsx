import React from "react";
import { Flex, Text, Stack, Image, Button } from "@chakra-ui/react";

import {
  collection,
  limit,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { currentUserState } from "../../atoms/currentUserState";
import { imageViewModelState } from "../../atoms/imageViewModelState";
import { myMessagesModelState } from "../../atoms/myMessagesModelState";
import { sendMessageModelState } from "../../atoms/sendMessageModelState";
import ImageViewModel from "../Model/Images/ImageViewModel";
import SendMessageModel from "../Model/Message/SendMessageModel";
import ViewMessages from "../Model/Message/ViewMessages";
import { firestore } from "../firebase/clientApp";
import { Message } from "../../types/Message";


const NewUserProfileView: React.FC = () => {
  const navigate = useNavigate();

  const profileCol = collection(firestore, "userProfiles");
  const messageCol = collection(firestore, "messages");
  const [currentUser] = useRecoilState(currentUserState);
  const [sendMessageState, setSendMessageModelState] = useRecoilState(
    sendMessageModelState
  );
  const [myMessages, setMyMessagesModelState] =
    useRecoilState(myMessagesModelState);

  const [userProfile, setUserProfile] = useState<{
    name: string;
    email: string;
    profileImage: string;
    companyName: string;
    companyProfile: string;
    workProfile: string;
    hobbies: string;
    pet: string;
    pr: string;
  }>({
    name: "",
    email: "",
    profileImage: "",
    companyProfile: "",
    companyName: "",
    workProfile: "",
    hobbies: "",
    pr: "",
    pet: "",
  });

  const [loadingMessage, setLoadingMessage] = useState(false);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ status: string }>({ status: "" });
  const { id } = useParams();
  const [imageViewModel, setImageViewModelState] = useRecoilState(imageViewModelState)

  // method to send a message from current user
  const handleSendMessage = () => {
    setSendMessageModelState({ open: true });
  };

  // method to see all the messages for current user
  const handleSeeMessage = () => {
    const mq = query(messageCol, where("to.id", "==", `${currentUser.id}`));
    try {
      setLoadingMessage(true);
      onSnapshot(mq, (snapShot) => {
        let data: Message[] = [];
        snapShot.forEach((doc) => {
          data.push(doc.data() as Message);
        });
        setLoadingMessage(false);
        setMyMessagesModelState((prev) => ({
          ...prev,
          messages: data,
          open: true,
        }));
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setLoading(true);
    const profileQuery = query(
      profileCol,
      where("userId", "==", `${id}`),
      limit(1)
    );
    const unsub = onSnapshot(profileQuery, (snapShot) => {
      snapShot.forEach((doc) => {
        setUserProfile({
          name: doc.data().name,
          email: doc.data().email,
          profileImage: doc.data().profileImage,
          companyProfile: doc.data().companyProfile,
          companyName: doc.data().companyName,
          hobbies: doc.data().hobbies,
          pr: doc.data().pr,
          pet: doc.data().pet,
          workProfile: doc.data().workProfile,
        });
      });
      setLoading(false);
    });

    const onlineUserQuery = query(
      collection(firestore, "vs-users"),
      where("id", "==", `${id}`),
      limit(1)
    );

    const unsub2 = onSnapshot(onlineUserQuery, (snapShot) => {
      snapShot.forEach((doc) => {
        setStatus({ status: doc.data().status });
      });
    });

    const revokeEverything = () => {
      unsub();
      unsub2();
      // unsub3()
    };

    return () => revokeEverything();
  }, [firestore, id]);

  // button to edit the current user profile
  function renderEditButton() {
    if (currentUser.id === id) {
      return (
        <div>
          <Button
            size={"sm"}
            fontSize={"xs"}
            ml={3}
            bg="red.400"
            color="white"
            onClick={() => navigate(`/update-profile/${currentUser.id}`)}
            _hover={{ bg: "white", color: "red.500", border: "1px solid", borderColor: "red.500" }}
          >
            プロフィール編集
          </Button>
        </div>
      );
    }
  }


  return (
    <>
      <Flex
        bg={"white"}
        height={"100vh"}
        width={"full"}
        alignItems="center"
        justifyContent="center"
        margin={0}
        padding={0}
      >
        <Stack
          direction={{ base: "column", sm: "column", md: "row", lg: "row" }}
          justifyContent={"space-between"}
          alignItems={"center"}
          width={{ base: "90%", md: "80%", lg: "80%" }}
          height={{ base: "700px", sm: "700px", md: "700px", lg: "700px" }}
          borderRadius="20px"
          padding={"25px"}
          border="1px solid"
          borderColor={"gray.200"}
          bg="red.50"
          overflow={"scroll"}
        >
          <Flex
            alignItems="center"
            justifyContent="center"
            padding={"20px"}
            width={{ base: "full", sm: "full", md: "40%", lg: "40%" }}
          >
            <Flex
              flexDirection={"column"}
              gap={10}
              alignItems={"center"}
              justifyContent={"center"}
              width="full"
            >
              <ImageViewModel imageUrl={userProfile.profileImage} />
              <Image
                onClick={() => setImageViewModelState({ open: true })}
                rounded={"full"}
                border="5px solid"
                borderColor={status.status === "want_to_talk"
                  ? `green.500`
                  : status.status === "do_not_want_to_talk"
                    ? `red.500`
                    : "blue.500"}
                h={{ base: "200px", sm: "250px", md: "250px", lg: "300px" }}
                w={{ base: "200px", sm: "250px", md: "250px", lg: "300px" }}
                src={userProfile.profileImage}
                alt="User profile picutre"
              />

              {/* a button to edit the profile */}
              {renderEditButton()}

              {currentUser.id === id ? (
                <Flex width={'full'} alignItems='center' justifyContent='center'>
                  <ViewMessages />
                  <Button
                    _hover={{
                      bg: "white",
                      border: "1px solid",
                      borderColor: "red.500",
                      color: "red.500",
                    }}
                    fontSize={{ base: "8pt", sm: "9pt", md: "10pt" }}
                    fontWeight={700}
                    bg="red.500"
                    color="white"
                    variant="solid"
                    height="36px"
                    width="full"
                    mt={3}
                    onClick={() => handleSeeMessage()}
                    isLoading={loadingMessage}
                    style={{ boxShadow: "5px 5px" }}
                  >
                    届いたメッセージを見る
                  </Button>
                </Flex>
              ) : (
                <Flex alignItems={'center'} justifyContent={'center'}>
                  <SendMessageModel id={id as string} />
                  <Button
                    _hover={{
                      bg: "white",
                      border: "1px solid",
                      borderColor: "red.500",
                      color: "red.500",
                    }}
                    type="submit"
                    fontSize="10pt"
                    fontWeight={700}
                    bg="red.500"
                    color="white"
                    variant="solid"
                    height="36px"
                    width="full"
                    onClick={() => handleSendMessage()}
                  >
                    メッセージを送信する
                  </Button>
                </Flex>
              )}
            </Flex>
          </Flex>
          <Flex
            padding={"20px"}
            alignItems="start"
            justifyContent="start"
            width={{ base: "full", sm: "full", md: "60%", lg: "60%" }}
            border="1px solid"
            borderColor="gray.200"
            borderRadius="20px"
          >
            <Flex
              gap={"20px"}
              direction={"column"}
              width={"full"}
              height={"full"}
            >
              <Stack spacing={0} alignItems={"start"}>
                <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="bold" color="gray.800">
                  {userProfile.name}
                </Text>
              </Stack>
              <Stack spacing={0} alignItems={"start"}>
                <Text fontSize={{ base: "md", md: "xl", lg: "xl" }} fontWeight="bold">
                  所属名:
                </Text>
                <Text fontSize={{ base: "sm", md: "md", lg: "md" }} fontWeight="light" color="gray.600">
                  {userProfile.companyName}
                </Text>
              </Stack>
              <Stack spacing={0} alignItems={"start"}>
                <Text fontSize={{ base: "md", md: "xl", lg: "xl" }} fontWeight="bold">
                  所属組織の紹介:
                </Text>
                <Text fontSize={{ base: "sm", md: "md", lg: "md" }} fontWeight="light" color="gray.600">
                  {userProfile.companyProfile}
                </Text>
              </Stack>
              <Stack spacing={0} alignItems={"start"}>
                <Text fontSize={{ base: "md", md: "xl", lg: "xl" }} fontWeight="bold">
                  職業プロフィール:
                </Text>
                <Text
                  width={"full"}
                  fontSize={{ base: "sm", md: "md", lg: "md" }}
                  fontWeight="light"
                  color="gray.600"
                >
                  {userProfile.workProfile}
                </Text>
              </Stack>
              <Stack spacing={0} alignItems={"start"}>
                <Text fontSize={{ base: "md", md: "xl", lg: "xl" }} fontWeight="bold">
                  趣味:
                </Text>
                <Text
                  width={"full"}
                  fontSize={{ base: "sm", md: "md", lg: "md" }}
                  fontWeight="light"
                  color="gray.600"
                >
                  {userProfile.hobbies}
                </Text>
              </Stack>
              <Stack spacing={0} alignItems={"start"}>
                <Text fontSize={{ base: "md", md: "xl", lg: "xl" }} fontWeight="bold">
                  飼っているペット:
                </Text>
                <Text
                  width={"full"}
                  fontSize={{ base: "sm", md: "md", lg: "md" }}
                  fontWeight="light"
                  color="gray.600"
                >
                  {userProfile.pet}
                </Text>
              </Stack>
              <Stack
                spacing={0}
                alignItems={"start"}
                maxHeight={"150px"}
                overflowY="scroll"
              >
                <Text fontSize={{ base: "md", md: "xl", lg: "xl" }} fontWeight="bold">
                  自己紹介文:
                </Text>
                <Text
                  width={"full"}
                  fontSize={{ base: "sm", md: "md", lg: "md" }}
                  fontWeight="light"
                  color="gray.600"
                >
                  {userProfile.pr}
                </Text>
              </Stack>
            </Flex>
          </Flex>
        </Stack>
      </Flex>
    </>
  );
};

export default NewUserProfileView;
