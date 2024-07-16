import { db } from "./index";
import { InsertquotationRequest, quotationRequestTable, jobOfferTable, InsertjobOffer } from "./schema";

export async function createQuotationRequest(data: InsertquotationRequest) {
  await db.insert(quotationRequestTable).values(data);
}

export async function createJobOffer(data: InsertjobOffer) {
    await db.insert(jobOfferTable).values(data);
  }
  
