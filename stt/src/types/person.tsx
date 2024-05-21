export interface PersonContextType {
  value: boolean;
  setValue: React.Dispatch<React.SetStateAction<boolean>>;
  enableLog: boolean;
  setEnableLog: React.Dispatch<React.SetStateAction<boolean>>;
  toggleLog: () => void;
}

export interface UserInfo {
  name: string;
  title: string;
  followers: number;
  following: number;
  email: string;
  profilePictureUrl: string;
}
