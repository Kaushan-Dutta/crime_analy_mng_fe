export type Account = {
    email: string;
    role: "ADMIN" | "USER" | "AGENCY";
    id: string;
};
export type AccountValue = {
    account: Account | null;
    setAccount: React.Dispatch<React.SetStateAction<Account | null>>;
};