import { AxiosError } from "axios";
import { NextResponse } from "next/server";

import { getAutomations } from "@/services/automations";

export async function GET() {
  try {
    const res = await getAutomations();
    return Response.json(res);
  } catch (err) {
    const error = err as AxiosError;
    return NextResponse.json(error, { status: Number(error.status) || 500 });
  }
}
