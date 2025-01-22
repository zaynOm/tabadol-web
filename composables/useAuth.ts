export const useAuth = () => {
  const supabase = useSupabaseClient();
  const user = useSupabaseUser();

  const googleSignIn = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });

    if (error) {
      console.error(error);
    }
  };

  const facebookSignIn = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "facebook",
      options: {
        redirectTo: "http://localhost:3000/confirm",
      },
    });
    console.log(data, error);

    if (error) console.error(error);
  };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) console.error(error);
  };

  return { user, googleSignIn, facebookSignIn, signOut };
};
