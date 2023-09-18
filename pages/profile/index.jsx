// import React, { useEffect, useState } from 'react'
// import ProfilePekerja from '../profilepekerja/[pekerja_id]'
// import ProfilePerekrut from '../profileperekrut'

// const Profile = () => {
//   const [isPekerja, setIsPekerja] = useState(false);

//   useEffect(() => {
//     const pekerjaId = localStorage.getItem('pekerja_id');
//     setIsPekerja(!!pekerjaId);
//   }, []);



//   return (
//     <>
//       {isPekerja ? <ProfilePekerja /> : <ProfilePerekrut />}
//     </>
//   )
// }

// export default Profile