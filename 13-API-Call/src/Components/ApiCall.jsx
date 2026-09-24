import axios from "axios";
import { useState } from "react";
function ApiCall() {
    const [user, setUser] = useState([]);

    //get users
    const getUser = async () => {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        setUser(response.data);
        console.log(response.data);
    }

    //add users

    const addUser = async () => {
        const response = await axios.post("https://jsonplaceholder.typicode.com/users",
            {
                name: "vijay bhadade",
                email: "vijay1323@gmail.com",
                age: "21",
                address: "at post gumanam, pune",
                phone: "1236452444"
            }
        );

        setUser((previosUser) => { return [...previosUser, response.data] });

        console.log("New user added", response.data);
    }

    //deleting users 
    const deleteUser = async (id) => {
        const response = await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
        setUser((prev) => {
            return prev.filter((response) => response.id !== id);
        });
        console.log(`Delete user id = ${id} ${response.data}`);
    }
    //update users
    const UpdateUser = async (id) => {
        const response = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, {
            name: "vikash",
            email: "vikash@13123",
            phone: "3562484890"
        });

        setUser((prev) => {
            return prev.map((user) => {
                if (user.id === id) {
                    return response.data;
                }
                return user;
            });
        });
        console.log("UPdate user", response);

    }

    return (
        <div className="min-h-screen bg-slate-100 p-8">
            <h1 className="mb-3 text-3xl  font-bold text-slate-900">User Management</h1>
            <div className="mb-8 flex gap-4">
                <button onClick={getUser} className="rounded-xl bg-amber-500 px-5 py-3 font-semibold text-white shadow hover:bg-amber-600 transition cursor-pointer">Get users</button>
                <button onClick={addUser} className="rounded-xl bg-amber-500 px-5 py-3 font-semibold text-white shadow hover:bg-amber-600 transition cursor-pointer">Add users</button>

            </div>

            <div className="flex flex-wrap gap-5">
                {user.map((user) => {
                    return (
                        <div
                            key={user.id}
                            className="w-[280] rounded-2xl border border-amber-300 bg-amber-50 p-5 shadow-md transition hover:shadow-lg"
                        >
                            <div className="space-y-2">
                                <p><span className="font-bold">ID:</span> {user.id}</p>
                                <p><span className="font-bold">Name:</span> {user.name}</p>
                                <p><span className="font-bold">Email:</span> {user.email}</p>
                            </div>

                            <div className="mt-5 flex gap-3">
                                <button
                                    onClick={() => UpdateUser(user.id)}
                                    className="flex-1 rounded-xl bg-green-500 px-4 py-2 font-semibold text-white transition hover:bg-green-600 cursor-pointer"
                                >
                                    Update
                                </button>

                                <button
                                    onClick={() => deleteUser(user.id)}
                                    className="flex-1 rounded-xl bg-red-500 px-4 py-2 font-semibold text-white transition hover:bg-red-600 cursor-pointer"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    );
                })}

            </div>
        </div>
    );
}

export default ApiCall;