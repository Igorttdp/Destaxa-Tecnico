import { SubscriptionsData } from "../utils/getData";

class SubscriptionsViewModel {
  constructor(data: SubscriptionsData) {
    this.data = data;
  }

  private data;

  public getSubscriptionDate() {
    return this.data.subscription_start_date.replaceAll("-", "/");
  }

  public getCNPJ() {
    const cnpjNumeros = this.data.company_document.replace(/\D/g, "");

    return `${cnpjNumeros.slice(0, 2)}.${cnpjNumeros.slice(
      2,
      5
    )}.${cnpjNumeros.slice(5, 8)}/${cnpjNumeros.slice(
      8,
      12
    )}-${cnpjNumeros.slice(12)}`;
  }

  public getContactName() {
    if (!this.data.contact.length) {
      return "--";
    }

    return this.data.contact[0].contact_name;
  }

  public getContactEmail() {
    if (!this.data.contact.length) {
      return "--";
    }

    return this.data.contact[0].email;
  }
}

export default SubscriptionsViewModel;
