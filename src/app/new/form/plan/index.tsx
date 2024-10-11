"use client";

import { FormEvent, FormEventHandler, useCallback, useEffect } from "react";

import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

import { textFieldSx } from "@/utils/textFieldStyles";
import usePlan from "./hook/usePlan";
import PlanItems from "./items";
import useNewSubscriptionProvider from "../../context/useNewSubscriptionProvider";
import useNewSubscriptionForm from "../hook/useNewSubscriptionForm";

const Plan = () => {
  const {
    setPlanId,
    setAutomationId,
    setProducts,
    state: { data },
  } = useNewSubscriptionProvider();

  const { data: plansData, automationsData } = usePlan();
  
  const { createSubscriptionMutate } = useNewSubscriptionForm();

  const renderAccordion = useCallback(() => {
    if (plansData.length === 0) {
      return (
        <div className="w-full h-[431px] animate-pulse bg-neutral-100 rounded" />
      );
    }

    return plansData.map((plan) => <PlanItems key={plan.id} plan={plan} />);
  }, [plansData]);

  const renderTextField = useCallback(() => {
    if (automationsData.length === 0) {
      return (
        <div className="w-[509.08px] h-[47px] animate-pulse bg-neutral-100 rounded" />
      );
    }

    return (
      <TextField
        label="Automação*"
        className="w-[509.08px]"
        select
        sx={textFieldSx}
        defaultValue={automationsData[0].id}
      >
        {automationsData.map((automation) => (
          <MenuItem key={automation.id} value={automation.id}>
            {automation.app_name}
          </MenuItem>
        ))}
      </TextField>
    );
  }, [automationsData]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await createSubscriptionMutate(data);
  };

  useEffect(() => {
    if (!!plansData.length && !data.plan_id && !data.products.length) {
      setPlanId(plansData[0].id);
      setProducts(plansData[0].products);
    }

    if (!!automationsData.length && !data.automation_id) {
      setAutomationId(automationsData[0].id);
    }
  }, [plansData, automationsData]);

  return (
    <form id="form" onSubmit={handleSubmit}>
      {renderAccordion()}

      <p className="leading-[22.4px] mt-8 mb-6">
        Selecione a automação desejada para este cliente:
      </p>

      {renderTextField()}
    </form>
  );
};

export default Plan;
