import CountryRepository from "../repositors/CountryRepository.js"

// REGRAS DE NEGOCIOS.
class CountriesController {

    // Mostra tudo
    async index(req, resp) {
        const response = await CountryRepository.findAll()
        resp.json(response)
    } 

    // Mostra um recurso especifico
    async show(req, resp) {
        const id = req.params.id
        const response = await CountryRepository.findById(id)
        resp.json(response)
    }
    
    // Salva o recurso 
    async store(req, resp) {
        const country_data = req.body
        const response = await CountryRepository.create(country_data)
        resp.json(response)
    }

    // Atualiza um recurso
    async update(req, resp) {
        const id = req.params.id
        const country_data = req.body
        const response = await CountryRepository.update(country_data, id)
        resp.json(response)
    }
    // Deleta um recurso
    async delete(req, resp) {
        const id = req.params.id
        const response = await CountryRepository.delete(id)
        resp.json(response)
    }
}

// Utilizando padrão Singleton
export default new CountriesController()
