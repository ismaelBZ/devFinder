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
    location,
    blog,
    twitter_username: twitter,
    company,
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
    document.querySelector(".location").innerHTML = location;
    if (location) {
      document.querySelector(".location-wrapper").style.display = "flex";
    } else {
      document.querySelector(".location-wrapper").style.display = "none";
    }

    document.querySelector(".blog").innerHTML = blog;
    if (blog) {
      document.querySelector(".blog-wrapper").style.display = "flex";
      console.log(blog);
    } else {
      document.querySelector(".blog-wrapper").style.display = "none";
    }

    document.querySelector(".twitter").innerHTML = twitter;
    if (twitter) {
      document.querySelector(".twitter-wrapper").style.display = "flex";
    } else {
      document.querySelector(".twitter-wrapper").style.display = "none";
    }

    document.querySelector(".company").innerHTML = company;
    if (company) {
      document.querySelector(".company-wrapper").style.display = "flex";
    } else {
      document.querySelector(".company-wrapper").style.display = "none";
    }

    /** REPOS **/
    const reposData = await fetch(repos_url+"?sort=updated");
    const repos = await reposData.json();
    let repositoriesWrapper = document.querySelector('.repositories-wrapper');

    repositoriesWrapper.innerHTML= 
      (repos.map(({
        name,
        html_url: repoUrl,
        description,
        }) => {
          return description ? (
            `
              <li>
                <a class="repo-name" href=${repoUrl}>${name}</a>
                <p class="repo-description">${description}</p>
              </li>
            `
          ) : (
            `
              <li>
                <a class="repo-name" href=${repoUrl}>${name}</a>
              </li>
            `
          );
        }
      )).splice(",").join("");

    repositoriesWrapper.innerHTML = repositoriesList

  }
};

getData("ismaelBZ");
