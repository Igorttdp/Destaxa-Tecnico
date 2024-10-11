import { NextResponse } from "next/server";
import { AxiosError } from "axios";

import { createSubscription, getSubscriptions } from "@/services/subscriptions";
import { NewSubscriptionData } from "@/app/new/reducer";

export async function GET() {
  try {
    const res = await getSubscriptions();
    return Response.json(res);
  } catch (err) {
    const error = err as AxiosError;
    return NextResponse.json(error, { status: Number(error.status) || 500 });
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const res = await createSubscription(data as NewSubscriptionData);
    return Response.json(res);
  } catch (err) {
    const error = err as AxiosError;
    return NextResponse.json(error, { status: Number(error.status) || 500 });
  }
}
