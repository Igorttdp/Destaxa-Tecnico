import { getPlans } from "@/services/plan";
import { AxiosError } from "axios";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await getPlans();
    return Response.json(res);
  } catch (err) {
    const error = err as AxiosError;
    return NextResponse.json(
      { ...error },
      { status: Number(error.code) || 500 }
    );
  }
}
