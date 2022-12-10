//common variables
const apiUrl = `https://jsonplaceholder.typicode.com`;

//Dom Variables
const todoListing = document.querySelector("#todos-listing");
const postForm = document.querySelector("#create-post-form");
const postTitleInput = document.querySelector("#post_title");
const postBodyInput = document.querySelector("#post_body");

const editPostForm = document.querySelector("#edit-post-form");
const editPostTitle = document.querySelector("#edit_post_title");
const editPostBody = document.querySelector("#edit_post_body");
const hiddenPostIdForEdit = document.querySelector("#edit_post_id");

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

//Add Event Listener

postForm.addEventListener("submit", postFormHandler);

function postFormHandler(event) {
  event.preventDefault();
  const title = postTitleInput.value;
  const body = postBodyInput.value;

  //   const formBody = {
  //     title: title,
  //     body: body,
  //   };

  const formBody = {
    title,
    body,
  };

  fetch(`${apiUrl}/posts`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(formBody),
  })
    .then(function () {
      postTitleInput.value = "";
      postBodyInput.value = "";
      getPostsData();
      //close modal
      $("#create-todo").modal("hide");
    })
    .catch(function (error) {
      console.error(error);
    });
}

//event bubling event listener

todoListing.addEventListener("click", tbodyTodoListingHandler);
function tbodyTodoListingHandler(event) {
  event.preventDefault();
  const currentElement = event.target;

  if (currentElement.classList.contains("delete-btn")) {
    // console.log(event.target.dataset, "click on delete button");
    const allDataAttributesValues = event.target.dataset;
    if (confirm("Are You Sure")) {
      // currentElement.parentElement.parentElement.remove();
      fetch(`${apiUrl}/posts/${allDataAttributesValues.postId}`, {
        method: "DELETE",
      })
        .then(function (response) {
          getPostsData();
        })
        .catch(function (error) {
          console.error(error);
        });
    }
  }

  if (currentElement.classList.contains("edit-btn")) {
    const allDataAttributesValues = event.target.dataset;
    fetch(`${apiUrl}/posts/${allDataAttributesValues.postId}`)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        // console.log(data, "data");
        // console.log(editPostTitle, "editPostTitle");
        // console.log(edit_post_body, "edit_post_body");
        editPostTitle.value = data.title;
        editPostBody.value = data.body;
        hiddenPostIdForEdit.value = data.id;
      })
      .catch(function (error) {
        console.error(error);
      });
  }
}

editPostForm.addEventListener("submit", editPostFormHandler);

function editPostFormHandler(event) {
  event.preventDefault();

  const titleValue = editPostTitle.value;
  const bodyValue = editPostBody.value;
  const editPostId = hiddenPostIdForEdit.value;

  const formBody = {
    title: titleValue,
    body: bodyValue,
  };

  fetch(`${apiUrl}/posts/${editPostId}`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "PUT",
    body: JSON.stringify(formBody),
  })
    .then(function (response) {
      // console.log(response, "edit response");
      editPostBody.value = "";
      hiddenPostIdForEdit.value = "";
      $("#edit-post").modal("hide");
      getPostsData();
    })
    .catch(function (error) {
      console.error(error);
    });
}
