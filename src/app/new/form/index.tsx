"use client";

import useNewSubscriptionProvider from "../context/useNewSubscriptionProvider";

const NewSubscriptionForm = () => {
  const {
    renderForm,
    previousStep,
    state: { step },
  } = useNewSubscriptionProvider();

  return (
    <div>
      {step === 1 && (
        <p className="mb-[45.88px] leading-[22.4px]">
          Escolha o plano de assinatura que atenda às suas necessidades e faça
          os ajustes necessários para personalizar a experiência do seu cliente.
        </p>
      )}
      {renderForm()}
      <div className="mt-[19px] flex gap-4">
        {step === 1 && (
          <button
            className="bg-transparent text-[#00B9B5] border border-[#00B9B5] font-bold leading-[22.4px] py-[10px] w-[131px] rounded hover:text-white hover:bg-[#00B9B5] transition-colors"
            onClick={previousStep}
          >
            Voltar
          </button>
        )}

        <button
          form="form"
          className="bg-[#00B9B5] text-white font-bold leading-[22.4px] py-[10px] w-[216px] rounded disabled:opacity-50 "
          disabled={step === 1}
        >
          Continuar
        </button>
      </div>
    </div>
  );
};

export default NewSubscriptionForm;
