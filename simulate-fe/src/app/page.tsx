"use client"

import { useState } from "react";
import { fetchHelloWorld } from "@/app/actions/hello-world";
import { sendUser } from "./actions/form-user";

export default function Home() {
  const [data, setData] = useState(null);
  const [forms, setForms] = useState({
    user: "",
    email: ""
  });
  const [response, setResponse] = useState(null);

  const handleClick = async () => {
    const data = await fetchHelloWorld();
    setData(data);
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForms({
      ...forms,
      [e.target.name]: e.target.value
    });
  }

  const onSubmitUser = async () => {
    const data = await sendUser(forms.user, forms.email);
    console.log(data);
    setResponse(data);
  }

  return (
    <main className="w-full min-h-screen bg-white flex items-center justify-center flex-col gap-5 divide-y-2">
      <div className="flex flex-col items-center gap-5">
        <button className="bg-blue-500 text-white px-8 py-4 rounded-xl hover:bg-blue-600"
          onClick={handleClick}
        >
          Get Hello World from Api
        </button>
        {data && (
          <p className="mt-4 text-black">
            {JSON.stringify(data, null, 2)}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-5 pt-8">
        <div className="flex items-center gap-5">
          <div>
            <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900">First name</label>
            <input
              type="text"
              name="user"
              id="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="John"
              required
              onChange={onChange}
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">First name</label>
            <input
              type="email"
              name="email"
              id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="john@mail.com"
              required
              onChange={onChange}
            />
          </div>
        </div>

        <button className="bg-green-500 text-white px-8 py-4 rounded-xl hover:bg-green-600"
          type="submit"
          onClick={onSubmitUser}
        >
          Send Data
        </button>

        {response && (
          <div className="flex flex-col gap-5">
            <h5 className="text-black text-xl">
              Response from API:
            </h5>
            <p className="text-black">
              {JSON.stringify(response, null, 2)}
            </p>
          </div>
        )}
      </div>
    </main>
  )
}
