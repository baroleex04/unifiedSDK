import { getContract } from "thirdweb";
import {client} from "./client";
import { chainById } from "./chains";

export const contract = getContract({
    client: client,
    address: "0xF47fdeca48cD482D8c3D4702019b4e6802D618d5", 
    chain: chainById, 
})