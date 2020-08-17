import AV, { User} from "leancloud-storage";

AV.init({
  appId: "a7132GyWWG8LkecksE1vUPoV-gzGzoHsz",
  appKey: "mJ4tmFdH193RFitpM3mdbmpl",
  serverURL: "https://a7132gyw.lc-cn-n1-shared.com"
});

const Auth = {
  register(username, password) {
    let user = new User()
    user.setUsername(username)
    user.setPassword(password)
    return new Promise((resolve, reject) => {
      user.signUp().then(loginUser => {
        resolve(loginUser)
      }, error => {
        reject(error)
      })
    })
  },
  login(username, password) {
    return new Promise((resolve, reject) => {
      User.logIn(username, password).then(loginUser =>
          resolve(loginUser)
        , error => {
          reject(error)
        }
      );
    })
  },
  logout(){
    User.logOut()
  },
  getCurrentUser(){
    return User.current()
  }

}

export {Auth}