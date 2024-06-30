import {
  Box,
  Button,
  Flex,
  Grid,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import landingBg from "../assets/donateLandingBg.jpg";
import donateLogo from "../assets/donateLogo.svg";
import DonateBtn from "./DonateBtn";
import { useNavigate } from "react-router";
import ethereum from "../assets/ethereum.svg";
import { ethers } from "ethers";
import CrowdFund from "../artifacts/contracts/CrowdFund.sol/CrowdFund.json";
import { contractAddress, donateCards } from "../helpers/jsonMapping";
import useShowToast from "../CustomHooks/useShowToast";
import Loader from "./Loader";
import withdraw from "../assets/withdraw.png";

function LandingDonate({ setDonations }) {
  const navigate = useNavigate();
  const { showToast, closeAllToasts } = useShowToast();
  const [contract, setContract] = useState();
  const [isOwner, setIsOwner] = useState(false);
  const [value, setValue] = useState();
  const [isLoading, setIsLoading] = useState();
  const [isValueErr, setIsValueErr] = useState();
  const tokens = (n) => {
    if (!n) {
      closeAllToasts();
      setIsValueErr(true);
      return showToast({
        title: "Please enter amount",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
    }
    return ethers.parseUnits(n.toString(), "ether");
  };

  const weiToEth = (wei) => {
    return Number(wei) / 1000000000000000000;
  };

  const connectWallet = async (_provider) => {
    console.log("connectWallet");
    if (!window.ethereum) return;
    if (!_provider) return;

    // Requesting to connect
    await _provider.send("eth_requestAccounts", []);

    // Listening to changes
    window?.ethereum?.on("chainChanged", (chainId) => {
      window.location.reload();
    });
    window?.ethereum?.on("accountsChanged", (accounts) => {
      window.location.reload();
    });
    const signer = await _provider.getSigner();
    const address = await signer.getAddress();
    const contrt = new ethers.Contract(contractAddress, CrowdFund.abi, signer);
    const owner = await contrt.owner();
    setIsOwner(address == owner);
    setContract(contrt);
    // await getContractBalance();
  };

  const getAllDonationDetailsFromContract = async () => {
    try {
      const res = await contract?.getAllDonationDetails();
      const resLength = res[0].length;
      const donations = [];
      for (let i = resLength - 1; i >= 0; i--) {
        const donationObj = {
          date: new Date(Number(res[1][i][1]) * 1000).toDateString(),
          amount: weiToEth(res[1][i][0]) * 100 + " Eth",
          from: res[0][i],
        };
        donations.push(donationObj);
      }
      setDonations(donations.slice(0, 10));
    } catch (err) {
      console.log(err);
    }
  };

  const donateAmount = async (_amount) => {
    if (!_amount) {
      closeAllToasts();
      return showToast({
        title: "Please enter amount",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
    }
    try {
      localStorage.setItem("isLoading", true);
      setIsLoading(true);
      setIsValueErr(false);
      const donate = await contract?.donate(_amount, {
        value: _amount,
      });
      await donate.wait();
    } catch (err) {
      localStorage.setItem("isLoading", false);
      setIsLoading(false);
      showToast({
        title: "Something went wrong",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
    }
  };

  const listenToDonate = async () => {
    try {
      contract?.on("NewDonation", async (a, b) => {
        closeAllToasts();
        showToast({
          title: "Successfully donated",
          description: `Thank you for your donation of ${
            weiToEth(b) * 100
          } ETH`,
          status: "success",
          duration: 3000,
          isClosable: true,
          position: "top-right",
        });
        await getAllDonationDetailsFromContract();
        localStorage.setItem("isLoading", false);
        setIsLoading(false);
      });
    } catch (err) {
      console.log(err);
      localStorage.setItem("isLoading", false);
      setIsLoading(false);
    }
  };

  const withDrawContractBalance = async () => {
    try {
      localStorage.setItem("isLoading", true);
      setIsLoading(true);
      const res = await contract.withdraw();
      await res.wait();
    } catch (err) {
      showToast({
        title: "Something went wrong",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
      localStorage.setItem("isLoading", false);
      setIsLoading(false);
    }
  };

  const listenToWithdraw = async () => {
    try {
      contract.on("AmountWithdrawal", (a, b) => {
        closeAllToasts();
        showToast({
          title: "Successfully withdraw",
          status: "success",
          duration: 3000,
          isClosable: true,
          position: "top-right",
        });
        localStorage.setItem("isLoading", false);
        setIsLoading(false);
      });
    } catch (err) {
      localStorage.setItem("isLoading", false);
      setIsLoading(false);
      console.log(err);
    }
  };

  useEffect(() => {
    if (window.ethereum) {
      const provider = new ethers.BrowserProvider(window.ethereum);
      if (provider) {
        connectWallet(provider);
      }
    }

    if (localStorage.getItem("isLoading") === "true") {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (contract) {
      listenToDonate();
      getAllDonationDetailsFromContract();
      listenToWithdraw();
    }

    return () => {
      if (contract) {
        contract.removeAllListeners("NewDonation");
        contract.removeAllListeners("AmountWithdrawal");
      }
    };
  }, [contract]);

  return (
    <Grid sx={{ position: "relative" }}>
      <Modal isOpen={isLoading} onClose={() => {}} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalBody
            sx={{
              borderRadius: "24px",
              padding: "24px",
            }}
          >
            <Loader />
            <Text
              sx={{
                textAlign: "center",
                fontSize: ["18px", "24px"],
                fontWeight: "bold",
                fontFamily: "primary",
                color: "secondary",
              }}
            >
              Please wait while we process your donation...
            </Text>
          </ModalBody>
        </ModalContent>
      </Modal>
      <Grid
        sx={{
          position: "relative",
          minHeight: ["60vh", "100vh"],
          width: "100%",
          justifyContent: "space-between",
          placeContent: "flex-start",
        }}
      >
        <Image
          src={landingBg}
          alt="landingBg"
          sx={{
            width: "100%",
            height: "100%",
            position: "absolute",
            inset: 0,
            filter: "brightness(0.4)",
            zIndex: -1,
          }}
        />
        <Flex
          sx={{
            padding: ["24px", "64px 48px"],
            justifyContent: "space-between",
            alignItems: "center",
            height: "fit-content",
          }}
        >
          <Image
            src={donateLogo}
            alt="logo"
            sx={{
              height: ["24px", "36px"],
              objectFit: "contain",
              cursor: "pointer",
            }}
            onClick={() => navigate("/")}
          />
          <Flex sx={{ gap: "24px" }}>
            <DonateBtn />
            {isOwner ? (
              <Box
                sx={{
                  background: "white",
                  padding: "8px 12px",
                  display: "grid",
                  placeContent: "center",
                  borderRadius: "12px",
                  cursor: "pointer",
                  transition: "transform 0.2s ease-in-out",
                  "&:hover": {
                    transform: "scale(0.95)",
                  },
                }}
                onClick={withDrawContractBalance}
              >
                <Image
                  src={withdraw}
                  alt="withdraw"
                  sx={{ height: "24px", width: "24px" }}
                />
              </Box>
            ) : null}
          </Flex>
        </Flex>
        <Grid
          sx={{
            padding: ["24px", "64px 48px"],
            margin: "auto",
          }}
        >
          <Box sx={{ marginBottom: "24px" }}>
            <Text
              sx={{
                color: "white",
                textAlign: "center",
                fontSize: ["36px", "56px"],
                fontWeight: "bold",
                fontFamily: "primary",
                lineHeight: 1,
              }}
            >
              Donate to
            </Text>
            <Text
              sx={{
                color: "white",
                textAlign: "center",
                fontSize: ["36px", "56px"],
                fontWeight: "bold",
                fontFamily: "primary",
                lineHeight: 1,
              }}
            >
              reforest the world
            </Text>
          </Box>
          <Text
            sx={{
              color: "white",
              textAlign: "center",
              fontSize: ["18px", "24px"],
              width: ["100%", "80%"],
              margin: "auto",
            }}
          >
            Your donation makes a significant impact on our planet. Help us
            plant trees, clean rivers, and support communities worldwide.
            Together, we're creating a greener, healthier Earth for all.
          </Text>
        </Grid>
      </Grid>
      <Grid
        sx={{
          minHeight: "100vh",
          width: "100%",
          background: "tertiary",
        }}
      >
        <Grid
          sx={{
            width: ["100%", "60%"],
            gridTemplateColumns: ["1fr", "repeat(2,1fr)"],
            gap: "24px",
            position: ["static", "absolute"],
            top: "40%",
            left: 0,
            right: 0,
            margin: "auto",
            padding: ["48px 0", "0"],
          }}
        >
          {donateCards.map((card) => {
            return (
              <Box
                key={card.money}
                sx={{
                  background: "white",
                  boxShadow: "primary",
                  padding: ["24px", "48px 24px 24px 24px"],
                  maxWidth: ["350px", "400px"],
                  width: ["320px", "400px"],
                  display: "grid",
                  placeContent: "center",
                  margin: "auto",
                  borderRadius: "24px",
                  transition:
                    card.money !== "Custom" ? "transform 0.2s ease-in-out" : "",
                  "&:hover": {
                    transform: card.money !== "Custom" ? "scale(0.95)" : "",
                  },
                }}
              >
                <Image
                  src={card.icon}
                  alt={card.money}
                  sx={{ height: "120px", objectFit: "contain", margin: "auto" }}
                />
                <Flex
                  sx={{
                    gap: "12px",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "12px 0",
                  }}
                >
                  <Image
                    src={ethereum}
                    alt="eth icon"
                    sx={{ height: "24px", objectFit: "contain" }}
                  />
                  <Text
                    sx={{
                      color: "primary",
                      fontSize: ["24px", "36px"],
                      fontWeight: "bold",
                      fontFamily: "primary",
                      lineHeight: 1,
                      textAlign: "center",
                    }}
                  >
                    {card.money}
                  </Text>
                </Flex>
                {card.money === "Custom" ? (
                  <Box>
                    <Input
                      type="number"
                      placeholder="Enter Amount"
                      value={value}
                      onChange={(e) => {
                        setValue(e.target.value);
                        setIsValueErr(false);
                      }}
                      sx={{
                        width: ["250px", "300px"],
                        border: `1px solid ${isValueErr ? "red" : "#eaf3eb"}`,
                      }}
                    />
                  </Box>
                ) : (
                  <Text
                    sx={{
                      textAlign: "center",
                      fontSize: ["14px", "18px"],
                      lineHeight: 1.2,
                      color: "senary",
                    }}
                  >
                    {card.text}
                  </Text>
                )}

                <Button
                  sx={{
                    background: "secondary",
                    color: "white",
                    borderRadius: "40px",
                    padding: ["28px 40px"],
                    width: "100%",
                    margin: " 24px auto",
                    fontWeight: "bold",
                    fontSize: "18px",
                    "&:hover": {
                      background: "secondary",
                    },
                  }}
                  onClick={() =>
                    card.value
                      ? donateAmount(tokens(card.value))
                      : donateAmount(tokens(value))
                  }
                >
                  Donate now
                </Button>
              </Box>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default LandingDonate;
