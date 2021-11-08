import animalApi from "../index";
describe('animal-api',() => {
    it('gets dogs',() => {
        return animalApi.getDog().then((animal) => {
            expect(animal.imageSrc).toBeUndefined()
            expect(animal.text).toEqual('DOG')
        })
    })
})