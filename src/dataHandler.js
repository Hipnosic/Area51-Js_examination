import React, {useState, useEffect} from "react";

const GetData = async ({ type }) => {
    const response = await fetch(`https://swapi.dev/api/${type}/?format=json`)
    if (!response.ok) throw new Error(response.status)
    return response.json()
}

export default GetData;