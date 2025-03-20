import foods from '$lib/foods.json'
import type { PageServerLoad } from '../$types'

export const load:PageServerLoad = async ({params}) => {
    return foods[params.id]
}