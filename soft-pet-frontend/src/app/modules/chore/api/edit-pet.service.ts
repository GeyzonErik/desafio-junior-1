import axios from "axios";
import { PetData } from "../models/create-pet";

const base_Url = 'http://localhost:3000/pets';

export const editPet = async (petId: string, pet: PetData) => {
    try {
        await axios.patch(base_Url, pet)
    } catch(error) {
        console.log('Create Pet Fail:', error);
    }
}