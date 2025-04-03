import {supabase} from '../supabaseClient'

const signin = async (email, password) => {
    try {
        let { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password
          })
        if (error){
            console.log(error)
        }
        else {
            console.log("Signed in")
        }
    }
    catch(err) {
        console.log(err);
    }


}

export default signin;