"use client";

import { FormEvent, useCallback, useEffect, useState } from "react";

import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

import { textFieldSx } from "@/utils/textFieldStyles";
import useNewSubscriptionProvider from "../../context/useNewSubscriptionProvider";
import usePlan from "./hook/usePlan";
import PlanItems from "./items";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import Loader from "@/components/loader";

const Plan = () => {
  const [isSnackbarErrorOpen, setIsSnackbarErrorOpen] = useState(false);
  const [isSnackbarSuccessOpen, setIsSnackbarSuccessOpen] = useState(false);

  const toggleSnackbarError = () =>
    setIsSnackbarErrorOpen(!isSnackbarErrorOpen);

  const toggleSnackbarSuccess = () =>
    setIsSnackbarSuccessOpen(!isSnackbarSuccessOpen);

  const {
    setPlanId,
    setAutomationId,
    setProducts,
    state: { data },
  } = useNewSubscriptionProvider();

  const {
    data: plansData,
    automationsData,
    createSubscriptionMutate,
    isPending,
  } = usePlan({
    toggleSnackbarError,
    toggleSnackbarSuccess,
  });

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
  }, [
    plansData,
    automationsData,
    data.plan_id,
    data.products.length,
    data.automation_id,
    setPlanId,
    setProducts,
    setAutomationId,
  ]);

  return (
    <>
      <Loader
        className={
          isPending
            ? "flex fixed top-0 left-0 bg-black/20 z-50 [&>span]:font-bold"
            : "hidden"
        }
      />

      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={isSnackbarErrorOpen}
        onClose={toggleSnackbarError}
        autoHideDuration={6000}
      >
        <Alert
          onClose={toggleSnackbarError}
          severity="error"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Ocorreu um erro. Tente novamente.
        </Alert>
      </Snackbar>

      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={isSnackbarSuccessOpen}
        onClose={toggleSnackbarSuccess}
        autoHideDuration={6000}
      >
        <Alert
          onClose={toggleSnackbarSuccess}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Assinatura criada com sucesso! Redirecionando para tela principal...
        </Alert>
      </Snackbar>

      <form id="form" onSubmit={handleSubmit}>
        {renderAccordion()}

        <p className="leading-[22.4px] mt-8 mb-6">
          Selecione a automação desejada para este cliente:
        </p>

        {renderTextField()}
      </form>
    </>
  );
};

export default Plan;
