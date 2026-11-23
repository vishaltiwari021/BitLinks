"use client";
import React, { useState } from "react";
import Link from "next/link";

const shorten = () => {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [generated, setGenerated] = useState(false);

  const generate = () => {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let raw = JSON.stringify({
      url: url,
      shortUrl: shortUrl,
    });

    let requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shortUrl}`)
        setUrl("")
        setShortUrl("")
        alert(result.message)
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <div className="mx-auto max-w-3xl bg-purple-100 my-16 p-8 rounded-lg shadow-md flex flex-col gap-4">
      <h1 className="font-bold text-2xl text-purple-900">
        Generate your short URLs
      </h1>
      <div className="flex flex-col gap-3">
        <input
          className="p-4 bg-white rounded-md border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-700"
          value={url}
          type="text"
          placeholder="Enter your URL here"
          onChange={(e) => {
            setUrl(e.target.value);
          }}
        />
        <input
          className="p-4 bg-white rounded-md border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-700"
          value={shortUrl}
          type="text"
          placeholder="Enter your preferred short URL text"
          onChange={(e) => {
            setShortUrl(e.target.value);
          }}
        />
        <button
          onClick={generate}
          className="cursor-pointer bg-purple-500 hover:bg-purple-600 active:scale-[0.99] transition-all rounded-lg shadow-lg p-3 font-bold text-white mt-1"
        >
          Generate
        </button>
      </div>
      {generated && <>
          <span className="font-medium text-lg">Your Link </span><code><Link href={generated} target="_blank" >{generated}</Link></code>
        </>}
    </div>
  );
};

export default shorten;
