//common variables
const apiUrl = `https://jsonplaceholder.typicode.com`;

//Dom Variables
const todoListing = document.querySelector("#todos-listing");
const postForm = document.querySelector("create-post-form");
const postTitleInput = document.querySelector("#post_title");
const postBodyInput = document.querySelector("#post_body");

//Get Records From Api when js file is called
const getPostsData = async function () {
  await fetch(`${apiUrl}/posts`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // console.log(data, "data");
      if (data?.length > 0) {
        let output = "";
        data.forEach(function (singlePost) {
          output += `<tr>
                    <td id="post_id">${singlePost.id}</td>
                    <td>${singlePost.userId}</td>
                    <td>${singlePost.title}</td>
                    <td>
                      <a class="btn btn-primary edit-btn" data-post-id="${singlePost.id}"  data-toggle="modal" href="#edit-post">Edit</a>
                    </td>
                    <td><a href="#" class="btn btn-danger delete-btn" data-post-id="${singlePost.id}">Delete</a></td>
                </tr>`;
        });

        todoListing.innerHTML = output;
      }
    })
    .catch(function (error) {
      console.error(error);
    });
};
getPostsData();

postForm.addEventListener("submit", postFormHandler);

function postFormHandler (event) {
    event.preventDefault();
    const title = postTitleInput.value;
    const body = postBodyInput.value;

    const formBody = {
        title: title,
        body: body,
    };
    formBody.append(todoListing);
    // formBody.append(`${apiUrl}/posts`);
    // console.log(todoListing, "todoListing"));
}