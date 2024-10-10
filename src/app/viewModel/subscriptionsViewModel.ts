import { SubscriptionContent } from "@/services/subscriptions";

class SubscriptionsViewModel {
  constructor(data: SubscriptionContent) {
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
}

export default SubscriptionsViewModel;
