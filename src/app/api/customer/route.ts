import { AxiosError } from "axios";
import { NextRequest, NextResponse } from "next/server";

import { FormType as CreateCustomerData } from "@/app/new/form/schemas/customer";
import { createCustomer, getCustomer } from "@/services/customer";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get("customer_id");

    const res = await getCustomer(query ?? "");
    return Response.json(res);
  } catch (err) {
    const error = err as AxiosError;
    return NextResponse.json(error, { status: Number(error.status) || 500 });
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const res = await createCustomer(data as CreateCustomerData);
    return Response.json(res);
  } catch (err) {
    const error = err as AxiosError;
    return NextResponse.json(error, { status: Number(error.status) || 500 });
  }
}
