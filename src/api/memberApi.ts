import { Member } from "models";
import axiosClient from "./axiosClient";

const memberApi = {
  getAll(): Promise<Member[]> {
    const url = "/members";
    return axiosClient.get(url);
  },

  getById(id: string): Promise<Member> {
    const url = `/members/${id}`;
    return axiosClient.get(url);
  },

  add(data: Member): Promise<Member> {
    const url = "/members";
    return axiosClient.post(url, data);
  },

  update(data: Partial<Member>): Promise<Member> {
    const url = `/members/${data.id}`;
    return axiosClient.patch(url, data);
  },

  remove(id: string): Promise<any> {
    const url = `/members/${id}`;
    return axiosClient.delete(url);
  },
};

export default memberApi;
