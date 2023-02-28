//adding background color
document.getElementById("background").addEventListener("click", function () {
  const friends = document.getElementsByClassName("friend");
  for (let friend of friends) {
    friend.style.backgroundColor = "lightGray";
  }
});

// making specific text center

document.getElementById("text-center").addEventListener("click", function () {
  const friend = document.getElementById("friend-3");
  friend.style.textAlign = "center";
});

//adding friends

document.getElementById("add-frined").addEventListener("click", function () {
  const frinedsContainer = document.getElementById("friends");
  const friend = document.createElement("div");
  friend.classList.add("friend");
  friend.innerHTML = `
  <h3 class="frined-name">New frined</h3>
            <p>Lorem ipsum dolor sit amet.</p>
  `;
  frinedsContainer.appendChild(friend);
});
