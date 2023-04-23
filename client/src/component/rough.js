function handleSubmit(e) {
    // API call
    e.preventDefault();

    Axios.post(`${BASE_URL}/user/login`, {
      userEmail: userEmail,
      userPassword: userPassword,
    })
      //email/password verification
      .then((response) => {
        if (response.data.length) {
          // save information in localstorage before moving to home page
          localStorage.setItem(
            "userInfo",
            JSON.stringify({
              userEmail: userEmail,
              userName: response.data[0].userName,
              fullName: response.data[0].fullName,
              userId: response.data[0]._id,
            })
          );

          // navigating to home page
          navigate("/");
        } else {
          alert("Email/Password is incorrect");
        }
      })
      .catch((err) => {
        alert("We're sorry, something went wrong");
        console.log(err);
      });
  }








//   Function for get the localstorage data

const localData = JSON.parse(localStorage.getItem("userInfo"));