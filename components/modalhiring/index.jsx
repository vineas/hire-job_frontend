import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";

const ModalHiring = ({ pekerja_id, pekerja_name, pekerja_email }) => {
    const router = useRouter();
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    const [perekrut, setPerekrut] = useState([]);
    const [getid, setGetId] = useState(null);
    const [recruiter, getRecruiter] = useState([]);
    const [rec, setRec] = useState([]);

    useEffect(() => {
        if (router.isReady) {
          const setRecruiter = localStorage.getItem("perekrut_id");
          getRecruiter(setRecruiter);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [router.isReady]);

      useEffect(() => {
        if (router.isReady) {
          axios
            .get(`http://localhost:7474/perekrut/profile/${recruiter}`)
            .then((response) => {
              console.log(response.data.data[0].perekrut_perusahaan);
              console.log(response.data.data[0]);
              setRec(response.data.data[0].perekrut_perusahaan);
            })
            .catch((error) => console.log(error));
        //   console.log(router.query);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [router.isReady]);


    // const [data, setData] = useState({
    //     hiring_title: "",
    //     hiring_message: "",
    //     pekerja_id: pekerja_id,
    //     perekrut_id: getid,
    //     pekerja_name: pekerja_name,
    //     pekerja_email: pekerja_email,
    //     perekrut_perusahaan: perekrut,
    // });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    const [data, setData] = useState({
        hiring_title: "",
        hiring_message: "",
        pekerja_id: pekerja_id, // Inisialisasi pekerja_id dengan string kosong
        perekrut_id: "",
        pekerja_name: pekerja_name, // Inisialisasi pekerja_name dengan string kosong
        pekerja_email: pekerja_email, // Inisialisasi pekerja_email dengan string kosong
        perekrut_perusahaan: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const hiring = await axios.post(`http://localhost:7474/hiring`,
                data
            );
            const result = hiring.data.data;
            setShow(false);
            window.location.reload();
        } catch (err) {
            console.log(err.message);
        }
    };


    return (
        <>
            <div className="col-md-12" style={{ marginTop: 30 }}>
                {/* <Link href='#'> */}
                <button
                    type="button"
                    className="btn btn-primary"
                    style={{
                        color: "white",
                        width: "100%"
                    }}
                    onClick={handleShow}
                >
                    Hire
                </button>
                {/* </Link> */}
            </div>

            <Modal show={show}>
                <Modal.Header closeButton>
                    <Modal.Title>Hiring Worker</Modal.Title>
                </Modal.Header>
                <form onSubmit={handleSubmit}>
                    <Modal.Body>

                        <div>
                            <label htmlFor="">Title</label>
                            <div className="input-group mb-3">
                                <input
                                    className="form-control"
                                    placeholder="Frontend Developer"
                                    aria-label="title"
                                    aria-describedby="basic-addon1"
                                    type="text"
                                    name="hiring_title"
                                    value={data.hiring_title}
                                    onChange={handleChange}
                                    required
                                // required
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="">Message</label>
                            <div className="input-group mb-3">
                                <textarea
                                    required
                                    className="form-control"
                                    aria-label="With textarea"
                                    placeholder="Write message to worker"
                                    name="hiring_message"
                                    value={data.hiring_message}
                                    onChange={handleChange}
                                    style={{ height: '140px' }}
                                />
                                <input
                                    type="hidden"

                                    name="pekerja_id"
                                    value={(data.pekerja_id)}
                                    onChange={handleChange}
                                />
                                <input
                                    type="hidden"

                                    name="perekrut_id"
                                    value={(data.perekrut_id=recruiter)}
                                    onChange={handleChange}
                                />
                                <input
                                    type="hidden"

                                    name="pekerja_name"
                                    value={(data.pekerja_name)}
                                    onChange={handleChange}
                                />
                                <input
                                    type="hidden"

                                    name="pekerja_email"
                                    value={(data.pekerja_email)}
                                    onChange={handleChange}
                                />

                                <input
                                    type="hidden"
                                    name="perekrut_perusahaan"
                                    value={(data.perekrut_perusahaan=rec)}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Cancel
                        </Button>
                        <button type="button" onClick={handleSubmit} className="btn btn-warning" style={{ color: 'white' }}>
                            Hire worker
                        </button>
                    </Modal.Footer>
                </form>
            </Modal>


        </>
    )
}

export default ModalHiring