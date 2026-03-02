"use server";

import Search from "@/components/Common/Search";

export async function addResourceUser(params) {
  try {
    const res = await fetch(`${process.env.API_URL}/add-resource-user`, {
      method: "POST",
      
      body: JSON.stringify(params),
      next: { revalidate: 10 }
    });
    const response = await res.json();
    // console.log(response, "response.lib");
    return response;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

export async function getResourceUser(params) {
  try {
    const res = await fetch(process.env.API_URL + "/get-resource-user", {
      method: "post",
      body: JSON.stringify(params),
      next: { revalidate: 10 },
    });
    const response = await res.json();
    return response;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

export async function getResources(params) {
  const body ={
    start:params?.start,
    limit:params?.limit,
    Search:params?.Search,
  }
  try {
    const res = await fetch(process.env.API_URL + "/get-resources", {
      method: "post",
      body: JSON.stringify(body),
      next: { revalidate: 10 }
      
    });
    const response = await res.json();
    // console.log(response,"blogs")
    return response;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}
