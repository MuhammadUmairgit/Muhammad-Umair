import React from "react";
import Display from "../../Components/Display/Display";
import SubmitButton from "../../Components/SubmitButton/SubmitButton";

function Home() {
  return (
    <div class="container">
      <h1>Posts</h1>
      <a class="btn btn-primary" data-toggle="modal" href="#create-todo">
        Create Todo
      </a>
      <div class="modal fade" id="create-todo">
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
              <h4 class="modal-title">Create Todo</h4>
            </div>
            <div class="modal-body">
              <form id="create-post-form">
                <div class="form-group">
                  <label for="">Title</label>
                  <input
                    type="text"
                    class="form-control"
                    id="post_title"
                    placeholder="Title"
                  />
                </div>

                <div class="form-group">
                  <label for="">Body</label>
                  <textarea
                    name=""
                    id="post_body"
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
              <form id="edit-post-form">
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

                <SubmitButton />
              </form>
            </div>
          </div>
        </div>
      </div>

      <table class="table table-hover">
        <thead>
          <tr>
            <th>Post Id</th>
            <th>User Id</th>
            <th>Title</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
      </table>
      <Display />
    </div>
  );
}

export default Home;
