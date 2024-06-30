import {
  Box,
  Grid,
  Skeleton,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";

function DonationTable({ donations }) {
  return (
    <Grid
      sx={{
        padding: ["24px", "64px 48px"],
        background: "quaternary",
        display: ["none", "block"],
      }}
    >
      <Text
        color="secondary"
        margin={"12px 0"}
        sx={{
          fontSize: ["18px", "28px"],
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Donation History
      </Text>
      <Box sx={{ marginBottom: "12px", textAlign: "center" }}>
        <Text
          color="senary"
          fontFamily={"primary"}
          sx={{
            fontSize: ["24px", "42px"],
            fontWeight: "bold",
            lineHeight: "1",
          }}
        >
          Discover who has supported our cause.
        </Text>
      </Box>
      <TableContainer
        sx={{
          margin: "48px 24px",
          background: "white",
          padding: "12px",
          borderRadius: "24px",
          boxShadow: "primary",
        }}
      >
        <Table size="sm">
          <Thead sx={{ margin: "12px 0", height: "60px" }}>
            <Tr>
              <Th
                sx={{
                  fontSize: ["18px", "24px"],
                  color: "primary",
                  textAlign: "center",
                  margin: "12px 0",
                }}
              >
                Date
              </Th>
              <Th
                sx={{
                  fontSize: ["18px", "24px"],
                  color: "primary",
                  textAlign: "center",
                  margin: "12px 0",
                }}
              >
                From{" "}
              </Th>
              <Th
                sx={{
                  fontSize: ["18px", "24px"],
                  color: "primary",
                  textAlign: "center",
                  margin: "12px 0",
                }}
              >
                Amount{" "}
              </Th>
            </Tr>
          </Thead>
          <Tbody sx={{ margin: "12px 0" }}>
            {donations?.length ? (
              donations.map((donation) => {
                return (
                  <Tr key={donation?.from} sx={{ margin: "8px 0" }}>
                    <Td
                      sx={{
                        textAlign: "center",
                        fontSize: ["14px", "16px"],
                        padding: "12px 0",
                      }}
                    >
                      {donation.date}
                    </Td>
                    <Td
                      sx={{
                        textAlign: "center",
                        fontSize: ["14px", "16px"],
                        padding: "12px 0",
                      }}
                    >
                      {donation?.from}
                    </Td>
                    <Td
                      sx={{
                        textAlign: "center",
                        fontSize: ["14px", "16px"],
                        padding: "12px 0",
                      }}
                    >
                      {donation?.amount}
                    </Td>
                  </Tr>
                );
              })
            ) : (
              <>
                <Tr key={"key"} sx={{ margin: "8px 0" }}>
                  <Td>
                    <Skeleton height="20px" />
                  </Td>
                  <Td>
                    <Skeleton height="20px" />
                  </Td>
                  <Td>
                    <Skeleton height="20px" />
                  </Td>
                </Tr>
              </>
            )}
          </Tbody>
        </Table>
      </TableContainer>
      <Text
        color="secondary"
        margin={"12px 0"}
        sx={{
          fontSize: ["14px", "18px"],
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        & many more...
      </Text>
    </Grid>
  );
}

export default DonationTable;
