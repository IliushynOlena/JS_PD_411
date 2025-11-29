const gitHubUsers = "https://api.github.com/users";
//const privatAPI = "https://api.privatbank.ua/p24api/pubinfo?exchange&coursid=5";

async function  showGitHubUsers()
{
    const response = await fetch(gitHubUsers);
    //const response = await fetch(privatAPI);
    const json = await response.json();
    console.log(json);
    console.log(`Status : ${response.status}`);
    console.log(json[0].login);
}

//showGitHubUsers();


async function showGitHubUserAvatar(login) {
    const response = await fetch(gitHubUsers + '/' + login);
    const result = await response.json();
    console.log(result.avatar_url)  ;
    const avatarImg = document.getElementById('avatar-img');
    avatarImg.src = result.avatar_url;

    

}
//showGitHubUserAvatar("IliushynOlena")
//showGitHubUserAvatar("MaksymPlichuk")
//showGitHubUserAvatar("Markerkun")
//showGitHubUserAvatar("dmitrovojtovic23-lab")
showGitHubUserAvatar("OlexandrOnokalo")