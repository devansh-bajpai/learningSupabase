import {supabase} from '../supabaseClient'

const getUser = async () => {
    try {
        const { data: { user } } = await supabase.auth.getUser()
        console.log(user);
    }
    catch(err) {
        console.log(err);
    }


}

export default getUser;