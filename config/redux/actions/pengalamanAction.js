import axios from "axios";
// import swal from "sweetalert";
import Swal from "sweetalert2";

// Get
export const getPengalaman = (setPengalaman) => async (dispatch) => {
  try {
    axios
      .get(`http://shy-cyan-codfish-wear.cyclic.cloud/pengalaman`)
      .then(function (respose) {
        setPengalaman(respose.data.data);
      });

    dispatch({ type: "GET_ALL_PENGALAMAN", payload: "success" });
  } catch (error) {
    Swal.fire({
      text: error.respose.data.message,
      icon: "warning",
    });
  }
};

export const getDetailPengalaman = (setPengalaman, id) => async (dispatch) => {
  try {
    axios.get(`http://shy-cyan-codfish-wear.cyclic.cloud/pengalaman/${id}`).then((res) => {
      setPengalaman(res.data.data[0]);

      console.log(res.data.data[0]);

      localStorage.setItem("pengalaman_id", res.data.data[0].pengalaman_id);
      localStorage.setItem("pekerja_id", res.data.data[0].pekerja_id);
    });
    dispatch({ type: "GET_DETAIL_PENGALAMAN", payload: "success" });
  } catch (err) {
    console.log(err);
  }
};

export const createPengalaman = (pengalaman) => async (dispatch) => {
  try {
    const formData = new FormData();
    formData.append("posisi", pengalaman.posisi);
    formData.append("nama_perusahaan", pengalaman.nama_perusahaan);
    formData.append("dari", pengalaman.dari);
    formData.append("sampai", pengalaman.sampai);
    formData.append("deskripsi", pengalaman.deskripsi);
    formData.append("pekerja_id", pengalaman.pekerja_id);

    console.log(pengalaman);
    axios.post(`http://shy-cyan-codfish-wear.cyclic.cloud/pengalaman`, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res);
        Swal.fire({
          title: "Pengalaman Berhasil ditambahkan",
          text: `New PENGALAMAN have been added`,
          icon: "success",
        });

        window.location.reload();
      });
    dispatch({ type: "CREATE_PENGALAMAN", payload: "success" });
  } catch (err) {
    Swal.fire({
      text: err.response.data.message,
      icon: "warning",
    });
  }
};

