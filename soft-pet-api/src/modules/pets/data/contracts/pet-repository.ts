import { Filter, Page } from "src/modules/chore/models";
import { CreatePetData, Pet, UpdatePetData, } from "../../domain/models";

export abstract class PetRepository {
    create: (pet: CreatePetData) => Promise<void>;
    getAllPets: (filter: Filter) => Promise<Page<Pet>>
    getPetById: (id: string) => Promise<Pet>
    updatePet: (id:string, updatePetData: UpdatePetData) => Promise<Pet>
    deletePet: (id: string) => Promise<void>
}