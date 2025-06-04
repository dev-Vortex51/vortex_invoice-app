import { databases } from "../lib/appwrite";
import type { Models } from "appwrite";
import { generateInvoiceId } from "../utils/helpers";
import type { Invoice } from "../types/types";

export const saveInvoice = async (
  invoiceData: Omit<Invoice, keyof Models.Document>,
  invoiceId?: string,
  isUpdate: boolean = false
): Promise<Invoice | void> => {
  try {
    const idToUse = invoiceId ?? generateInvoiceId();
    const dbId = import.meta.env.VITE_APPWRITE_DATABASE_ID!;
    const collectionId = import.meta.env.VITE_APPWRITE_COLLECTION_ID!;

    const response = isUpdate
      ? await databases.updateDocument(dbId, collectionId, idToUse, invoiceData)
      : await databases.createDocument(
          dbId,
          collectionId,
          idToUse,
          invoiceData
        );

    console.log(`Invoice ${isUpdate ? "updated" : "created"}:`, response);
    return response as Invoice;
  } catch (error) {
    console.error(
      `Failed to ${isUpdate ? "update" : "create"} invoice:`,
      error
    );
  }
};

export const getInvoices = async (): Promise<Invoice[]> => {
  try {
    const response = await databases.listDocuments(
      import.meta.env.VITE_APPWRITE_DATABASE_ID!,
      import.meta.env.VITE_APPWRITE_COLLECTION_ID!
    );
    return response.documents as Invoice[];
  } catch (error) {
    console.error("Failed to fetch invoices:", error);
    return [];
  }
};

export const getInvoiceById = async (id: string): Promise<Invoice | null> => {
  try {
    const response = await databases.getDocument(
      import.meta.env.VITE_APPWRITE_DATABASE_ID!,
      import.meta.env.VITE_APPWRITE_COLLECTION_ID!,
      id
    );
    return response as Invoice;
  } catch (error) {
    console.error(`Failed to fetch invoice with ID ${id}:`, error);
    return null;
  }
};

export const deleteInvoice = async (documentId: string): Promise<void> => {
  try {
    await databases.deleteDocument(
      import.meta.env.VITE_APPWRITE_DATABASE_ID!,
      import.meta.env.VITE_APPWRITE_COLLECTION_ID!,
      documentId
    );
    console.log(`Invoice ${documentId} deleted successfully.`);
  } catch (error) {
    console.error("Failed to delete invoice:", error);
  }
};
