import { CartProduct, Product } from "@/interface"
import { FormInputsCheckout } from "./form.input.checkout"

export interface PaymentCart {
    checkoutAddress: FormInputsCheckout
    cart: CartProduct[]
    products: Product[]
}