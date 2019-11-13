//Init GitHub
const github = new Github;
//Init UI
const ui = new UI;

//add event listener
const searchUser = document.getElementById('searchUser');

//eventListeners
searchUser.addEventListener('keyup', (e) => {
  //get text from input
  const userText = e.target.value;

  if (userText !== '') {
    //make http call
    github.getUser(userText)
    .then(data =>{
      if (data.profile.message === 'Not found') {
        //show alert
        ui.showAlert('User Not Found','alert alert-danger');

      } else {
        //show profile
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    })

  }else{
    //clear profile
    ui.clearprofile();
  }
});
