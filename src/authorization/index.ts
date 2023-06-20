export interface Token {
  organizationID: string;
  accessToken: string;
  region: string;
  isPAT?: boolean;
}

export type TokenGetter = () => Token;

export function getTokenHeader(token: Token): string {
  if (token.isPAT == true) {
    return `Basic ${token.accessToken}`;
  } else {
    return `Bearer ${token.accessToken}`;
  }
}