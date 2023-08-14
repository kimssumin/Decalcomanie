import { ScentDto } from './PerfumeInfoType';

export interface FollowInfo {
  userId: string;
  picture: string;
  nickname: string;
  favorite: string[];
  isFollowing: boolean;
}

export interface userInfo {
  userId: string;
  accessToken: string;
  nickname: string;
  picture: string;
  age: number;
  gender: number;
}

export interface ProfileUpdateInfo {
  user: userInfo;
  favorities: ScentDto[];
  hates: ScentDto[];
  img: string;
}
