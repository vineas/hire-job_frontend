import axios from "axios";
// import swal from "sweetalert";
import Swal from "sweetalert2";

// Get
export const getSkill = (setSkill) => async (dispatch) => {
  try {
    axios
      .get(`https://hire-job-backend.vercel.app/pekerja/profile/skill`)
      .then(function (respose) {
        setSkill(respose.data.data);
      });

    dispatch({ type: "GET_ALL_SKILL", payload: "success" });
  } catch (error) {
    Swal.fire({
      text: error.respose.data.message,
      icon: "warning",
    });
  }
};


export const createSkill = (skill) => async (dispatch) => {
     
  try {
    const formData = new FormData();
    formData.append("skill_name", skill.skill_name);
    formData.append("pekerja_id", skill.pekerja_id);

    console.log(skill);
    axios.post(`https://hire-job-backend.vercel.app/skill`, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res);
        Swal.fire({
          title: "Skill added",
          text: `Succes`,
          icon: "success",
        });
        window.location.reload();
      });
    dispatch({ type: "CREATE_SKILL", payload: "success" });
  } catch (err) {
    Swal.fire({
      text: err.response.data.message,
      icon: "warning",
    });
  }
};