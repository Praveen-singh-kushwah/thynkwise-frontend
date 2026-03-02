"use server";
export async function addGemQuizUser(params) {
  const body = { ...params };
  console.log(JSON.stringify(body), "addgemuser");
  try {
    const res = await fetch(process.env.API_URL + "/add-quiz-user", {
      method: "post",
      body: JSON.stringify(body),
      cache: "no-store",
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return { status: false, msg: "Something went wrong!" };
  }
}

export async function getQuizQuestion(params) {
  try {
    const res = await fetch(process.env.API_URL + "/get-quiz-questions", {
      method: "post",
      body: JSON.stringify(params),
      
    });
    const response = await res.json();
    // console.log(response,"blogs")
    return response;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

export async function uploadGemQuizPdf(params) {
  try {
    console.log(JSON.stringify(params), "data");
    const res = await fetch(process.env.API_URL + "/get-gem-quiz", {
      method: "POST",
      body: JSON.stringify(params),
      cache: "no-store",
    });

    const response = await res.json();
    console.log(response, "respppp");
    return response;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}
