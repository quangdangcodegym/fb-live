interface Account {
    id: number
    displayName: string
    version: 1
  }
   
  function welcome(user: Account) {
    console.log(user.id)
  }

  welcome({
    id: 1,
    displayName: "Welcome",
    version: 1
  })