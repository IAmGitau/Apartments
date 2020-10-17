import {Controller, Route, Middleware} from 'kasky';
import handle from '../middlewares/apartment-middleware'
import Apartment from "../models/apartment-model";

@Controller({
    baseRoute: "/api/v1/"
})

class ApartmentController {
    @Route.Get("apartments", {
        middlewares: [handle]
    })
    getAllApartments(req, res) {
        Apartment.find((err, objects) => {
            console.log({err, objects})
            res.success({objects})
        })
    }

    @Route.Post('apartments/new')
    async createApartment(req, res) {
        // Check if apartment in database
        let check = await Apartment.findOne({url: req.body.url})
        if (check !== null) return res.send(check)

        // Create a new Url instance
        let apartment = new Apartment(req.body)

        // Save it to database
        await apartment.save((err, apartment) => {
            if (err) return res.send({err})
            else return res.send(apartment)
        })
    }
}

export default ApartmentController;
