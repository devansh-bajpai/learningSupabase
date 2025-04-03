import {supabase} from '../supabaseClient'

const getUser = async () => {
    try {
        const { data: { user } } = await supabase.auth.getUser()
        return user.aud;
    }
    catch(err) {
        console.log(err);
    }


}

export default getUser;