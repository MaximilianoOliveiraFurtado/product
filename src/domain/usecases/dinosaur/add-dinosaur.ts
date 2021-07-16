import { DinosaurModel } from '@/domain/models/dinosaur'

export type AddDinosaurParams = Omit<DinosaurModel, 'id'>

export interface AddDinosaur {
  add: (data: AddDinosaurParams) => Promise<void>
}
