import personResolvers from './person'
import flightResolvers from './flight'

export default {
    Query: {
        ...personResolvers.Query,
        ...flightResolvers.Query,
    },
    Mutation: {
        ...personResolvers.Mutation,
        ...flightResolvers.Mutation,
    },
}
