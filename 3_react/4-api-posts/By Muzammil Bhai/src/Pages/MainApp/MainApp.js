import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Posts from "../../Components/Posts/Posts";
import Spinner from "../../Components/Spinner/Spinner";
import { baseUrl } from "../../constant";
import "./MainApp.css";

function MainApp() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    //Runs only on the first render
    getPosts();
  }, []);

  const getPosts = async () => {
    setLoading(true);

    await fetch(`${baseUrl}/posts`)
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error(err));

    setLoading(false);
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

  const deletePostHandler = async (event, index) => {
    event.preventDefault();

    const confirmBtnResponse = await confirmationModal();

    if (confirmBtnResponse) {
      setLoading(true);
      await fetch(`${baseUrl}/posts/${index}`, {
        method: "DELETE",
      })
        .then(async () => {
          await getPosts();
        })
        .catch((error) => console.log(error));

      setLoading(false);

      Swal.fire("Deleted Successfully!", "", "success");
    } else {
      Swal.fire("Not Deleted Successfully!", "", "info");
    }
  };

  return (
    <div className="container main-app">
      <button className="btn btn-primary create-post">Create Post</button>

      {loading && <Spinner />}

      <Posts posts={posts} deletePostHandler={deletePostHandler} />
    </div>
  );
}

export default MainApp;
