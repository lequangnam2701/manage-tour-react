// import { useState, useRef, useEffect } from "react";
// import { FaUserCircle, FaSignOutAlt } from "react-icons/fa";
// import { MdOutlineMail } from "react-icons/md";

// function UserMenu({ user, setUser }) {
//   const [open, setOpen] = useState(false);
//   const menuRef = useRef();

//   useEffect(() => {
//     const handleClick = (e) => {
//       if (!menuRef.current?.contains(e.target)) {
//         setOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClick);
//     return () => document.removeEventListener("mousedown", handleClick);
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("user");
//     window.location.href = "/login";
//   };

//   return (
//     <div className="relative" ref={menuRef}>
//       {/* Avatar */}
//       <div
//         onClick={() => setOpen(!open)}
//         className="cursor-pointer flex items-center gap-2"
//       >
//         {user?.avatar ? (
//           <img
//             src={user.avatar}
//             className="w-10 h-10 rounded-full object-cover"
//             alt="avatar"
//           />
//         ) : (
//           <FaUserCircle size={32} />
//         )}
//       </div>

//       {/* Dropdown */}
//       {open && (
//         <div className="absolute right-0 mt-4 w-72 bg-white rounded-xl shadow-xl border p-4">
//           {/* PROFILE HEADER */}
//           <div className="flex items-center gap-4 mb-4">
//             {user?.avatar ? (
//               <img
//                 src={user.avatar}
//                 className="w-16 h-16 rounded-full object-cover"
//                 alt="avatar"
//               />
//             ) : (
//               <FaUserCircle size={60} />
//             )}

//             <div>
//               <p className="font-semibold text-lg">{user?.name}</p>

//               <div className="flex items-center text-gray-500 text-sm gap-1">
//                 <MdOutlineMail />
//                 {user?.email}
//               </div>
//             </div>
//           </div>

//           <hr />

//           {/* MENU */}
//           <div className="mt-3 space-y-1">
//             <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100">
//               👤 My Profile
//             </button>

//             <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100">
//               📩 My Inbox
//             </button>

//             <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100">
//               ✔ My Tasks
//             </button>
//           </div>

//           <hr className="my-3" />

//           {/* LOGOUT */}
//           <button
//             onClick={handleLogout}
//             className="flex items-center gap-2 text-red-500 w-full px-3 py-2 rounded-lg hover:bg-gray-100"
//           >
//             <FaSignOutAlt />
//             Logout
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default UserMenu;
