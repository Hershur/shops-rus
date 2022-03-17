import { getCutomerInvoiceService } from "../services/invoice.services"

export const getCutomerInvoice = async (req, res)=> {
    const { id } = req.params;
    const invoice = await getCutomerInvoiceService(id, req.body);
    
    if(invoice.success){
        return res.status(200).json(invoice);
    }

    return res.status(500).json(invoice);
}