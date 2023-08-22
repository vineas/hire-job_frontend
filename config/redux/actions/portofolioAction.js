import axios from "axios";
// import swal from "sweetalert";
import Swal from "sweetalert2";

// Get
export const getPortofolio = (setPortofolio) => async (dispatch) => {
  try {
    axios
      .get(`http://localhost:7474/portofolio`)
      .then(function (respose) {
        setPortofolio(respose.data.data);
      });

    dispatch({ type: "GET_ALL_PORTOFOLIO", payload: "success" });
  } catch (error) {
    Swal.fire({
      text: error.respose.data.message,
      icon: "warning",
    });
  }
};

export const getDetailPortofolio = (setPortofolio, id) => async (dispatch) => {
  try {
    axios.get(`http://localhost:7474/portofolio/${id}`).then((res) => {
      setPortofolio(res.data.data[0]);

      console.log(res.data.data[0]);

      localStorage.setItem("portofolio_id", res.data.data[0].portofolio_id);
      localStorage.setItem("pekerja_id", res.data.data[0].pekerja_id);
    });
    dispatch({ type: "GET_DETAIL_PORTOFOLIO", payload: "success" });
  } catch (err) {
    console.log(err);
  }
};

export const createPortofolio = (portofolio, portofolio_image) => async (dispatch) => {
  try {
    const formData = new FormData();
    formData.append("portofolio_name", portofolio.portofolio_name);
    formData.append("link_repository", portofolio.link_repository);

    if (portofolio_image) {
      formData.append("portofolio_image", portofolio_image);
    }
    formData.append("pekerja_id", portofolio.pekerja_id);

    console.log(portofolio);
    axios.post(`http://localhost:7474/portofolio`, formData)
      .then((res) => {
        console.log(res);
        Swal.fire({
          title: "Portofolio Berhasil ditambahkan",
          text: `New PORTOFOLIO has been added`,
          icon: "success",
        });

        window.location.reload();
      });
    dispatch({ type: "CREATE_PORTOFOLIO", payload: "success" });
  } catch (err) {
    Swal.fire({
      text: err.response.data.message,
      icon: "warning",
    });
  }
};
