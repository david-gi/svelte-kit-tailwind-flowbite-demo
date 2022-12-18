import type { Pokemon } from '$src/models/pokemon'
import type { JsonWrapper } from '$src/models/common'
import type { PageLoad } from '../../../.svelte-kit/types/src/routes/pokemon/$types'

export const load: PageLoad = async ({ fetch }) => {
    let res = await fetch('api/pokemon/list')
    let data = <JsonWrapper<Pokemon[]>>await res.json()
    return data
}
