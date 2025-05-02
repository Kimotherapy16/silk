const signupForm = document.getElementById("signup-form");

signupForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
    email,
    password,
  });

  if (signUpError) {
    alert("Sign up failed: " + signUpError.message);
    return;
  }

  const user = signUpData.user;

  const { error: insertError } = await supabase.from("users").insert([
    {
      id: user.id,
      email: user.email,
      role: "buyer", // default role
    },
  ]);

  if (insertError) {
    alert("Failed to save user: " + insertError.message);
    return;
  }

  alert("Sign up successful! Please verify your email.");
  window.location.href = "index.html";
});
