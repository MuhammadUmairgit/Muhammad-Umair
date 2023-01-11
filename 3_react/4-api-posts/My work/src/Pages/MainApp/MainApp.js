import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Posts from "../../Components/Posts/Posts";
import Spinner from "../../Components/Spinner/Spinner";
import { baseUrl } from "../../Constant/UrlConstant";
import "./MainApp.css";

function MainApp() {
  const [posts, setPosts] = useState([]);
  const [loader, setLoader] = useState(false);
  const [isEdit, setIsEdit] = useState(null);

  useEffect(() => {
    getPost();
  }, []);

  const getPost = async () => {
    setLoader(true);

    await fetch(`${baseUrl}/posts`)
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error(error));

    setLoader(false);
  };

  const deleteButtonHandler = async (event, index) => {
    event.preventDefault();

    const confirmBtnResponse = await confirmationModal();

    if (confirmBtnResponse) {
      setLoader(true);
      await fetch(`${baseUrl}/posts/${index}`, {
        method: "DELETE",
      })
        .then(async () => {
          await getPost();
        })
        .catch((error) => console.log(error));
      setLoader(false);
      Swal.fire("Deleted Successfully", "", "success");
    } else {
      Swal.fire("Not Deleted Successfully", "", "error");
    }
  };

  const confirmationModal = async () => {
    const response = await Swal.fire({
      title: "Do you want to delete it?",
      showDenyButton: true,
      confirmButtonText: "Yes",
      denyButtonText: "No",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        return true;
      } else if (result.isDenied) {
        return false;
      }
    });

    return response;
  };

  return (
    <div className="container main-app">
      <button className="btn btn-primary create-post">Create Post</button>
      {loader && <Spinner />}
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
      <Posts posts={posts} deleteButtonHandler={deleteButtonHandler} />
    </div>
  );
}
export default MainApp;
