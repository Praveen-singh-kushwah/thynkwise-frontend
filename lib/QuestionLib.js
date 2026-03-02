"use server";
export async function getQuestion(params) {
  // const body = { ...params };
  try {
    const res = await fetch(process.env.API_URL + "/get-question", {
      method: "post",
      body: JSON.stringify(body),
      next: { revalidate: 10 }
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return { status: false, msg: "Something went wrong!" };
  }
}

export async function AssessmentRegistration(params) {
  const body = { ...params };
  // console.log(body, "register");
  try {
    const res = await fetch(process.env.API_URL + "/registration", {
      method: "post",
      body: JSON.stringify(body),
      next: { revalidate: 10 }
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return { status: false, msg: "Something went wrong!" };
  }
}

export async function getCustomerQuestion(params) {
  const body = { ...params };
  // console.log(body,"get-customer-question")
  try {
    const res = await fetch(process.env.API_URL + "/get-customer-question", {
      method: "post",
      body: JSON.stringify(body),
      next: { revalidate: 10 }
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return { status: false, msg: "Something went wrong!" };
  }
}

export async function addCustomerQuestion(params) {
  const body = params;
  // console.log(body,"add-customer");
  try {
    const res = await fetch(process.env.API_URL + "/add-customer-question", {
      method: "post",
      body: JSON.stringify(body),
      next: { revalidate: 10 }
    });
    const response = await res.json();
    console.log(response);
    return response;
  } catch (error) {
    console.error("Error fetching data:", error);
    return;
  }
}

export async function getScore(params) {
  const body = { ...params };
  console.log(body,"get-score")
  try {
    const res = await fetch(process.env.API_URL + "/get-score", {
      method: "post",
      body: JSON.stringify(body),
      next: { revalidate: 10 }
    });
    const data = await res.json();
    // console.log(data,"data")
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return { status: false, msg: "Something went wrong!" };
  }
}
