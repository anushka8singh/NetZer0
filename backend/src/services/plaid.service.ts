import {
  Configuration,
  PlaidApi,
  PlaidEnvironments,
  Products,
  CountryCode,
} from "plaid";

const configuration = new Configuration({
  basePath: PlaidEnvironments.sandbox,
  baseOptions: {
    headers: {
      "PLAID-CLIENT-ID": process.env.PLAID_CLIENT_ID!,
      "PLAID-SECRET": process.env.PLAID_SECRET!,
    },
  },
});

export const plaidClient = new PlaidApi(configuration);

export const createLinkToken = async (
  userId: string
) => {
  const response =
    await plaidClient.linkTokenCreate({
      user: {
        client_user_id: userId,
      },
      client_name: "NetZero",
     products: [Products.Transactions],
    country_codes: [CountryCode.Us],
      language: "en",
    });

  return response.data;
};