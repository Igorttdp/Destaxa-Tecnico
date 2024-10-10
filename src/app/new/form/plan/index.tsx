"use client";

import { useCallback } from "react";

import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

import { textFieldSx } from "@/utils/textFieldStyles";
import usePlan from "./hook/usePlan";
import PlanItems from "./items";

const Plan = () => {
  const { data, automationsData } = usePlan();

  const renderAccordion = useCallback(() => {
    if (data.length === 0) {
      return (
        <div className="w-full h-[431px] animate-pulse bg-neutral-100 rounded" />
      );
    }

    return data.map((plan) => <PlanItems key={plan.id} plan={plan} />);
  }, [data]);

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

  return (
    <div>
      {renderAccordion()}

      <p className="leading-[22.4px] mt-8 mb-6">
        Selecione a automação desejada para este cliente:
      </p>

      {renderTextField()}
    </div>
  );
};

export default Plan;
