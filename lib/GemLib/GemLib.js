"use server";

const CMS =
  process.env.NEXT_PUBLIC_CMS_URL ||
  process.env.CMS_URL ||
  process.env.API_URL;

async function parseJsonResponse(res) {
  const data = await res.json();

  if (!res.ok) {
    return {
      status: false,
      msg: data?.error?.message || data?.msg || "Request failed.",
    };
  }

  return data;
}

export async function getPersonalityPage() {
  try {
    const res = await fetch(`${CMS}/api/personality-assessment/page`, {
      cache: "no-store",
    });

    return parseJsonResponse(res);
  } catch (error) {
    console.error("Error fetching personality page:", error);
    return { status: false, data: null };
  }
}

export async function addGemQuizUser(params) {
  try {
    const res = await fetch(`${CMS}/api/personality-assessment/inquiries`, {
      method: "POST",
      body: JSON.stringify(params),
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    return parseJsonResponse(res);
  } catch (error) {
    console.error("Error submitting personality inquiry:", error);
    return { status: false, msg: "Something went wrong!" };
  }
}

export async function getQuizQuestion() {
  try {
    const res = await fetch(`${CMS}/api/personality-assessment/questions`, {
      method: "GET",
      cache: "no-store",
    });

    return parseJsonResponse(res);
  } catch (error) {
    console.error("Error fetching quiz questions:", error);
    return { status: false, data: [] };
  }
}

export async function uploadGemQuizPdf(params) {
  try {
    const res = await fetch(`${CMS}/api/personality-assessment/results`, {
      method: "POST",
      body: JSON.stringify(params),
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    return parseJsonResponse(res);
  } catch (error) {
    console.error("Error saving quiz result:", error);
    return { status: false, msg: "Something went wrong!" };
  }
}
