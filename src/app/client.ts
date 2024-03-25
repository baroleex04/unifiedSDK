import { createThirdwebClient } from "thirdweb";

const clientId = process.env.NEXT_PUBLIC_CLIENT_ID;

if (!clientId) {
    throw new Error('No client id providee');
}

export const client = createThirdwebClient({
  clientId: clientId,
});
