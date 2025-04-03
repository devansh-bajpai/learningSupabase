import {supabase} from '../supabaseClient'

const signup = async (email, password, confirmPassword) => {

    if (password === confirmPassword){
        try{
            let { data, error } = await supabase.auth.signUp({
                email: email,
                password: password
              })
              if(error) {
                console.log(error)
              }
              else{
                  console.log("Email sent!")
              }
        }
        catch(err) {
            console.log("error signing up:", err);
        }
    }
    else {
        console.log("passwords do not match")
    }


}

export default signup;