const getData = async (user) => {
  const profileData = await fetch(`https://api.github.com/users/${user}`);
  const profile = await profileData.json();

  const {
    avatar_url: profileImg,
    name: developerName,
    html_url: githubLink,
    login: githubUserName,
    created_at: joinnedDate,
    bio: developerDescription,
    public_repos: reposNumber,
    followers: followersNumber,
    following: followingNumber,
    location: userLocation,
    blog: userBlog,
    twitter_username: userTwitter,
    company: userCompany,
    repos_url,
  } = profile;

  if (githubUserName) {
    /* Profile Info */
    document.querySelector(".profile-img").setAttribute("src", profileImg);
    document.querySelector(".developer-name").innerHTML = developerName;
    document.querySelector(".github-link").setAttribute("href", githubLink);
    document.querySelector(".github-link").innerHTML = `@${githubUserName}`;
    document.querySelector(".joinned-date").innerHTML = "Joined " + joinnedDate.slice(0, 10);

    /* Description */
    if (developerDescription) {
      document.querySelector(".developer-desciption").innerHTML = developerDescription;
    } else {
      document.querySelector(".developer-desciption").style.display = "none";
    }

    /* Stats */
    document.getElementById("reposCount").innerHTML = reposNumber;
    document.getElementById("followersCount").innerHTML = followersNumber;
    document.getElementById("followingCount").innerHTML = followingNumber;

    /* Social Info */

    const notAvaible = "Not Avaible";
    const unavaibleColor = "#777";
    const avaibleColor = "--font-primary";

    document.querySelector(".location").innerHTML = userLocation;
    if (!userLocation) {
      document.querySelector(".location").textContent = notAvaible;
      document.querySelector(".location").style.color = unavaibleColor;
    } else {
      document.querySelector(".location").style.color = avaibleColor;
    }

    document.querySelector(".blog").innerHTML = userBlog;
    if (!userBlog) {
      document.querySelector(".blog").textContent = notAvaible;
      document.querySelector(".blog").style.color = unavaibleColor;
    } else {
      document.querySelector(".blog").style.color = avaibleColor;
    }

    document.querySelector(".twitter").innerHTML = userTwitter;
    if (!userTwitter) {
      document.querySelector(".twitter").textContent = notAvaible;
      document.querySelector(".twitter").style.color = unavaibleColor;
    } else {
      document.querySelector(".twitter").style.color = avaibleColor;
    }

    document.querySelector(".company").innerHTML = userCompany;
    if (!userCompany) {
      document.querySelector(".company").textContent = notAvaible;
      document.querySelector(".company").style.color = unavaibleColor;
    } else {
      document.querySelector(".company").style.color = avaibleColor;
    }

    /** REPOS **/
    const reposData = await fetch(repos_url + "?sort=updated");
    const repos = await reposData.json();
    let repositoriesWrapper = document.querySelector(".repositories-wrapper");

    repositoriesWrapper.innerHTML = repos
      .map(({ name, html_url: repoUrl, description }) => {
        return description
          ? `
              <li>
                <a class="repo-name" href=${repoUrl}>${name}</a>
                <p class="repo-description">${description}</p>
              </li>
            `
          : `
              <li>
                <a class="repo-name" href=${repoUrl}>${name}</a>
              </li>
            `;
      })
      .splice(",")
      .join("");

    repositoriesWrapper.innerHTML = repositoriesList;
  }
};



const devFinder = (e)=> {
  e.preventDefault();
  
  const user = document.getElementById('searchInput').value;
  console.log(user);
  getData(user);
}
  
const searchButton = document.getElementById("searchButton");
searchButton.addEventListener("click", devFinder);