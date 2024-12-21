import axios from "axios";

export const claimHeweSerepay = async ({amountClaim, address}) => {
  return axios.get("https://serepay.net/api/payment/claimHewe", {
    amountClaim,
    address
  });
};
