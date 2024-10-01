

export interface User {
    id: string;
    passwordEnabled: boolean;
    totpEnabled: boolean;
    backupCodeEnabled: boolean;
    twoFactorEnabled: boolean;
    banned: boolean;
    createdAt: number;
    updatedAt: number;
    imageUrl: string;
    hasImage: boolean;
    primaryEmailAddressId: string | null;
    primaryPhoneNumberId: string | null;
    primaryWeb3WalletId: string | null;
    lastSignInAt: number | null;
    externalId: string | null;
    username: string | null;
    firstName: string | null;
    lastName: string | null;
    publicMetadata: {

        role?: string;
    };
    privateMetadata: {
        role?: string; 
    };
    unsafeMetadata: {
        role?: string;
    };
    emailAddresses: { id: string; emailAddress: string; verified?: boolean | undefined; primary?: boolean | undefined; }[];
    phoneNumbers: { id: string; emailAddress?: string; verified?: boolean | undefined; primary?: boolean | undefined; }[];
    web3Wallets: { id: string, web3Wallet: string, verified?: boolean | undefined, primary?: boolean | undefined }[];
    externalAccounts: { id: string, externalAccount?: string, verified?: boolean | undefined, primary?: boolean | undefined }[];
    samlAccounts: { id: string, samlAccount?: string, verified?: boolean | undefined, primary?: boolean | undefined }[];
    lastActiveAt: number | null;
    createOrganizationEnabled: boolean;
}

export interface PropsUserClerkClient {
    user: User;
}

export interface PropsUsersClerkClient {
    users: User[];
}