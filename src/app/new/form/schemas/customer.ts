import * as yup from "yup";

export type FormType = yup.InferType<typeof schema>;

const contactSchema = yup.object().shape({
  phone_number: yup.string().required(),
  phone_code: yup.string().required(),
  email: yup.string().email().required(),
  contact_name: yup.string().required(),
  department: yup.string().required(),
});

const addressSchema = yup.object().shape({
  neighborhood: yup.string().required(),
  city: yup.string().required(),
  state: yup.string().required(),
  country: yup.string().required(),
  postal_code: yup.string().required(),
  street: yup.string().required(),
  number: yup.string().required(),
  complement: yup.string().required(),
});

const legalPersonSchema = yup.object().shape({
  full_name: yup.string().required(),
  document_number: yup.string().required(),
  email: yup.string().email().required(),
});

export const schema = yup.object().shape({
  document: yup.string().min(1).required("O campo 'CNPJ' é obrigatório"),
  trade_name: yup.string().required("O campo 'Nome Fantasia' é obrigatório"),
  contacts: yup
    .array()
    .of(contactSchema)
    .min(1)
    .required("O campo 'Contato' é obrigatório"),
  address: addressSchema.required("O campo 'Endereço' é obrigatório"),
  legal_person: legalPersonSchema.required(
    "O campo 'Representante Legal' é obrigatório"
  ),
});
