import React, { useEffect, useState } from "react";
import "./MainApp.css";

function MainApp() {
  const [loader, setLoader] = useState(false);
  const [posts, setPosts] = useState([]);
  const [isEdit, setIsEdit] = useState(null);

  useEffect(() => {
    getPost();
  }, []);

  const getPost = async () => {
    setLoader(true);

    await fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error(error));

    setLoader(false);
  };

  const singleDeleteButtonHandler = (event, index) => {
    event.preventDefault();
    const tempPost = [...posts];
    tempPost.splice(index, 1);
    setPosts(tempPost);
  };

  const editButtonHandler = (event, index) => {
    event.preventDefault();
    setIsEdit(index);
    const currentIndex = isEdit;
    const tempPost = [...posts];
    tempPost[currentIndex] = postInput;
  };

  return (
    <div className="container main-app">
      <button className="btn btn-primary create-post">Create Post</button>
      {loader && (
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      )}
      <div class="modal fade" id="edit-post">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-hidden="true"
              >
                &times;
              </button>
              <h4 class="modal-title">Edit Post</h4>
            </div>
            <div class="modal-body">
              <form action="" method="POST" role="form" id="edit-post-form">
                <input type="hidden" name="post_id" id="edit_post_id" />
                <div class="form-group">
                  <label for="">Title</label>
                  <input
                    type="text"
                    class="form-control"
                    id="edit_post_title"
                    placeholder="Title"
                  />
                </div>

                <div class="form-group">
                  <label for="">Body</label>
                  <textarea
                    name=""
                    id="edit_post_body"
                    cols="30"
                    rows="10"
                    placeholder="Body"
                    class="form-control"
                  ></textarea>
                </div>

                <button type="submit" class="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Post Id</th>
            <th>Title</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {posts.length > 0 &&
            posts.map((singlePost, index) => {
              return (
                <tr key={index}>
                  <td>{singlePost.id}</td>
                  <td>{singlePost.title}</td>
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={(event) => editButtonHandler(event, index)}
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={(event) =>
                        singleDeleteButtonHandler(event, index)
                      }
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
export default MainApp;
