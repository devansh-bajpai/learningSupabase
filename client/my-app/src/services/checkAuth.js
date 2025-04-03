import {supabase} from '../supabaseClient'

const checkAuth = async () => {    
    try{
        const { data: session } = await supabase.auth.getSession()
            if (session.session) {
                return true
            }
            else {
                return false
            }
    }

    catch(err) {
        console.log(err)
    }
}

export default checkAuth;