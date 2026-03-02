"use server";

export async function addContact(values) {
  try {
    const res = await fetch(
      `${process.env.CMS_URL}/api/contact-submissions`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: {
            name: values.name,
            companyName: values.company_name,
            email: values.email,
            position: values.position,
            phone: values.phone,
            message: values.message,
            submittedAt: new Date().toISOString(),
          },
        }),
      }
    );

    if (!res.ok) {
      const err = await res.text();
      throw new Error(err);
    }

    return { status: "success" };
  } catch (error) {
    console.error("Contact submit error:", error);
    return {
      status: "error",
      msg: "Failed to submit form",
    };
  }
}


export async function addEnquiry(params) {
  const body = { ...params };
  try {
    const res = await fetch(process.env.ENQUIRY_URL, {
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

export async function addNewsLetter(params) {
  try {
    const res = await fetch(`${process.env.API_URL}/api/add_news_letter_subscription`, {
      method: "POST",      
      body: JSON.stringify(params),
    });

    const response = await res.json();
    console.log(response, "response.lib")
    // Filter testimonials by type
    return response
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

export async function getCompanies(company_name_search) {
  //   const res = await fetch(
  //     "https://sandbox.surepass.app/api/v1/corporate/name-to-cin-list",
  //     {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${process.env.SUREPASS_TOKEN}`, // if needed
  //       },
  //       body: JSON.stringify({ company_name_search }),
  //     }
  //   );
  // console.log(res,"getCompanies")

  //   if (!res.ok) {
  //     throw new Error("Failed to fetch companies");
  //   }

  //   return res.json();
  const data = {
    "data": {
      "client_id": "corporate_name_list_ZMpcnpAnCYhkdhxpnnpX",
      "company_name_search": "thynkwise",
      "company_list": [
        {
          "cin_number": "AAO-8624",
          "company_name": "THINKWISER OUTSOURCING LLP",
          "company_type": "llp"
        },
        {
          "cin_number": "AAU-4909",
          "company_name": "THINKWISE CONSULTING LLP",
          "company_type": "llp"
        },
        {
          "cin_number": "AAY-6904",
          "company_name": "THINKWISE BUSINESS CONSULTING LLP",
          "company_type": "llp"
        },
        {
          "cin_number": "ABZ-6892",
          "company_name": "Thinqwise Wealth Managers LLP",
          "company_type": "llp"
        },
        {
          "cin_number": "ACJ-0452",
          "company_name": "THYNKLIFE CONSULTANCY LLP",
          "company_type": "llp"
        },
        {
          "cin_number": "U55206TG2016PTC109877",
          "company_name": "THINKWIDE HOSPITALITY PRIVATE LIMITED",
          "company_type": "pvt_ltd"
        },
        {
          "cin_number": "U62099PN2024PTC230780",
          "company_name": "THYNKWISE ADVISORS PRIVATE LIMITED",
          "company_type": "pvt_ltd"
        },
        {
          "cin_number": "U72900TG2021PTC147997",
          "company_name": "THYNKWISE INFOTECH PRIVATE LIMITED",
          "company_type": "pvt_ltd"
        },
        {
          "cin_number": "U72900TG2022PTC168099",
          "company_name": "THINKWISE INFOTECH PRIVATE LIMITED",
          "company_type": "pvt_ltd"
        },
        {
          "cin_number": "U72900TN2018PTC123262",
          "company_name": "THINKWISE TECHNOLOGIES PRIVATE LIMITED",
          "company_type": "pvt_ltd"
        }
      ]
    },
    "status_code": 200,
    "success": true,
    "message": null,
    "message_code": "success"
  }
  return data;
}