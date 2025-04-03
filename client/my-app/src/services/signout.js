import {supabase} from '../supabaseClient'

const signout = async () => {
    try {
        let { error } = await supabase.auth.signOut()
        if (error){
            console.log(error)
        }
        else {
            console.log("Logged out")
        }
    }
    catch(err) {
        console.log(err);
    }


}

export default signout;